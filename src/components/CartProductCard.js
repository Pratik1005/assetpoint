const CartProductCard = ({cardData}) => {
  const {imgSrc, title, author, oldPrice, newPrice, discount, rating} =
    cardData;
  return (
    <>
      <img src={imgSrc} alt="product-image" className="docs-hor-card-img" />
      <div className="horizontal-txt">
        <div className="card-title">
          <h4>{title}</h4>
          <span className="material-icons">favorite</span>
        </div>
        <p className="card-subtitle">{author}</p>
        <div className="badge-rating br-sm">
          <span>{rating}</span>
          <span className="material-icons rating-fill">star</span>
        </div>
        <div className="card-pricing">
          <p className="card-price fw-bold">₹{newPrice}</p>
          <p className="card-price-cut">₹{oldPrice}</p>
          <p className="card-price-discount">({discount}% off)</p>
        </div>
        <div className="quantity-ctn">
          <span className="material-icons br-full">add</span>
          <span className="quantity">1</span>
          <span className="material-icons br-full">remove</span>
        </div>
        <button className="btn btn-icon-text-outline">Remove from Cart</button>
      </div>
    </>
  );
};

export {CartProductCard};
