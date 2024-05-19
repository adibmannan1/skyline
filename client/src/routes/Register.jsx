import apiRequest from "../lib/apiRequest";
import { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
const Register = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    setError('')
    setLoading(true)
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    const age = Number(formData.get("age"));
    const address = formData.get("address");
    try{
      const res = await apiRequest.post("/auth/register", {
        name,
        username,
        email,
        password,
        age,
        address
      })
      navigate('/profile')
      localStorage.setItem('user', JSON.stringify(res.data))
      console.log(res.data)
    }catch(err){
      setError(err.response.data)
      console.log(err.response.data)
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
        <img src="/register-image.svg" alt="Register" className="max-w-full h-auto" />
      </div>
      <div className="flex-1 flex items-center justify-center sm:p-10">
        <div className="w-full max-w-md">
          <h2 className="text-xl sm:text-3xl font-bold mb-6 text-[#0D263B] tracking-tight">Create an Account</h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <input required minLength={4} type="text" name="name" className="w-full p-2 sm:p-3 lg:p-4 rounded border border-gray-300 focus:outline-none focus:border-[#0061E0] text-xs sm:text-sm bg-transparent" placeholder="Full Name"/>
            </div>

            <div className="two-inputs flex justify-between gap-4">
              <div className="flex-1">
                <input required type="email" name="email" className="w-full p-2 sm:p-3 lg:p-4 rounded border border-gray-300 focus:outline-none focus:border-[#0061E0] text-xs sm:text-sm bg-transparent" placeholder="Email"/>
              </div>
              <div className="flex-1">
                <input required minLength={4} type="text" name="username" className="w-full p-2 sm:p-3 lg:p-4 rounded border border-gray-300 focus:outline-none focus:border-[#0061E0] text-xs sm:text-sm bg-transparent" placeholder="User Name"/>
              </div>
            </div>

            <div className="two-inputs flex justify-between gap-4">
              <div className="flex-1">
                <input required minLength={6} type="password" name="password" className="w-full p-2 sm:p-3 lg:p-4 rounded border border-gray-300 focus:outline-none focus:border-[#0061E0] text-xs sm:text-sm bg-transparent" placeholder="Password"/>
              </div>
              <div className="flex-1">
                <input required type="number" name="age" className="w-full p-2 sm:p-3 lg:p-4 rounded border border-gray-300 focus:outline-none focus:border-[#0061E0] text-xs sm:text-sm bg-transparent" placeholder="Age"/>
              </div>
            </div>

            
            <div>
              <input required type="text" name="address" className="w-full p-2 sm:p-3 lg:p-4 rounded border border-gray-300 focus:outline-none focus:border-[#0061E0] text-xs sm:text-sm bg-transparent" placeholder="Address"/>
            </div>
            <div>
              <button disabled={loading} type="submit" className="w-full flex justify-center p-2 sm:p-3 lg:p-4 rounded border border-transparent text-sm font-bold text-white bg-[#0061E0] hover:bg-[#0D263B] focus:outline-none uppercase tracking-[3px] duration-200 ease-in-out">
                Be A User
              </button>
              <Link to="/login">
                <p className="text-[#a5a5a5] font-light mt-2 text-sm">Already have an account? Login
                </p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;



