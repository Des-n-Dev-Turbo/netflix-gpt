import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addNowPlayingMovies, getNowPlayingMovies } from '@store/moviesSlice';
import { API_OPTIONS, NOW_PLAYING_MOVIES_URL } from '@utils/constants';

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(getNowPlayingMovies);

  const getNowPlayingMoviesFn = useCallback(async () => {
    try {
      const response = await fetch(NOW_PLAYING_MOVIES_URL, API_OPTIONS);

      if (response.ok) {
        const data = await response.json();
        dispatch(addNowPlayingMovies(data.results));
      } else {
        throw new Error('Something went wrong!');
      }
    } catch (error) {
      console.log(error.message);
    }
  }, [dispatch]);

  useEffect(() => {
    if (!nowPlayingMovies) {
      getNowPlayingMoviesFn();
    }
  }, [getNowPlayingMoviesFn, nowPlayingMovies]);
};

export default useNowPlayingMovies;
