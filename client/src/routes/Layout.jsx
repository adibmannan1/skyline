import { useContext } from "react";
import Navbar from "../components/Navbar";
import "../index.css";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Layout() {
  return (
    <div className="w-full bg-[#F4F9FF] md:h-screen">
        <div className="w-full md:mx-auto px-4 md:px-0 md:w-[90%] mx-auto">
            <Navbar/>
            <Outlet/>
        </div>
    </div>
  );
}

function RequiredLayout() {
  const {user} = useContext(AuthContext)

  return (
    !user? <Navigate to="/login"/> :
    <div className="w-full bg-[#F4F9FF] md:h-screen">
        <div className="w-full md:mx-auto px-4 md:px-0 md:w-[90%] mx-auto">
          <Navbar/>
          <Outlet/>
        </div>
    </div>
  );
}
export {Layout, RequiredLayout};

