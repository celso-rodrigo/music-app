import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login.js";
import MainPage from "./pages/MainPage.js";
import MusicDetails from "./pages/MusicDetails.js";
import Favorites from "./pages/Favorites.js";
import NotFound from "./pages/NotFound.js";
import Context from "./context/Context.js";
import MusicPlayer from "./Components/MusicPlayer.js";

function App() {
  const {showPlayer} = useContext(Context);
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/musics" element={<MainPage />} />
        <Route exact path="/musics-detail/:musicId" element={<MusicDetails />} />
        <Route exact path="/favorites" element={<Favorites />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
      {!showPlayer && <MusicPlayer />}
    </>
  );
}

export default App;
