import React from 'react';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import BackgroundPlayVideo from './BackgroundPlayVideo';

const MainContainer = () => {

  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  if (!nowPlayingMovies) return;

  const movieDetails = nowPlayingMovies[0];

  const { id, original_title, overview } = movieDetails;

  console.log(nowPlayingMovies);
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <BackgroundPlayVideo movieId={id} />
    </div>
  );
}

export default MainContainer;
