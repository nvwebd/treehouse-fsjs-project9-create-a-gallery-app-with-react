import React from "react";

import "./App.css";
import Gallery from "../Gallery/Gallery";
import Header from "../Header/Header";
import { Consumer } from "../Context/Context";
import { Redirect } from "react-router-dom";

const App = () => (
  <Consumer>
    {({ formSubmitted }) => (
      <>
        {formSubmitted ? (
          <Redirect to="search" />
        ) : (
          <>
            <Header />
            <Gallery />
          </>
        )}
      </>
    )}
  </Consumer>
);

export default App;
