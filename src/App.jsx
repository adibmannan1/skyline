import Navbar from "./components/Navbar"
import Home from "./routes/Home"

function App() {
  return (
    <div className="w-full bg-[#F4F9FF] h-screen">
      <div className="w-full md:w-[80%] lg:w-[75%] md:mx-auto px-4 md:px-0">
        <Navbar/>
        <Home/>
      </div>
    </div>
  )
}

export default App