import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/navbar";
import Foter from "../foter/Foter";




const Layout = () => {
    return (
      <div>
        <Navbar></Navbar>
            <Outlet ></Outlet>
          <Foter></Foter>
      </div>
    );
};

export default Layout;