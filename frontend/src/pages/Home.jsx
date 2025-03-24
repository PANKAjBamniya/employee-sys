import React, { useEffect } from "react";
import Header from "../components/Others/Header";
import img from "../assets/hero.webp";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else if (user.isAdmin) {
      navigate("/admin");
    } else {
      navigate("/dashboard");
    }
  });

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen">
      <Header />

      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              <span className="text-blue-500">Employe</span>
              <span className="text-blue-400">e</span> <br />
              Management System
            </h1>

            <p className="text-gray-300 text-lg">
              Streamline your workforce operations with our comprehensive
              employee management solution.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all shadow-lg">
                Get Started
              </button>
              <button className="bg-transparent hover:bg-gray-800 text-blue-400 font-medium py-3 px-6 border border-blue-400 rounded-lg transition-all">
                Learn More
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <img src={img} alt="Employee Management" className="max-w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
