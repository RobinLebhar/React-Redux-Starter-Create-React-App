import React from "react";

const VideoListItem = (props) => {
  const { movie } = props;
  const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";
  return (
    <li className="list-group-item" onClick={handleOnClick}>
      <div className="media">
        <div className="media-left ">
          <img
            className="mr-3 rounded"
            height="100px"
            width="100px"
            src={`${IMG_BASE_URL}${movie.poster_path}`}
            alt="Un film"
          />
          <div className="media-body">
            <h5 className="title-list-item">{movie.title}</h5>
          </div>
        </div>
      </div>
    </li>
  );
  function handleOnClick() {
    console.log("Pas du tout");
  }
};

export { VideoListItem };
