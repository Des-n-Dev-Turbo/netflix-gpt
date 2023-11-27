import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addTopRatedMovies, getTopRatedMovies } from '@store/moviesSlice';
import { API_OPTIONS, TOP_RATED_MOVIES_URL } from '@utils/constants';

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector(getTopRatedMovies);

  const getTopRatedMoviesFn = useCallback(async () => {
    try {
      const response = await fetch(TOP_RATED_MOVIES_URL, API_OPTIONS);

      if (response.ok) {
        const data = await response.json();
        dispatch(addTopRatedMovies(data.results));
      } else {
        throw new Error('Something went wrong!');
      }
    } catch (error) {
      console.log(error.message);
    }
  }, [dispatch]);

  useEffect(() => {
    if (!topRatedMovies) getTopRatedMoviesFn();
  }, [getTopRatedMoviesFn, topRatedMovies]);
};

export default useTopRatedMovies;
