import React from "react";

const Nav = () => {
  return (
    <nav style={navBar} className="Nav">
      <a style={navLinx} href="/">
        Home
      </a>
      <a style={navLinx} href="/">
        Dashboard
      </a>
      <a style={navLinx} href="/">
        Login
      </a>
    </nav>
  );
};

const navLinx = {
  margin: "10px",
  textDecoration: "none",
  color: "black",
};

const navBar = {
  margin: "20px",
};

export default Nav;
