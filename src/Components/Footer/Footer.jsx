import { Link } from "react-router-dom";
import { FaFacebookF, FaGithub, FaLinkedin, } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-5">
      <footer className="footer p-10 bg-neutral text-neutral-content ">
        <img
          className="w-24"
          src="https://i.ibb.co/zN62JfW/Gold-Luxury-Initial-Circle-Logo-1.png"
        ></img>
        <nav>
          <header className="footer-title">Social</header>
          <div className="grid grid-flow-col gap-4">
            <ul className="flex gap-5">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/resume">Resume</Link>
              </li>
              <li>
                <Link to="/project">Project</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
        <nav>
          <header className="footer-title">Social</header>
          <div className="grid grid-flow-col gap-4">
            <Link to="https://github.com/HabiburRahnan">
              <FaGithub className="text-4xl" />
            </Link>
            <Link to="https://www.facebook.com/profile.php?id=100047717885188">
              <FaFacebookF className="text-4xl" />
            </Link>
            <Link to="https://www.linkedin.com/in/habibur-rahman2005">
              <FaLinkedin className="text-4xl" />
            </Link>
          
          </div>
        </nav>
      </footer>
      <div className="footer footer-center p-4 bg-base-300 text-base-content">
        <aside>
          <p>Copyright © 2023 - All right reserved by Habibur Rahman</p>
        </aside>
      </div>
    </div>
  );
};

export default Footer;
