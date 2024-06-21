import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { POPULAR_URL, options } from "../utils/constants";
import { addPopularMovie } from "../reduxStore/movieSlice";

const useGetPopular = () => {
  const popular = useSelector((store) => store.movies.popular);
  const dispatch = useDispatch();

  useEffect(() => {
    !popular && getPopular();
  }, []);

  const getPopular = async () => {
    const data = await fetch(POPULAR_URL, options);
    const json = await data.json();
    dispatch(addPopularMovie(json.results));
  };
};

export default useGetPopular;
