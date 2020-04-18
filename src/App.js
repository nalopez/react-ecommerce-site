import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Components
import NavBar from "./components/navbar";
import ProductList from "./components/product/productlist";
import ProductDetails from "./components/product/productdetails";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Images
import XiaomiGT from "./images/products/xiaomi-9T.jpg";
import SamsungGalaxyS10e from "./images/products/samsung-galaxy-s10e.jpg";

class App extends Component {
  state = {
    products: [
      {
        id: 1,
        productName: "Xiaomi Mi 9T Pro 6GB RAM",
        productPrice: "16839.31",
        productImage: XiaomiGT,
        productUrl: "xiaomi-gt",
      },
      {
        id: 2,
        productName: "Samsung Galaxy S10e",
        productPrice: "10000.00",
        productImage: SamsungGalaxyS10e,
        productUrl: "samsung-galaxy-s10e",
      },
    ],
    cart: [],
  };

  addToCartAction = (productId) => {
    console.log("nicanix", productId);

    const products = [...this.state.products];
    const cart = [...this.state.cart];
    cart.push({ id: productId, quantity: 1 });

    {
      /* TODO: Add checking if item exists in cart, increment quantity */
    }

    this.setState({ products: products, cart: cart });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <Router>
          <div>
            <NavBar />
            <Switch>
              {this.state.products.map((product) => (
                <Route key={product.id} path={"/product/" + product.productUrl}>
                  <ProductDetails
                    productData={product}
                    onAddToCart={this.addToCartAction}
                  ></ProductDetails>
                </Route>
              ))}
              ;
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
