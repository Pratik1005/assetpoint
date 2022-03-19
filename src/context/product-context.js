import {useContext, createContext, useReducer} from "react";
import {productReducer} from "../reducer/productReducer";

const ProductContext = createContext(null);

const initialProductState = {
  price: 1000,
  category: {selfHelp: false, stockInvesting: false, realEstate: false},
  rating: "",
  sortBy: "",
};

const ProductProvider = ({children}) => {
  const [state, dispatch] = useReducer(productReducer, initialProductState);
  return (
    <ProductContext.Provider value={{state, dispatch}}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export {ProductProvider, useProduct};
