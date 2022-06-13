import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Connect from "../../components/connect/Connect";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
const List = () => {
  return (
    <div>
      <Navbar />
      <div className="list-container">
        <Header />
        <Connect />
        <Footer />
      </div>
    </div>
  );
};

export default List;
