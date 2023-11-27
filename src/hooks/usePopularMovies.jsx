import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addPopularMovies, getPopularMovies } from '@store/moviesSlice';
import { API_OPTIONS, POPULAR_MOVIES_URL } from '@utils/constants';

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector(getPopularMovies);

  const getPopularMoviesFn = useCallback(async () => {
    try {
      const response = await fetch(POPULAR_MOVIES_URL, API_OPTIONS);

      if (response.ok) {
        const data = await response.json();
        dispatch(addPopularMovies(data.results));
      } else {
        throw new Error('Something went wrong!');
      }
    } catch (error) {
      console.log(error.message);
    }
  }, [dispatch]);

  useEffect(() => {
    if (!popularMovies) getPopularMoviesFn();
  }, [getPopularMoviesFn, popularMovies]);
};

export default usePopularMovies;
