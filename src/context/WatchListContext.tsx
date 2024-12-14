import React, { createContext, useState, useContext, ReactNode } from "react";
import { Movie } from "../types/Movie";

interface WatchListContextType {
  watchList: Movie[];
  addToWatchList: (movie: Movie) => void;
  removeFromWatchList: (imdbID: string) => void;
}

const WatchListContext = createContext<WatchListContextType | undefined>(
  undefined
);

export const useWatchList = () => {
  const context = useContext(WatchListContext);
  if (!context) {
    throw new Error("useWatchList must be used within a WatchListProvider");
  }
  return context;
};

export const WatchListProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [watchList, setWatchList] = useState<Movie[]>([]);

  const addToWatchList = (movie: Movie) => {
    setWatchList((prevList) => [...prevList, movie]);
  };

  const removeFromWatchList = (imdbID: string) => {
    setWatchList((prevList) =>
      prevList.filter((movie) => movie.imdbID !== imdbID)
    );
  };

  return (
    <WatchListContext.Provider
      value={{ watchList, addToWatchList, removeFromWatchList }}
    >
      {children}
    </WatchListContext.Provider>
  );
};
