import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Scroll from "../Components/Scroll/Scroll";
import { FaArrowUp } from "react-icons/fa6";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Scroll></Scroll>
      <Outlet></Outlet>
      <button
        className="bg-indigo-400 animate-bounce hover:animate-none text-white fixed bottom-4 right-4 p-3 rounded-full shadow-lg transition duration-300 hover:bg-blue-900"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <FaArrowUp className="text-xl" />
      </button>
      

      <Footer></Footer>
    </div>
  );
};

export default Main;
