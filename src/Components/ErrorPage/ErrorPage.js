import React from "react";
import { NavLink } from "react-router-dom";
import { Consumer } from '../Context/Context';

const ErrorPage = () => {
  return (
    <Consumer>
      {({ actions }) => (
        <>
          <h1>404 Not Found</h1>
          <p>Sorry but the page you have requested doesn't exist...</p>
          <NavLink to="/" onClick={() => actions.updateSelectedTag(undefined)}>
            <button>Go back Home</button>
          </NavLink>
        </>
      )}
    </Consumer>
  );
};

export default ErrorPage;
