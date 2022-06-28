import {useAuth, useUser} from "../context";
import {isProductInCart} from "../utils/isProductInCart";
import {removeFromWishlist} from "../services/wishlistService";
import {addToCart} from "../services";
import {Link} from "react-router-dom";

const WishlistedCard = ({cardData}) => {
  const {imgSrc, title, author, oldPrice, newPrice, discount} = cardData;
  const {auth} = useAuth();
  const {userState, userDispatch} = useUser();

  let isAddedToCart = isProductInCart(cardData._id, userState.cart);

  const handleMoveToCart = () => {
    addToCart(cardData, auth.token, userDispatch);
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
      {isAddedToCart ? (
        <Link to="/cart" href="#" className="btn btn-icon-text-outline">
          Go to cart
        </Link>
      ) : (
        <button className="btn btn-icon-text" onClick={handleMoveToCart}>
          <span className="material-icons">shopping_cart</span>
          Move to cart
        </button>
      )}
    </>
  );
};

export {WishlistedCard};
