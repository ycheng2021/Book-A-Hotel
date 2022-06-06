import "./featured.css";

const Featured = () => {
  return (
    <div className="featured-container">
      <div className="featured-ad"></div>
      <div className="featured-places">
        <span className="featured-place">
          <img
            className="featured-image"
            src="https://a.travel-assets.com/travel-assets-manager/egip-collections/Ss1epnX.jpg?impolicy=fcrop&w=600&h=400&p=1&q=high"
            alt="people dining in fancy skyscrapers at night"
          ></img>
          <span className="featured-cap">URBAN ESCAPES</span>
          <span className="featured-bold">Hit the town</span>
        </span>
        <span className="featured-place">
          <img
            className="featured-image"
            src="https://a.travel-assets.com/travel-assets-manager/egip-collections/zvrbYGu.jpg?impolicy=fcrop&w=600&h=400&p=1&q=high"
            alt="people dining in fancy skyscrapers at night"
          ></img>
          <span className="featured-cap">BEACHES</span>
          <span className="featured-bold">Breathe in those beach vibes</span>
        </span>
        <span className="featured-place">
          <img
            className="featured-image"
            src="https://a.travel-assets.com/travel-assets-manager/cmct-5255/POSa-HP-Editorial-3up-384x256-1.jpg"
            alt="people dining in fancy skyscrapers at night"
          ></img>
          <span className="featured-cap">TRAVEL SMARTER</span>
          <span className="featured-bold">Save instantly with rewards</span>
        </span>
      </div>
    </div>
  );
};

export default Featured;
