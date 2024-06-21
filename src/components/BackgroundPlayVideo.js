import React from 'react';
import useGetTrailerVideo from '../hooks/useGetTrailerVideo';
import { useSelector } from 'react-redux';

const BackgroundPlayVideo = (movieId) => {

    useGetTrailerVideo(movieId);
    const trailer = useSelector((store) => store.movies?.trailerVideo);
    const key = trailer?.key

    return (
        <div className="top-0 w-full h-full">
            <iframe
            className='w-full aspect-video'
                src={
                    "https://www.youtube.com/embed/" +
                    key +
                    "?rel=0&autoplay=1&mute=1&controls=0&showinfo=0"
                }
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default BackgroundPlayVideo;
