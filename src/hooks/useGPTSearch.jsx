import { useDispatch } from 'react-redux';

import { API_OPTIONS, OPENAI_MODEL, SEARCH_MOVIE_URL, getOpenAIContext } from '@utils/constants';
import openai from '@utils/openai';
import { addGPTMovieResults, setLoading } from '@store/gptSlice';

const useGPTSearch = (ref) => {
  const dispatch = useDispatch();

  const searchTMDBMovie = async (movie) => {
    try {
      const res = await fetch(SEARCH_MOVIE_URL(movie), API_OPTIONS);

      if (res.ok) {
        const data = await res.json();
        return data;
      } else {
        throw new Error('Something went wrong with TMDB APi');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const searchText = ref.current.value;

      dispatch(setLoading());

      const context = getOpenAIContext(searchText);

      const gptResults = await openai.chat.completions.create({
        messages: [{ role: 'user', content: context }],
        model: OPENAI_MODEL,
      });

      const gptMovies = gptResults.choices?.[0]?.message?.content.split(',');

      const promiseMovies = gptMovies.map((movie) => searchTMDBMovie(movie));

      const movies = await Promise.all(promiseMovies);

      const moviesList = movies.map((movie) => movie.results);

      dispatch(addGPTMovieResults({ movies: moviesList, resultText: gptMovies }));
    } catch (error) {
      console.log(error.message);
    }
  };

  return { handleSearch };
};

export default useGPTSearch;
