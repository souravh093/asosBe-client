import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { RootContext } from "../../Provider/Provider";

const Header = () => {
  const { user, logOutUser } = useContext(RootContext);

  const handleLogout = () => {
    logOutUser()
  }
  return (
    <div className="flex justify-between bg-gray-50 items-center py-5 max-w-7xl mx-auto">
      <div className="flex items-center">
        <div className="text-2xl">&copy;</div>
        <div className="text-xl font-bold">asosEcom</div>
      </div>
      <div className="flex items-center gap-10">
        <Link to="">Man</Link>
        <Link to="">Women</Link>
        <Link to="">Beauty</Link>
        <Link to="">Sport</Link>
      </div>
      <div className="flex gap-10 items-center">
        <FaSearch className="text-xl" />
        {user ? (
          <div className="flex items-center gap-2">
            <h2>{user.displayName}</h2>
            <FaUserAlt className="text-xl" />
            <button onClick={handleLogout} className="bg-gray-700 text-white py-2 px-3 rounded-md">
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link to="/login" className="bg-gray-700 text-white py-2 px-3 rounded-md">
              Login
            </Link>
            <Link to="/register" className="bg-gray-700 text-white py-2 px-3 rounded-md">
              Register
            </Link>
          </div>
        )}
        <Link to="/cart" className="relative">
          <FaShoppingCart className="text-xl" />
          <div className="absolute bottom-2 bg-blue-400 text-white flex items-center justify-center rounded-full p-3 w-4 h-4 right-0 left-3">
            3
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
