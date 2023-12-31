/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {

const {user,logOut} = useContext(AuthContext)

  const handleLogOut = () => {
    
    logOut()
      .then()
    .catch()


  }
  

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/About">About</NavLink>
      </li>

      <li>
        <NavLink to="/Contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>

        <label tabIndex={0} className="   ">
          <div className="   ">
            <NavLink to="/">
              {" "}
              <img
                className=" w-auto h-14 cursor-pointer"
                src="https://images.squarespace-cdn.com/content/v1/55ce79cee4b0ef57d7cb12b8/1606884575371-O0IJD68CNXY3HAV9O2FY/PrimaryLogo.png?format=2500w"
              />
            </NavLink>
          </div>
        </label>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
     
        </label>

        {user ? (
          <p onClick={handleLogOut} className="btn">
            Logout
          </p>
        ) : (
          <NavLink to="/Lgin">
            <p className="btn">Login</p>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
