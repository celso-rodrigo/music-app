import React, { useContext } from "react";
import AlbumCard from "../Components/AlbumCard";
import Context from "../context/Context";
import "../Styles/MainPage.css";
import search from "../images/search.svg";
import { useState } from "react";

function MainPage() {
  const [statusMessage, setStatusMessage] = useState("Search for some music");

  const {
    loading,
    albumArr,
    searchValue,
    setLoading,
    setSearchValue,
    setAlbumArr,
  } = useContext(Context);

  const handleResults = (apiResults) => {
    setAlbumArr(apiResults);
    if(!apiResults.length) {
      setStatusMessage("No results found.");
    }
    setLoading(false);
  };

  const searchAlbuns = async () => {
    setLoading(true);
    const searchURL = encodeURI(searchValue).replaceAll("%20", "+");
    const url = `https://itunes.apple.com/search?entity=album&term=${searchURL}&aaaaattribute=allArtistTerm`;
    try {      
      const APIResponse = await fetch(url);
      const json = await APIResponse.json();
      handleResults(json.results);
    } catch(err) {
      console.error(err);
      setStatusMessage("An error has occurred. Try again later. :(");
      setLoading(false);
    }
  };
  

  const searchResults = () => (
    loading
      ? <div className="loading" />
      : albumArr.map((album) => (
        <AlbumCard album={album} key={album.collectionId} />
      ))
  );
 
  return(
    <div className="main-page">
      <label htmlFor="search-bar-main" className="search-label">
        <input
          type="text"
          name="search-bar-main"
          id="search-bar-main"
          placeholder="Search albums"
          value={searchValue}
          onChange={({target}) => setSearchValue(target.value)}
        />
        <button type="button" onClick={ searchAlbuns }>
          <img src={search} alt="Search icon" />
        </button>
      </label>
      {!albumArr.length 
        ? <h1 className="search-text">{statusMessage}</h1>
        : searchResults()}
    </div>
  );
}

export default MainPage;