import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addTrailerVideo, getMainTrailerVideo } from '@store/moviesSlice';
import { API_OPTIONS, NOW_PLAYING_MAIN_MOVIE_VIDEO_URL } from '@utils/constants';

const useMainTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailer = useSelector(getMainTrailerVideo);

  const getMovieVideoById = useCallback(async () => {
    try {
      const res = await fetch(NOW_PLAYING_MAIN_MOVIE_VIDEO_URL(movieId), API_OPTIONS);

      if (res.ok) {
        const data = await res.json();

        const trailerData = data.results.find((video) => video.type === 'Trailer');

        const trailer = trailerData !== undefined ? trailerData : data.results[0];
        dispatch(addTrailerVideo(trailer));
      } else {
        throw new Error(res.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  }, [movieId]);

  useEffect(() => {
    getMovieVideoById(movieId);
  }, [movieId]);

  return trailer;
};

export default useMainTrailer;
