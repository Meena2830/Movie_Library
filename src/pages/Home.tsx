import React from "react";
import MovieList from "../components/MovieList";

import "../styles/Home.scss";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Movie Library</h1>
      <MovieList />
    </div>
  );
};

export default Home;
