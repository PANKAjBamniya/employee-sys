import React, { useEffect } from "react";
import Header from "../Others/Header";
import TaskList from "../Others/TaskList";
import TackListitem from "../TaskList/TackListitem";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const EmployeeDashbord = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/home");
    } else if (user.isAdmin) {
      navigate("/admin");
    }
  }, [user]);
  return (
    <div>
      <div className="p-8 bg-[#1c1c1c]">
        <Header />
        <TaskList />
        <TackListitem />
      </div>
    </div>
  );
};

export default EmployeeDashbord;
