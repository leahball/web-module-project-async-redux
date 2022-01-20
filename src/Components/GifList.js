import React from "react";
import Gif from "./Gif";

const GifList = (props) => {
  const { gifs } = props;

  return (
    <div id="giflist">
      {gifs.map((gif) => {
        return <Gif gif={gif} />;
      })}
    </div>
  );
};

export default GifList;
