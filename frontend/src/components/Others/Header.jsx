import React, { useEffect } from "react";
import { FaStudiovinari } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOutUser } from "../../features/auth/authSlice";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logOutUser());
    navigate("/");
  };

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="flex bg-gray-700 items-end justify-between p-6 text-white rounded-md shadow-lg">
      <h1 className="text-xl font-medium ">
        <span className="text-3xl font-semibold flex items-center gap-2 ">
          {user?.name || ""}  <FaStudiovinari />{" "}
        </span>
      </h1>
      {user ? (
        <>
          <button
            onClick={handleLogOut}
            className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 transition duration-300 shadow-md"
          >
            Log Out
          </button>
        </>
      ) : (
        <>
          <div className="flex gap-2">
            <Link
              to="/login"
              className="bg-teal-500 text-white py-2 px-6 rounded-md hover:bg-teal-600 transition duration-300 shadow-md"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-emerald-700 text-white py-2 px-6 rounded-md hover:bg-teal-800 transition duration-300 shadow-md"
            >
              Register
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
