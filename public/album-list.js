import getAlbums from "./store/album.js";

getAlbums().then(renderAlbumsList).catch(renderErrorPage);

function createAlbums({} = {}) {}

function renderAlbumsList(albums) {
  console.log(albums);
}

function renderErrorPage(error) {
  console.error(error.message);
}
