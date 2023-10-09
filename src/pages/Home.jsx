/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars


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

        <div>
          <h1 className=" text-5xl mt-9 text-center">
            <span className=" text-[#d6a4ad]">Hey There,</span> we are social
            event management company
          </h1>

          <p className=" lg:text-base md:text-base   mt-10 text-sm  text-center max-w-5xl mx-auto  ">
            Event planning should be a magical experience, not a chore. That's
            why we believe in creating custom-tailored events that reflect your
            unique vision and personality. Whether you're planning a dream
            wedding, a corporate gala, or a birthday bash for the ages, we're
            here to make your event dreams come true.
          </p>
        </div>

        <section className=" mt-20 ">
          <Services></Services>
        </section>
       
      </div>
    );
};

export default Home;