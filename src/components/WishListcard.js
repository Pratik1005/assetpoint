const WishListCard = ({cardData}) => {
  const {imgSrc, title, author, oldPrice, newPrice, discount, rating} =
    cardData;

  return (
    <>
      <img className="card-img" src={imgSrc} alt={title} />

      <div className="card-title">
        <h4>{title}</h4>
        <span className="material-icons wishlist">favorite</span>
      </div>
      <p className="card-subtitle">{author}</p>
      <div className="card-pricing">
        <p className="card-price fw-bold">₹{newPrice}</p>
        <p className="card-price-cut">₹{oldPrice}</p>
        <p className="card-price-discount">({discount}% off)</p>
      </div>
      <a href="#" className="btn btn-icon-text">
        <span className="material-icons">shopping_cart</span>
        Move to cart
      </a>
    </>
  );
};

export {WishListCard};
