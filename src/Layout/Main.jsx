import ScrollToTop from "react-scroll-to-top";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Scroll from "../Components/Scroll/Scroll";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Scroll></Scroll>
      <Outlet></Outlet>
      <ScrollToTop smooth />

      <Footer></Footer>
    </div>
  );
};

export default Main;
