import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "$15",
      id: 23124
    },
    {
      name: "Game of Thrones",
      price: "$8",
      id: 2554
    },
    {
      name: "Inception",
      price: "$10",
      id: 212894
    }
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {children}
    </MovieContext.Provider>
  );
};
