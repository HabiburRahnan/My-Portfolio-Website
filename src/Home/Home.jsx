import { useEffect } from "react";
import Project from "../Components/Project/Project";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import Skills from "../Components/Skills/Skills";
import Banner1 from "../Components/Banner1/Banner1";
import Education from "../Components/Education/Education";

const Home = () => {

    useEffect(()=>{
        fetch("data.json")
        .then(res=>{
            console.log(res)
          return  res.json()
        })
        .then(data=>console.log(data))
            },[])
    return (
        <div>
        <Banner1></Banner1>
         <Project></Project>
         <Skills></Skills>
         <Education></Education>
         <About></About>
         <Contact></Contact>
        </div>
    );
};

export default Home;