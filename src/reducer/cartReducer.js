const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + action.payload.newPrice,
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item._id !== action.payload._id
        ),
        totalItems: state.totalItems - 1,
        totalPrice: state.totalPrice - action.payload.newPrice,
      };
    default:
      return state;
  }
};

export {cartReducer};
