import { Link, NavLink } from "react-router-dom";
import profile from '../assets/user.png'

const Navbar = () => {

const catagory =<>
<li> <NavLink to='/'> Home </NavLink> </li>
<li> <NavLink to='/blogs'> Blogs </NavLink> </li>
<li> <NavLink to='/contact'> Contact Us </NavLink> </li>


</>


  return (
    <div>
      <div className="navbar bg-gray-800">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="text-white menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {
        catagory
       }
      </ul>
    </div>
    <p className=" normal-case text-white text-xl">AGJ<span className="text-base">sports</span> </p>
  
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal text-white px-1">
    {
        catagory
       }
    </ul>
  </div>
  <div className="navbar-end">
  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={profile} />
        </div>
      </label>
    <Link to='/login'>  <button className="btn btn-neutral"> Log in </button></Link>
  </div>
</div>
    </div>
  );
};

export default Navbar;