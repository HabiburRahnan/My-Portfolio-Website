import { Link } from "react-router-dom";

const Resume = () => {
  return (
    <div className="md:flex justify-center items-center">
      <div>
        <img src="https://i.ibb.co/MnJWZ8q/resume.png"></img>
      </div>
      <div className=" grid justify-center items-center gap-10  ml-10">
        <Link
          className="border border-pink-600 p-10 text-xl rounded"
          to="https://drive.google.com/file/d/1c5MeYbPBQ639Z_WZOvKqll4z5tF0PUsW/view?usp=sharing"
        >
          Views Resume Fornt-End
        </Link>
        <Link
          className="border border-pink-600 p-10 text-xl rounded"
          to="https://drive.google.com/file/d/1_VM9HF1cIatcmYXM0UnxX5xLknA5o9k9/view?usp=sharing"
        >
          Views Resume MERN Stack
        </Link>
      </div>
    </div>
  );
};

export default Resume;
