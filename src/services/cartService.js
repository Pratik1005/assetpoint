import axios from "axios";
import {toast} from "react-toastify";
import {USER_ACTIONS} from "../reducer/constant";

const addToCart = async (product, token, userDispatch) => {
  try {
    const response = await axios.post(
      "/api/user/cart",
      {product},
      {headers: {authorization: token}}
    );
    userDispatch({
      type: USER_ACTIONS.ADD_TO_CART,
      payload: {cart: response.data.cart, price: product.newPrice},
    });
    toast.success("Added to cart");
  } catch (err) {
    console.error(err);
    toast.error(err.message);
  }
};

const removeFromCart = async (product, token, userDispatch) => {
  try {
    const response = await axios.delete(`/api/user/cart/${product._id}`, {
      headers: {authorization: token},
    });
    toast.success("Removed from cart");
    userDispatch({
      type: USER_ACTIONS.REMOVE_FROM_CART,
      payload: {
        cart: response.data.cart,
        price: product.newPrice,
        quantity: product.qty,
      },
    });
  } catch (err) {
    console.error(err);
    toast.error(err.message);
  }
};

const incrementProduct = async (product, token, userDispatch) => {
  try {
    const response = await axios.post(
      `/api/user/cart/${product._id}`,
      {
        action: {type: "increment"},
      },
      {headers: {authorization: token}}
    );
    userDispatch({
      type: USER_ACTIONS.INCREMENT_PRODUCT,
      payload: {cart: response.data.cart, price: product.newPrice},
    });
    toast.success("Increased product quantity");
  } catch (err) {
    console.error(err);
    toast.err;
  }
};

const decrementProduct = async (product, token, userDispatch) => {
  try {
    const response = await axios.post(
      `/api/user/cart/${product._id}`,
      {action: {type: "decrement"}},
      {headers: {authorization: token}}
    );
    userDispatch({
      type: USER_ACTIONS.DECREMENT_PRODUCT,
      payload: {cart: response.data.cart, price: product.newPrice},
    });
    toast.success("Decreased product quantity");
  } catch (err) {
    console.error(err);
    toast.error(err.message);
  }
};

const clearCart = async (token) => {
  try {
    const response = await axios.delete("/api/user/cart", {
      headers: {authorization: token},
    });
  } catch (err) {
    console.error("Clear cart", err);
    toast.error(err.message);
  }
};

export {
  addToCart,
  removeFromCart,
  incrementProduct,
  decrementProduct,
  clearCart,
};
