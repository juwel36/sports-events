import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";



const Root = () => {
  return (
   <div className="bg-black">
<Navbar></Navbar>
     <div className="max-w-6xl mx-auto">
<Outlet></Outlet>
    </div>

   </div>
  );
};

export default Root;