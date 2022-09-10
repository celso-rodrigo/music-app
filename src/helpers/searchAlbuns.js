const searchAlbuns = async () => { 
  const url = "https://itunes.apple.com/search?entity=album&term=test&attribute=allArtistTerm";
  const APIResponse = await fetch(url);
  const json = await APIResponse.json();
  return json.results;
};

export default searchAlbuns;