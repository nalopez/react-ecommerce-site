import React, { Component } from "react";

class ProductDetails extends Component {
  state = {};
  render() {
    return <div>{this.props.productData.productName}</div>;
  }
}

export default ProductDetails;
