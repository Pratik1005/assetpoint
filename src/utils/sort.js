const getProductsBySort = (products, sortBy) => {
  if (sortBy === "LOW_TO_HIGH") {
    return [...products].sort(
      (product1, product2) => product1.newPrice - product2.newPrice
    );
  }
  if (sortBy === "HIGH_TO_LOW") {
    return [...products].sort(
      (product1, product2) => product2.newPrice - product1.newPrice
    );
  }
  return products;
};

export {getProductsBySort};
