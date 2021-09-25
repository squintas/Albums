import "./album.css";

function Album({ albumContent }) {
  return (
    <div>
      <div className="album-container">
        {albumContent.map((postDetail) => {
          return (
            <div className="wrapper">
              <div className="image-container">
                <img
                  className="album-cover"
                  src={
                    postDetail.cover
                      ? postDetail.cover
                      : "./images/undefined_album_cover.png"
                  }
                  alt="alternative text"
                />
                <img
                  className="small-icon"
                  src="./images/qobuz.png"
                  alt="Album list"
                />
              </div>
              <h2>{postDetail.album}</h2>
              <h5>{postDetail.artist}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Album;
