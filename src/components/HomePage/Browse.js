import React from "react";
import Header from "../Header";
import useGetNowPlayingMovies from "../../hooks/useGetNowPlayingMovies";
import MainContainer from "./MainContainer/MainContainer";
import SecondaryContainer from "./SecondaryContainer/SecondaryContainer";
import useGetTopRated from "../../hooks/useGetTopRated";
import useGetUpcoming from "../../hooks/useGetUpcoming";
import useGetPopular from "../../hooks/useGetPopular";
import { useSelector } from "react-redux";
import GptSearchPage from "../GPTSearch/GptSearchPage";

const Browse = () => {
  const toggleGpt = useSelector((store) => store.gptSearch.showGptSearchPage);

  useGetNowPlayingMovies();
  useGetUpcoming();
  useGetPopular();
  useGetTopRated();

  return (
    <div>
      <Header />
      {toggleGpt ? (
        <GptSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
