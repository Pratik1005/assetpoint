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
  PageNotFound,
  UserProfile,
} from "../pages/allPages";
import {RequiresAuth} from "../components/RequiresAuth";

const MenuRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductListing />} />
      <Route path="/product/:productId" element={<SingleProduct />} />
      <Route
        path="/cart"
        element={
          <RequiresAuth>
            <Cart />
          </RequiresAuth>
        }
      />
      <Route
        path="/wishlist"
        element={
          <RequiresAuth>
            <WishList />
          </RequiresAuth>
        }
      />

      <Route
        path="/account"
        element={
          <RequiresAuth>
            <UserProfile />
          </RequiresAuth>
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export {MenuRoutes};
