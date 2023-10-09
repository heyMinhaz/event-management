/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars


import Foter from "../foter/Foter";
import Services from "../services/Services";





const Home = () => {
    return (
      <div>
        <section
          className=" lg:p-64 text-center p-40"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/5LGjT6R/background-overlay.jpg)",

            backgroundSize: "cover",
          }}
        >
          <h1 className=" lg:text-7xl text-4xl font-bol text-white">
            Creating unforgettable <br /> memories
          </h1>
        </section>

        <section>
          <h1 className=" lg:text-5xl lg:text-center lg:mt-14">
            <span className=" text-[#d6a4ad]">Hey There,</span> we are social
            event management company
          </h1>

          <hr className=" lg:w-[500px] lg:ml-[450px] mt-4 w-[200px] " />

          <div className=" lg:w-[1000px] ml-52  mt-4">
            <small className=" lg:text-base md:text-base  -mr-6 text-sm  text-center max-w-5xl mx-auto  ">
              Event planning should be a magical experience, not a chore. That's
              why we believe in creating custom-tailored events that reflect
              your unique vision and personality. Whether you're planning a
              dream wedding, a corporate gala, or a birthday bash for the ages,
              we're here to make your event dreams come true.
            </small>
          </div>
        </section>

        <section className=" mt-20">
          <Services></Services>
        </section>
        <section className=" mt-16">
          <Foter></Foter>
        </section>
      </div>
    );
};

export default Home;