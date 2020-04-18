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
          {this.props.products.map((prod) => (
            <ProductSummary
              key={prod.id}
              productData={prod}
              onAddToCart={this.props.onAddToCart}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default ProductList;
