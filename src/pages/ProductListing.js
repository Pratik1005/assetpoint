import "../styles/product-listing.css";
import {
  NavMenu,
  Footer,
  ProductCard,
  ProductFilters,
  Loader,
} from "../components/allComponents";
import axios from "axios";
import {useEffect, useState} from "react";
import {useProduct} from "../context/product-context";
import {
  getProductsByCategory,
  getProductsByPrice,
  getProductsByRating,
  getProductsBySort,
} from "../utils/allUtils";

const ProductListing = () => {
  const [loader, setLoader] = useState(true);
  const [products, setProducts] = useState([]);
  const [filterBtn, setFilterBtn] = useState(false);
  const {state} = useProduct();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/products");
        setLoader(false);
        setProducts(response.data.products);
      } catch (err) {
        console.log("Products Listing", err);
      }
    })();
  }, []);

  const productsByPrice = getProductsByPrice(products, state.price);
  const productsByCategory = getProductsByCategory(
    productsByPrice,
    state.category
  );

  const productsByRating = getProductsByRating(
    productsByCategory,
    state.rating
  );
  const finalProducts = getProductsBySort(productsByRating, state.sortBy);

  return (
    <>
      <NavMenu />

      <section className="product-list-ctn">
        {/* <!-- filters --> */}
        <ProductFilters filterBtn={filterBtn} />
        {/* <!-- products --> */}
        <div className="products-ctn">
          <h3 className="mg-bottom-lg">
            Showing All Products{" "}
            <small>(showing {finalProducts.length} products)</small>
          </h3>
          <div className="product-grid">
            {loader && <Loader />}
            {!loader && finalProducts.length === 0 && (
              <h3>No products to show</h3>
            )}
            {finalProducts.map((item) => (
              <div className="card-vertical-ctn" key={item.id}>
                <ProductCard productData={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* <!-- Filter floating btn --> */}
      <button
        className="btn-float-action filter-cta"
        onClick={() => setFilterBtn((prev) => !prev)}
      >
        <span className="material-icons">filter_alt</span>
      </button>
    </>
  );
};

export {ProductListing};
