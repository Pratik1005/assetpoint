import axios from "axios";
import {toast} from "react-toastify";
import {USER_ACTIONS} from "../reducer/constant";

const addToWishlist = async (product, token, userDispatch) => {
  try {
    const response = await axios.post(
      "/api/user/wishlist",
      {product},
      {headers: {authorization: token}}
    );
    userDispatch({
      type: USER_ACTIONS.ADD_TO_WISHLIST,
      payload: response.data.wishlist,
    });
    toast.success("Added to wishlist");
  } catch (err) {
    console.error("add to wishlist", err);
    toast.error(err.message);
  }
};

const removeFromWishlist = async (productId, token, userDispatch) => {
  try {
    const response = await axios.delete(`/api/user/wishlist/${productId}`, {
      headers: {authorization: token},
    });
    userDispatch({
      type: USER_ACTIONS.REMOVE_FROM_WISHLIST,
      payload: response.data.wishlist,
    });
    toast.success("Removed from wishlist");
  } catch (err) {
    console.error(err);
    toast.error(err.message);
  }
};

export {addToWishlist, removeFromWishlist};
