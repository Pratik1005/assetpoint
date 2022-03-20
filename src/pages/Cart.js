import "../styles/cart.css";
import {NavMenu, Footer} from "../components/allComponents";
import {useCart} from "../context/allContext";
import {CartProductCard} from "../components/allComponents";

const Cart = () => {
  const {cartState} = useCart();
  const {cartItems, totalItems, totalPrice} = cartState;
  let discount = 30 * totalItems;
  let deliveryCharge = totalPrice >= 500 ? 0 : 100;
  let couponDiscount = 50;

  return (
    <>
      <NavMenu />
      <section>
        <h2 className="text-center">Shopping Cart</h2>
        {totalItems > 0 ? (
          <div className="cart-mang-ctn">
            <div className="cart-items">
              {cartItems.map((item) => (
                <div className="card-horizontal-ctn" key={item.title}>
                  <CartProductCard cardData={item} />
                </div>
              ))}
            </div>
            <div className="price-ctn br-sm">
              <p className="coupon">
                <span className="material-icons">local_offer</span> Apply Coupon
              </p>
              <h3 className="text-center text-border">Price Details</h3>
              <div className="price-row">
                <p>Price ({totalItems} items)</p>
                <p>₹{totalPrice}</p>
              </div>
              <div className="price-row">
                <p>Discount</p>
                <p>₹{discount}</p>
              </div>
              <div className="price-row">
                <p>Delivery charges</p>
                <p>₹{deliveryCharge}</p>
              </div>
              <div className="price-row">
                <p>Coupon discount</p>
                <p>₹{couponDiscount}</p>
              </div>
              <div className="price-row text-border fw-bold">
                <p>Total Price</p>
                <p>
                  ₹{totalPrice + deliveryCharge - discount - couponDiscount}
                </p>
              </div>
              <div className="order-btn">
                <a href="#" className="btn btn-primary text-center">
                  Place Order
                </a>
              </div>
            </div>
          </div>
        ) : (
          <h3>Your cart is empty</h3>
        )}
      </section>
      <Footer />
    </>
  );
};

export {Cart};
