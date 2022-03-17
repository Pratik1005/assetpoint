import "../styles/product-listing.css";
import {NavMenu} from "../components/NavMenu";
import {Footer} from "../components/Footer";
import {IMAGES} from "../images/images";
import {ProductCard} from "../components/ProductCard";
import {ProductFilters} from "../components/ProductFilters";
import axios from "axios";
import {useEffect, useState} from "react";

const ProductListing = () => {
  const [loader, setLoader] = useState(true);
  const [products, setProducts] = useState([]);

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
  return (
    <>
      <NavMenu />

      <section className="product-list-ctn">
        {/* <!-- filters --> */}
        <ProductFilters />
        {/* <!-- products --> */}
        <div className="products-ctn">
          <h3 className="mg-bottom-lg">
            Showing All Products{" "}
            <small>(showing {products.length} products)</small>
          </h3>
          <div className="product-grid">
            {loader && <h3>Loading...</h3>}
            {products &&
              products.map((item) => (
                <div className="card-vertical-ctn" key={item.id}>
                  <ProductCard productData={item} />
                </div>
              ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* <!-- Filter floating btn --> */}
      <button className="btn-float-action filter-cta">
        <span className="material-icons">filter_alt</span>
      </button>
    </>
  );
};

export {ProductListing};
