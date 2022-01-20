import React from "react";

const Gif = (props) => {
  const { gif } = props;

  return (
    <div className="gif">
      <h3>{gif.title}</h3>
      <p>{gif.username}</p>
      <img width="300" src={gif.images.original.url} />
      <a target="_blank" href={gif.url}>
        Check out the Giphy here!
      </a>
    </div>
  );
};
export default Gif;
