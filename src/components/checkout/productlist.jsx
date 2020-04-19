import React, { Component } from "react";

// Components
import ProductSummary from "./productsummary";

class ProductList extends Component {
  getCartItemProductData = (cartProductId) => {
    return this.props.products[cartProductId];
  };

  render() {
    return (
      <div className="checkout-products-list">
        {Object.keys(this.props.cartItems).map((cartItemKey) => (
          <ProductSummary
            key={cartItemKey}
            cartItemData={this.getCartItemProductData(
              this.props.cartItems[cartItemKey].id
            )}
            quantity={this.props.cartItems[cartItemKey].quantity}
          ></ProductSummary>
        ))}
      </div>
    );
  }
}

export default ProductList;
