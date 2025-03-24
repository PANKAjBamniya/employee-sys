import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../features/auth/authSlice";
import { toast } from "react-toastify";

const Register = () => {
  const { user } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name, email, password, password2 } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error("Password Not match");
    } else {
      dispatch(registerUser(formData));
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/admin");
    }
  }, [user]);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-900 relative">
      <div className="border border-gray-700 p-8 rounded-lg shadow-xl bg-gray-800 w-96 relative overflow-hidden">
        <h2 className="text-3xl font-bold text-emerald-400 mb-6 text-center">
          Create an Account
        </h2>

        <form onSubmit={submitHandler} className="flex flex-col space-y-4">
          <div className="relative">
            <input
              value={name}
              name="name"
              onChange={handleChange}
              className="border text-white border-gray-600 py-3 px-4 text-lg outline-none bg-gray-700 rounded-lg placeholder-gray-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400 w-full pl-10"
              type="text"
              placeholder="Full Name"
              required
            />
            <span className="absolute left-3 top-4 text-emerald-400">👤</span>
          </div>

          <div className="relative">
            <input
              value={email}
              name="email"
              onChange={handleChange}
              className="border text-white border-gray-600 py-3 px-4 text-lg outline-none bg-gray-700 rounded-lg placeholder-gray-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400 w-full pl-10"
              type="email"
              placeholder="Email Address"
              required
            />
            <span className="absolute left-3 top-4 text-emerald-400">📧</span>
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

          <div className="relative">
            <input
              value={password2}
              name="password2"
              onChange={handleChange}
              className="border text-white border-gray-600 py-3 px-4 text-lg outline-none bg-gray-700 rounded-lg placeholder-gray-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400 w-full pl-10"
              type="password"
              placeholder="Confirm Password"
              required
            />
            <span className="absolute left-3 top-4 text-emerald-400">🔒</span>
          </div>

          <button className="bg-emerald-500 text-white py-3 px-4 text-lg rounded-lg hover:bg-emerald-600 transition duration-300 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1">
            Register
          </button>

          <div className="flex justify-center items-center space-x-1 text-gray-400">
            <p className="text-sm">Already have an account?</p>
            <Link
              to="/login"
              className="text-sm font-medium text-emerald-400 hover:text-emerald-300"
            >
              Log in
            </Link>
          </div>
        </form>
      </div>

      <Link
        to="/"
        className="absolute top-8 bg-gray-700 rounded-md px-4 py-2 left-8 flex items-center text-white hover:text-emerald-400 transition-colors duration-300"
      >
        <span className="font-medium">Back</span>
      </Link>
    </div>
  );
};

export default Register;
