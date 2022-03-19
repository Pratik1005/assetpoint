import {useProduct} from "../../context/product-context";

const Rating = ({data}) => {
  const {title, label, star, actionType} = data;
  const {state, dispatch} = useProduct();
  return (
    <>
      <input
        type="radio"
        name="rating"
        id={title}
        className="input-mg-right"
        checked={state.rating === star}
        onChange={() => dispatch({type: actionType})}
      />
      <label htmlFor={title}>{label}</label>
    </>
  );
};

export {Rating};
