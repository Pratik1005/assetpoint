const FeaturedCategory = ({imgSrc, title}) => {
    return (
        <div className="category-single">
            <img
                className="img-responsive"
                src={imgSrc}
                alt={title}
            />
            <div className="image-overlay">
                <p className="fw-bold">{title}</p>
            </div>
        </div>
    );
};

export {FeaturedCategory};