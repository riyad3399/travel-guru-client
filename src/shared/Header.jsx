import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("hello");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <nav className="flex gap-4 justify-center p-4 items-center">
        <Link className="font-semibold text-red-800" to="/">
          Home
        </Link>
        <Link className="font-semibold text-red-800" to="/news">
          News
        </Link>
        <Link className="font-semibold text-red-800" to="/destination">
          Destination
        </Link>
        <Link className="font-semibold text-red-800" to="/blog">
          Blog
        </Link>
        <Link className="font-semibold text-red-800 mr-5" to="/contact">
          Contact
        </Link>

        {user ? (
          <>
            {user.photoURL ? <img className="h-10 rounded-full" src={user.photoURL} alt="" /> : <FaUserAlt className="h-10" />}
            <button
              onClick={handleLogout}
              className="bg-green-400 px-4 py-2 rounded-lg"
            >
              Log out
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="bg-blue-400 px-4 py-2 rounded-lg">Login</button>
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
