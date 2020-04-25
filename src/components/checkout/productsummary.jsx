import React, { Component } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

class ProductSummary extends Component {
  render() {
    const {
      id,
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
          <button
            className="checkout__add-item"
            onClick={() => this.props.onIncreaseItem(id)}
          >
            +
          </button>
          <button
            className="checkout__minus-item"
            onClick={() => this.props.onDecreaseItem(id)}
          >
            -
          </button>
          <button
            className="checkout__remove-item"
            onClick={() => this.props.onRemoveItem(id)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
    );
  }
}

export default ProductSummary;
