import {Routes, Route} from "react-router-dom";
import {Home, Login, Signup, ForgotPassword, ProductListing} from "../pages/allPages"

const MenuRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/products" element={<ProductListing />} />
        </Routes>
    );
}

export {MenuRoutes};