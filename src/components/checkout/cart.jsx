import React, { Component } from "react";

// Components
import ProductList from "./productlist";

// CSS
import "../styles/cart.css";

class Cart extends Component {
  showCartItems = () => {
    console.log(this.props.cartItems);

    return Object.keys(this.props.cartItems).length > 0 ? (
      <ProductList
        cartItems={this.props.cartItems}
        products={this.props.products}
        onIncreaseItem={this.props.onIncreaseItem}
        onDecreaseItem={this.props.onDecreaseItem}
        onRemoveItem={this.props.onRemoveItem}
      ></ProductList>
    ) : (
      <div className="empty-list-message">There are no items in your cart.</div>
    );
  };

  render() {
    return (
      <div className="shopping-cart-wrapper">
        <h1>Shopping Cart</h1>
        {this.showCartItems()}
      </div>
    );
  }
}

export default Cart;
