import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { FaListAlt } from "react-icons/fa";
import { WatchListProvider } from "./context/WatchListContext"; // Import WatchListProvider
import Home from "./pages/Home";
import WatchListPage from "./pages/WatchListPage";
import "./styles/App.scss";
const App: React.FC = () => {
  return (
    <WatchListProvider>
      <Router>
        <div>
          <header>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/watchlist">
                    <FaListAlt size={20} />
                  </Link>
                </li>
              </ul>
            </nav>
          </header>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/watchlist" element={<WatchListPage />} />
          </Routes>
        </div>
      </Router>
    </WatchListProvider>
  );
};

export default App;
