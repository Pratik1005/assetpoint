import {createContext, useContext, useReducer} from "react";
import {v4 as uuid} from "uuid";
import {addressReducer} from "../reducer/addressReducer";

const AddressContext = createContext(null);

const initialState = {
  initialAddressData: {
    id: uuid(),
    country: "india",
    name: "",
    contact: "",
    pinCode: "",
    flatName: "",
    area: "",
    landMark: "",
    city: "",
    state: "maharashtra",
  },
  addressList: [
    {
      id: uuid(),
      name: "Pratik Devle",
      flatName: "803/A, Nirmal House",
      area: "Area 1",
      landMark: "",
      city: "Mumbai",
      pinCode: "400012",
      state: "Maharashtra",
      country: "India",
      contact: "9876543210",
    },
  ],
  isAddAddress: false,
};

const AddressProvider = ({children}) => {
  const [addressState, addressDispatch] = useReducer(
    addressReducer,
    initialState
  );
  return (
    <AddressContext.Provider value={{addressState, addressDispatch}}>
      {children}
    </AddressContext.Provider>
  );
};

const useAddress = () => useContext(AddressContext);

export {AddressProvider, useAddress};
