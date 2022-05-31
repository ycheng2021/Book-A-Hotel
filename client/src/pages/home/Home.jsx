import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home-container">
        <div className="search-box">
          <p>does this show up</p>
        </div>
        <div className="sale-box"></div>
        <div className="options-box"></div>
        <Featured />
      </div>
      <Footer />
    </div>
  );
}

export default Home;

