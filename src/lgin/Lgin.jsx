/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

import { Form, Link, NavLink } from "react-router-dom";

const Lgin = () => {
 

  const handelLogin = e => {
    
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password);

  }
  

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <h1 className=" text-4xl mb-8">Hey, Login your account</h1>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
