import axios from "axios";
import {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useCart} from "../context/allContext";
import {useUser} from "../context";

const NavMenu = () => {
  const navigate = useNavigate();
  const {userState} = useUser();
  const {cartState} = useCart();
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/products");
        setProducts(response.data.products);
      } catch (err) {
        console.error("search bar", err);
      }
    })();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setFilterProducts(
      products.filter(
        (item) =>
          item.title.toLowerCase().includes(search.toLowerCase()) &&
          !item.isOutOfStock
      )
    );
  };
  return (
    <header>
      <div className="header-container">
        <nav className="main-nav">
          <Link to="/">
            <h1 className="logo">AssetPoint</h1>
          </Link>
          <div className="search-bar br-sm">
            <span className="material-icons">search</span>
            <input
              type="text"
              placeholder="search"
              value={search}
              onChange={(e) => handleSearch(e)}
            />
            {search.length > 0 && (
              <div className="search-result-ctn br-sm pd-sm">
                {filterProducts.length > 0 ? (
                  filterProducts.map((item) => (
                    <Link to={`/product/${item._id}`} key={item._id}>
                      <div className="search-item pd-sm">
                        <img src={item.imgSrc} alt={item.title} />
                        <div className="product-detail">
                          <h4 className="pd-bottom-lg">{item.title}</h4>
                          <p>{item.author}</p>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p>No products found</p>
                )}
              </div>
            )}
          </div>
          <ul className="right-nav">
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
                    {userState.wishlist.length}
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
