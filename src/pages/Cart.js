import "../styles/cart.css";
import {useNavigate} from "react-router-dom";
import {NavMenu, Footer, CartProductCard} from "../components/allComponents";
import {useUser} from "../context";
import {USER_ACTIONS} from "../reducer/constant";

const Cart = () => {
  const {userState, userDispatch} = useUser();
  const {cart, totalItems, totalPrice} = userState;
  const navigate = useNavigate();

  let discount = 30 * totalItems;
  let deliveryCharge = totalPrice >= 500 ? 0 : 100;
  let amountPaid = totalPrice + deliveryCharge - discount;

  const handleProceedToBuy = () => {
    userDispatch({type: USER_ACTIONS.ADD_AMOUNT_TO_PAY, payload: amountPaid});
    navigate("/checkout");
  };

  return (
    <>
      <NavMenu />
      <section className="app-ctn">
        <h2 className="text-center">Shopping Cart</h2>
        {totalItems > 0 ? (
          <div className="cart-mang-ctn">
            <div className="cart-items">
              {cart.map((item) => (
                <div className="card-horizontal-ctn" key={item._id}>
                  <CartProductCard cardData={item} />
                </div>
              ))}
            </div>
            <div className="price-ctn br-sm">
              <h3 className="text-center text-border">Price Details</h3>
              <div className="price-row">
                <p>Price ({totalItems} items)</p>
                <p>₹{totalPrice}</p>
              </div>
              <div className="price-row">
                <p>Discount</p>
                <p>- ₹{discount}</p>
              </div>
              <div className="price-row">
                <p>Delivery charges</p>
                <p>₹{deliveryCharge}</p>
              </div>
              <div className="price-row text-border fw-bold">
                <p>Total Price</p>
                <p>₹{amountPaid}</p>
              </div>
              <div className="order-btn">
                <button
                  className="btn btn-primary text-center width-full"
                  onClick={handleProceedToBuy}
                >
                  Proceed to buy
                </button>
              </div>
            </div>
          </div>
        ) : (
          <h3 className="text-center">Your cart is empty!</h3>
        )}
      </section>
      <Footer />
    </>
  );
};

export {Cart};
