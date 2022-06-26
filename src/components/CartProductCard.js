import {useAuth, useUser} from "../context";
import {isProductInWishList} from "../utils/isProductInWishList";
import {
  addToWishlist,
  removeFromWishlist,
  removeFromCart,
  incrementProduct,
  decrementProduct,
} from "../services";

const CartProductCard = ({cardData}) => {
  const {imgSrc, title, author, oldPrice, newPrice, discount, qty} = cardData;
  const {auth} = useAuth();
  const {userDispatch} = useUser();

  let isAddedToWishList = isProductInWishList(cardData._id);

  const handleWishlist = () => {
    if (isAddedToWishList) {
      removeFromWishlist(cardData._id, auth.token, userDispatch);
    } else {
      addToWishlist(cardData, auth.token, userDispatch);
    }
  };

  const handleProductIncrement = () => {
    incrementProduct(cardData, auth.token, userDispatch);
  };

  const handleProductDecrement = () => {
    if (qty >= 2) {
      decrementProduct(cardData, auth.token, userDispatch);
    }
  };

  const handleRemoveFromCart = () => {
    removeFromCart(cardData, auth.token, userDispatch);
  };
  return (
    <>
      <img src={imgSrc} alt="product-image" className="docs-hor-card-img" />
      <div className="horizontal-txt pd-xs">
        <div className="card-title">
          <h4>{title}</h4>
          <span
            className={
              isAddedToWishList ? "material-icons wishlist" : "material-icons"
            }
            onClick={handleWishlist}
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
        <div className="quantity-ctn">
          <span
            className="material-icons br-full"
            onClick={handleProductIncrement}
          >
            add
          </span>
          <span className="quantity">{qty}</span>
          <span
            className="material-icons br-full"
            onClick={handleProductDecrement}
          >
            remove
          </span>
        </div>
        <button
          className="btn btn-icon-text-outline"
          onClick={handleRemoveFromCart}
        >
          Remove from Cart
        </button>
      </div>
    </>
  );
};

export {CartProductCard};
