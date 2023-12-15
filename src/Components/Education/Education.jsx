import SectionTitle from "../SectionTitle/SectionTitle";

const Education = () => {
    
       
    
  return (
    <div >
  
      <SectionTitle
        heading="my Education"
        subHeading="education"
      ></SectionTitle>
      <div className="md:flex justify-around items-center"  data-aos="fade-right" data-aos-easing="linear"
      data-aos-duration="2500">
      <div className="text-center" >
      <h1 className="text-2xl ">Rangpur Polytichnic Institute</h1>
      <p className="text-xl">Department: Computer Secince</p>
      <p>Start Date:20-08-2020</p>
      <p>End Date:20-12-2024</p>
      </div>
      <div className="text-center"  data-aos="fade-left " data-aos-easing="linear"
      data-aos-duration="2500">
      <h1 className="text-2xl ">Boro Rangpur Karamatha Kmail (MA) Madrasha</h1>
      <p className="text-xl">Department:Secince</p>
      <p>Start Date:01-01-2018</p>
      <p>End Date:01-03-2020</p>
      </div></div>
    </div>
  );
};

export default Education;
