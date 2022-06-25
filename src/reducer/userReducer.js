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
    default:
      return state;
  }
};

export {userReducer};
