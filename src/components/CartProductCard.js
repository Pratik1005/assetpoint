import {toast} from "react-toastify";
import {useCart, useWishList} from "../context/allContext";
import {isProductInWishList} from "../utils/isProductInWishList";

const CartProductCard = ({cardData}) => {
  const {imgSrc, title, author, oldPrice, newPrice, discount, count} = cardData;
  const {cartDispatch} = useCart();
  const {wishListDispatch} = useWishList();

  let isAddedToWishList = isProductInWishList(cardData._id);

  const handleAddToWishList = () => {
    if (!isAddedToWishList) {
      toast.success("Moved to wishlist");
      wishListDispatch({type: "ADD_TO_WISHLIST", payload: cardData});
      cartDispatch({type: "REMOVE_FROM_CART", payload: cardData});
    }
  };

  const handleProductIncrement = () => {
    toast.success("Incremented product quantity");
    cartDispatch({type: "INCREASE_PRODUCT_COUNT", payload: cardData});
  };

  const handleProductDecrement = () => {
    if (count >= 2) {
      toast.success("Decremented product quantity");
      cartDispatch({type: "DECREASE_PRODUCT_COUNT", payload: cardData});
    }
  };

  const handleRemoveFromCart = () => {
    toast.success("Removed from cart");
    cartDispatch({type: "REMOVE_FROM_CART", payload: cardData});
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
            onClick={handleAddToWishList}
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
          <span className="quantity">{count}</span>
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
