import {isProductInCart} from "./isProductInCart";

describe("testing utility function", () => {
  it("should check if product is in cart and return boolean value", () => {
    const cart = [
      {
        _id: "1",
        name: "The Psychology of money",
      },
      {
        _id: "2",
        name: "The Intelligent Investor",
      },
    ];

    const result = isProductInCart("1", cart);
    expect(result).toBeTruthy();
  });
});
