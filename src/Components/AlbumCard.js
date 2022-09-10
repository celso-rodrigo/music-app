import React from "react";
import "../Styles/AlbumCard.css";
import PropTypes from "prop-types";

function AlbumCard({album}) {
  return(
    <div className="album-card">
			ALBUM CARD
      {console.log(album)}
    </div>
  );
}

AlbumCard.propTypes = {
  album: PropTypes.objectOf(PropTypes.object),
};

export default AlbumCard;