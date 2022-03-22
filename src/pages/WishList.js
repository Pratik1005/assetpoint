import "../styles/wish-list.css";
import {NavMenu, Footer, WishListCard} from "../components/allComponents";
import {useWishList} from "../context/wishlist-context";

const WishList = () => {
  const {wishListState} = useWishList();
  console.log(wishListState);
  return (
    <>
      <NavMenu />
      <section>
        <h2 className="text-center">Wish List</h2>
        <div className="wishlist-ctn">
          {wishListState.wishListItems.map((item) => (
            <div className="card-vertical-ctn" key={item.id}>
              <WishListCard cardData={item} />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export {WishList};
