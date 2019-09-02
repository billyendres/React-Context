import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <div style={{ display: "flex", background: "cyan" }}>
      <h1>nav</h1>
      <h2>Number of movies: {movies.length}</h2>
    </div>
  );
};

export default Nav;
