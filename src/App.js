import React, { useState } from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { Routes, Route } from "react-router-dom";
import CreatePost from "./components/CreatePost";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import SearchBar from "./components/SearchBar";
import UpdatePost from "./components/UpdatePost";

export default function App() {
  const [closeNav, setCloseNav] = useState(false);

  const toggleNav = () => {
    setCloseNav(!closeNav);
  };

  const getNavWidth = () => (closeNav ? "w-16" : "w-56");

  return (
    <div className="flex">
      <div
        className={getNavWidth() + " min-h-screen transition-width border border-r"}
      >
        <div className="sticky top-0">
          <NavBar closed={closeNav} />
        </div>
      </div>

      <div className="flex-1 min-h-screen">
        <div className="flex item-center p-2">
          <button onClick={toggleNav}>
            {closeNav ? (
              <AiOutlineMenuFold size={25} />
            ) : (
              <AiOutlineMenuUnfold size={25} />
            )}
          </button>
          <SearchBar />
        </div>

        <div className="max w-screen-lg mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/update-post" element={<UpdatePost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
