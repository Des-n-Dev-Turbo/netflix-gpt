/* eslint-disable react/prop-types */
import useMainTrailer from '@hooks/useMainTrailer';

const VideoBackground = ({ movieId }) => {
  const trailer = useMainTrailer(movieId);

  return (
    <div className="w-full md:top-0">
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&controls=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
};

export default VideoBackground;
