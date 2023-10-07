import { useContext, useEffect } from "react";
import { AuthContext } from "../Authprovider/Authprovider";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const PrivetRoutes = ({children}) => {
  const {user,loading}=useContext(AuthContext)
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'You need to log in to access this page.',
        showConfirmButton: false,
        timer: 3000
      })
      
    
      navigate("/login");
    }
  }, [user, navigate]);
  
  if(loading){
    return <div className="flex justify-center items-center">
      <span className="loading loading-ring loading-lg"></span>
    </div>
  }
  
  if(user){
    return children
  }
  
    return <Navigate to='/login'></Navigate>
};

export default PrivetRoutes;