import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../LanguageChange/langContants";

const GptSearchBar = () => {
  const searchValue = useRef(null);

  const langValue = useSelector((store) => store.lang.showLang);

  return (
    <div className="absolute w-full h-full top-[20%] lg:top-[15%] left-0 right-0 ">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-fit sm:w-1/2 mx-auto grid grid-cols-12 "
      >
        <input
          className="col-span-10 sm:col-span-9 px-5 py-3 border border-solid border-black rounded-sm"
          ref={searchValue}
          type="text"
          placeholder={lang[langValue].placeHolder}
        />
        <button className="col-span-3 bg-red-600  text-white px-3 py-2 rounded-sm font-semibold text-xl">
          {lang[langValue].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
