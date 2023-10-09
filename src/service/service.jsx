/* eslint-disable react/prop-types */


const Service = ({ data }) => {
    const { title, date, description, Price, attendees, image } = data;


    return (
      <div className=" ">
        <div className="card  bg-base-100 shadow-lg h-[650px]">
          <figure>
            <img className=" h-60 w-96 bg-cover" src={image} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {title}
              <div className="badge badge-secondary">{date}</div>
            </h2>
            <p>{description}</p>
            <div className="card-actions justify-end ">
              <div className="badge badge-outline font-bold">
                <p className=" font-bold">Attendees : </p>
                {attendees}
              </div>
              <div className="badge badge-outline font-bold">
                Price : {Price}
              </div>
            </div>
            <div className="btn btn-outline btn-secondary ">
              <p>Read more</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Service;