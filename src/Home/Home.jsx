import { useEffect } from "react";
import Banner from "../Components/Banner/Banner";
import Project from "../Components/Project/Project";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import Skills from "../Components/Skills/Skills";

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
         <Banner></Banner>
         <Project></Project>
         <Skills></Skills>
         <About></About>
         <Contact></Contact>
        </div>
    );
};

export default Home;