import "../styles/wish-list.css";
import {NavMenu, Footer, WishlistedCard} from "../components/allComponents";
import {useUser} from "../context";

const WishList = () => {
  const {userState} = useUser();
  return (
    <>
      <NavMenu />
      <section className="app-ctn">
        <h2 className="text-center">Wish List</h2>
        {userState.wishlist.length > 0 ? (
          <div className="wishlist-ctn">
            {userState.wishlist.map((item) => (
              <div className="card-vertical-ctn" key={item.id}>
                <WishlistedCard cardData={item} />
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
