const ProductCard = ({productData}) => {
  console.log(productData);
  return (
    <>
      <img
        className="card-img"
        src={productData.imgSrc}
        alt={productData.title}
      />
      {productData.isBestSeller && (
        <span className="card-badge">Best seller</span>
      )}
      <div className="card-title">
        <h4>{productData.title}</h4>
        <span className="material-icons">favorite</span>
      </div>
      <p className="card-subtitle">{productData.author}</p>
      <div className="card-pricing">
        <p className="card-price fw-bold">₹{productData.newPrice}</p>
        <p className="card-price-cut">₹{productData.oldPrice}</p>
        <p className="card-price-discount">({productData.discount}% off)</p>
      </div>
      <a href="#" className="btn btn-icon-text">
        <span className="material-icons">shopping_cart</span>
        Add to cart
      </a>
    </>
  );
};

export {ProductCard};
