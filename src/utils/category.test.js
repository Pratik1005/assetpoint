import {getProductsByCategory} from "./category";

describe("testing utility function", () => {
  it("should filter products by category", () => {
    const products = [
      {
        id: "1",
        category: "selfHelp",
      },
      {
        id: "2",
        category: "stockInvesting",
      },
    ];

    const category = {
      selfHelp: true,
      stockInvesting: false,
      realEstate: false,
    };

    const expectedProducts = [
      {
        id: "1",
        category: "selfHelp",
      },
    ];

    const result = getProductsByCategory(products, category);
    expect(result).toEqual(expectedProducts);
  });
});
