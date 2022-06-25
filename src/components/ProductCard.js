import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {useCart} from "../context/allContext";
import {useAuth, useUser} from "../context";
import {addToWishlist, removeFromWishlist} from "../services/wishlistService";
import {isProductInCart, isProductInWishList} from "../utils/allUtils";

const ProductCard = ({productData}) => {
  const {cartDispatch} = useCart();
  const {auth} = useAuth();
  const {userDispatch} = useUser();
  const navigate = useNavigate();

  let currentItemInCart = isProductInCart(productData._id);

  const handleAddToCart = () => {
    toast.success("Added to cart");
    currentItemInCart
      ? cartDispatch({type: "INCREASE_PRODUCT_COUNT", payload: productData})
      : cartDispatch({type: "ADD_TO_CART", payload: productData});
  };

  let addedToWishList = isProductInWishList(productData._id);

  const handleAddToWishList = () => {
    if (auth.isLoggedIn) {
      if (addedToWishList) {
        removeFromWishlist(productData._id, auth.token, userDispatch);
      } else {
        addToWishlist(productData, auth.token, userDispatch);
      }
    } else {
      navigate("/login");
    }
  };
  return (
    <>
      {productData.isOutOfStock && (
        <div className="card-overlay-ctn">
          <div className="card-overlay-txt">Out of stock</div>
        </div>
      )}
      <Link to={`/product/${productData._id}`}>
        <img
          className="card-img"
          src={productData.imgSrc}
          alt={productData.title}
        />
      </Link>
      {productData.isBestSeller && (
        <span className="card-badge">Best seller</span>
      )}
      <div className="card-title">
        <Link to={`/product/${productData._id}`}>
          <h4>{productData.title}</h4>
        </Link>
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
      {currentItemInCart ? (
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
