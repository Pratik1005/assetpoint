import "../styles/home.css";
import {IMAGES} from "../images/images";
import {NavMenu} from "../components/NavMenu";
import {Footer} from "../components/Footer";
import { FeaturedCategory } from "../components/FeaturedCategory";
const Home = () => {
  return (
    <>
      <NavMenu />
      <section className="container">
        {/* <!-- hero --> */}
        <div className="hero-ctn">
          <div className="hero-txt">
            <h1>
              Discover the best personal finance content through timeless books
              by top authors
            </h1>
            <div className="hero-btn">
              <a
                href="./pages/product-listing/product-listing.html"
                className="btn btn-primary cta-btn"
              >
                Get Started
              </a>
            </div>
          </div>
          <div className="hero-img">
            <img
              className="img-responsive"
              src={IMAGES.heroImg}
              alt="hero-image"
            />
          </div>
        </div>

        {/* <!-- categories --> */}
        <div className="category-ctn">
          <h2 className="text-center mg-lg">Featured Categories</h2>
          <div className="category">
            <FeaturedCategory imgSrc={IMAGES.selfHelp} title={"Self Help"} />
            <FeaturedCategory imgSrc={IMAGES.stock} title={"Stock Investing"} />
            <FeaturedCategory imgSrc={IMAGES.realEstate} title={"Real Estate Invetsing"} />
          </div>
        </div>

        {/* <!-- week book --> */}
        <h2 className="text-center mg-lg">Book of the Week</h2>
        <div className="weekly-book-ctn">
          <div className="weekly-book-img">
            <img
              className="img-responsive"
              src={IMAGES.book1}
              alt="book-of-the-week"
            />
          </div>
          <div className="weekly-book-txt">
            <h2 className="mg-bottom-md">
              The Psychology of Money: Timeless lessons on wealth, greed, and
              happiness
            </h2>
            <h3 className="weekly-book-author">by Morgan Housel</h3>
            <a
              href="./pages/single-product-page/single-product.html"
              className="btn btn-primary cta-btn"
            >
              Read More
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export {Home};
