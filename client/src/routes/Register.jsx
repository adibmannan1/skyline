const Register = () => {
  return (
    <div className="hero flex flex-col sm:flex-row max-sm:gap-10 pb-5">
      <div className="flex-1 flex items-center justify-center">
        <img src="/register-image.svg" alt="Register" className="max-w-full h-auto" />
      </div>
      <div className="flex-1 flex items-center justify-center sm:p-10">
        <div className="w-full max-w-md">
          <h2 className="text-xl sm:text-3xl font-bold mb-6 text-[#0D263B] tracking-tight">Create an Account</h2>
          <form className="flex flex-col gap-4">
            <div>
              <input type="text" name="username" className="w-full p-2 sm:p-3 lg:p-4 rounded border border-gray-300 focus:outline-none focus:border-[#0061E0] text-xs sm:text-sm bg-transparent" placeholder="Full Name"/>
            </div>
            <div>
              <input type="email" name="email" className="w-full p-2 sm:p-3 lg:p-4 rounded border border-gray-300 focus:outline-none focus:border-[#0061E0] text-xs sm:text-sm bg-transparent" placeholder="Email"/>
            </div>

            <div className="two-inputs flex justify-between gap-4">
              <div className="flex-1">
                <input type="password" name="password" className="w-full p-2 sm:p-3 lg:p-4 rounded border border-gray-300 focus:outline-none focus:border-[#0061E0] text-xs sm:text-sm bg-transparent" placeholder="Password"/>
              </div>
              <div className="flex-1">
                <input type="number" name="age" className="w-full p-2 sm:p-3 lg:p-4 rounded border border-gray-300 focus:outline-none focus:border-[#0061E0] text-xs sm:text-sm bg-transparent" placeholder="Age"/>
              </div>
            </div>

            
            <div>
              <input type="text" name="address" className="w-full p-2 sm:p-3 lg:p-4 rounded border border-gray-300 focus:outline-none focus:border-[#0061E0] text-xs sm:text-sm bg-transparent" placeholder="Address"/>
            </div>
            <div>
              <button type="submit" className="w-full flex justify-center p-2 sm:p-3 lg:p-4 rounded border border-transparent text-sm font-bold text-white bg-[#0061E0] hover:bg-[#0D263B] focus:outline-none uppercase tracking-[3px] duration-200 ease-in-out">
                Be A User
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;



