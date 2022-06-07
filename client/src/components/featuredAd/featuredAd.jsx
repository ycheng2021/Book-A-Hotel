import "./featuredAd.css";
import beach from "../../images/beach.jpg"
import hawaii from "../../images/hawaii.png"

const featuredAds = () => {
    return (
      <div className="featuredad-container">
        <div className="img-ad">
          <img className="beachAdImg" src={beach} alt="beach during sunset in pastel colors"></img>
          <span className="ad-label">Ad</span>
        </div>
        <div className="featuredad-desc">
          <img className="hawaii-logo" src={hawaii} alt="hawaii islands logo"></img>
          <h2 className="hawaii-title">Hawaii is just the best for families.</h2>
          <p className="hawaii-phrase">Come experience a wonderful two week long stay on the beaches of Oahu, Hawaii.</p>
        </div>
      </div>
    );
  }
  
  export default featuredAds;