import { Link } from "react-router-dom";

const Resume = () => {
    return (
        <div className="md:flex justify-center items-center">
        <div>
        <img src="https://i.ibb.co/MnJWZ8q/resume.png"></img>
        </div>
        <div className=" grid justify-center items-center gap-10  ml-10">
        <Link className="border border-pink-600 p-10 text-xl rounded" to="https://drive.google.com/file/d/1MHtvX9pr4athf5q9XD0V6eJKDBicGSM5/view?usp=sharing">Views Resume</Link>
        <Link to="" className="border border-pink-600 p-10 text-xl rounded">Dwonload Resume</Link>
        
        </div>
          
        </div>
    );
};

export default Resume;