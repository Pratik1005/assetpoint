import {createContext, useContext, useReducer} from "react";
import {cartReducer} from "../reducer/cartReducer";
const CartContext = createContext(null);

const initialCartState = {
  cartItems: [],
  totalItems: 0,
  totalPrice: 0,
};

const CartProvider = ({children}) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);
  return (
    <CartContext.Provider value={{cartState, cartDispatch}}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export {CartProvider, useCart};
