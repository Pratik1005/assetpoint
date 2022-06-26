import {useUser} from "../context";
import {NavMenu, Footer, Address} from "../components/allComponents";

const Checkout = () => {
  const {userState} = useUser();
  const {totalItems, totalPrice} = userState;
  let discount = 30 * totalItems;
  let deliveryCharge = totalPrice >= 500 ? 0 : 100;
  let couponDiscount = 50;
  return (
    <>
      <NavMenu />
      <section className="app-ctn">
        <h2 className="text-center">Checkout</h2>
        <div className="cart-mang-ctn">
          <div className="address-ctn">
            <Address />
          </div>
          <div className="price-ctn br-sm">
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
              <p>₹{totalPrice + deliveryCharge - discount - couponDiscount}</p>
            </div>
            <div className="order-btn">
              <a href="#" className="btn btn-primary text-center">
                Proceed to payment
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export {Checkout};
