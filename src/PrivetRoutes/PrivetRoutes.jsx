import { useContext } from "react";
import { AuthContext } from "../Authprovider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";



const PrivetRoutes = ({children}) => {
  const {user,loading}=useContext(AuthContext)


  
  if(loading){
    return <div className="flex justify-center items-center">
      <span className="loading loading-ring loading-lg text-white"></span>
    </div>
  }
  
  if(user){
    return children
  }
  
    return <Navigate  to='/login'></Navigate>


    
};

export default PrivetRoutes;