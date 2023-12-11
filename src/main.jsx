import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Project from './Components/Project/Project';
import Resume from './Components/Resume/Resume';
import Main from './Layout/Main';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
path:'/',
element:<Home></Home>
      },
      {
        path: "/about",
        element:<About></About>
      },
      {
        path: "/contact",
        element:<Contact></Contact>
      },
      {
        path: "/project",
        element:<Project></Project>
      },
      {
        path: "/resume",
        element:<Resume></Resume>
      },

    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <div className="lg:w-[1280px] mx-auto">
  <RouterProvider router={router} />
  </div>
   
  </React.StrictMode>
);