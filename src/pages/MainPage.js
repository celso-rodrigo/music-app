import React, { useContext } from "react";
import AlbumCard from "../Components/AlbumCard";
import Context from "../context/Context";
import "../Styles/MainPage.css";
import search from "../images/search.svg";

function MainPage() {
  const {
    loading,
    albumArr,
    searchValue,
  } = useContext(Context);

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
        />
        <button type="button">
          <img src={search} alt="Search icon" />
        </button>
      </label>
      {!searchValue.length 
        ? <h1 className="search-text">Search for some music</h1>
        : searchResults()}
    </div>
  );
}

export default MainPage;