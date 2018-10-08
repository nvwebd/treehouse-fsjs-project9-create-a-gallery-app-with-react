import React, { Component } from "react";
import apiKey from "./.config";

// import logo from "../../logo.svg";

import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import Nav from "../Nav/Nav";
import Gallery from "../Gallery/Gallery";

class App extends Component {
  render() {
    return (
      <>
        <SearchBar />
        <Nav />
        <Gallery />
      </>
    );
  }
}

export default App;
