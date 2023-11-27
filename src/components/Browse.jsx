import { useSelector } from 'react-redux';

import useNowPlayingMovies from '@hooks/useNowPlayingMovies';
import usePopularMovies from '@hooks/usePopularMovies';
import useTopRatedMovies from '@hooks/useTopRatedMovies';
import useUpcomingMovies from '@hooks/useUpcomingMovies';

import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GPTSearch from './GPTSearch';

import { getGPTSearchView } from '@store/gptSlice';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const gptSearchPage = useSelector(getGPTSearchView);

  return (
    <div>
      <Header main />
      {gptSearchPage ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
