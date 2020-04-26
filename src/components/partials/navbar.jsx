import React, { Component } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

// CSS
import "../styles/navbar.css";

class NavBar extends Component {
  getCartQuantity = () => {
    let count = 0;
    Object.keys(this.props.cart).map(
      (cartItemKey) => (count = count + this.props.cart[cartItemKey].quantity)
    );

    return count;
  };

  render() {
    return (
      <nav className="navbar shop-navbar">
        <Link className="navbar-brand shop-navbar__link" to="/">
          Nix Shop
        </Link>
        <Link className="navbar-brand shop-navbar__link" to="/cart">
          <FontAwesomeIcon icon={faShoppingCart} />
          <div className="shop-navbar__cart-count">
            {this.getCartQuantity()}
          </div>
        </Link>
      </nav>
    );
  }
}

export default NavBar;
