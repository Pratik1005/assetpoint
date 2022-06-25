import {toast} from "react-toastify";
import {useCart} from "../context/allContext";
import {useAuth, useUser} from "../context";
import {isProductInCart} from "../utils/isProductInCart";
import {removeFromWishlist} from "../services/wishlistService";

const WishlistedCard = ({cardData}) => {
  const {imgSrc, title, author, oldPrice, newPrice, discount} = cardData;
  const {cartState, cartDispatch} = useCart();
  const {auth} = useAuth();
  const {userDispatch} = useUser();

  let isAddedToCart = isProductInCart(cardData._id);

  const handleMoveToCart = () => {
    toast.success("Moved to cart");
    // wishListDispatch({type: "REMOVE_FROM_WISHLIST", payload: cardData});
    isAddedToCart
      ? cartDispatch({type: "INCREASE_PRODUCT_COUNT", payload: cardData})
      : cartDispatch({type: "ADD_TO_CART", payload: cardData});
  };

  const handleRemoveWishlist = () => {
    removeFromWishlist(cardData._id, auth.token, userDispatch);
  };
  return (
    <>
      <img className="card-img" src={imgSrc} alt={title} />

      <div className="card-title">
        <h4>{title}</h4>
        <span
          className="material-icons wishlist"
          onClick={handleRemoveWishlist}
        >
          favorite
        </span>
      </div>
      <p className="card-subtitle">{author}</p>
      <div className="card-pricing">
        <p className="card-price fw-bold">₹{newPrice}</p>
        <p className="card-price-cut">₹{oldPrice}</p>
        <p className="card-price-discount">({discount}% off)</p>
      </div>
      <button className="btn btn-icon-text" onClick={handleMoveToCart}>
        <span className="material-icons">shopping_cart</span>
        Move to cart
      </button>
    </>
  );
};

export {WishlistedCard};
