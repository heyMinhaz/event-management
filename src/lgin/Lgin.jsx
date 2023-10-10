/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

import { useContext } from "react";
import { Form, Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Lgin = () => {
 
  const { signIn } = useContext(AuthContext);

  const handelLogin = e => {
    
    e.preventDefault();
console.log(e.currentTarget);
   const form = new FormData(e.currentTarget);

  
   const email = form.get("email");
   const password = form.get("password");

   console.log( email, password);

    signIn(email, password)
      .then(result => {
      
console.log(result.user);

      })
      .catch(error => {
      
        console.error(error);

    })
    
    
  }
  

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <h1 className=" text-4xl mb-8">Hey, Login your account</h1>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className=" text-4xl  text-center pt-10 text-cyan-600">
            Please Login
          </h1>
          <form onSubmit={handelLogin} className="card-body lg:w-[400px] ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <label className="label">
                <p>
                  {" "}
                  Don't have account?{" "}
                  <Link className="label-text-alt btn" to="/Register">
                    Register
                  </Link>
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Lgin;
