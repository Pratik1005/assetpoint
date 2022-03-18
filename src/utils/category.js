const getProductsByCategory = (products, category) => {
  console.log(products);
  let filteredProducts = [];
  for (let categoryName in category) {
    if (category[categoryName]) {
      filteredProducts = filteredProducts.concat(
        [...products].filter((product) => product.category === categoryName)
      );
      console.log(filteredProducts);
    }
  }
  console.log(filteredProducts);
  return filteredProducts ? filteredProducts : products;
};

export {getProductsByCategory};
