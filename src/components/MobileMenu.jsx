import "../styles/mobile-menu.css";
import {Link} from "react-router-dom";
import {useUser} from "../context";
import {USER_ACTIONS} from "../reducer/constant";

const MobileMenu = () => {
  const {userState, userDispatch} = useUser();

  const handleToggleMenu = () => {
    userDispatch({type: USER_ACTIONS.TOGGLE_MOBILE_MENU});
  };
  return (
    <aside
      className={`mobile-menu ${
        userState.isMenuVisible ? "show-menu" : ""
      } pd-sm`}
    >
      <div className="mobile-menu-head">
        <Link to="/">
          <h1 className="mobile-logo">AssetPoint</h1>
        </Link>
        <span
          className="material-icons mobile-menu-close"
          onClick={handleToggleMenu}
        >
          close
        </span>
      </div>
      <Link to="/products" className="link-primary fw-bold shop pd-sm">
        Shop
      </Link>
      <Link to="/wishlist" className="link-primary fw-bold pd-sm">
        Wishlist
      </Link>
      <Link to="/cart" className="link-primary fw-bold pd-sm">
        Cart
      </Link>
      <Link to="/account" className="link-primary fw-bold pd-sm">
        Profile
      </Link>
    </aside>
  );
};

export {MobileMenu};
