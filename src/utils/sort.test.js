import {getProductsBySort} from "./sort";

describe("testing utility function", () => {
  it("should sort products as low-to-high", () => {
    const products = [
      {
        id: "1",
        newPrice: 300,
      },
      {
        id: "2",
        newPrice: 250,
      },
    ];

    const expectedProducts = [
      {
        id: "2",
        newPrice: 250,
      },
      {
        id: "1",
        newPrice: 300,
      },
    ];

    const result = getProductsBySort(products, "LOW_TO_HIGH");
    expect(result).toEqual(expectedProducts);
  });

  it("should sort products as high-to-low", () => {
    const products = [
      {
        id: "1",
        newPrice: 250,
      },
      {
        id: "2",
        newPrice: 300,
      },
    ];

    const expectedProducts = [
      {
        id: "2",
        newPrice: 300,
      },
      {
        id: "1",
        newPrice: 250,
      },
    ];

    const result = getProductsBySort(products, "HIGH_TO_LOW");
    expect(result).toEqual(expectedProducts);
  });
});
