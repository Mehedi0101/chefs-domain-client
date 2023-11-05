import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import FadeLoader from "react-spinners/FadeLoader";
import Proptypes from "prop-types";

const PrivateRoute = ({children}) => {
    const { currentUser, loading } = useContext(AuthContext);
    const {pathname} = useLocation();

    if(loading){
        return <div className="h-[60vh] flex justify-center items-center"><FadeLoader color="#f78da7" /></div>;
    }

    if(!currentUser) {
        return <Navigate state={pathname} to="/login"/>;
    } 
        
    return children;
};

PrivateRoute.propTypes = {
    children: Proptypes.node.isRequired
}

export default PrivateRoute;