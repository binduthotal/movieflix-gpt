import { useEffect } from "react"
import { NOWPLAYING_URL, options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../reduxStore/movieSlice";

const useGetNowPlayingMovies = () => {
     const nowPlayingMovies = useSelector(
       (store) => store.movies.nowPlayingMovies
     );
    const dispatch = useDispatch();

    useEffect(() => {
        !nowPlayingMovies && getNowPlayingMovies();
    }, []);

    const getNowPlayingMovies = async () => {
        const data = await fetch(NOWPLAYING_URL, options);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    };

}

export default useGetNowPlayingMovies;