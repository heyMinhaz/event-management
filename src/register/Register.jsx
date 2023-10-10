/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Register = () => {



  const { createUser } = useContext(AuthContext);




   const handelRegister = (e) => {
     e.preventDefault();
     console.log(e.currentTarget);
     const form = new FormData(e.currentTarget)

     const name = form.get('name');
     const email = form.get('email');
     const password = form.get('password');

     console.log(name,email,password);


     createUser(email, password)
       .then(result => {
       
         console.log(result.user)
         
       })
     
       .catch(error => {
       
         console.log(error)
         
         
     })


   };


    return (
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className=" text-4xl  text-center pt-10 text-cyan-600">Create Account</h1>
            <form onSubmit={handelRegister} className="card-body lg:w-[400px] ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                    Already have account?{" "}
                    <Link className="label-text-alt btn" to="/Lgin">
                      Login
                    </Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;