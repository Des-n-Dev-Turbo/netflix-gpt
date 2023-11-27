import { signOut } from 'firebase/auth';
import { auth } from '@utils/firebase';

const SignoutButton = () => {
  const onClickHandler = () => {
    signOut(auth)
      .then(() => {
        console.log('User signed out');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <button
      className="absolute text-white p-1 px-2 whitespace-nowrap text-sm right-4  xl:right-0 rounded-sm bg-black border border-white top-[120%]"
      onClick={onClickHandler}
    >
      Sign Out
    </button>
  );
};

export default SignoutButton;
