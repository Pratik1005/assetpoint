import "../styles/cart.css";
import {NavMenu, Footer} from "../components/allComponents";
import {IMAGES} from "../images/images";
import {CartProductCard} from "../components/allComponents";
const Cart = () => {
  return (
    <>
      <NavMenu />
      <section>
        <h2 className="text-center">Shopping Cart</h2>
        <div className="cart-mang-ctn">
          {/* <!-- All items --> */}
          <div className="cart-items">
            <div className="card-horizontal-ctn">
              <CartProductCard
                cardData={{
                  imgSrc: "https://assetpoint.netlify.app/images/book-5.png",
                  title: "The Richest Man in Babylon",
                  author: "by George Clason",
                  oldPrice: 150,
                  newPrice: 99,
                  discount: 34,
                  rating: 4,
                  isBestSeller: false,
                  isOutOfStock: true,
                  category: "selfHelp",
                }}
              />
            </div>
            <div className="card-horizontal-ctn">
              <img
                src={IMAGES.book5}
                alt="product-image"
                className="docs-hor-card-img"
              />
              <div className="horizontal-txt">
                <div className="card-title">
                  <h4>The Psychology of Money</h4>
                  <span className="material-icons">favorite</span>
                </div>
                <p className="card-subtitle">by Morgan Housel</p>
                <div className="card-pricing">
                  <p className="card-price fw-bold">₹400</p>
                  <p className="card-price-cut">₹499</p>
                  <p className="card-price-discount">save ₹99 (25%)</p>
                </div>
                <div className="quantity-ctn">
                  <span className="material-icons br-full">add</span>
                  <span className="quantity">1</span>
                  <span className="material-icons br-full">remove</span>
                </div>
                <a href="#" className="btn btn-icon-text-outline">
                  Remove from Cart
                </a>
              </div>
            </div>
            <div className="card-horizontal-ctn">
              <img
                src={IMAGES.book5}
                alt="product-image"
                className="docs-hor-card-img"
              />
              <div className="horizontal-txt">
                <div className="card-title">
                  <h4>The Intelligent Investor</h4>
                  <span className="material-icons">favorite</span>
                </div>
                <p className="card-subtitle">by Benjamin Graham</p>
                <div className="card-pricing">
                  <p className="card-price fw-bold">₹400</p>
                  <p className="card-price-cut">₹499</p>
                  <p className="card-price-discount">save ₹99 (25%)</p>
                </div>
                <div className="quantity-ctn">
                  <span className="material-icons br-full">add</span>
                  <span className="quantity">1</span>
                  <span className="material-icons br-full">remove</span>
                </div>
                <a href="#" className="btn btn-icon-text-outline">
                  Remove from Cart
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Pricing --> */}
          <div className="price-ctn br-sm">
            <p className="coupon">
              <span className="material-icons">local_offer</span> Apply Coupon
            </p>
            <h3 className="text-center text-border">Price Details</h3>
            <div className="price-row">
              <p>Price (3 items)</p>
              <p>₹1200</p>
            </div>
            <div className="price-row">
              <p>Discount</p>
              <p>₹100</p>
            </div>
            <div className="price-row">
              <p>Delivery charges</p>
              <p>₹100</p>
            </div>
            <div className="price-row">
              <p>Coupon discount</p>
              <p>₹50</p>
            </div>
            <div className="price-row text-border fw-bold">
              <p>Total Price</p>
              <p>₹1150</p>
            </div>
            <div className="order-btn">
              <a href="#" className="btn btn-primary text-center">
                Place Order
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export {Cart};
