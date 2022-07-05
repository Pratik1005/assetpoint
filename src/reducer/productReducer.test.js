import {productReducer} from "./productReducer";
import {USER_ACTIONS} from "./constant";

const initialState = {
  price: 1000,
  category: {selfHelp: false, stockInvesting: false, realEstate: false},
  rating: "",
  sortBy: "",
};

describe("testing product filters", () => {
  it("should sort by price", () => {
    const action = {
      type: USER_ACTIONS.SORT_BY_PRICE,
      payload: 500,
    };

    const expectedState = {
      ...initialState,
      price: 500,
    };

    const state = productReducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it("should filter products by category self help", () => {
    const action = {
      type: USER_ACTIONS.SELF_HELP,
    };

    const expectedState = {
      ...initialState,
      category: {...initialState.category, selfHelp: true},
    };

    const state = productReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });

  it("should filter products by category stock investing", () => {
    const action = {
      type: USER_ACTIONS.STOCK_INVESTING,
    };

    const expectedState = {
      ...initialState,
      category: {...initialState.category, stockInvesting: true},
    };

    const state = productReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });

  it("should filter products by category real estate", () => {
    const action = {
      type: USER_ACTIONS.REAL_ESTATE,
    };

    const expectedState = {
      ...initialState,
      category: {...initialState.category, realEstate: true},
    };

    const state = productReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });

  it("should filter products by rating", () => {
    const action = {
      type: USER_ACTIONS.RATING,
      payload: 4,
    };

    const expectedState = {
      ...initialState,
      rating: 4,
    };

    const state = productReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });

  it("should sort products by low-to-high or hight-to-low", () => {
    const action = {
      type: USER_ACTIONS.SORT_BY_LOW_OR_HIGH,
      payload: "LOW_TO_HIGH",
    };

    const expectedState = {
      ...initialState,
      sortBy: "LOW_TO_HIGH",
    };

    const state = productReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });

  it("should filter products by featured category self help", () => {
    const action = {
      type: USER_ACTIONS.FEATURED_SELF_HELP,
    };

    const expectedState = {
      ...initialState,
      category: {selfHelp: true, stockInvesting: false, realEstate: false},
    };

    const state = productReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });

  it("should filter products by featured category stock investing", () => {
    const action = {
      type: USER_ACTIONS.FEATURED_STOCK_INVESTING,
    };

    const expectedState = {
      ...initialState,
      category: {selfHelp: false, stockInvesting: true, realEstate: false},
    };

    const state = productReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });

  it("should filter products by featured category real estate", () => {
    const action = {
      type: USER_ACTIONS.FEATURED_REAL_ESTATE,
    };

    const expectedState = {
      ...initialState,
      category: {selfHelp: false, stockInvesting: false, realEstate: true},
    };

    const state = productReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });

  it("should clear all product filters", () => {
    const action = {
      type: USER_ACTIONS.CLEAR,
    };

    const expectedState = {
      price: 1000,
      category: {selfHelp: false, stockInvesting: false, realEstate: false},
      rating: "",
      sortBy: "",
    };

    const state = productReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });
});
