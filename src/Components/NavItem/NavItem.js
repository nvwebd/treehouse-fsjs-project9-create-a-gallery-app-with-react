import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { Consumer } from "../Context/Context";

const NavItem = ({ hrefLink, tag, hrefText }) => (
  <Consumer>
    {({ actions }) => (
      <li>
        <NavLink to={hrefLink} onClick={() => actions.updateSelectedTag(tag)}>
          {hrefText}
        </NavLink>
      </li>
    )}
  </Consumer>
);

NavItem.propTypes = {
  hrefLink: PropTypes.string,
  hrefText: PropTypes.string,
  index: PropTypes.number
};

export default NavItem;
