import {userReducer} from "./userReducer";
import {USER_ACTIONS} from "./constant";

const initialState = {
  wishlist: [],
  cart: [],
  totalItems: 0,
  totalPrice: 0,
  isMenuVisible: false,
};

describe("testing cart", () => {
  it("should add to cart when value is added", () => {
    const action = {
      type: USER_ACTIONS.ADD_TO_CART,
      payload: {cart: [{id: "1", price: 500}], price: 500},
    };

    const expectedState = {
      ...initialState,
      cart: [{id: "1", price: 500}],
      totalItems: 1,
      totalPrice: 500,
    };

    const state = userReducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it("should remove from cart when value is removed", () => {
    const newInitialState = {
      ...initialState,
      cart: [{id: "1", price: 500}],
      totalItems: 1,
      totalPrice: 500,
    };

    const action = {
      type: USER_ACTIONS.REMOVE_FROM_CART,
      payload: {cart: [], price: 500, quantity: 1},
    };

    const expectedState = {
      ...initialState,
      cart: [],
      totalItems: 0,
      totalPrice: 0,
    };

    const state = userReducer(newInitialState, action);

    expect(state).toEqual(expectedState);
  });

  it("should increment the product", () => {
    const newInitialState = {
      ...initialState,
      cart: [{id: "1", qty: 1, price: 500}],
      totalItems: 1,
      totalPrice: 500,
    };

    const action = {
      type: USER_ACTIONS.INCREMENT_PRODUCT,
      payload: {cart: [{id: "1", qty: 2, price: 500}], price: 500},
    };

    const expectedState = {
      ...initialState,
      cart: [{id: "1", qty: 2, price: 500}],
      totalItems: 2,
      totalPrice: 1000,
    };

    const state = userReducer(newInitialState, action);
    expect(state).toEqual(expectedState);
  });

  it("should decrement the product", () => {
    const newInitialState = {
      ...initialState,
      cart: [{id: "1", qty: 2, price: 1000}],
      totalItems: 2,
      totalPrice: 1000,
    };

    const action = {
      type: USER_ACTIONS.DECREMENT_PRODUCT,
      payload: {cart: [{id: "1", qty: 1, price: 500}], price: 500},
    };

    const expectedState = {
      ...initialState,
      cart: [{id: "1", qty: 1, price: 500}],
      totalItems: 1,
      totalPrice: 500,
    };

    const state = userReducer(newInitialState, action);

    expect(state).toEqual(expectedState);
  });
  it("should clear cart", () => {
    const newInitialState = {
      ...initialState,
      cart: [{id: "1", price: 500}],
      totalItems: 1,
      totalPrice: 500,
    };

    const action = {
      type: USER_ACTIONS.CLEAR_CART,
    };

    const expectedState = {
      ...initialState,
      cart: [],
      totalItems: 0,
      totalPrice: 0,
    };

    const state = userReducer(newInitialState, action);

    expect(state).toEqual(expectedState);
  });
});

describe("testing wishlist", () => {
  it("should add to wishlist", () => {
    const action = {
      type: USER_ACTIONS.ADD_TO_WISHLIST,
      payload: [{id: "1", price: 500}],
    };

    const expectedState = {
      ...initialState,
      wishlist: [{id: "1", price: 500}],
    };

    const state = userReducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it("should remove from wishlist", () => {
    const newInitialState = {
      ...initialState,
      wishlist: [{id: "1", price: 500}],
    };

    const action = {
      type: USER_ACTIONS.REMOVE_FROM_WISHLIST,
      payload: [],
    };

    const expectedState = {
      ...initialState,
      wishlist: [],
    };

    const state = userReducer(newInitialState, action);

    expect(state).toEqual(expectedState);
  });
});

describe("testing mobile menu", () => {
  it("should toggle mobile menu", () => {
    const action = {
      type: USER_ACTIONS.TOGGLE_MOBILE_MENU,
    };

    const expectedState = {
      ...initialState,
      isMenuVisible: true,
    };

    const state = userReducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it("should hide mobile menu", () => {
    const newInitialState = {
      ...initialState,
      isMenuVisible: true,
    };

    const action = {
      type: USER_ACTIONS.HIDE_MOBILE_MENU,
    };

    const expectedState = {
      ...initialState,
      isMenuVisible: false,
    };

    const state = userReducer(newInitialState, action);

    expect(state).toEqual(expectedState);
  });
});
