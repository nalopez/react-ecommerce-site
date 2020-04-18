import React, { Component } from "react";
import { Link } from "react-router-dom";

// Components
import ProductAddToCart from "./productaddtocart";

// CSS
import "../styles/productsummary.css";

class ProductSummary extends Component {
  formatCurrency = () => {
    return this.props.productData.productPrice;
  };

  render() {
    const { productImage, productName, productUrl } = this.props.productData;

    return (
      <div className="product-summary">
        <div className="product-summary__details-wrapper">
          <img className="product-summary__image" src={productImage} />
        </div>
        <div className="product-summary__details-wrapper">
          <span>
            <Link to={"/product/" + productUrl}>{productName}</Link>
          </span>
        </div>
        <div className="product-summary__details-wrapper">
          <span>{this.formatCurrency()}</span>
        </div>
        <ProductAddToCart
          productData={this.props.productData}
          onAddToCart={this.props.onAddToCart}
        ></ProductAddToCart>
      </div>
    );
  }
}

export default ProductSummary;
