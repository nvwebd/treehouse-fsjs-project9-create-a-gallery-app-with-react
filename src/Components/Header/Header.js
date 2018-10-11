import React from "react";
import SearchBar from '../SearchBar/SearchBar';
import Nav from '../Nav/Nav';
import logo from "../../n-logo.png";

const Header = () => (
  <>
    <h1>Create a Gallery App with React</h1>
    <img src={logo} alt="nvwebd.com - new logo" className="logo"/>
    <SearchBar />
    <Nav />
  </>
);

export default Header;
