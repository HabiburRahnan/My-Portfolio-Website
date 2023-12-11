"use client";
// import Image from "next/image";
import { Carousel } from "keep-react";
import { ArrowLineLeft, ArrowLineRight } from "phosphor-react";
const Banner = () => {
    return (
    
     <div className=" rounded">
     <Carousel
     showControls={true}
     leftControl={
       <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-2 group-focus:ring-white sm:h-10 sm:w-10">
         <ArrowLineLeft size={20} weight="bold" color="white" />
       </span>
     }
     rightControl={
       <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-2 group-focus:ring-white sm:h-10 sm:w-10">
         <ArrowLineRight size={20} weight="bold" color="white" />
       </span>
     }>
     <img
     className="h-[400px]"
       src="https://i.ibb.co/pw4Nw6x/baby.png"
       alt="slider-1"
       height={400}
       width={910}
     />
     <img
     className="h-[400px]"
       src="https://i.ibb.co/qmYrMTH/bistro.png"
       alt="slider-1"
       height={400}
       width={910}
     />
     <img
     className="h-[400px]"
       src="https://i.ibb.co/QMzKLR5/youtube.png"
       alt="slider-1"
       height={400}
       width={910}
     />
     <img
     className="h-[400px]"
       src="https://i.ibb.co/N2JC9rQ/foodimage.png"
       alt="slider-1"
       height={400}
       width={910}
     />
     <img
     className="h-[400px]"
       src="https://i.ibb.co/k0DGdNY/brand-Shop.png"
       alt="slider-2"
       height={400}
       width={910}
     />
     <img
     className="h-[400px]"
       src="https://i.ibb.co/wNxS3n0/job-project.png"
       alt="slider-3"
       height={400}
       width={910}
     />
     <img
     className="h-[400px]"
       src="https://i.ibb.co/CWBnMWM/course.png"
       alt="slider-3"
       height={400}
       width={910}
     />
    
   </Carousel></div>
    );
};

export default Banner;