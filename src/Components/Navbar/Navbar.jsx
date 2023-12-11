import { Link } from "react-router-dom";

const Navbar = () => {
    const navlink=<>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/about'>About</Link></li>
    <li><Link to='/resume'>Resume</Link></li>
    <li><Link to='/project'>Project</Link></li>
    <li><Link to='/contact'>Contact</Link></li>

    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
  <div className="drawer lg:hidden">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
   
    <label htmlFor="my-drawer" className=" drawer-button"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
     {navlink}
      
    </ul>
  </div>
</div>
   
     <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navlink}
    </ul>
  </div>
</div>
    );
};

export default Navbar;