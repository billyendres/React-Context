import React from "react";
import Nav from "./Nav";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";

import { MovieProvider } from "./MovieContext";

const App = () => {
  return (
    <div>
      <MovieProvider>
        <Nav />
        <AddMovie />
        <MovieList />
      </MovieProvider>
    </div>
  );
};

export default App;
