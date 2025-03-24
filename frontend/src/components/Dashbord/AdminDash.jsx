import React, { useEffect } from "react";
import Header from "../Others/Header";
import CreateTask from "../Others/CreateTask";
import AllTask from "../Others/AllTask";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminDash = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    } else if (user.isAdmin) {
      navigate("/admin");
    } else {
      navigate("/dashboard");
    }
  }, [user]);
  return (
    <div className=" w-full p-8 bg-gray-900">
      <Header />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDash;
