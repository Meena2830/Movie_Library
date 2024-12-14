import React, { useEffect, useState } from "react";
import { Movie } from "../types/Movie";
import { useWatchList } from "../context/WatchListContext";
import "../styles/MovieCard.scss";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const { watchList, addToWatchList, removeFromWatchList } = useWatchList();
  const [isInWatchList, setIsInWatchList] = useState<boolean>(false);
  const [rating, setRating] = useState<number>(0); // State for movie rating

  useEffect(() => {
    // Check if the movie is in the watchlist
    const isInList = watchList.some((m) => m.imdbID === movie.imdbID);
    setIsInWatchList(isInList);
  }, [watchList, movie.imdbID]);

  const handleAddToWatchList = () => {
    addToWatchList(movie);
  };

  const handleRemoveFromWatchList = () => {
    removeFromWatchList(movie.imdbID);
  };

  const handleRating = (newRating: number) => {
    setRating(newRating);
  };

  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} />
      <div className="movie-details">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
        <button
          onClick={
            isInWatchList ? handleRemoveFromWatchList : handleAddToWatchList
          }
        >
          {isInWatchList ? "Remove from Watchlist" : "Add to Watchlist"}
        </button>
        <div className="rating">
          <p>Rate this movie:</p>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star ${star <= rating ? "selected" : ""}`}
              onClick={() => handleRating(star)}
            >
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
