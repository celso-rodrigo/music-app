import React, { useState } from "react";
import Context from "./Context";
import PropTypes from "prop-types";

function MusicProvider({ children }) {
  const [showUI] = useState(false);
  const [currTrackUrl] = useState("");
  const [currTrackName] = useState("");
  
  const providerValue = {
    showUI,
    currTrackUrl,
    currTrackName,
  };

  return <Context.Provider value={providerValue}>{children}</Context.Provider>;
}

MusicProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default MusicProvider;