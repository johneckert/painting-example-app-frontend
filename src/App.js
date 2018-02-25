import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import GalleryContainer from "./components/GalleryContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
        />
        <GalleryContainer />
      </div>
    );
  }
}

export default App;
