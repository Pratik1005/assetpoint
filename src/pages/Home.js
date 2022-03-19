import "../styles/home.css";
import {Link} from "react-router-dom";
import {IMAGES} from "../images/images";
import {NavMenu, Footer, FeaturedCategory} from "../components/allComponents";
import {useProduct} from "../context/product-context";

const Home = () => {
  const {dispatch} = useProduct();
  const featuredCategory = [
    {
      imgLink: IMAGES.selfHelp,
      title: "Self Help",
      category: "FEATURED_SELF_HELP",
    },
    {
      imgLink: IMAGES.stock,
      title: "Stock Investing",
      category: "FEATURED_STOCK_INVESTING",
    },
    {
      imgLink: IMAGES.realEstate,
      title: "Real Estate Invetsing",
      category: "FEATURED_REAL_ESTATE",
    },
  ];
  return (
    <>
      <NavMenu />
      <section className="container">
        <div className="hero-ctn">
          <div className="hero-txt">
            <h1>
              Discover the best personal finance content through timeless books
              by top authors
            </h1>
            <div className="hero-btn">
              <Link
                to="/products"
                className="btn btn-primary cta-btn"
                onClick={() => dispatch({type: "CLEAR"})}
              >
                Get Started
              </Link>
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

        <div className="category-ctn">
          <h2 className="text-center mg-lg">Featured Categories</h2>
          <div className="category">
            {featuredCategory.map((item) => (
              <Link
                to="/products"
                onClick={() => dispatch({type: item.category})}
                key={item.title}
              >
                <FeaturedCategory imgSrc={item.imgLink} title={item.title} />
              </Link>
            ))}
          </div>
        </div>

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
