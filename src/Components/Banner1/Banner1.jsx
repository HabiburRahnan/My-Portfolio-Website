import { TypeAnimation } from "react-type-animation";
const Banner1 = () => {
  return (
    <div
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <div className=" bg-bgShade ">
        <div className="lg:px-12 px-4 flex flex-col md:flex-row-reverse  items-center justify-between  gap-5 ">
          <div className="md:w-1/2 w-full ">
            <img
              src="https://i.ibb.co/bdbnH01/unnamed.png"
              alt=""
              className="w-96 rounded-full border-4 border-pink-600  p-4 animate-pulse  "
            />
          </div>

          <div className="md:w-1/2 w-full mt-5">
            <h2 className="text-2xl font-bold py-4">
             
              Hey, I am a
              <TypeAnimation
                className="text-pink-600"
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  " MERN Stack Developer",
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
            </h2>
            <h1 className="md:text-6xl text-4xl font-bold text-headingcolor leading-snug md:leading-[76px]  mb-5">
              I create <span className="text-pink-600"> Web Site</span> and MERN
              Stack Project
            </h1>
            <p className="text-2xl text-body leading-9 mb-8">
              Expertise in the MERN Stack: With a solid foundation in MongoDB,
              Express.js, React, and Node.js, I thrive in creating seamless,
              end-to-end applications.
            </p>
            <button className="btn-primary">Get In Touch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
