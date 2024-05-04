import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./routes/Home"
import ListPage from "./routes/ListPage";
import SinglePage from "./routes/SinglePage.jsx";

function App() {


  return (
    <>
      <div className="w-full bg-[#F4F9FF] min-h-screen md:h-screen">
        <div className="w-full md:w-[80%] lg:w-[75%] md:mx-auto px-4 md:px-0">
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/:id" element={<SinglePage />}/>
            <Route path="/list" element={<ListPage />}/>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App