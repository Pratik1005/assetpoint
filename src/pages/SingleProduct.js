import "../styles/single-product.css";
import axios from "axios";
import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";

const SingleProduct = () => {
  const productId = useParams();
  const [loader, setLoader] = useState(true);
  const [product, setProduct] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/api/products/${productId}`);
        setLoader(false);
        console.log(response.product);
        setProduct(response.product);
      } catch (err) {
        console.error("single product", err);
      }
    })();
  }, []);

  return (
    <>
      {loader && <h2>Loading...</h2>}
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
            <div className="product-rating">
              <span className="material-icons rating-fill">star</span>
              <span className="material-icons rating-fill">star</span>
              <span className="material-icons rating-fill">star</span>
              <span className="material-icons rating-fill">star</span>
              <span className="material-icons rating">star</span>
              <span>( 100 reviews )</span>
            </div>
            <div className="product-price">
              <p className="price fw-bold">₹{product.newPrice}</p>
              <p className="price-cut">₹{product.oldPrice}</p>
              <p className="price-discount">({product.discount}% off)</p>
            </div>
            <p>inclusive of all taxes</p>
            <div className="cta-btns">
              <button className="btn btn-icon-text">
                <span className="material-icons">shopping_cart</span>
                Add to cart
              </button>
              <button className="btn btn-icon-text-outline">
                <span className="material-icons">favorite_border</span>
                Add to wishlist
              </button>
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
    </>
  );
};

export {SingleProduct};