import {getProductsByPrice} from "./price";

describe("testing utility function", () => {
  it("should filter products by price", () => {
    const products = [
      {
        id: "1",
        newPrice: 200,
      },
      {
        id: "2",
        newPrice: 400,
      },
      {
        id: "3",
        newPrice: 600,
      },
    ];

    const expectedProducts = [
      {
        id: "1",
        newPrice: 200,
      },
      {
        id: "2",
        newPrice: 400,
      },
    ];

    const result = getProductsByPrice(products, 500);
    expect(result).toEqual(expectedProducts);
  });
});
