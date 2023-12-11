import SectionTitle from "../SectionTitle/SectionTitle";
// import axios from "axios";

const Project = () => {
    const projects=[
        {
          "id": 1,
          "name": "Server-001",
          "live": true,
          "client": "Client-A",
          "server": "Main Server",
          "image": "server1.jpg",
          "description": "High-performance server with advanced features for Client-A's critical applications."
        },
        {
          "id": 2,
          "name": "Server-002",
          "live": false,
          "client": "Client-B",
          "server": "Backup Server",
          "image": "server2.jpg",
          "description": "Backup server for Client-B's data redundancy and disaster recovery strategies."
        },
        {
          "id": 3,
          "name": "Server-003",
          "live": true,
          "client": "Client-C",
          "server": "Development Server",
          "image": "server3.jpg",
          "description": "Dedicated development server supporting"
        }
      ]

    
   
    
    return (
        <div>
        <SectionTitle heading='My Latest Project' subHeading='Projects'></SectionTitle>
           <div>
           {
            projects.map(project=><h1>{project.name}</h1>)
           }
           </div>
        </div>
    );
};

export default Project;