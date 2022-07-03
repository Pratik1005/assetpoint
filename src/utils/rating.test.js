import {getProductsByRating} from "./rating";

describe("testing utility function", () => {
  it("should filter products by rating", () => {
    const products = [
      {
        id: "1",
        rating: 4,
      },
      {
        id: "2",
        rating: 5,
      },
    ];

    const expectedProducts = [
      {
        id: "2",
        rating: 5,
      },
    ];

    const result = getProductsByRating(products, 5);
    expect(result).toEqual(expectedProducts);
  });
});
