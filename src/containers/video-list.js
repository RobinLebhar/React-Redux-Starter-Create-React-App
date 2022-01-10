import React from "react";
import { VideoListItem } from "../components/video-list-item";

const VideoList = (props) => {
  const { movieList } = props;
  return (
    <ul>
      {movieList.map((movie) => {
        return (
          <VideoListItem
            key={movie.id}
            movie={movie}
            callback={receiveCallback}
          />
        );
      })}
    </ul>
  );

  function receiveCallback(movie) {
    props.callback(movie);
  }
};

export { VideoList };
