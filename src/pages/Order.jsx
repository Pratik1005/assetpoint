import "../styles/cart.css";
import {useUser} from "../context";
import {NavMenu, Footer} from "../components/allComponents";
import {useParams} from "react-router-dom";
import {useAddress} from "../context/address-context";

const Order = () => {
  const {userState} = useUser();
  const {addressState} = useAddress();
  const params = useParams();

  const deliveryAddress = addressState.addressList.find(
    (address) => address.isDeliveryAddress === true
  );

  const SingleOrderCard = ({orderData}) => {
    const {title, author, newPrice, oldPrice, discount, imgSrc, qty} =
      orderData;
    return (
      <div className="card-horizontal-ctn">
        <img src={imgSrc} alt={title} className="docs-hor-card-img order-img" />
        <div className="pd-xs">
          <div className="card-title">
            <h4>{title}</h4>
          </div>
          <p className="card-subtitle pd-bottom-lg">{author}</p>
          <p className="order-qty">Qty: {qty}</p>
          <div className="card-pricing">
            <p className="card-price fw-bold">₹{newPrice}</p>
            <p className="card-price-cut">₹{oldPrice}</p>
            <p className="card-price-discount">({discount}% off)</p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <NavMenu />
      <section className="app-ctn">
        {userState.order.length > 0 ? (
          <>
            <h2 className="text-center">Order Placed Successfully!</h2>
            <div className="cart-mang-ctn">
              <div className="price-ctn br-sm">
                <h3 className="text-center text-border">Order Details</h3>
                <p>Payment ID: {params.orderId}</p>
                <p>Amount paid: ₹ {userState.amountPaid}</p>

                <div>
                  <p>Delivery address:</p>
                  <p className="order-address">{deliveryAddress.name}</p>
                  <p className="order-address">{deliveryAddress.flatName}</p>
                  <p className="order-address">
                    {deliveryAddress.landmark} {deliveryAddress.area}
                  </p>
                  <p className="order-address">
                    {deliveryAddress.city}, {deliveryAddress.state},
                    {deliveryAddress.pinCode}
                  </p>
                  <p className="order-address">{deliveryAddress.country}</p>
                  <p className="order-address">
                    Contact: {deliveryAddress.contact}
                  </p>
                </div>
              </div>
              <div className="cart-items">
                {userState.order.map((order) => (
                  <SingleOrderCard orderData={order} key={order._id} />
                ))}
              </div>
            </div>
          </>
        ) : (
          <h3 className="text-center pd-md">You have no orders placed!</h3>
        )}
      </section>
      <Footer />
    </>
  );
};

export {Order};
