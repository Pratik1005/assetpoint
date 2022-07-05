import {addressReducer} from "./addressReducer";
import {USER_ACTIONS} from "./constant";

const initialState = {
  initialAddressData: {
    id: "1",
    country: "india",
    name: "",
    contact: "",
    pinCode: "",
    flatName: "",
    area: "",
    landMark: "",
    city: "",
    state: "maharashtra",
  },
  addressList: [
    {
      id: "2",
      name: "Pratik Devle",
      flatName: "803/A, Nirmal House",
      area: "Area 1",
      landMark: "",
      city: "Mumbai",
      pinCode: "400012",
      state: "Maharashtra",
      country: "India",
      contact: "9876543210",
    },
  ],
  isAddAddress: false,
};

describe("testing address management", () => {
  it("should test toggle address form", () => {
    const action = {
      type: USER_ACTIONS.TOGGLE_ADDRESS_FORM,
    };

    const expectedState = {
      ...initialState,
      isAddAddress: !initialState.isAddAddress,
    };

    const state = addressReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });

  it("should delete address", () => {
    const newInitialState = {
      ...initialState,
      addressList: [
        {
          id: "123",
          city: "Mumbai",
        },
      ],
    };

    const action = {
      type: USER_ACTIONS.DELETE_ADDRESS,
      payload: "123",
    };

    const expectedState = {
      ...initialState,
      addressList: [],
    };

    const state = addressReducer(newInitialState, action);
    expect(state).toEqual(expectedState);
  });

  it("should edit address", () => {
    const newInitialState = {
      ...initialState,
      addressList: [
        {
          id: "123",
          city: "Mumbai",
        },
      ],
    };

    const action = {
      type: USER_ACTIONS.EDIT_ADDRESS,
      payload: {id: "123", city: "Pune"},
    };

    const expectedState = {
      ...initialState,
      addressList: [
        {
          id: "123",
          city: "Pune",
        },
      ],
    };

    const state = addressReducer(newInitialState, action);
    expect(state).toEqual(expectedState);
  });
});
