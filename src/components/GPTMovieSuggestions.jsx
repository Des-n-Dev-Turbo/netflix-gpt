import { useSelector } from 'react-redux';

import { getGPTLoadingState, getGPTMoviesData, getGPTMoviesNames } from '@store/gptSlice';
import MovieList from './MovieList';

const GPTMovieSuggestions = () => {
  const isLoading = useSelector(getGPTLoadingState);
  const gptMovieNames = useSelector(getGPTMoviesNames);
  const gptMovieResults = useSelector(getGPTMoviesData);

  if (isLoading)
    return (
      <div className="w-full text-white m-6 mt-0 mx-16 text-center p-6 rounded-lg border border-white-800">
        <h3 className="text-xl p-6">Loading Results...</h3>
      </div>
    );

  if (!isLoading && gptMovieNames === null && gptMovieResults === null)
    return (
      <div className="w-full text-white m-6 mt-0 mx-16 text-center p-6 rounded-lg border border-white-800">
        <h3 className="text-xl p-6">Type and ask Netflix GPT for any recommendations</h3>
      </div>
    );

  return (
    <div className="w-full m-6 mt-0 mx-16 p-3 md:p-6 rounded-lg border border-white-800">
      {gptMovieResults.map((movies, i) => {
        return <MovieList title={gptMovieNames[i]} key={gptMovieNames[i]} movies={movies} />;
      })}
    </div>
  );
};

export default GPTMovieSuggestions;
