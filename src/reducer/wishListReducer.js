const wishListReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishListItems: [...state.wishListItems, action.payload],
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishListItems: state.wishListItems.filter(
          (item) => item._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};

export {wishListReducer};
