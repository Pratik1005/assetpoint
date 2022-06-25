import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {makeServer} from "./server";
import {BrowserRouter as Router} from "react-router-dom";
import {
  ProductProvider,
  CartProvider,
  AddressProvider,
} from "./context/allContext";
import {AuthProvider, UserProvider} from "./context";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <UserProvider>
          <CartProvider>
            <ProductProvider>
              <AddressProvider>
                <App />
              </AddressProvider>
            </ProductProvider>
          </CartProvider>
        </UserProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
