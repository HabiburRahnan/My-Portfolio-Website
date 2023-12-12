const Banner1 = () => {
  return (
    <div data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000">
      <div className=" bg-bgShade" >
        <div className="lg:px-12 px-4 flex flex-col md:flex-row-reverse items-center justify-between  gap-5">
          <div className="md:w-1/2 w-full">
            <img
              src="https://i.ibb.co/bdbnH01/unnamed.png"
              alt=""
              className="w-full rounded-md"
            />
          </div>

          <div className="md:w-1/2 w-full mt-5">
            <p className="text-xl text-headingcolor font-semibold mb-5">
              Hey, I am Habibur Rahman
            </p>
            <h1 className="md:text-6xl text-4xl font-bold text-headingcolor leading-snug md:leading-[76px]  mb-5">
              I create <span className="text-pink-600">Web Site</span> and MERN
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
