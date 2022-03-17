import "../styles/product-listing.css";
import {NavMenu} from "../components/NavMenu";
import {Footer} from "../components/Footer";
import {IMAGES} from "../images/images";
import {ProductCard} from "../components/ProductCard";

const ProductListing = () => {
  return (
    <>
      <NavMenu />
      <section className="product-list-ctn">
        {/* <!-- filters --> */}
        <div className="product-filter">
          <div className="filter-head mg-bottom-lg">
            <h3>Filters</h3>
            <span className="filter-clear">Clear</span>
          </div>
          {/* <!-- Range slider --> */}
          <div className="filter-price mg-bottom-lg">
            <h3 className="mg-bottom-md">Price</h3>
            <div className="slider-value">
              <p>200</p>
              <p>400</p>
              <p>600</p>
            </div>
            <div className="filter-slider">
              <input
                type="range"
                name="price"
                className="slider"
                min="0"
                max="100"
                defaultValue="50"
              />
            </div>
          </div>
          {/* <!-- Checkbox --> */}
          <div className="filter-category mg-bottom-lg">
            <h3 className="mg-bottom-md">Category</h3>
            <div className="category-checkbox">
              <div className="pd-bottom-md">
                <input
                  type="checkbox"
                  id="self-help"
                  className="input-mg-right"
                />
                <label htmlFor="self-help">Self help</label>
              </div>
              <div className="pd-bottom-md">
                <input type="checkbox" id="stock" className="input-mg-right" />
                <label htmlFor="stock">Stock Investing</label>
              </div>
              <div className="pd-bottom-md">
                <input
                  type="checkbox"
                  id="real-estate"
                  className="input-mg-right"
                />
                <label htmlFor="real-estate">Real Estate Investing</label>
              </div>
            </div>
          </div>
          {/* <!-- rating --> */}
          <div className="filter-rating mg-bottom-lg">
            <h3 className="mg-bottom-md">Rating</h3>
            <div className="category-rating">
              <div className="pd-bottom-md">
                <input
                  type="radio"
                  name="rating"
                  id="4-star"
                  className="input-mg-right"
                />
                <label htmlFor="4-star">4 Stars & above</label>
              </div>
              <div className="pd-bottom-md">
                <input
                  type="radio"
                  name="rating"
                  id="3-star"
                  className="input-mg-right"
                />
                <label htmlFor="3-star">3 Stars & above</label>
              </div>
              <div className="pd-bottom-md">
                <input
                  type="radio"
                  name="rating"
                  id="2-star"
                  className="input-mg-right"
                />
                <label htmlFor="2-star">2 Stars & above</label>
              </div>
              <div className="pd-bottom-md">
                <input
                  type="radio"
                  name="rating"
                  id="1-star"
                  className="input-mg-right"
                />
                <label htmlFor="1-star">1 Stars & above</label>
              </div>
            </div>
          </div>
          {/* <!-- sortby --> */}
          <div className="filter-sort">
            <h3 className="mg-bottom-md">Sort by</h3>
            <div className="category-sort">
              <div className="pd-bottom-md">
                <input
                  type="radio"
                  name="sort"
                  id="low"
                  className="input-mg-right"
                />
                <label htmlFor="low">Price - Low to High</label>
              </div>
              <div className="pd-bottom-md">
                <input
                  type="radio"
                  name="sort"
                  id="high"
                  className="input-mg-right"
                />
                <label htmlFor="high">Price - High to Low</label>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- products --> */}
        <div className="products-ctn">
          <h3 className="mg-bottom-lg">
            Showing All Products <small>(showing 6 products)</small>
          </h3>
          <div className="product-grid">
            {/* <!-- boook 1 --> */}
            <div className="card-vertical-ctn">
              <img
                className="card-img"
                src={IMAGES.book1}
                alt="product-image"
              />
              <span className="card-badge">Best seller</span>
              <div className="card-title">
                <h4>The Psychology of Money</h4>
                <span className="material-icons wishlist">favorite</span>
              </div>
              <p className="card-subtitle">by Morgan Housel</p>
              <div className="card-pricing">
                <p className="card-price fw-bold">₹240</p>
                <p className="card-price-cut">₹399</p>
                <p className="card-price-discount">save ₹159 (40%)</p>
              </div>
              <a href="#" className="btn btn-icon-text-outline">
                Go to cart
              </a>
            </div>
            {/* <!-- boook 2 --> */}
            <ProductCard
              IMAGES={IMAGES}
              title={"Rich Dad Poor Dad"}
              author={"by Robert Kiyosaki"}
              oldPrice={399}
              newPrice={240}
              saving={159}
              discount={40}
            />
            {/* <!-- boook 3 --> */}
            <div className="card-vertical-ctn">
              <img
                className="card-img"
                src={IMAGES.book3}
                alt="product-image"
              />
              <div className="card-title">
                <h4>Let's Talk Money</h4>
                <span className="material-icons">favorite</span>
              </div>
              <p className="card-subtitle">by Monika Halan</p>
              <div className="card-pricing">
                <p className="card-price fw-bold">₹240</p>
                <p className="card-price-cut">₹399</p>
                <p className="card-price-discount">(40% off)</p>
              </div>
              <a href="#" className="btn btn-icon-text">
                <span className="material-icons">shopping_cart</span>
                Add to cart
              </a>
            </div>
            {/* <!-- boook 4 --> */}
            <div className="card-vertical-ctn">
              <img
                className="card-img"
                src={IMAGES.book4}
                alt="product-image"
              />
              <div className="card-title">
                <h4>The Intelligent Investor</h4>
                <span className="material-icons">favorite</span>
              </div>
              <p className="card-subtitle">by Benjamin Graham</p>
              <div className="card-pricing">
                <p className="card-price fw-bold">₹240</p>
                <p className="card-price-cut">₹399</p>
                <p className="card-price-discount">save ₹159 (40%)</p>
              </div>
              <a href="#" className="btn btn-icon-text">
                <span className="material-icons">shopping_cart</span>
                Add to cart
              </a>
            </div>
            {/* <!-- boook 5 --> */}
            <div className="card-vertical-ctn">
              <img
                className="card-img"
                src={IMAGES.book5}
                alt="product-image"
              />
              <div className="card-title">
                <h4>The Richest Man in Babylon</h4>
                <span className="material-icons">favorite</span>
              </div>
              <p className="card-subtitle">by George Clason</p>
              <div className="card-pricing">
                <p className="card-price fw-bold">₹240</p>
                <p className="card-price-cut">₹399</p>
                <p className="card-price-discount">save ₹159 (40%)</p>
              </div>
              <a href="#" className="btn btn-icon-text">
                <span className="material-icons">shopping_cart</span>
                Add to cart
              </a>
            </div>
            {/* <!-- book 6 --> */}
            <div className="card-vertical-ctn">
              <img
                className="card-img"
                src={IMAGES.book6}
                alt="product-image"
              />
              <div className="card-title">
                <h4>Richer, Wiser, Happier</h4>
                <span className="material-icons">favorite</span>
              </div>
              <p className="card-subtitle">by William Green</p>
              <div className="card-pricing">
                <p className="card-price fw-bold">₹240</p>
                <p className="card-price-cut">₹399</p>
                <p className="card-price-discount">save ₹159 (40%)</p>
              </div>
              <a href="#" className="btn btn-icon-text">
                <span className="material-icons">shopping_cart</span>
                Add to cart
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- footer --> */}
      <Footer />

      {/* <!-- Filter floating btn --> */}
      <button className="btn-float-action filter-cta">
        <span className="material-icons">filter_alt</span>
      </button>
    </>
  );
};

export {ProductListing};
