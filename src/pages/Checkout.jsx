import "../styles/checkout.css";
import {useUser, useAuth} from "../context";
import {useAddress} from "../context/address-context";
import {NavMenu, Footer, Address} from "../components/allComponents";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {USER_ACTIONS} from "../reducer/constant";
import {clearCart} from "../services";

const Checkout = () => {
  const {userState, userDispatch} = useUser();
  const {auth} = useAuth();
  const {addressState} = useAddress();
  const {totalItems, totalPrice} = userState;
  let discount = 30 * totalItems;
  let deliveryCharge = totalPrice >= 500 ? 0 : 100;
  const navigate = useNavigate();

  const isDeliverySelected = addressState.addressList.some(
    (address) => address.isDeliveryAddress === true
  );

  const loadScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    if (isDeliverySelected) {
      const res = await loadScript();
      if (!res) {
        toast.error("Razorpay SDk failed to load");
      }

      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID,
        amount: (totalPrice + deliveryCharge - discount) * 100,
        currency: "INR",
        name: "Asset Point",
        description: "Thank you for shopping with us",
        image: "",
        handler: async (response) => {
          clearCart(auth.token);
          userDispatch({type: USER_ACTIONS.PROCESS_ORDER});
          userDispatch({type: USER_ACTIONS.CLEAR_CART});
          toast.success("The payment was successfull");
          navigate(`/order/${response.razorpay_payment_id}`);
        },
        prefill: {
          name: "Pratik Devle",
          email: "pratikdevle@gmail.com",
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#6d28d9",
        },
      };

      const razorpayGateway = new window.Razorpay(options);
      razorpayGateway.open();
    } else {
      toast.error("Please select address");
    }
  };

  return (
    <>
      <NavMenu />
      <section className="app-ctn">
        <h2 className="text-center">Checkout</h2>
        {userState.cart.length > 0 ? (
          <div className="cart-mang-ctn">
            <div className="address-ctn pd-md">
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
                <p>- ₹{discount}</p>
              </div>
              <div className="price-row">
                <p>Delivery charges</p>
                <p>₹{deliveryCharge}</p>
              </div>
              <div className="price-row text-border fw-bold">
                <p>Total Price</p>
                <p>₹{totalPrice + deliveryCharge - discount}</p>
              </div>
              <div className="order-btn">
                <button
                  className="btn btn-primary text-center width-full"
                  onClick={handlePayment}
                >
                  Proceed to payment
                </button>
              </div>
            </div>
          </div>
        ) : (
          <h3 className="text-center">No products for checkout</h3>
        )}
      </section>
      <Footer />
    </>
  );
};

export {Checkout};
