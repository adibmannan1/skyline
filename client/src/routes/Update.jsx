import apiRequest from "../lib/apiRequest";
import { useContext, useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import { AuthContext } from "../context/AuthContext";
const Update = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const {user, updateUser} = useContext(AuthContext)


  const handleSubmit = async(e) => {
    // setError('')
    // setLoading(true)
    // e.preventDefault();
    // const formData = new FormData(e.target);
    // const name = formData.get("name");
    // const username = formData.get("username");
    // const email = formData.get("email");
    // const age = Number(formData.get("age"));
    // const address = formData.get("address");
    // try{
    //   const res = await apiRequest.post("/auth/register", {
    //     name,
    //     username,
    //     email,
    //     age,
    //     address
    //   })
    //   navigate('/profile')
    //   localStorage.setItem('user', JSON.stringify(res.data))
    //   console.log(res.data)
    // }catch(err){
    //   setError(err.response.data)
    //   console.log(err.response.data)
    // }finally{
    //   setLoading(false)
    // }

  }
  return (
    <div className="hero flex flex-col sm:flex-row max-sm:gap-10 pb-5">
 
      <div className={`fixed ${error? 'top-15 left-1/2 opacity-100' : 'top-0 opacity-0'} custom-transition top-15 left-1/2 transform -translate-x-1/2 bg-red-300 p-4 rounded`}>
        <p className="text-red-700 font-semibold">{error}</p>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <img src={user.avatar || '/dummydp.png'} alt="Register" className="max-w-full h-auto rounded-[50px]" />
      </div>
      <div className="flex-1 flex items-center justify-center sm:p-10">
        <div className="w-full max-w-md">
          <h2 className="text-xl sm:text-3xl font-bold mb-6 text-[#0D263B] tracking-tight">Update Your Profile</h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

            <input required minLength={4} type="text" name="username" className="w-full p-2 sm:p-3 lg:p-4 rounded border border-gray-300 focus:outline-none focus:border-[#0061E0] text-xs sm:text-sm bg-transparent" placeholder="User Name" value={user.username}/>

            <input required type="email" name="email" className="w-full p-2 sm:p-3 lg:p-4 rounded border border-gray-300 focus:outline-none focus:border-[#0061E0] text-xs sm:text-sm bg-transparent" placeholder="Email" value={user.email}/>

            <input required type="number" name="age" className="w-full p-2 sm:p-3 lg:p-4 rounded border border-gray-300 focus:outline-none focus:border-[#0061E0] text-xs sm:text-sm bg-transparent" placeholder="Age" value={user.age}/>


            <input required type="text" name="address" className="w-full p-2 sm:p-3 lg:p-4 rounded border border-gray-300 focus:outline-none focus:border-[#0061E0] text-xs sm:text-sm bg-transparent" placeholder="Address" value={user.address}/>

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

export default Update;



