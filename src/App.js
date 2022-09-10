import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login.js";
import MainPage from "./pages/MainPage.js";
import MusicsPage from "./pages/MusicsPage.js";
import Favorites from "./pages/Favorites.js";
import NotFound from "./pages/NotFound.js";
import Context from "./context/Context.js";
import MusicPlayer from "./Components/MusicPlayer.js";
import "./Styles/global.css";
import NavBar from "./Components/NavBar.js";

function App() {
  const {showUI} = useContext(Context);
  return (
    <>
      {showUI && <NavBar />}
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/albuns" element={<MainPage />} />
        <Route exact path="/musics/:album" element={<MusicsPage />} />
        <Route exact path="/favorites" element={<Favorites />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
      {showUI && <MusicPlayer />}
    </>
  );
}

export default App;
