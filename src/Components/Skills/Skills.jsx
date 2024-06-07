import SectionTitle from "../SectionTitle/SectionTitle";

const Skills = () => {
  return (
    <div>
      <SectionTitle heading="My Skills" subHeading="skills"></SectionTitle>
      <div className="skilsItem">
        <p className="text-center mx-auto">
          Expertise in the MERN Stack: With a solid foundation in Language:{" "}
          <br></br>
          JavaScript, TypeScript React JS, Firebase, Next JS, Tailwind, Daisy
          UI, Material UI,<br></br> Bootstrap, Aceternity UI. Express, MongoDB,
          Node.js, JWT, RESTful APIs, Mongoose.<br></br> I thrive in creating
          seamless, end-to-end applications.
        </p>
        <h1 className="text-3xl text-center py-5">Technical Skills</h1>
        <div
          className="md:flex justify-around items-center ml-5 md:ml-0"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="2500"
        >
          <div>
            <h1 className="text-pink-500 text-2xl">Front-end Development:</h1>
            <p>Languages:</p>JavaScript, TypeScript(ES6+)
            <p>JavaScript Frameworks/library:</p>React JS, Next JS,
            <p>Responsive Design:</p>Tailwind, Daisy UI, Material UI, Bootstrap,
            Aceternity UI.
            <p>Version Control:</p>
            Git, GitHub.
          </div>
          <div
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="2500"
          >
            <h1 className="text-pink-500 text-2xl">Back-end Development:</h1>
            <p>Server-side Frameworks:</p>Node.js, Express.js
            <p>Database Management:</p>Node.js, MongoDB, JWT, RESTful APIs,
            Mongoose.
            <p>RESTful API Design and Implementation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
