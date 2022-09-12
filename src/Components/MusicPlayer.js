import React, { useContext } from "react";
import Context from "../context/Context";
import "../Styles/MusicPlayer.css";

function MusicPlayer() {
  const { currTrackName, currTrackUrl } = useContext(Context);
  return(
    <footer className="audio-player">
      <p className="track-name">{currTrackUrl}</p>
      <audio src={currTrackName} controls className={currTrackUrl.length ? "" : "disabled"}>
        <track kind="captions" />
        O seu navegador não suporta o elemento{" "}<code>audio</code>.
      </audio>
    </footer>
  );
}

export default MusicPlayer;