import React, { Component } from "react";

// CSS
import "../styles/productaddtocart.css";

class ProductAddToCart extends Component {
  render() {
    return (
      <div className="add-to-cart">
        <button
          className="add-to-cart__button"
          onClick={() => this.props.onAddToCart(this.props.productData.id)}
        >
          Add to Cart
        </button>
      </div>
    );
  }
}

export default ProductAddToCart;
