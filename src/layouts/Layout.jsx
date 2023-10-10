import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/navbar";
import Foter from "../foter/Foter";
import { Toaster } from "react-hot-toast";




const Layout = () => {
    return (
      <div>
        <Navbar></Navbar>
        <Outlet ></Outlet>
        <Toaster></Toaster>
          <Foter></Foter>
      </div>
    );
};

export default Layout;