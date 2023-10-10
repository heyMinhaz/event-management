import { useParams } from "react-router-dom";


const Data = () => {

    const { id } = useParams();

    return (
      <div>
       
            <div>

                <h1>{ id}</h1>

            </div>


      </div>
    );
};

export default Data;