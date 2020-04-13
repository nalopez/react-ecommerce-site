import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Components
import NavBar from "./components/navbar";
import ProductList from "./components/Product/productlist";
import ProductDetails from "./components/Product/productdetails";

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
  };

  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <Router>
          <div>
            <NavBar />
            <Switch>
              <Route path="/product/xiaomi-gt">
                <ProductDetails
                  productData={this.state.products[0]}
                ></ProductDetails>
              </Route>

              <Route path="/">
                <ProductList products={this.state.products}></ProductList>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
