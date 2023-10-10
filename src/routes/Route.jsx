
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../layouts/Layout";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Lgin from "../lgin/Lgin";
import Register from "../register/Register";
import Data from "../pages/Data";
import PrivetRoute from "./PrivetRoute";
import Error from "../error/Error";

// eslint-disable-next-line no-unused-vars
const router = createBrowserRouter([
  {
    path: "/",
    
    element: <Layout></Layout>,

    errorElement:<Error></Error>,
  
      
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=>fetch('./data.json')
      },

      {
  
        path: '/data/:id',
        element: <PrivetRoute><Data></Data></PrivetRoute>,
           loader: ()=>fetch('./data.json')
        




},

      {
        path: "/About",

        element: <About></About>,
      },
      {
        path: "/Contact",

        element: <Contact></Contact>,
      },
      {
        path: "/Lgin",
        element: <Lgin></Lgin>,
      },
      {
        path: "/Register",
        element: <Register></Register>,
      },
     
    ],
  },
]);

export default router;

