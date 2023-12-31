/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoute = ({Children}) => {

    const { user, loading } = useContext(AuthContext);

    const location = useLocation();
    console.log(location.pathname);

    
    if (loading) {
        
return <span className="loading loading-dots loading-lg"></span>;

    }

    if (user) {
        
        return Children;

    }


    return <Navigate state={location.pathname} to='/lgin'></Navigate>
};

export default PrivetRoute;