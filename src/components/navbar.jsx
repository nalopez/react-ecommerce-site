import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Nix Shop
        </Link>
      </nav>
    );
  }
}

export default NavBar;
