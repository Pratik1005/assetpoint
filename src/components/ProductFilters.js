import {useProduct} from "../context/product-context";
import {Category, Rating} from "./input-filters/allInputFilters";

const ProductFilters = ({filterBtn}) => {
  const {state, dispatch} = useProduct();
  const {price, category, rating, sortBy} = state;
  const categoryData = [
    {
      title: "self-help",
      label: "Self help",
      isChecked: category.selfHelp,
      actionType: "SELF_HELP",
    },
    {
      title: "stock",
      label: "Stock Investing",
      isChecked: category.stockInvesting,
      actionType: "STOCK_INVESTING",
    },
    {
      title: "real-estate",
      label: "Real Estate Investing",
      isChecked: category.realEstate,
      actionType: "REAL_ESTATE",
    },
  ];
  const ratingData = [
    {
      title: "4-star",
      label: "4 Stars & above",
      star: 4,
      actionType: "FOUR_STAR",
    },
    {
      title: "3-star",
      label: "3 Stars & above",
      star: 3,
      actionType: "THREE_STAR",
    },
    {
      title: "2-star",
      label: "2 Stars & above",
      star: 2,
      actionType: "TWO_STAR",
    },
    {
      title: "1-star",
      label: "1 Stars & above",
      star: 1,
      actionType: "ONE_STAR",
    },
  ];
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
          <p>100</p>
          <p>500</p>
          <p>1000</p>
        </div>
        <div className="filter-slider">
          <input
            type="range"
            name="price"
            className="slider"
            min="100"
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
          {categoryData.map((item) => (
            <div className="pd-bottom-md" key={item.title}>
              <Category data={item} />
            </div>
          ))}
        </div>
      </div>
      {/* <!-- rating --> */}
      <div className="filter-rating mg-bottom-lg">
        <h3 className="mg-bottom-md">Rating</h3>
        <div className="category-rating">
          {ratingData.map((item) => (
            <div className="pd-bottom-md" key={item.title}>
              <Rating data={item} />
            </div>
          ))}
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
