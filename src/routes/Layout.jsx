import Navbar from "../components/Navbar";
import "../index.css";
import { Outlet } from "react-router-dom";

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

export default Layout;