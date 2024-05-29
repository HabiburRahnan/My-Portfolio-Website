import { FaEnvelope, FaLocationPin, FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer className=" bg-[#061835] p-4 pt-10 md:p-10 text-white">
        <div className="container mx-auto relative grid md:grid-cols-2 lg:grid-cols-3 bottom-0 p-4 md:p-10">
          <nav className="w-full text-white">
            <header className="flex gap-2 items-center">
              <img
                src="https://i.ibb.co/zN62JfW/Gold-Luxury-Initial-Circle-Logo-1.png"
                alt="img"
                className="w-8 h-8"
              />
              <p className="text-primary-black text-2xl font-bold">
                MD Habibur Rahman
              </p>
            </header>
            <div className="text-primary-black font-medium ">
              <p className="font-semibold text-lg mt-5">Our Info</p>
              <div className="">
                <p className="flex items-center gap-2">
                  <FaLocationPin className="text-white" />
                  <span>Tajhat Rangpur, Bangladesh</span>
                </p>
                <p className="flex items-center gap-2">
                  <FaPhone className="text-white" />
                  <span>Call Us: +8801308102789</span>
                </p>
                <p className="flex items-center gap-2">
                  <FaEnvelope className="text-white" />
                  <a href="habiburrahmanofficial157@gmail.com">
                    habiburrahmanofficial157@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </nav>

          <nav className="w-full text-primary-black font-medium">
            <header className="text-primary-black text-lg font-bold">
              Useful Link
            </header>
            <div className="flex flex-col gap-1 mt-1">
              <Link to ="/" className="link link-hover">Home</Link>
              <Link to="/about" className="link link-hover">About</Link>
              <Link to="resume" className="link link-hover">Resume</Link>
              <Link to="/contact" className="link link-hover">Contact</Link>
    
            </div>
          </nav>
          <form className="w-full">
            <header className="text-primary-black text-lg font-bold">
              Subscribe
            </header>
            <fieldset className="form-control w-full font-medium">
              <label className="label mt-1">
                <span className="label-text text-white ">
                  Enter your email address
                </span>
              </label>
              <div className="relative mt-5">
                <input
                  type="email"
                  placeholder="abc@gmail.com"
                  className="p-3 rounded-full shadow-md text-primary-black w-full pr-16"
                />
                <button className="h-full text-white rounded-r-full px-2 bg-black hover:bg-black absolute top-0 right-0 rounded-l-none">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
