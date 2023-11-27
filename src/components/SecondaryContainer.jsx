import { useSelector } from 'react-redux';

import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '@store/moviesSlice';
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(getNowPlayingMovies);
  const popularMovies = useSelector(getPopularMovies);
  const topRatedMovies = useSelector(getTopRatedMovies);
  const upcomingMovies = useSelector(getUpcomingMovies);

  return (
    <div className="z-50 pl-3 xl:pl-12 absolute top-[75%] md:top-[65%] xl:top-[80%] w-full">
      {nowPlayingMovies && <MovieList title="Now Playing" movies={nowPlayingMovies} />}
      {popularMovies && <MovieList title="Popular" movies={popularMovies} />}
      {topRatedMovies && <MovieList title="Top Rated" movies={topRatedMovies} />}
      {upcomingMovies && <MovieList title="Upcoming" movies={upcomingMovies} />}
    </div>
  );
};

export default SecondaryContainer;
