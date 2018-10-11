import React from "react";
import PropTypes from "prop-types";
import NavItem from "../NavItem/NavItem";
import { Consumer } from "../Context/Context";

const Nav = () => (
  <Consumer>
    {({ navItems }) => (
      <nav className="main-nav">
        <ul>
          {navItems.map((navItem, index) => {
            return (
              <NavItem
                hrefLink={navItem.link}
                hrefText={navItem.text}
                tag={navItem.text}
                key={index}
              />
            );
          })}
        </ul>
      </nav>
    )}
  </Consumer>
);

Nav.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.object)
};

export default Nav;
