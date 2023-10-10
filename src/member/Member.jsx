import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Member = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      data-aos="fade-up"
      className=" lg:grid lg:grid-cols-2 gap-9 lg:ml-28 mt-20 "
    >
      <div className="card card-side w-[500px] h-[400px] bg-base-100 shadow-lg cursor-pointer ">
        <figure>
          <img
            className=" w-64 rounded-xl"
            src="https://i.ibb.co/h2XLryS/pexels-andrea-piacquadio-3791123.jpg"
            alt="Movie"
          />
        </figure>
        <div className="card-body w-56 ">
          <div className="">
            <h2 className="card-title text-3xl ">Mona Lisa </h2>
            <p className=" ">
              A CEO, or Chief Executive Officer, is the highest-ranking
              executive in a company. They are responsible for making major
              corporate decisions, managing the overall operations and resources
              of a company, and acting as the main point of communication
              between.
            </p>
          </div>
        </div>
      </div>

      <div className="card card-side w-[500px] h-[400px] bg-base-100 shadow-lg cursor-pointer ">
        <figure>
          <img
            className=" w-64 rounded-xl"
            src="https://i.ibb.co/J5tJ5j5/pexels-liza-summer-6347901.jpg"
            alt="Movie"
          />
        </figure>
        <div className="card-body w-56 ">
          <div className="">
            <h2 className="card-title text-3xl ">Liza Mank </h2>
            <p className=" ">
              Develop comprehensive event plans, including budgets, timelines,
              and logistical arrangements. Coordinate all aspects of event
              execution, including venue selection, catering, décor,
              entertainment, and audiovisual requirements.
            </p>
          </div>
        </div>
      </div>

      <div className="card card-side w-[500px] h-[400px] bg-base-100 shadow-lg cursor-pointer ">
        <figure>
          <img
            className=" w-64 rounded-xl"
            src="https://i.ibb.co/Tvf99Nb/pexels-william-fortunato-6393021.jpg"
            alt="Movie"
          />
        </figure>
        <div className="card-body w-64 ">
          <div className="">
            <h2 className="card-title text-3xl ">Mac </h2>
            <p className=" ">
              Identify, negotiate with, and manage vendors, suppliers, and
              contractors to ensure timely and cost-effective delivery of
              services. Oversee contracts, agreements, and payments to ensure
              compliance with budgetary constraints.
            </p>
          </div>
        </div>
      </div>

      <div className="card card-side w-[500px] h-[400px] bg-base-100 shadow-lg cursor-pointer ">
        <figure>
          <img
            className=" w-64 rounded-xl"
            src="https://i.ibb.co/gjn6szq/pexels-dellon-thomas-3394346.jpg"
            alt="Movie"
          />
        </figure>
        <div className="card-body w-56 ">
          <div className="">
            <h2 className="card-title text-3xl ">Jack </h2>
            <p className=" ">
              The Event Manager will be responsible for planning, organizing,
              and executing a wide range of events, from corporate conferences
              and trade shows to private parties and weddings. They will work
              closely with clients to understand their
            </p>
          </div>
        </div>
      </div>

      <br />
      <br />
    </div>
  );
};

export default Member;
