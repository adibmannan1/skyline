import {userData} from "../lib/dummydata"
const Profile = () => {
  return (
    <div className="flex flex-col">
      <div className="user-info flex justify-between items-center">
        <div className="info flex gap-5">
          <img src={userData[0].img} alt="" className="w-32 h-32 rounded-full object-cover"/>

          <div className="texts text-[#7C8893]">
            <h1 className="text-3xl font-bold text-[#0D263B]">{userData[0].name}</h1>
            <h2 className="font-semibold mb-4">Real Estate Agent</h2>
            <p>{userData[0].age} Years Old</p>
            <div className="location flex gap-2 items-center">
              <img src="/location.svg" alt="" className="w-5"/>
              <p className="font-bold">{userData[0].address}</p>
            </div>
          </div>
        </div>

        <div className="buttons flex gap-4">
          <button className="bg-[#95ccff] text-[#0061E0] px-5 py-2 hover:bg-[#c9e5ff]  ease-in-out duration-200 font-bold flex items-center gap-2"> 
            <div className="rotate-45">
              <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 384 512"><path fill="#0061E0" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
            </div>
            <p>Add A Property</p>
          </button>


          <button className="bg-[#0061E0] px-5 py-2 text-white hover:bg-[#071a34] hover:text-white border-[3px] border-[#0061E0] hover:border-[#071a34] ease-in-out duration-200 font-bold flex items-center gap-2">
            <img src="/update.png" alt="icon" className="w-5"/>
            <p>Update</p>
          </button>
        </div>
      </div>


      <div className="user-content">
        <div className="listings">
          lists
        </div>


        <div className="chats">
          chats
        </div>
      </div>
    </div>
  )
}

export default Profile