import {useProduct} from "../../context/product-context";

const Category = ({data}) => {
  const {title, isChecked, actionType, label} = data;
  const {dispatch} = useProduct();
  return (
    <>
      <input
        type="checkbox"
        id={title}
        className="input-mg-right"
        checked={isChecked}
        onChange={() => dispatch({type: actionType})}
      />
      <label htmlFor={title}>{label}</label>
    </>
  );
};

export {Category};
