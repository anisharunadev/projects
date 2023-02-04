import React from "react";
import MovieCard from "../moviecard/MovieCard";

const MovieList = () => {
    return (
        <main className="main__section">
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
        </main>
    )
}

export default MovieList;