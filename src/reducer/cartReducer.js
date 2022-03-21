const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, {...action.payload, count: 1}],
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
        totalPrice:
          state.totalPrice - action.payload.newPrice * action.payload.count,
      };
    case "INCREASE_PRODUCT_COUNT":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item._id === action.payload._id
            ? {...item, count: item.count + 1}
            : item
        ),
        totalPrice: state.totalPrice + action.payload.newPrice,
      };
    case "DECREASE_PRODUCT_COUNT":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item._id === action.payload._id
            ? {...item, count: item.count - 1}
            : item
        ),
        totalPrice: state.totalPrice - action.payload.newPrice,
      };
    default:
      return state;
  }
};

export {cartReducer};
