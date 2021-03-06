import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Search from "../../components/search/Search";
import Sales from "../../components/sales/Sales";
import Options from "../../components/options/Options";
import Connect from "../../components/connect/Connect";
import Ads from "../../components/ads/Ads";
import FeaturedAd from "../../components/featuredAd/featuredAd";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home-container">
        <Search />
        <Connect />
        <Sales />
        <Options />
        <FeaturedAd />
        <Featured />
        <Ads /> 
        <Footer />
      </div>
    </div>
  );
}

export default Home;

