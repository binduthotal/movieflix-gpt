import React, { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../reduxStore/movieSlice";

const useGetTrailerVideo = (props) => {

    const movieTrailer = useSelector((store) => store.movies.trailerVideo);
    const dispatch = useDispatch();

    useEffect(() => {
        !movieTrailer && getTrailerVideo();
    }, []);

    const URL = `https://api.themoviedb.org/3/movie/${props.movieId}/videos`;
    
    const getTrailerVideo = async () => {
        const data = await fetch(URL, options);
        const json = await data.json();
        const filteredData = json.results?.filter(
            (data) => data.type === "Trailer"
        );
        if (filteredData) {
            const trailer = filteredData.length ? filteredData[0] : json.results[0];
            dispatch(addTrailerVideo(trailer));
        }
    };
};

export default useGetTrailerVideo;
