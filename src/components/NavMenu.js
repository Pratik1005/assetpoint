import {Link} from "react-router-dom";
import {useUser, useAuth} from "../context";
import {USER_ACTIONS} from "../reducer/constant";
import {MobileMenu} from "./MobileMenu";
import {SearchBar} from "./SearchBar";

const NavMenu = () => {
  const {userState, userDispatch} = useUser();
  const {auth} = useAuth();

  const handleToggleMenu = () => {
    userDispatch({type: USER_ACTIONS.TOGGLE_MOBILE_MENU});
  };
  return (
    <>
      <header>
        <div className="header-container">
          <div className="mobile-header">
            <span
              className="material-icons mobile-menu-icon"
              onClick={handleToggleMenu}
            >
              menu
            </span>
            <Link to="/">
              <h1 className="mobile-logo">AssetPoint</h1>
            </Link>
          </div>
          <nav className="main-nav">
            <Link to="/">
              <h1 className="logo">AssetPoint</h1>
            </Link>
            <SearchBar />
            <ul className="right-nav">
              <li>
                <Link to="/products" className="link-primary fw-bold shop">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/account" className="link-primary">
                  <span className="material-icons profile">account_circle</span>
                </Link>
              </li>
              <li>
                <div className="badge-ctn mg-sm">
                  <Link to="/wishlist">
                    <span className="material-icons">favorite_border</span>
                    <span className="badge-icon br-full badge-count fw-bold">
                      {auth.isLoggedIn ? userState.wishlist.length : "0"}
                    </span>
                  </Link>
                </div>
              </li>
              <li>
                <div className="badge-ctn mg-sm">
                  <Link to="/cart">
                    <span className="material-icons">shopping_cart</span>
                    <span className="badge-icon br-full badge-count badge-count fw-bold">
                      {auth.isLoggedIn ? userState.cart.length : "0"}
                    </span>
                  </Link>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <MobileMenu />
    </>
  );
};

export {NavMenu};
