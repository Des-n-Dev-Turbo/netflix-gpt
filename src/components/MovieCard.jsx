import { MOVIE_IMAGE_URL } from '@utils/constants';

/* eslint-disable react/prop-types */
const MovieCard = ({ movie }) => {
  if (!movie.poster_path) return null;

  return (
    <div className="w-32 md:w-48 max-h-full mr-4 transition-all ease-in-out hover:scale-105 rounded-md overflow-clip ">
      <img src={MOVIE_IMAGE_URL + movie.poster_path} alt={movie.title || movie.original_title + 'Movie Card'} />
    </div>
  );
};

export default MovieCard;
