const isProductInCart = (id, cart) => {
  return cart.some((item) => item?._id === id);
};

export {isProductInCart};
