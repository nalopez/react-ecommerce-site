import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Components
import NavBar from "./components/navbar";
import ProductList from "./components/product/productlist";
import ProductDetails from "./components/product/productdetails";
import ProductAddedToCart from "./components/product/productaddedtocart";
import Cart from "./components/checkout/cart";
import ModalComponent from "./components/partials/modalcomponent";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/styles/templates.css";

// Images
import XiaomiGT from "./images/products/xiaomi-9T.jpg";
import SamsungGalaxyS10e from "./images/products/samsung-galaxy-s10e.jpg";

class App extends Component {
  state = {
    products: {
      "1": {
        id: 1,
        productName: "Xiaomi Mi 9T Pro 6GB RAM",
        productPrice: "16839.31",
        productImage: XiaomiGT,
        productUrl: "xiaomi-gt",
      },
      "2": {
        id: 2,
        productName: "Samsung Galaxy S10e",
        productPrice: "10000.00",
        productImage: SamsungGalaxyS10e,
        productUrl: "samsung-galaxy-s10e",
      },
    },
    cart: { 1: { id: 1, quantity: 1 } },
    modal: false,
  };

  addToCartAction = (productId) => {
    const products = { ...this.state.products };
    let cart = { ...this.state.cart };
    const modal = this.state.modal;

    if (typeof cart[productId] != "undefined") {
      // product already exists. Increase quantity
      const prodQuantity = cart[productId].quantity;
      cart[productId].quantity = prodQuantity + 1;
    } else {
      cart[productId] = { id: productId, quantity: 1 };
    }

    this.setState({ products: products, cart: cart, modal: !modal });
  };

  increaseItemAction = (productId) => {
    const products = { ...this.state.products };
    let cart = { ...this.state.cart };
    const modal = this.state.modal;

    const prodQuantity = cart[productId].quantity;
    cart[productId].quantity = prodQuantity + 1;

    this.setState({ products: products, cart: cart, modal: modal });
  };

  decreaseItemAction = (productId) => {
    const products = { ...this.state.products };
    const modal = this.state.modal;
    let cart = { ...this.state.cart };
    let prodQuantity = cart[productId].quantity;
    prodQuantity = prodQuantity - 1;

    if (prodQuantity < 1) {
      delete cart[productId];
    } else {
      cart[productId].quantity = prodQuantity;
    }

    this.setState({ products: products, cart: cart, modal: modal });
  };

  removeItemAction = (productId) => {
    const products = { ...this.state.products };
    const modal = this.state.modal;
    let cart = { ...this.state.cart };

    delete cart[productId];

    this.setState({ products: products, cart: cart, modal: modal });
  };

  toggleModalAction = () => {
    const products = { ...this.state.products };
    const cart = { ...this.state.cart };
    const modal = this.state.modal;

    this.setState({ products: products, cart: cart, modal: !modal });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <ModalComponent
          modal={this.state.modal}
          modalHeader="Product Added to Cart"
          modalBody={<ProductAddedToCart></ProductAddedToCart>}
          onToggleModal={this.toggleModalAction}
        ></ModalComponent>
        <Router>
          <div>
            <NavBar />
            <Switch>
              {Object.keys(this.state.products).map((product) => (
                <Route
                  key={this.state.products[product].id}
                  path={"/product/" + this.state.products[product].productUrl}
                >
                  <ProductDetails
                    productData={this.state.products[product]}
                    onAddToCart={this.addToCartAction}
                  ></ProductDetails>
                </Route>
              ))}

              <Route path="/cart">
                <Cart
                  cartItems={this.state.cart}
                  products={this.state.products}
                  onIncreaseItem={this.increaseItemAction}
                  onDecreaseItem={this.decreaseItemAction}
                  onRemoveItem={this.removeItemAction}
                ></Cart>
              </Route>

              <Route path="/">
                <ProductList
                  products={this.state.products}
                  onAddToCart={this.addToCartAction}
                ></ProductList>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
