import React from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import { fetchStart, fetchSuccess } from "./Actions";
import "./App.css";
import GifList from "./Components/GifList";
import axios from "axios";

function App(props) {
  const { loading, error } = props;

  useEffect(() => {
    props.fetchStart();
    axios
      .get(
        "https://api.giphy.com/v1/gifs/search?api_key=gnIfTEKMUGDF5F4wsPhg6T4TfEZIRTwp&q=octopus"
      )
      .then((res) => {
        props.fetchSuccess(res.data.data);
      });
  }, []);

  return (
    <div className="App">
      <h1>Get a random Octopus Gif</h1>
      <button>Hello Octopus!</button>
      {error !== "" && <h3>{error}</h3>}
      {loading ? <h3>We are Loading</h3> : <GifList />}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchStart, fetchSuccess })(App);
