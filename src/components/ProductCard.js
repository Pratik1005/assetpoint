const ProductCard = ({
  IMAGES,
  isBestSeller,
  title,
  author,
  oldPrice,
  newPrice,
  saving,
  discount,
}) => {
  return (
    <div className="card-vertical-ctn">
      <img className="card-img" src={IMAGES.book2} alt="product-image" />
      {isBestSeller && <span className="card-badge">Best seller</span>}
      <div className="card-title">
        <h4>{title}</h4>
        <span className="material-icons wishlist">favorite</span>
      </div>
      <p className="card-subtitle">{author}</p>
      <div className="card-pricing">
        <p className="card-price fw-bold">₹{newPrice}</p>
        <p className="card-price-cut">₹{oldPrice}</p>
        <p className="card-price-discount">
          save ₹{saving} ({discount}%)
        </p>
      </div>
      <a href="#" className="btn btn-icon-text">
        <span className="material-icons">shopping_cart</span>
        Add to cart
      </a>
    </div>
  );
};

export {ProductCard};
