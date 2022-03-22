import "../styles/wish-list.css";
import {NavMenu, Footer, WishListCard} from "../components/allComponents";
import {useWishList} from "../context/wishlist-context";

const WishList = () => {
  const {wishListState} = useWishList();
  return (
    <>
      <NavMenu />
      <section className="app-ctn">
        <h2 className="text-center">Wish List</h2>
        {wishListState.wishListItems.length > 0 ? (
          <div className="wishlist-ctn">
            {wishListState.wishListItems.map((item) => (
              <div className="card-vertical-ctn" key={item.id}>
                <WishListCard cardData={item} />
              </div>
            ))}
          </div>
        ) : (
          <h3 className="text-center">Your wishlist is empty!</h3>
        )}
      </section>
      <Footer />
    </>
  );
};

export {WishList};
