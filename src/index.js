import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {makeServer} from "./server";
import {BrowserRouter as Router} from "react-router-dom";
import {
  ProductProvider,
  CartProvider,
  WishListProvider,
  AddressProvider,
  AuthProvider,
} from "./context/allContext";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <WishListProvider>
          <CartProvider>
            <ProductProvider>
              <AddressProvider>
                <App />
              </AddressProvider>
            </ProductProvider>
          </CartProvider>
        </WishListProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
