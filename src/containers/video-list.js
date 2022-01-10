import React from "react";
import { VideoListItem } from "../components/video-list-item";

const VideoList = ({ movieList }) => {
  console.log({ movieList });
  return (
    <ul>
      {movieList.map((movie) => {
        return <VideoListItem key={movie.id} movie={movie} />;
      })}
    </ul>
  );
};

export { VideoList };
