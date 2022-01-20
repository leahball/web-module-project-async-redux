import { connect } from "react-redux";
import "./App.css";
import GifList from "./Components/GifList";
import data from "./Data/gifs";

function App(props) {
  const gifs = data;
  const loading = false;
  const error = "";

  return (
    <div className="App">
      <h1>Get a random Octopus Gif</h1>
      <button>Hello Octopus!</button>
      {loading ? <h3>We are Loading</h3> : <GifList gifs={gifs} />}
    </div>
  );
}
export default App;
