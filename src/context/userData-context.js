import {createContext, useContext, useReducer} from "react";
import {userReducer} from "../reducer/userReducer";

const UserContext = createContext();

const initialState = {
  wishlist: [],
  cart: [],
  totalItems: 0,
  totalPrice: 0,
};

const UserProvider = ({children}) => {
  const [userState, userDispatch] = useReducer(userReducer, initialState);
  return (
    <UserContext.Provider value={{userState, userDispatch}}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export {useUser, UserProvider};
