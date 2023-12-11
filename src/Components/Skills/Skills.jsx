import SectionTitle from "../SectionTitle/SectionTitle";

const Skills = () => {
  return (
    <div>
      <SectionTitle heading="My Skills" subHeading="skills"></SectionTitle>
      <div className="skilsItem">
        <p className="text-center ">
          Expertise in the MERN Stack: With a solid foundation in MongoDB,
          Express.js, React, and Node.js,<br></br> I thrive in creating
          seamless, end-to-end applications.
        </p>
        <h1 className="text-3xl text-center py-5">Technical Skills</h1>
        <div className="flex justify-around items-center">
          <div>
            <h1 className="text-pink-500 text-2xl">Front-end Development:</h1>
            <p>Languages:</p>HTML5, CSS3, JavaScript (ES6+)
            <p>JavaScript Frameworks:</p>React.js.
            <p>Responsive Design:</p>Tailwind, Daisy ui, Metarial Tailwind,
            Bootstrap.
            <p>Version Control:</p>
            Git, GitHub.
          </div>
          <div>
            <h1 className="text-pink-500 text-2xl">Back-end Development:</h1>
            <p>Server-side Frameworks:</p>Node.js, Express.js
            <p>Database Management:</p>Node.js, MongoDB.
            <p>RESTful API Design and Implementation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
