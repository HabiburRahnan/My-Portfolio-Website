import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <div>
      <div
        className="hero md:h-[700px]  "
        style={{
          backgroundImage: "url(https://i.ibb.co/bdbnH01/unnamed.png)",
        }}
      >
        <div className="hero-overlay bg-blue-900 opacity-75 "></div>
        <div className="hero-content container mx-auto">
          <div className="text-white ">
            <h1 className="text-lg md:text-2xl lg:text-4xl font-medium py-5 ">
              Hey, I am a 
              <TypeAnimation
                className="text-pink-600"
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  " MERN Developer",
                  2000, // wait 1s before replacing "Mice" with "Hamsters"
                  " Frontend Developer",
                  2000,
                  " Web Developer",
                  2000,
                  " React Developer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "1.5em", display: "inline-block" }}
                repeat={Infinity}
              />
            </h1>
            <h1 className="md:text-4xl text-xl font-bold text-headingcolor leading-snug md:leading-[76px]  mb-5">
              I create <span className="text-pink-600"> Web Site</span> and MERN
              Stack Project
            </h1>
            <p className="mb-5 py-5 text-xl  md:text-2xl font-medium leading-loose">
              Expertise in the MERN Stack: With a solid foundation in MongoDB,
              Express.js, React, and Node.js,I thrive in creating
              seamless, end-to-end applications.
            </p>
            <button className=" bg-blue-900 outline-none text-white font-semibold p-5 text-xl  hover:bg-blue-900 ">
              Schedule Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
