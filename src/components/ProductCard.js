import {Link, useNavigate} from "react-router-dom";
import {useAuth, useUser} from "../context";
import {addToWishlist, removeFromWishlist, addToCart} from "../services";
import {isProductInCart, isProductInWishList} from "../utils/allUtils";

const ProductCard = ({productData}) => {
  const {auth} = useAuth();
  const {userDispatch, userState} = useUser();
  const navigate = useNavigate();

  let currentItemInCart = isProductInCart(productData._id, userState.cart);

  const handleAddToCart = () => {
    if (auth.isLoggedIn) {
      addToCart(productData, auth.token, userDispatch);
    } else {
      navigate("/login");
    }
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
