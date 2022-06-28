import "../styles/single-product.css";
import axios from "axios";
import {useParams, Link, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import {NavMenu, Footer, Loader} from "../components/allComponents";
import {useUser, useAuth} from "../context";
import {isProductInCart, isProductInWishList} from "../utils/allUtils";
import {addToCart, addToWishlist, removeFromWishlist} from "../services";

const SingleProduct = () => {
  const params = useParams();
  const [loader, setLoader] = useState(true);
  const [product, setProduct] = useState({});
  const {userState, userDispatch} = useUser();
  const {auth} = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/api/products/${params.productId}`);
        setLoader(false);
        setProduct(response.data.product);
      } catch (err) {
        console.error("single product", err);
      }
    })();
  }, [params.productId]);

  let currentItemInCart =
    product && isProductInCart(product._id, userState.cart);

  const handleAddToCart = () => {
    if (auth.isLoggedIn) {
      addToCart(product, auth.token, userDispatch);
    } else {
      navigate("/login");
    }
  };

  let addedToWishList = product && isProductInWishList(product._id);

  const handleAddToWishList = () => {
    if (auth.isLoggedIn) {
      addToWishlist(product, auth.token, userDispatch);
    } else {
      navigate("/login");
    }
  };

  const handleRemoveFromWishList = () => {
    removeFromWishlist(product._id, auth.token, userDispatch);
  };

  return product ? (
    <>
      <NavMenu />
      {loader && <Loader />}
      <section className="single-product-ctn">
        <div className="product-card">
          <img
            src={product.imgSrc}
            alt={product.title}
            className="product-img"
          />
          <div className="product-info">
            <div className="product-title">
              <h2>{product.title}</h2>
            </div>
            <p className="author">{product.author}</p>
            <div className="badge-rating br-sm">
              <span>{product.rating}</span>
              <span className="material-icons rating-fill">star</span>
            </div>
            <div className="product-price">
              <p className="price fw-bold">₹{product.newPrice}</p>
              <p className="price-cut">₹{product.oldPrice}</p>
              <p className="price-discount">({product.discount}% off)</p>
            </div>
            <p>inclusive of all taxes</p>
            <div className="cta-btns">
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

              {addedToWishList ? (
                <button
                  className="btn btn-icon-text-outline"
                  onClick={handleRemoveFromWishList}
                >
                  <span className="material-icons wishlist">favorite</span>
                  Added to wishlist
                </button>
              ) : (
                <button
                  className="btn btn-icon-text-outline"
                  onClick={handleAddToWishList}
                >
                  <span className="material-icons">favorite_border</span>
                  Add to wishlist
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="product-data-ctn">
          <div className="product-des">
            <h3 className="pd-bottom-lg">Description</h3>
            <p>
              Timeless lessons on wealth, greed, and happiness doing well with
              money isn?t necessarily about what you know. It?s about how you
              behave. And behavior is hard to teach, even to really smart
              people. How to manage money, invest it, and make business
              decisions are typically considered to involve a lot of
              mathematical calculations, where data and formulae tell us exactly
              what to do. But in the real world, people don?t make financial
              decisions on a spreadsheet. They make them at the dinner table, or
              in a meeting room, where personal history, your unique view of the
              world, ego, pride, marketing, and odd incentives are scrambled
              together. In the psychology of money, the author shares 19 short
              stories exploring the strange ways people think about money and
              teaches you how to make better sense of one of life?s most
              important matters.
            </p>
          </div>
          <div className="product-data">
            <h3 className="pd-bottom-lg">Details</h3>
            <p className="pd-bottom-md">
              <span className="fw-bold">Publisher:</span> Jaico Publishing House{" "}
            </p>
            <p className="pd-bottom-md">
              <span className="fw-bold">Language:</span> English
            </p>
            <p className="pd-bottom-md">
              <span className="fw-bold">Format: </span>Paperback, 252 pages
            </p>
            <p className="pd-bottom-md">
              <span className="fw-bold">Item Weight:</span> 220 g
            </p>
            <p className="pd-bottom-md">
              <span className="fw-bold">Dimensions:</span> 20 x 14 x 4 cm
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  ) : (
    <></>
  );
};

export {SingleProduct};
