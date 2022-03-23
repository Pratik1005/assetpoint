import {Link} from "react-router-dom";
import {useCart, useWishList} from "../context/allContext";

const NavMenu = () => {
  const {wishListState} = useWishList();
  const {cartState} = useCart();
  return (
    <header>
      <div className="header-container">
        <nav className="main-nav">
          <Link to="/">
            <h1 className="logo">AssetPoint</h1>
          </Link>
          <div className="search-bar br-sm">
            <span className="material-icons">search</span>
            <input type="text" placeholder="search" />
          </div>
          <ul className="right-nav">
            <li>
              <Link to="/login" className="btn btn-primary">
                Login
              </Link>
            </li>
            <li>
              <div className="badge-ctn mg-sm">
                <Link to="/wishlist">
                  <span className="material-icons">favorite_border</span>
                  <span className="badge-icon br-full badge-count fw-bold">
                    {wishListState.wishListItems.length}
                  </span>
                </Link>
              </div>
            </li>
            <li>
              <div className="badge-ctn mg-sm">
                <Link to="/cart">
                  <span className="material-icons">shopping_cart</span>
                  <span className="badge-icon br-full badge-count badge-count fw-bold">
                    {cartState.totalItems}
                  </span>
                </Link>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export {NavMenu};
