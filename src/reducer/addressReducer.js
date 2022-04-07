const addressReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_ADDRESS_FORM":
      return {
        ...state,
        isAddAddress: !state.isAddAddress,
      };
    default:
      return state;
  }
};

export {addressReducer};
