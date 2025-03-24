import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../features/auth/authSlice";
import loader from "../assets/loader.gif";
import { toast } from "react-toastify";

const Login = () => {
  const { user, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }

    if (isError && message) {
      toast.error(message, {
        position: "top-right", // Position of the toast
        autoClose: 3000, // Auto close in 3 seconds
        hideProgressBar: false, // Show progress bar
        closeOnClick: true, // Close on click
        pauseOnHover: true, // Pause on hover
        draggable: true, // Allow dragging the toast
        theme: "colored", // Themed toast
      });
    }
  }, [user, isLoading, isError, message]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <img src={loader} alt="" className="w-80" />
      </div>
    );
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-900 relative">
      {/* Card with perspective effect */}
      <div className="border border-gray-700 p-8 rounded-lg shadow-xl bg-gray-800 w-96 transform hover:scale-105 transition-transform duration-300 relative overflow-hidden">
        {/* Decorative element */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gray-700 rounded-full opacity-50"></div>

        <h2 className="text-3xl font-bold text-emerald-400 mb-6 text-center">
          Welcome Back
        </h2>

        <form
          onSubmit={(e) => submitHandler(e)}
          className="flex flex-col space-y-4"
        >
          <div className="relative">
            <input
              value={email}
              name="email"
              onChange={handleChange}
              className="border text-white border-gray-600 py-3 px-4 text-lg outline-none bg-gray-700 rounded-lg placeholder-gray-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400 w-full pl-10"
              type="email"
              placeholder="Email address"
              required
            />
            <span className="absolute left-3 top-4 text-emerald-400">@</span>
          </div>

          <div className="relative">
            <input
              value={password}
              name="password"
              onChange={handleChange}
              className="border text-white border-gray-600 py-3 px-4 text-lg outline-none bg-gray-700 rounded-lg placeholder-gray-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400 w-full pl-10"
              type="password"
              placeholder="Password"
              required
            />
            <span className="absolute left-3 top-4 text-emerald-400">🔒</span>
          </div>

          <button className="bg-emerald-500 text-white py-3 px-4 text-lg rounded-lg hover:bg-emerald-600 transition duration-300 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1">
            Log In
          </button>

          <div className="flex justify-center items-center space-x-1 text-gray-400">
            <p className="text-sm">Don't have an account?</p>
            <Link
              to="/register"
              className="text-sm font-medium text-emerald-400 hover:text-emerald-300"
            >
              Sign up
            </Link>
          </div>
        </form>
      </div>

      {/* Back button in bottom left */}
      <Link
        to="/"
        className="absolute top-8 bg-gray-700 rounded-md px-4 py-2 left-8 flex items-center text-white hover:text-emerald-400 transition-colors duration-300"
      >
        <span className="font-medium">Back</span>
      </Link>
    </div>
  );
};

export default Login;
