import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSearchSuggestions from "./GptSearchSuggestions";

const GptSearchPage = () => {
    return (
        <>
            <div className=" absolute top-[21%] lg:top-20 w-full h-svh pb-10 bg-black">
                <GptSearchBar />
                <GptSearchSuggestions />
            </div>
        </>
    );
};

export default GptSearchPage;
