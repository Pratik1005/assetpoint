import "../styles/wish-list.css";
import {IMAGES} from "../images/images";
import {NavMenu, Footer, CartProductCard} from "../components/allComponents";

const WishList = () => {
  return (
    <>
      <NavMenu />
      <section>
        <h2 className="text-center">Wish List</h2>
        <div className="wishlist-ctn">
          {/* <!-- boook 1 --> */}
          <div className="card-vertical-ctn">
            <ProductCard productData={item} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export {WishList};
