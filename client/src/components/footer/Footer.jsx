import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer-container">
      <button className="help-btn"><FontAwesomeIcon className="help-icon" icon={faComments} />Help</button>
      <div className="quote">
        <p className="insp-quote">Be inspired and discover more with Book-A-Hotel</p>
        <a className="click-modal" href="https://www.expedia.com/">
          <span>
            Discover new places and experiences
          </span>
        </a>
      </div>
      <div className="footer-divs">
        <div className="footer-div">
          <h1 className="footer-title company-title">Book-A-Hotel</h1>
        </div>
        <div className="footer-div">
          <h1 className="footer-title">Company</h1>
          <a className="footer-link" href="https://www.expedia.com">About</a>
          <a className="footer-link" href="https://www.expedia.com">Jobs</a>
          <a className="footer-link" href="https://www.expedia.com">List your property</a>
          <a className="footer-link" href="https://www.expedia.com">Partnerships</a>
          <a className="footer-link" href="https://www.expedia.com">Newsroom</a>
          <a className="footer-link" href="https://www.expedia.com">Investor Relations</a>
          <a className="footer-link" href="https://www.expedia.com">Advertising</a>
        </div>
        <div className="footer-div">
          <h1 className="footer-title">Expore</h1>
          <a className="footer-link" href="https://www.expedia.com">United States of America className="footer-link" travel guide</a>
          <a className="footer-link" href="https://www.expedia.com">Hotels in United States of America</a>
          <a className="footer-link" href="https://www.expedia.com">Vacation rentals in United States of America</a>
          <a className="footer-link" href="https://www.expedia.com">Vacation packages in United States of America</a>
          <a className="footer-link" href="https://www.expedia.com">Domestic flights</a>
          <a className="footer-link" href="https://www.expedia.com">Car rentals in United States of America</a>
          <a className="footer-link" href="https://www.expedia.com">All accommodation types</a>
        </div>
        <div className="footer-div">
          <h1 className="footer-title">Terms and Policies</h1>
          <a className="footer-link" href="https://www.expedia.com">Privacy policy</a>
          <a className="footer-link" href="https://www.expedia.com">Terms of use</a>
          <a className="footer-link" href="https://www.expedia.com">Vrbo terms and conditions</a>
          <a className="footer-link" href="https://www.expedia.com">Book-A-Hotel Rewards Terms</a>
          <a className="footer-link" href="https://www.expedia.com">Accessibility</a>
          <a className="footer-link" href="https://www.expedia.com">Do not sell my personal information</a>
        </div>
        <div className="footer-div">
          <h1 className="footer-title">Help</h1>
          <a className="footer-link" href="https://www.expedia.com">Support</a>
          <a className="footer-link" href="https://www.expedia.com">Cancel your hotel or vacation rental booking</a>
          <a className="footer-link" href="https://www.expedia.com">Cancel your flight</a>
          <a className="footer-link" href="https://www.expedia.com">Refund timelines, policies & processes</a>
          <a className="footer-link" href="https://www.expedia.com">Use a className="footer-link" Book-A-Hotel coupon</a>
          <a className="footer-link" href="https://www.expedia.com">Internation travel documents</a>
        </div>
      </div>
      <div className="footer-disclaimer">
        <p className="footer-copy">Book-A-Hotel is not responsible for content on external Web sites.</p>
        <p className="footer-copy">© 2022 Book-A-Hotel, Inc., an Book-A-Hotel company. All rights reserved. Book-A-Hotel and the Airplane Logo are trademarks or registered trademarks of Book-A-Hotel, Inc. CST# 2029030-50. </p>
      </div>
    </div>
  );
};

export default Footer;
