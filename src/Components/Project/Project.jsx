import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
// import axios from "axios";

const Project = () => {
  const projects = [
    {
      id: 1,
      name: "Food Management Services",
      live: "https://meal-management-system-93e18.web.app",
      client: "https://github.com/HabiburRahnan/food-management-system-client",
      server: "https://github.com/HabiburRahnan/food-management-system-server",
      image: "https://i.ibb.co/N2JC9rQ/foodimage.png",
      description:
        "The front-end uses React Tailwind, Daisy UI, Material UI and Firebase and the back-end uses Node.js MongoDB, Express and JWT. Admin Route and User Route come separately. Now the customer can pay through card.",
    },
    {
      id: 2,
      name: "Brand Shop",
      live: "https://technology-electronices.web.app",
      client: "https://github.com/HabiburRahnan/technology-electronics-client",
      server: "https://github.com/HabiburRahnan/technology-electronics-server",
      image: "https://i.ibb.co/k0DGdNY/brand-Shop.png",
      description:
        "Front-end uses React tailwind, Daisy UI and firebase, and back-end uses Node.js MongoDB, Express and JWT.",
    },
    {
      id: 3,
      name: "Job Hunter",
      live: "https://job-search-3936b.web.app/",
      client: "https://github.com/HabiburRahnan/job-search-client",
      server: "https://github.com/HabiburRahnan/job-search-server",
      image: "https://i.ibb.co/wNxS3n0/job-project.png",
      description: "Front-end uses React tailwind, Daisy UI and firebase, and back-end uses Node.js MongoDB, Express and JWT.",
    },
  ];

  return (
    <div>
      <SectionTitle
        heading="My Latest Project"
        subHeading="Projects"
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"  data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500">
        {projects.map((project) => (
          <div key={project.id} className="card  bg-base-100 shadow-xl mx-2">
            <figure>
              <img src={project.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.name}</h2>
              <div className="flex justify-around items-center ">
                <h2>
                  <Link
                    className=" border border-[#C30AB5] rounded md:px-2"
                    to={project.live}
                  >
                    Live Link
                  </Link>
                </h2>
                
                <h2>
                  <Link
                    className=" border border-[#C30AB5] rounded md:px-2 "
                    to={project.client}
                  >
                    Client Code
                  </Link> 
                </h2>
           
                <h2>
                  <Link
                    className=" border border-[#C30AB5] rounded "
                    to={project.server}
                  >
                    Server Code
                  </Link>
                </h2>
              </div>
              <p className="font-bold">Description: <span className="font-normal">{project.description}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
