import { Info, Play } from 'lucide-react';

/* eslint-disable react/prop-types */
const VideoTitle = ({ title, overview }) => {
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + ' ...' : str;
  };

  return (
    <div className="absolute top-[100%] xl:top-0 pt-[5%] xl:pt-[20%] px-6 xl:px-24 z-10 bg-gradient-to-r from-black w-full h-[95%] aspect-video">
      <h1 className="text-3xl md:text-6xl font-bold xl:w-1/2">{title}</h1>
      <p className="py-3 xl:py-6 text-md md:text-lg xl:w-1/4">{truncate(overview, 150)}</p>
      <div className="flex gap-2">
        <button className="flex gap-2 p-2 px-6 bg-white text-black hover:bg-opacity-80 rounded-md font-bold">
          <Play className="fill-black" /> Play
        </button>
        <button className="flex gap-2 p-2 px-4 bg-gray-500 bg-opacity-50 hover:bg-opacity-80 text-white rounded-md font-bold">
          <Info /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
