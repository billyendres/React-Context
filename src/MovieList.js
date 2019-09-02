import React, { useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <>
      {movies.map((movie, key) => (
        <Movie name={movie.name} price={movie.price} key={key} />
      ))}
    </>
  );
};

export default MovieList;
