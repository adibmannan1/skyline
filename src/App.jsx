import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./routes/Home"
import ListPage from "./routes/Listings.jsx";
import SinglePage from "./routes/SinglePage.jsx";
import './index.css'
import Profile from "./routes/Profile.jsx";

function App() {


  return (
    <>
      <div className="w-full bg-[#F4F9FF] md:h-screen">
        <div className="w-full md:mx-auto px-4 md:px-0 md:w-[90%] mx-auto">
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/list/:id" element={<SinglePage />}/>
            <Route path="/list" element={<ListPage />}/>
            <Route path="/profile" element={<Profile />}/>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App