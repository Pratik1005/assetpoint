const FeaturedCategory = ({imgSrc, title}) => {
    return (
        <div className="category-single">
            <img
                className="img-responsive"
                src={imgSrc}
                alt="category-self-help"
            />
            <div className="image-overlay">
                <p className="fw-bold">{title}</p>
            </div>
        </div>
    );
};

export {FeaturedCategory};