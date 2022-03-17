import {useContext, createContext, useReducer} from "react";
import {productReducer} from "../reducer/productReducer";

const ProductContext = createContext(null);

const initialProductState = {
  category: {selfHelp: false, stockInvest: false, realEstate: false},
  sortBy: "",
  rating: "",
};

const ProductProvider = ({children}) => {
  const [state, action] = useReducer(productReducer, initialProductState);
  return (
    <ProductContext.Provider value={{state, action}}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export {ProductProvider, useProduct};
