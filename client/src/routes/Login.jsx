import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import apiRequest from "../lib/apiRequest";
const Login = () => {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  //context
  const {updateUser} = useContext(AuthContext)

  const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const username = formData.get("username")
    const email = formData.get("email");
    const password = formData.get("password")

    try{
      const res = await apiRequest.post("/auth/login", {
        username,
        email,
        password,
      })
      navigate('/profile')
      
      updateUser(res.data)
    }catch(err){
      setError(err.response.data)
    }finally{
      setLoading(false)
    }
  }
  return (
    <div className="hero flex flex-col sm:flex-row max-sm:gap-10 pb-5">
      <div className={`fixed ${error? 'top-15 left-1/2 opacity-100' : 'top-0 opacity-0'} custom-transition top-15 left-1/2 transform -translate-x-1/2 bg-red-300 p-4 rounded`}>
        <p className="text-red-700 font-semibold">{error}</p>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <img src="/hero-image.svg" alt="Register" className="w-[90%] mb-6"/>
      </div>
      <div className="flex-1 flex items-center justify-center sm:p-10">
        <div className="w-full max-w-md">
          <h2 className="text-xl sm:text-3xl font-bold mb-6 text-[#0D263B] tracking-tight">Login</h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <input required minLength={4} type="text" name="username" className="w-full p-2 sm:p-3 lg:p-4 rounded border border-gray-300 focus:outline-none focus:border-[#0061E0] text-xs sm:text-sm bg-transparent" placeholder="User Name"/>
            </div>

            <div>
              <input required type="email" name="email" className="w-full p-2 sm:p-3 lg:p-4 rounded border border-gray-300 focus:outline-none focus:border-[#0061E0] text-xs sm:text-sm bg-transparent" placeholder="Email"/>
            </div>

              <div>
                <input required minLength={6} type="password" name="password" className="w-full p-2 sm:p-3 lg:p-4 rounded border border-gray-300 focus:outline-none focus:border-[#0061E0] text-xs sm:text-sm bg-transparent" placeholder="Password"/>
              </div>

            <div>
              <button disabled={loading} type="submit" className="w-full flex justify-center p-2 sm:p-3 lg:p-4 rounded border border-transparent text-sm font-bold text-white bg-[#0061E0] hover:bg-[#0D263B] focus:outline-none uppercase tracking-[3px] duration-200 ease-in-out">
                Be A User
              </button>
              <Link to="/register">
                <p className="text-[#a5a5a5] font-light mt-2 text-sm">
                  Do not have an account? Register
                </p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;



