import "./ads.css";

const Ads = () => {
  return (
    <div className="ad-container">
      <div className="top-ad">
        <img
          src="https://tpc.googlesyndication.com/simgad/10967888521520694831?"
          alt="oregon travel ad"
        />
      </div>
      <div className="left-right">
        <div className="left-ad">
          <img
            className="leftadimage"
            src="https://a.travel-assets.com/travel-assets-manager/cmct-3386-homepage-mesobackupads/3386-MesoBackUp-Site-667x320-Packages.jpg"
            alt="relaxing hanging seat hammock"
          />
          <span className="ad-label">Ad</span>
          <div className="ad-box">
            <span className="advertisement">Do not miss summer in Bahama</span>
            <span className="advertisement">
              Beaches. Mountains. Food. Art. Discover all that a Bahama summer
              has to offer.
            </span>
          </div>
        </div>
        <div className="right-ad">
          <img
            src="https://s0.2mdn.net/simgad/91865042476660274"
            alt="bermuda ad"
          />
        </div>
      </div>
    </div>
  );
};

export default Ads;
