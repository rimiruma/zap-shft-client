// src/components/Navbar.jsx (or wherever your file is)
import { Link, NavLink } from "react-router"; // use react-router-dom
import Logo from "../components/Logo/Logo";
import { FaArrowUp } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { useState } from "react";

const Navbar = () => {
  // destructure possible logout function names from your hook.
  // keep user as the main prop we care about.
  const { user, signOutUser, logOut, signOut } = useAuth() || {};

  // pick whichever logout function your hook provides
  const logoutFn = signOutUser || logOut || signOut;

  const [loading, setLoading] = useState(false);

  const handleLogout = async (e) => {
    e.preventDefault();
    logOut()
    .then()
    .catch(error => {
        console.log(error);
        
    })
  };

  const links = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/services">Services</NavLink></li>
      <li><NavLink to="/coverage">Coverage</NavLink></li>
      <li><NavLink to="/about">About Us</NavLink></li>
      <li><NavLink to="/send-parcel">SendParcel</NavLink></li>
      <li><NavLink to="/blog">Blog</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>

      {
        user && <>
      <li><NavLink to="/dashboard/my-parcels">My Parcels</NavLink></li>
        </>
      }
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>

          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>

        <Link to="/" className="btn btn-ghost text-xl">
          <Logo />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>

      <div className="navbar-end gap-2">
        {/* If you meant signIn, better label as Sign In */}
       

        {/* Show Logout button when user exists */}
        {user ? (
          <button
            type="button"
            onClick={handleLogout}
            className="btn bg-red-600 text-white p-2 px-8 rounded-full">LogOut
          </button>
        ) : (
          <Link to="/register" className="btn rounded-full p-3 px-8 bg-lime-700 text-white">Sign Up</Link>
        )}
         <Link to="/rider" className="btn rounded-full p-3 px-8 bg-lime-700 text-white">Be a Rider</Link>

        <div className="bg-black text-lime-500 rounded-full p-2">
          <FaArrowUp />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
