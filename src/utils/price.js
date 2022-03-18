const getProductsByPrice = (products, price) => {
  return [...products].filter((product) => product.newPrice <= price);
};

export {getProductsByPrice};
