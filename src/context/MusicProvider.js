import React, { useEffect, useState } from "react";
import Context from "./Context";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

function MusicProvider({ children }) {
  const {pathname} = useLocation();
  const [showUI, setShowUI] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [albumArr, setAlbumArr] = useState([]);
  const [currTrackUrl] = useState("");
  const [currTrackName] = useState("");
  
  useEffect(() => {
    if(!showUI && pathname !== "/") setShowUI(true);
  }, [pathname]);

  const providerValue = {
    showUI,
    currTrackUrl,
    currTrackName,
    albumArr,
    searchValue,
    loading,
    setLoading,
    setSearchValue,
    setShowUI,
    setAlbumArr,
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