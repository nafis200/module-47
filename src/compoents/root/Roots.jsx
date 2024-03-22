import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../Header/Header";

const Roots = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <Header></Header>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Roots;
