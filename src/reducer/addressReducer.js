import {v4 as uuid} from "uuid";

const addressReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_ADDRESS_FORM":
      return {
        ...state,
        isAddAddress: !state.isAddAddress,
      };
    case "ADD_NEW_ADDRESS":
      return {
        ...state,
        addressList: [{id: uuid(), ...action.payload}, ...state.addressList],
      };
    case "DELETE_ADDRESS":
      return {
        ...state,
        addressList: state.addressList.filter(
          (item) => item.id !== action.payload
        ),
      };
    case "EDIT_ADDRESS":
      return {
        ...state,
        addressList: state.addressList.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    default:
      return state;
  }
};

export {addressReducer};
