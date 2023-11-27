/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cls from 'classnames';

import { ChevronDown, ChevronUp } from 'lucide-react';

import netflixLogo from '@assets/netflix.png';
import { DEFAULT_USER_IMG } from '@utils/constants';

import SignoutButton from './SignoutButton';
import { getGPTSearchView, toggleGPTSearchView } from '@store/gptSlice';
import { userAuthSelector } from '@store/userSlice';

const Header = ({ main }) => {
  const [dropDown, setDropDown] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(userAuthSelector);
  const gptSearchPage = useSelector(getGPTSearchView);

  const onHandleGPTSearchClick = () => {
    dispatch(toggleGPTSearchView());
  };

  return (
    <header
      className={cls(
        'w-full px-12 py-6 bg-gradient-to-b from-black z-20 flex flex-col lg:flex-row md:justify-center lg:justify-between items-center',
        {
          absolute: !main,
          sticky: main,
          'to-black': main,
        }
      )}
    >
      <img src={netflixLogo} alt="Netflix Logo" className="w-40 mb-6 lg:mb-0" />
      {main && (
        <div className="relative flex flex-col lg:w-fit lg:flex-row gap-4 lg:justify-between items-center">
          <button onClick={onHandleGPTSearchClick} className="border p-1 px-3 mb-4 w-full lg:w-fit  lg:mb-0 rounded-md">
            {gptSearchPage ? 'Browse' : 'GPT Search'}
          </button>
          <span className=" relative flex flex-grow justify-center lg:justify-normal flex-row gap-4 items-center">
            <img src={DEFAULT_USER_IMG} alt="User Profile Icon" className="w-8" />
            <p>{user.name}</p>
            {dropDown ? (
              <ChevronUp size={24} className="block text-white cursor-pointer" onClick={() => setDropDown(false)} />
            ) : (
              <ChevronDown size={24} className="block text-white cursor-pointer" onClick={() => setDropDown(true)} />
            )}
            {dropDown && <SignoutButton />}
          </span>
        </div>
      )}
    </header>
  );
};

export default Header;
