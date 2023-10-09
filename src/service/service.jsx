/* eslint-disable react/prop-types */


const Service = ({ data }) => {
    const { title, date, description, Price, attendees, image } = data;

console.log(data);
    return (
      <div>
        <div  className="card w-96  bg-base-100 shadow-xl">
          <figure >
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
            <div className="btn btn-outline btn-secondary ">Read more</div>
          </div>
        </div>
      </div>
    );
};

export default Service;