import React from "react";
import { connect } from "react-redux";
import "./App.css";
import GifList from "./Components/GifList";

function App(props) {
  const { loading, error } = props;

  if (error !== "") {
    return <h3>{error}</h3>;
  }

  return (
    <div className="App">
      <h1>Get a random Octopus Gif</h1>
      <button>Hello Octopus!</button>
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

export default connect(mapStateToProps)(App);
