import "./App.css";
import Album from "./components/album";
import Button from "./components/button";
import { useState } from "react";
import albums from "./albums.json";
import GetAlbums from "./components/getAlbums";

function App() {
  const [albumContent, setAlbumContent] = useState(albums);

  const filter = (button) => {
    let filteredData;

    if (button === "ALL") {
      filteredData = albums.filter((item) => item.source !== "");
    } else {
      filteredData = albums.filter((item) => item.source === button);
    }
    setAlbumContent(filteredData);
  };

  return (
    <div className="App">
      <GetAlbums />
      <Button filter={filter} />
      <Album albumContent={albumContent} />
    </div>
  );
}

export default App;
