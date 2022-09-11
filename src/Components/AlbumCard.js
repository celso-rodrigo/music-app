import React from "react";
import "../Styles/AlbumCard.css";
import PropTypes from "prop-types";

function AlbumCard({album}) {
  return(
    <div className="album-card">
      {album.collectionName}
    </div>
  );
}

AlbumCard.propTypes = {
  album: PropTypes.object.isRequired,
};

export default AlbumCard;