import {useWishList} from "../context/wishlist-context";

const isProductInWishList = (id) => {
  const {wishListState} = useWishList();
  let addedToWishList = false;

  wishListState.wishListItems.forEach((item) =>
    item._id === id ? (addedToWishList = true) : null
  );

  return addedToWishList;
};

export {isProductInWishList};
