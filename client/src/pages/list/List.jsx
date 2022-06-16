import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Connect from "../../components/connect/Connect";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Hotels from "../../components/hotels/Hotels";
const List = () => {
  return (
    <div>
      <Navbar />
      <div className="list-container">
        <Header />
        <Hotels />
        <Connect />
        <Footer />
      </div>
    </div>
  );
};

export default List;
