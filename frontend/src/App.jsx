import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Others/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import EmployeeDashbord from "./components/Dashbord/EmployeeDashbord";
import AdminDash from "./components/Dashbord/AdminDash";
import PrivateComponent from "./components/PrivateComponents";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<PrivateComponent />}>
          <Route path="dashboard" element={<EmployeeDashbord />} />
          <Route path="admin" element={<AdminDash />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
