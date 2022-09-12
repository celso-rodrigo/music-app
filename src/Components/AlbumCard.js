import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../Styles/AlbumCard.css";
import favorite from "../images/favorite.svg";

function AlbumCard({album}) {
  return(
    <div className="album-card">
      <Link to={`/musics/${album.collectionId}`} className="album-info">
        <img src={album.artworkUrl100} alt="Album picture" className="card-img" />
        <h2 className="album-title">{`${album.collectionName} - ${album.artistName}`}</h2>
      </Link>
      <button className="fav-btn">
        <img src={favorite} alt="Favorite icon" />
      </button>
    </div>
  );
}

AlbumCard.propTypes = {
  album: PropTypes.object.isRequired,
};

export default AlbumCard;