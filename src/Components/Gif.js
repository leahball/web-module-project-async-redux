import React from "react";
import styled from "styled-components";

const GifCard = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  padding: 2%;
`;

const GifInfo = styled.div`
  padding: 2%;
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 2rem;
    color: black;
  }
  p {
    font-weight: 500;
    font-size: 2rem;
  }
`;

const Gif = (props) => {
  const { gif } = props;

  return (
    <GifCard>
      <img width="200" src={gif.images.original.url} />
      <GifInfo>
        <h3>{gif.title}</h3>
        <p>{gif.username}</p>
        <a target="_blank" href={gif.url}>
          Check out the Giphy here!
        </a>
      </GifInfo>
    </GifCard>
  );
};
export default Gif;
