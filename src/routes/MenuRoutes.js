import {Routes, Route} from "react-router-dom";
import {
  Home,
  Login,
  Signup,
  ForgotPassword,
  ProductListing,
  Cart,
  WishList,
  SingleProduct,
} from "../pages/allPages";
import Mockman from "mockman-js";

const MenuRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/products" element={<ProductListing />} />
      <Route path="/mock" element={<Mockman />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<WishList />} />
      <Route path="/product/:productId" element={<SingleProduct />} />
    </Routes>
  );
};

export {MenuRoutes};
