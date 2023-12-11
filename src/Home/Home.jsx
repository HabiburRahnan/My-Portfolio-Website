import { useEffect } from "react";
import Banner from "../Components/Banner/Banner";

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
           <h1 className="text-red-900">Habibu Reactahman</h1> 
        </div>
    );
};

export default Home;