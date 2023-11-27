import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addUpcomingMovies, getUpcomingMovies } from '@store/moviesSlice';
import { API_OPTIONS, UPCOMING_MOVIES_URL } from '@utils/constants';

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector(getUpcomingMovies);

  const getUpcomingMoviesFn = useCallback(async () => {
    try {
      const response = await fetch(UPCOMING_MOVIES_URL, API_OPTIONS);

      if (response.ok) {
        const data = await response.json();
        dispatch(addUpcomingMovies(data.results));
      } else {
        throw new Error('Something went wrong!');
      }
    } catch (error) {
      console.log(error.message);
    }
  }, [dispatch]);

  useEffect(() => {
    if (!upcomingMovies) getUpcomingMoviesFn();
  }, [getUpcomingMoviesFn, upcomingMovies]);
};

export default useUpcomingMovies;
