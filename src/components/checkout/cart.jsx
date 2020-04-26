import React, { Component } from "react";

// Components
import ProductList from "./productlist";

// CSS
import "../styles/cart.css";

class Cart extends Component {
  computeTotalPrice = () => {
    let totalPrice = 0;
    let formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "PHP",
    });

    Object.keys(this.props.cartItems).map(
      (cartItemKey) =>
        (totalPrice =
          totalPrice +
          this.props.cartItems[cartItemKey].quantity *
            this.props.products[cartItemKey].productPrice)
    );

    return formatter.format(totalPrice);
  };

  showCartItems = () => {
    return Object.keys(this.props.cartItems).length > 0 ? (
      <div>
        <ProductList
          cartItems={this.props.cartItems}
          products={this.props.products}
          onIncreaseItem={this.props.onIncreaseItem}
          onDecreaseItem={this.props.onDecreaseItem}
          onRemoveItem={this.props.onRemoveItem}
        ></ProductList>
        <div className="cart__total-price">
          <div className="cart__total-price-label">Total:</div>
          <div className="cart__total-price-amount">
            {this.computeTotalPrice()}
          </div>
        </div>
      </div>
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
