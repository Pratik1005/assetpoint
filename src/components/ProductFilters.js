import {useProduct} from "../context/product-context";

const ProductFilters = ({filterBtn}) => {
  const {state, dispatch} = useProduct();
  const {price, category, rating, sortBy} = state;
  return (
    <div className={filterBtn ? "product-filter show" : "product-filter"}>
      <div className="filter-head mg-bottom-lg">
        <h3>Filters</h3>
        <span
          className="filter-clear"
          onClick={() => dispatch({type: "CLEAR"})}
        >
          Clear
        </span>
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
            min="200"
            max="1000"
            value={price}
            onChange={(e) =>
              dispatch({type: "SORT_BY_PRICE", payload: e.target.value})
            }
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
              checked={category.selfHelp}
              onChange={() => dispatch({type: "SELF_HELP"})}
            />
            <label htmlFor="self-help">Self help</label>
          </div>
          <div className="pd-bottom-md">
            <input
              type="checkbox"
              id="stock"
              className="input-mg-right"
              checked={category.stockInvesting}
              onChange={() => dispatch({type: "STOCK_INVESTING"})}
            />
            <label htmlFor="stock">Stock Investing</label>
          </div>
          <div className="pd-bottom-md">
            <input
              type="checkbox"
              id="real-estate"
              className="input-mg-right"
              checked={category.realEstate}
              onChange={() => dispatch({type: "REAL_ESTATE"})}
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
              checked={rating === 4}
              onChange={() => dispatch({type: "FOUR_STAR"})}
            />
            <label htmlFor="4-star">4 Stars & above</label>
          </div>
          <div className="pd-bottom-md">
            <input
              type="radio"
              name="rating"
              id="3-star"
              className="input-mg-right"
              checked={rating === 3}
              onChange={() => dispatch({type: "THREE_STAR"})}
            />
            <label htmlFor="3-star">3 Stars & above</label>
          </div>
          <div className="pd-bottom-md">
            <input
              type="radio"
              name="rating"
              id="2-star"
              className="input-mg-right"
              checked={rating === 2}
              onChange={() => dispatch({type: "TWO_STAR"})}
            />
            <label htmlFor="2-star">2 Stars & above</label>
          </div>
          <div className="pd-bottom-md">
            <input
              type="radio"
              name="rating"
              id="1-star"
              className="input-mg-right"
              checked={rating === 1}
              onChange={() => dispatch({type: "ONE_STAR"})}
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
              checked={sortBy === "LOW_TO_HIGH"}
              onChange={() => dispatch({type: "LOW_TO_HIGH"})}
            />
            <label htmlFor="low">Price - Low to High</label>
          </div>
          <div className="pd-bottom-md">
            <input
              type="radio"
              name="sort"
              id="high"
              className="input-mg-right"
              checked={sortBy === "HIGH_TO_LOW"}
              onChange={() => dispatch({type: "HIGH_TO_LOW"})}
            />
            <label htmlFor="high">Price - High to Low</label>
          </div>
        </div>
      </div>
    </div>
  );
};
export {ProductFilters};
