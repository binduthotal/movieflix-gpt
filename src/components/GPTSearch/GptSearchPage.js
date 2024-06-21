import React from "react";
import BackgroundImg from "../BackgroundImg";
import GptSearchBar from "./GptSearchBar";
import GptSearchSuggestions from "./GptSearchSuggestions";

const GptSearchPage = () => {
    return (<div>
        <BackgroundImg/>
        <GptSearchBar/>
        <GptSearchSuggestions/>
    </div>);
};

export default GptSearchPage;
