/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Service = ({ data }) => {
  const { title, date, description, Price, attendees, image,id } = data;


    return (
      <div className=" ">
        <div className="card  bg-base-100 shadow-lg h-[500px]">
          <figure>
            <img className=" h-60 w-96 bg-cover" src={image} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {title}
              <div className="badge badge-secondary">{date}</div>
            </h2>

            {description.length > 150 ? (
              <p>
                {description.slice(0, 150)}
                <Link to={`/data/${id}        `} className="link link-primary font-bold">  Read More...</Link>
              </p>
            ) : (
              <p>{description}</p>
            )}

            <div className="card-actions justify-end ">
              <div className="badge badge-outline font-bold">
                <p className=" font-bold">Attendees : </p>
                {attendees}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Service;