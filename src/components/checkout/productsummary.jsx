import React, { Component } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

class ProductSummary extends Component {
  render() {
    const {
      productName,
      productUrl,
      productImage,
      productPrice,
    } = this.props.cartItemData;

    return (
      <div className="checkout-product-summary">
        <div>
          <img className="checkout-product-image" src={productImage} />
        </div>
        <div>
          <Link to={"/product/" + productUrl}>{productName}</Link>
        </div>
        <div>{productPrice}</div>
        <div>{this.props.quantity}</div>
        <div>
          <button>+</button>
          <button>-</button>
          <button>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
    );
  }
}

export default ProductSummary;
