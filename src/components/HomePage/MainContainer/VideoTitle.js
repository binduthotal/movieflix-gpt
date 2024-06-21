import React from 'react';

const VideoTitle = ({ title, overview }) => {
    return (
      <div className="absolute top-32 lg:top-48 lg:w-[40%] px-5 sm:px-12 grid gap-2 lg:gap-5">
        <h1 className="font-bold text-white text-xl sm:text-5xl">
          {title}
        </h1>
        <h1 className="text-white text-xl hidden lg:block">
          {overview.slice(0, 120) + "..."}
        </h1>
        <div className="">
          <button className="mr-2 sm:mr-5 px-4 sm:px-9 sm:py-2 font-semibold text-black text-lg bg-white rounded-lg hover:bg-gray-400">
            Play
          </button>
          <button className="px-4 sm:px-9 sm:py-2 font-semibold text-white text-lg bg-gray-400 bg-opacity-25 rounded-lg hover:bg-gray-400">
            More info
          </button>
        </div>
      </div>
    );
}

export default VideoTitle;
