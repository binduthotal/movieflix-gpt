import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TOPRATED_URL, options } from "../utils/constants";
import { addTopRatedMovie } from "../reduxStore/movieSlice";

const useGetTopRated = () => {
    const topRated = useSelector(
        (store) => store.movies.topRated
    );
    const dispatch = useDispatch();

    useEffect(() => {
        !topRated && getTopRated();
    }, []);

    const getTopRated = async () => {
        const data = await fetch(TOPRATED_URL, options);
        const json = await data.json();
        dispatch(addTopRatedMovie(json.results));
    };
};

export default useGetTopRated;
