import React, { useState } from "react";
import Context from "./Context";
import PropTypes from "prop-types";

function MusicProvider({ children }) {
  const [showPlayer] = useState(false);
  
  const providerValue = {
    showPlayer,
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