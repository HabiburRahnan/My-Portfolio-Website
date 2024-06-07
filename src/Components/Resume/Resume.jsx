import { Link } from "react-router-dom";

const Resume = () => {
  return (
    <div className="md:flex justify-center items-center">
      <div>
        <img src="https://i.ibb.co/NmRGg1D/skin.png"></img>
      </div>
      <div className=" grid justify-center items-center gap-10  ml-10">
        <Link
          className="border border-pink-600 p-10 text-xl rounded"
          to="https://drive.google.com/file/d/1Q1NRKAaUSuw7hsQPpShHaM85yxH9sJ4E/view?usp=sharing"
        >
          Views Resume Fornt-End
        </Link>
        <Link
          className="border border-pink-600 p-10 text-xl rounded"
          to="https://drive.google.com/file/d/1bGq8AkQquOMOPTOTm3d39I4T1NQxfJYT/view?usp=sharing"
        >
          Views Resume MERN Stack
        </Link>
      </div>
    </div>
  );
};

export default Resume;
