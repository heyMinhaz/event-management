/* eslint-disable react/no-unescaped-entities */

import Member from "../member/Member";


const About = () => {
    return (
      <div>
        <section
          className=" lg:p-64 text-center p-40"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/6ZLr9tp/pexels-matheus-bertelli-3856042-overlay.jpg)",

            backgroundSize: "cover",
          }}
        >
          <h1 className=" lg:text-7xl text-4xl font-bol text-white">
            Learn about our <br /> company member
          </h1>
        </section>

        <div>
          <h1 className=" text-5xl mt-9 text-center">
            Some Information For <br /> Our Company
          </h1>

          <p className=" lg:text-base md:text-base   mt-10 text-sm  text-center max-w-5xl mx-auto  ">
            we believe that every moment is an opportunity to create
            unforgettable memories. We are a dedicated team of event
            enthusiasts, committed to turning your vision into a reality. From
            intimate gatherings to grand celebrations, we specialize in curating
            events that leave a lasting impression.Our comprehensive range of
            services encompasses every aspect of event planning and execution.
            Whether it's a romantic wedding, a milestone birthday, or a
            corporate gala, we've got you covered:
          </p>
        </div>
        <h1 className=" text-center text-5xl mt-20">Our Member</h1>
        <Member></Member>
      </div>
    );
};

export default About;