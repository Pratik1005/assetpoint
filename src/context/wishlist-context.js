import {createContext, useReducer, useContext} from "react";
import {wishListReducer} from "../reducer/wishListReducer";
const WishListContext = createContext(null);

const initialState = {
  wishListItems: [],
};

const WishListProvider = ({children}) => {
  const [wishListState, wishListDispatch] = useReducer(
    wishListReducer,
    initialState
  );
  return (
    <WishListContext.Provider value={{wishListState, wishListDispatch}}>
      {children}
    </WishListContext.Provider>
  );
};

const useWishList = () => useContext(WishListContext);

export {WishListProvider, useWishList};
