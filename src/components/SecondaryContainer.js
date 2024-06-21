import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  if (!movies) return;

  return (
    <div className="bg-black sm:-mt-64">
      <MovieList title="Now Playing" movieList={movies.nowPlayingMovies} />
      <MovieList title="UpComing" movieList={movies.upComing} />
      <MovieList title="Top Rated" movieList={movies.topRated} />
      <MovieList title="Popular" movieList={movies.popular} />
    </div>
  );
};

export default SecondaryContainer;
