import React from "react";
import { connect } from "react-redux";
import Gif from "./Gif";
import styled from "styled-components";

const GifGrid = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 2%;
  gap: 10px;
  gap: 10px 20px;
  row-gap: 10px;
  column-gap: 20px;
  p {
    font-size: 2rem;
  }
`;

const GifList = (props) => {
  const { gifs } = props;

  return (
    <GifGrid>
      {gifs.map((gif) => {
        return <Gif gif={gif} />;
      })}
    </GifGrid>
  );
};
const mapStateToProps = (state) => {
  return {
    gifs: state.gifs,
  };
};
export default connect(mapStateToProps)(GifList);
