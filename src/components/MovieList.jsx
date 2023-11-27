/* eslint-disable react/prop-types */

import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  return (
    <div className="p-3 md:p-6">
      <h1 className="mb-2 text-3xl">{title}</h1>
      <div className="flex gap-2 overflow-x-scroll horizontal-scroll">
        <div className="flex p-2">
          {movies?.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
