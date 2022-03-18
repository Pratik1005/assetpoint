const getProductsByRating = (products, rating) => {
  console.log(products, rating);
  return [...products].filter((product) => product.rating >= rating);
};

export {getProductsByRating};
