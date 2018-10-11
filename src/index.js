import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppRouter from "./Components/AppRouter/AppRouter";
import { Provider } from "./Components/Context/Context";

// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider>
    <AppRouter />
  </Provider>,
  document.getElementById("container")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
