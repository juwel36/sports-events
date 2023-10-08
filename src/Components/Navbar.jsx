import React from "react";
import { Link, NavLink } from "react-router-dom";
import png from '../assets/user.png'
import { AuthContext } from "../Authprovider/Authprovider";
import { useContext } from "react";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);

  const loggedOut = () => {
    logOut()
      .then(() => {
        console.log("Logged out successfully");
      })
      .catch(error => {
        console.log("Error logging out:", error);
      });
  };

  const category = (
    <>
      <li> <NavLink to='/'>Home</NavLink> </li>
      <li> <NavLink to='/blogs'>Blogs</NavLink> </li>
      <li> <NavLink to='/contact'>Contact Us</NavLink> </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-gray-800">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn text-white btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="text-white menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-500 rounded-box w-52">
              {category}
            </ul>
          </div>
          <p className="normal-case text-white text-2xl">AGJ<span className="text-base">sports</span></p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-white px-1">
            {category}
          </ul>
        </div>
        <div className="navbar-end">
{
  user ? <p className="text-white"> {user.displayName}</p> : ''
}

          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">

            {user && user.photoURL ? <img src={user.photoURL} alt="User Profile" /> : "" }
            </div>
          </label>
          {user ? (
            <button className="btn bg-slate-500 text-white border-none" onClick={loggedOut}>Sign Out</button>
          ) : (
            <NavLink to='/login' className="btn bg-slate-700 text-white border-none px-6">Log in</NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
