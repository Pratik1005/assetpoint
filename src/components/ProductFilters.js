const ProductFilters = () => {
  return (
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
            <input type="checkbox" id="self-help" className="input-mg-right" />
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
  );
};
export {ProductFilters};
