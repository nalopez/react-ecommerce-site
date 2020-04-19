import React, { Component } from "react";

// Components
import ProductSummary from "./productsummary";

// CSS
import "../styles/productlist.css";

class ProductList extends Component {
  render() {
    return (
      <div className="product-list-wrapper">
        <h3> Items </h3>
        <ul className="product-list">
          {Object.keys(this.props.products).map((productKey) => (
            <ProductSummary
              key={this.props.products[productKey].id}
              productData={this.props.products[productKey]}
              onAddToCart={this.props.onAddToCart}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default ProductList;
