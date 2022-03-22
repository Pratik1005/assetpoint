import {useState} from "react";
import {useCart, useWishList} from "../context/allContext";
import {Link} from "react-router-dom";

const ProductCard = ({productData}) => {
  const {wishListState, wishListDispatch} = useWishList();
  const [addedToCart, setAddedToCart] = useState(false);
  // const [addedToWishList, setAddedToWishList] = useState(false);
  const {cartState, cartDispatch} = useCart();

  let addedToWishList = false;

  const handleAddToCart = () => {
    setAddedToCart((prev) => !prev);
    let currentItemInCart = false;
    const isProductInCart = () => {
      cartState.cartItems.forEach((item) =>
        item._id === productData._id ? (currentItemInCart = true) : null
      );
    };
    isProductInCart();
    currentItemInCart
      ? cartDispatch({type: "INCREASE_PRODUCT_COUNT", payload: productData})
      : cartDispatch({type: "ADD_TO_CART", payload: productData});
  };

  const isProductInWishList = () => {
    wishListState.wishListItems.forEach((item) =>
      item._id === productData._id ? (addedToWishList = true) : null
    );
  };
  isProductInWishList();

  const handleAddToWishList = () => {
    addedToWishList
      ? wishListDispatch({type: "REMOVE_FROM_WISHLIST", payload: productData})
      : wishListDispatch({type: "ADD_TO_WISHLIST", payload: productData});
    addedToWishList = !addedToWishList;
  };
  return (
    <>
      {productData.isOutOfStock && (
        <div className="card-overlay-ctn">
          <div className="card-overlay-txt">Out of stock</div>
        </div>
      )}
      <img
        className="card-img"
        src={productData.imgSrc}
        alt={productData.title}
      />
      {productData.isBestSeller && (
        <span className="card-badge">Best seller</span>
      )}
      <div className="card-title">
        <h4>{productData.title}</h4>
        <span
          className={
            addedToWishList ? "material-icons wishlist" : "material-icons"
          }
          onClick={handleAddToWishList}
        >
          favorite
        </span>
      </div>
      <p className="card-subtitle">{productData.author}</p>
      <div className="badge-rating br-sm">
        <span>{productData.rating}</span>
        <span className="material-icons rating-fill">star</span>
      </div>
      <div className="card-pricing">
        <p className="card-price fw-bold">₹{productData.newPrice}</p>
        <p className="card-price-cut">₹{productData.oldPrice}</p>
        <p className="card-price-discount">({productData.discount}% off)</p>
      </div>
      {addedToCart ? (
        <Link to="/cart" href="#" className="btn btn-icon-text-outline">
          Go to cart
        </Link>
      ) : (
        <button className="btn btn-icon-text" onClick={handleAddToCart}>
          <span className="material-icons">shopping_cart</span>
          Add to cart
        </button>
      )}
    </>
  );
};

export {ProductCard};
