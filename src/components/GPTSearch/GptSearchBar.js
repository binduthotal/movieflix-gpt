import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../LanguageChange/langContants";
import genAI from "../../utils/geminiAi";
import { options } from "../../utils/constants";
import { addGptMovieResults } from "../../reduxStore/gptSlice";
import BackgroundImg from "../BackgroundImg";

const GptSearchBar = () => {

  const dispatch = useDispatch()
  const searchText = useRef(null);

  const langValue = useSelector((store) => store.lang.showLang);

  const handleGptSearch = async () => {
    const prompt =
      "Act as a movie recommendation system and suggest some movie names based on the query : " +
      searchText.current.value +
      ", give only 5 movie names, comma seperated";

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash-latest",
    });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    if (!text) return null;

    const moviesNameResults = text.split(",")
    const promiseArray = moviesNameResults.map((movie) =>
      searchTmdbMovies(movie)
    );
    const tmdbMovieResults = await Promise.all(promiseArray);
    dispatch(
      addGptMovieResults({
        movieNames: moviesNameResults,
        movieResults: tmdbMovieResults,
      })
    );
  };

  const searchTmdbMovies = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      options
    );
    const json = await data.json();
    return json.results;
  }

  return (
    // <div className=" w-full h-full top-[20%] lg:mt-[0%] left-0 right-0 ">
    <div className=" w-full mx-auto">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-fit sm:w-1/2 mx-auto grid grid-cols-12 mt-32 "
      >
        <input
          className="col-span-10 sm:col-span-9 px-5 py-3 border border-solid border-black rounded-md"
          ref={searchText}
          type="text"
          placeholder={lang[langValue].placeHolder}
        />
        <button
          className="col-span-3 bg-red-600  text-white px-3 py-2 rounded-md font-semibold text-xl"
          onClick={handleGptSearch}
        >
          {lang[langValue].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
