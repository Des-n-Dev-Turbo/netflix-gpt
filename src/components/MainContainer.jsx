import { useSelector } from 'react-redux';

import { getNowPlayingMovies } from '@store/moviesSlice';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
  const nowPlayingMovies = useSelector(getNowPlayingMovies);

  if (!nowPlayingMovies) return null;

  const mainMovie = nowPlayingMovies[0];

  const { id, original_title, title, overview } = mainMovie;

  return (
    <div className="absolute md:top-0 w-full">
      <VideoTitle title={title || original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
