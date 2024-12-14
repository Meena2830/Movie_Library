import React from "react";
import { useWatchList } from "../context/WatchListContext";
import MovieCard from "./MovieCard";
import "../styles/WatchList.scss";

const WatchList: React.FC = () => {
  const { watchList } = useWatchList();

  return (
    <div className="watch-list-container">
      <div className="watch-list">
        {watchList.length > 0 ? (
          watchList.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))
        ) : (
          <p>No movies in your watch list.</p>
        )}
      </div>
    </div>
  );
};

export default WatchList;
