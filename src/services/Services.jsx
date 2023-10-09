/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import Service from "../service/Service";


const Services = () => {

    const [services, setService] = useState([]);
    useEffect(() => {
        
        fetch("./data.json")
          .then((res) => res.json())
          .then((data) => setService(data));


    }, [])

console.log(services);
    return (



        <div>

            {
                
services.map(value=> <Service  data={value}></Service>)


}


        
        </div>
    
    
    );
};

export default Services;