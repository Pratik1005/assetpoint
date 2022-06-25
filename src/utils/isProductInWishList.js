import {useUser} from "../context";

const isProductInWishList = (id) => {
  const {userState} = useUser();
  return userState.wishlist.some((product) => product._id === id);
};

export {isProductInWishList};
