import {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {useUser} from "../context";
import {USER_ACTIONS} from "../reducer/constant";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const {userDispatch} = useUser();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/products");
        setProducts(response.data.products);
        userDispatch({type: USER_ACTIONS.HIDE_MOBILE_MENU});
      } catch (err) {
        console.error("search bar", err);
      }
    })();
  }, []);

  const handleSearch = (searchQuery) => {
    setSearch(searchQuery);
    setFilterProducts(
      products.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !item.isOutOfStock
      )
    );
  };
  return (
    <div className="search-bar br-sm">
      <span className="material-icons">search</span>
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
      />
      {search.length > 0 && (
        <div className="search-result-ctn br-sm pd-sm">
          {filterProducts.length > 0 ? (
            filterProducts.map((item) => (
              <Link to={`/product/${item._id}`} key={item._id}>
                <div className="search-item pd-sm">
                  <img src={item.imgSrc} alt={item.title} />
                  <div className="product-detail">
                    <h4 className="pd-bottom-lg product-title">{item.title}</h4>
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
  );
};

export {SearchBar};
