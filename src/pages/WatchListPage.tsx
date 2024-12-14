import React from "react";
import WatchList from "../components/WatchList";
import "../styles/WatchListPage.scss";

const WatchListPage: React.FC = () => {
  return (
    <div className="watchlist-page">
      <h1>Watch List</h1>
      <div className="watch-list-container">
        <WatchList />
      </div>
    </div>
  );
};

export default WatchListPage;
