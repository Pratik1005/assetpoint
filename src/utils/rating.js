const getProductsByRating = (products, rating) => {
  return rating
    ? [...products].filter((product) => product.rating >= rating)
    : products;
};

export {getProductsByRating};
