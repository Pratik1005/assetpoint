const getProductsByCategory = (products, category) => {
  let filteredProducts = [];
  let count = 0;
  for (let categoryName in category) {
    if (category[categoryName]) {
      filteredProducts = filteredProducts.concat(
        [...products].filter((product) => product.category === categoryName)
      );
    } else {
      count++;
    }
  }
  return count === 3 ? products : filteredProducts;
};

export {getProductsByCategory};
