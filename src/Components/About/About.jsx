import { TypeAnimation } from "react-type-animation";
import SectionTitle from "../SectionTitle/SectionTitle";

const About = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-duration="3000"
    >
      <SectionTitle heading="About me" subHeading="About Me"></SectionTitle>

      <div className="hero  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
        <div className="hero-content flex-col j lg:flex-row ">
          <div className="flex justify-center item">
            <div className="text-center ">
              <h1 className="text-3xl md:text-5xl font-bold text-white">
                Habibur Rahman <br></br>
                <span className="text-xl text-slate-300">
                  <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed out once, initially
                      " ",
                      1000, // wait 1s before replacing "Mice" with "Hamsters"
                      " Web Developer",
                      1000,
                      " Font-end Developer",
                      1000,
                      "MERN Stack Developer",
                      1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: "2em", display: "inline-block" }}
                    repeat={Infinity}
                  />
                </span>{" "}
              </h1>
              <p className="py-6 text-slate-300 ">
                Hello there! 👋 I'm Habibur Rahman, a passionate MERN stack
                developer with a love for building robust and scalable web
                applications. My journey in the world of programming started
                with a curiosity for crafting digital solutions that make a
                meaningful impact.
              </p>
            </div>
          </div>
          <img
            src="https://i.ibb.co/bdbnH01/unnamed.png"
            className="max-w-sm rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
