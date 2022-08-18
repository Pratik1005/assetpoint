import {USER_ACTIONS} from "./constant";

const userReducer = (state, action) => {
  switch (action.type) {
    case USER_ACTIONS.ADD_TO_WISHLIST:
      return {
        ...state,
        wishlist: action.payload,
      };
    case USER_ACTIONS.REMOVE_FROM_WISHLIST:
      return {...state, wishlist: action.payload};
    case USER_ACTIONS.ADD_TO_CART:
      return {
        ...state,
        cart: action.payload.cart,
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + action.payload.price,
      };
    case USER_ACTIONS.REMOVE_FROM_CART:
      return {
        ...state,
        cart: action.payload.cart,
        totalItems: state.totalItems - action.payload.quantity,
        totalPrice:
          state.totalPrice - action.payload.price * action.payload.quantity,
      };
    case USER_ACTIONS.INCREMENT_PRODUCT:
      return {
        ...state,
        cart: action.payload.cart,
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + action.payload.price,
      };
    case USER_ACTIONS.DECREMENT_PRODUCT:
      return {
        ...state,
        cart: action.payload.cart,
        totalItems: state.totalItems - 1,
        totalPrice: state.totalPrice - action.payload.price,
      };
    case USER_ACTIONS.PROCESS_ORDER:
      return {
        ...state,
        order: [...state.cart],
      };
    case USER_ACTIONS.CLEAR_CART:
      return {
        ...state,
        cart: [],
        totalItems: 0,
        totalPrice: 0,
      };
    case USER_ACTIONS.TOGGLE_MOBILE_MENU:
      return {...state, isMenuVisible: !state.isMenuVisible};
    case USER_ACTIONS.HIDE_MOBILE_MENU:
      return {...state, isMenuVisible: false};
    case USER_ACTIONS.ADD_AMOUNT_TO_PAY:
      return {...state, amountPaid: action.payload};
    default:
      return state;
  }
};

export {userReducer};
