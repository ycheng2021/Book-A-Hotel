import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Search from "../../components/search/Search";
import Sales from "../../components/sales/Sales";
import Options from "../../components/options/Options";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home-container">
        <Search />
        <Sales />
        <Options />
        <Featured />
      </div>
      <Footer />
    </div>
  );
}

export default Home;

