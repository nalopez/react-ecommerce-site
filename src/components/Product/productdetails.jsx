import React, { Component } from "react";

// Components
import ProductAddToCart from "./productaddtocart";

// CSS
import "../styles/productdetails.css";

class ProductDetails extends Component {
  render() {
    const { productName, productImage } = this.props.productData;

    return (
      <div className="product-details">
        <div className="product-details__left">
          <img className="product-details__image" src={productImage} />
        </div>
        <div className="product-details__right">
          <h1 className="product-details__title">{productName}</h1>
          <div className="product-details__description">
            <p>This is a test description</p>
            <ul>
              <li>Spec 1</li>
              <li>Spec 2</li>
              <li>Spec 3</li>
            </ul>
          </div>
          <ProductAddToCart
            productData={this.props.productData}
            onAddToCart={this.props.onAddToCart}
          ></ProductAddToCart>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
