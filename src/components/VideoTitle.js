import React from 'react';

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='absolute top-60 w-[35%] px-12 grid gap-5'>
            <h1 className='font-bold text-white text-5xl'>{title}</h1>
            <h1 className='text-white text-xl'>{overview.slice(0,120)+"..."}</h1>
            <div className=''>
            <button className="mr-5 px-9 py-2 font-semibold text-black text-lg bg-white rounded-lg hover:bg-gray-400">
                Play
            </button>
            <button className="px-9 py-2 font-semibold text-white text-lg bg-gray-400 bg-opacity-25 rounded-lg hover:bg-gray-400">
                More info
            </button>
            </div>
        </div>
    );
}

export default VideoTitle;
