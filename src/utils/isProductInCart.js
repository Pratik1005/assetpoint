import {useCart} from "../context/cart-context";

const isProductInCart = (id) => {
  const {cartState} = useCart();
  let currentItemInCart = false;
  cartState.cartItems.forEach((item) =>
    item._id === id ? (currentItemInCart = true) : null
  );
  return currentItemInCart;
};

export {isProductInCart};
