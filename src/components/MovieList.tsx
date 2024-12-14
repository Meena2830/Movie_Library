import React, { useState, useEffect } from "react";
import axios from "axios";
import { Movie } from "../types/Movie";
import MovieCard from "./MovieCard";
import "../styles/MovieList.scss";

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Default movies to show when there is no search query
  const defaultMovies: Movie[] = [
    {
      imdbID: "tt0111161",
      Title: "The Shawshank Redemption",
      Year: "1994",
      Poster:
        "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
      Type: "movie",
    },
    {
      imdbID: "tt0068646",
      Title: "The Godfather",
      Year: "1972",
      Poster:
        "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
      Type: "movie",
    },
    {
      imdbID: "tt0108052",
      Title: "Schindler's List",
      Year: "1993",
      Poster:
        "https://upload.wikimedia.org/wikipedia/en/3/38/Schindler%27s_List_movie.jpg",
      Type: "movie",
    },
  ];

  useEffect(() => {
    if (searchQuery) {
      axios
        .get(`https://www.omdbapi.com/?s=${searchQuery}&apikey=5b7d978f`)
        .then((response) => {
          const fetchedMovies: Movie[] = response.data.Search.map(
            (movie: any) => ({
              imdbID: movie.imdbID,
              Title: movie.Title,
              Year: movie.Year,
              Poster: movie.Poster,
              Type: movie.Type,
            })
          );
          setMovies(fetchedMovies);
        })
        .catch((error) => console.error(error));
    } else {
      setMovies(defaultMovies); // Set default movies if no search query
    }
  }, [searchQuery]);

  return (
    <div className="movie-list-container">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="movie-list">
        {movies.length === 0 && searchQuery ? (
          <p>No movies found. Try another search.</p>
        ) : (
          movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
        )}
      </div>
    </div>
  );
};

export default MovieList;
