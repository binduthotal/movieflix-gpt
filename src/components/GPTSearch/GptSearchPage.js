import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSearchSuggestions from "./GptSearchSuggestions";

const GptSearchPage = () => {
    return (
      <>
        <div className=" absolute top-[15%] lg:top-20 w-full h-lvh pb-10 bg-black">
          <GptSearchBar />
          <GptSearchSuggestions />
        </div>
      </>
    );
};

export default GptSearchPage;
