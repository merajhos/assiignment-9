import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { useContext } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="navbar bg-green-100 shadow-md pr-4 md:pr-10 z-50 sticky top-0  ">
      <div className="navbar-start">
        <div className="dropdown text-black md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-10 mt-3 w-74 p-2 shadow text-center items-center gap-5 pt-10"
          >
            <li className="bg-green-300 w-full text-center items-center rounded">
              <Link to="/">Home</Link>
            </li>
            <li className="bg-green-300 w-full text-center items-center rounded">
              <Link to="/Plants">Plants</Link>
            </li>
            <li className="bg-green-300 w-full text-center items-center rounded">
              {" "}
              <Link to="/profile">Profile</Link>
            </li>

            {!user && (
              <div className="flex justify-between gap-10 mt-5">
                <Link
                  to="/login"
                  className="btn py-0 border border-none  bg-green-600 text-white"
                >
                  Login
                </Link>
                <Link
                  to="/Signup"
                  className="btn py-0 border border-none  bg-green-600 text-white"
                >
                  Register
                </Link>
              </div>
            )}
          </ul>
        </div>
        <Link to="/" className="  text-xl font-bold text-green-700">
          🌿 GreenNest
        </Link>
      </div>

      <div className="navbar-center hidden md:flex">
        <div className="flex gap-6 items-center text-black">
          <NavLink to="/" className=" transition font-medium">
            Home
          </NavLink>
          <NavLink
            to="/plants"
            className=" transition font-medium active:underline"
          >
            Plants
          </NavLink>
          <NavLink
            to="/profile"
            className=" transition font-medium"
          >
           Profile
          </NavLink>
        </div>
      </div>

      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end text-black">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full ">
                <img
                  src={user.photoURL || "https://www.facebook.com/share/p/17VCnnRWSo/ "}
                  alt="User Avatar"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 p-2 w-58 gap-2 text-white  rounded-box shadow  text-center items-center " style={{ backgroundImage: `url(https://s.yimg.com/fz/api/res/1.2/c9Ij3VxBj8OubbFPCVacGw--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD00MTI7cHhvZmY9NTA7cHlvZmY9MTAwO3E9ODA7c3M9MTt3PTM4OA--/https://i.pinimg.com/736x/06/76/39/0676397e0202a7f62267d7c2a08850b4.jpg)`}} 
            > <img src={user.photoURL || "https://www.facebook.com/share/p/17VCnnRWSo/ "}
                  alt="User Avatar" className="rounded-full w-15 h-15" />
               <li className="px-2 font-semibold ">{user.displayName}</li>
              <li className="px-2 font-semibold  ">
                { user.email}
              </li>
              <li>
                <button
                  className="btn py-2 px-10 bg-red-500 text-white hover:bg-red-600 w-full" onClick={logOut}>
                  LogOut
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <Link
              to="/login"
              className="btn btn-sm border border-none hover:outline-3 outline-offset-3  outline-fuchsia-500 bg-green-600 text-white"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
