import { Link } from "react-router-dom";

const Resume = () => {
    return (
        <div className="md:flex justify-center items-center">
        <div>
        <img src="https://i.ibb.co/MnJWZ8q/resume.png"></img>
        </div>
        <div className=" grid justify-center items-center gap-10  ml-10">
        <Link className="border border-pink-600 p-10 text-xl rounded" to="https://drive.google.com/file/d/1TA0SvJ1jjnO81XRs_nwOd_i9S2CQFeoA/view?fbclid=IwAR2dxFPOB2QUU5RStBVN0u-a8J_kEcbKmMKaknSklj1SN_9iEBOZqC9n_bE">Views Resume</Link>
        <button className="border border-pink-600 p-10 text-xl rounded">Dwonload Resume</button>
        
        </div>
          
        </div>
    );
};

export default Resume;