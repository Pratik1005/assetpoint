const productReducer = (state, action) => {
  switch (action.type) {
    case "CLEAR":
      return {
        price: 1000,
        category: {selfHelp: false, stockInvesting: false, realEstate: false},
        rating: "",
        sortBy: "",
      };
    case "SORT_BY_PRICE":
      return {...state, price: action.payload};
    case "SELF_HELP":
      return {
        ...state,
        category: {...state.category, selfHelp: !state.category.selfHelp},
      };
    case "STOCK_INVESTING":
      return {
        ...state,
        category: {
          ...state.category,
          stockInvesting: !state.category.stockInvesting,
        },
      };
    case "REAL_ESTATE":
      return {
        ...state,
        category: {...state.category, realEstate: !state.category.realEstate},
      };
    case "RATING":
      return {...state, rating: action.payload};
    case "SORT_BY_LOW_OR_HIGH":
      return {...state, sortBy: action.payload};
    case "FEATURED_SELF_HELP":
      return {
        ...state,
        category: {selfHelp: true, stockInvesting: false, realEstate: false},
      };
    case "FEATURED_STOCK_INVESTING":
      return {
        ...state,
        category: {selfHelp: false, stockInvesting: true, realEstate: false},
      };
    case "FEATURED_REAL_ESTATE":
      return {
        ...state,
        category: {selfHelp: false, stockInvesting: false, realEstate: true},
      };
    default:
      return state;
  }
};

export {productReducer};
