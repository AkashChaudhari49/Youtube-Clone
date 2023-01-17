import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./components/Feed";
import Header from "./components/Header";
import SearchResult from "./components/SearchResult";
import SearchResultVideoCard from "./components/SearchResultVideoCard";
import VideoCard from "./components/VideoCard";
import VideoDetails from "./components/VideoDetails";
import { AppContext } from "./context/contextApi";

function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <div className="flex flex-col h-full">
          <Header />
          <Routes>
            <Route exact path="/" element={<Feed />} />
            <Route path="/searchResult/:searchQuery" element={<SearchResult />} />
            <Route path="/" element={<SearchResultVideoCard />} />
            <Route path="/" element={<VideoCard />} />
            <Route path="/video/:id" element={<VideoDetails />} />
          </Routes>
        </div>
      </BrowserRouter>


    </AppContext>
  );
}

export default App;
