import "./buttons.css";

function goToPage() {
  let button = document.getElementById("getAlbum-container");
  button.classList.add("remove");
}
function GetAlbums() {
  return (
    <div id="getAlbum-container">
      <button id="getAlbums" onClick={goToPage}>
        Get Albums
      </button>
    </div>
  );
}

export default GetAlbums;
