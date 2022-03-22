// import {useWishList} from "../context/wishlist-context";
import {useWishList, useCart} from "../context/allContext";

const WishListCard = ({cardData}) => {
  const {imgSrc, title, author, oldPrice, newPrice, discount} = cardData;
  const {wishListDispatch} = useWishList();
  const {cartDispatch} = useCart();
  return (
    <>
      <img className="card-img" src={imgSrc} alt={title} />

      <div className="card-title">
        <h4>{title}</h4>
        <span
          className="material-icons wishlist"
          onClick={() =>
            wishListDispatch({type: "REMOVE_FROM_WISHLIST", payload: cardData})
          }
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
      <button
        className="btn btn-icon-text"
        // onClick={cartDispatch({type: "ADD_TO_CART", payload: cardData})}
      >
        <span className="material-icons">shopping_cart</span>
        Move to cart
      </button>
    </>
  );
};

export {WishListCard};
