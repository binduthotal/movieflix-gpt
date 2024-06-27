import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../HomePage/SecondaryContainer/MovieList";

const GptSearchSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gptSearch);

  if (!movieNames || !movieResults) return null;

  return (
    <div className=" mt-[5%] bg-black">
      <div>
        {movieNames.map((movie, index) => (
          <MovieList
            key={movie}
            title={movie}
            movieList={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptSearchSuggestions;
