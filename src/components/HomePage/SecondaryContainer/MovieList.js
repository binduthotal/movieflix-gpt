import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movieList }) => {
    return (
        <div className="px-5">
            <h1 className="text-white font-semibold text-2xl py-6">{title}</h1>
            <div
                className={`flex ${movieList?.length > 6 ? "overflow-x-scroll" : "overflow-x-hidden"
                    } `}
            >
                <div className="flex ">
                    {movieList?.map((movie) => (
                        <MovieCard key={movie.id} poster={movie.poster_path} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieList;
