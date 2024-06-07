import { Suspense, useContext, useState } from "react";
import Listings from "../components/Listings";
import { AuthContext } from "../context/AuthContext";
import { Await, Link, useLoaderData } from "react-router-dom";

const Profile = () => {
  const {user} = useContext(AuthContext)
  const data = useLoaderData()

  const [open, setOpen] = useState(false);
  const chatOpener = () => setOpen(true)
  const chatCloser = () => setOpen(false)
  return (
    <div className="flex flex-col gap-10 hero pt-5 overflow-hidden relative">
      <div className="chat-opener absolute bottom-5 right-3 bg-[#0061E0] p-5 rounded-full sm:hidden">
        <img src="/message-white.png" alt="" className="w-7 h-7 cursor-pointer" onClick={chatOpener}/>
      </div>

      {/* User Info Section */}
      <div className="user-info flex flex-col gap-6 md:gap-0 md:flex-row justify-between items-start md:items-center">
        <div className="info flex gap-5">

          <img src={user.avatar || '/dummydp.png'} alt="" className="w-32 h-32 rounded-full object-cover"/>

          <div className="texts text-[#7C8893]">
            <h1 className="text-3xl font-bold text-[#0D263B] capitalize">{user.name}</h1>
            <p className="mb-4 text-xl">{user.age} Years Old</p>
            <h2 className="font-semibold">{user.email}</h2>
            <div className="location flex gap-2 items-center">
              <img src="/location.svg" alt="" className="hidden sm:block w-5 h-5"/>
              <p className="font-bold">{user.address}</p>
            </div>
          </div>

        </div>

        <div className="buttons flex gap-4">
          <Link to={`/profile/add`}>
            <button className="bg-[#95ccff] rounded text-[#0061E0] px-5 py-2 hover:bg-[#c9e5ff]  ease-in-out duration-200 font-bold flex items-center gap-2"> 
              <div className="rotate-45">
                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 384 512"><path fill="#0061E0" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
              </div>
              <p>Add A Property</p>
            </button>
          </Link>
          <Link to={`/profile/update/${user.id}`}>
            <button className="bg-[#0061E0] rounded px-5 py-2 text-white hover:bg-[#071a34] hover:text-white border-[3px] border-[#0061E0] hover:border-[#071a34] ease-in-out duration-200 font-bold flex items-center gap-2">
              <img src="/update.png" alt="icon" className="w-5"/>
              <p>Update</p>
            </button>
          </Link>
        </div>
      </div>
      
      {/* User Content Section */}
      <div className="user-content flex justify-between gap-5 items-stretch overflow-hidden">
        {/* Listings Section */}
        <div className="listings flex-1 h-full custom-scroll overflow-y-auto  rounded-lg">
          <h1 className="text-xl font-bold text-[#0D263B] mb-4 bg-white py-2 px-4 rounded-lg inline-block">Listings</h1>
          <div className="flex-1 pb-3">
          <Suspense
            fallback={<p>Loading...</p>}
            >
            <Await
              resolve={data.posts}
              errorElement={
                <p>No items listed</p>
              }
            >
              {posts => <Listings listData={posts.data.userPosts}/>}
            </Await>
          </Suspense>
          </div>
        </div>


        {/* Saved Lists Section */}
        <div className="listings flex-1 h-full custom-scroll overflow-y-auto  rounded-lg">
          <h1 className="text-xl font-bold text-[#0D263B] mb-4 bg-white py-2 px-4 rounded-lg inline-block">Saved Lists</h1>
          <div className="flex-1 pb-3">
          <Suspense
            fallback={<p>Loading...</p>}
            >
            <Await
              resolve={data.posts}
              errorElement={
                <p>No items listed</p>
              }
            >
              {posts => <Listings listData={posts.data.savedPosts}/>}
            </Await>
          </Suspense>
          </div>
        </div>


        
      </div>
    </div>
  );
};

export default Profile;
