import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { userData } from "../lib/dummydata"

const Navbar = () => {
    const user = true
    const [active, setActive] = useState(false)
    const links = [
        {
            name: "Home",
            link: "/",
            icon: "/home.png"
        },
        {
            name: "About",
            link: "/about",
            icon: "/about.png"
        },
        {
            name: "Agents",
            link: "/agents",
            icon: "/agent.png"
        },
        {
            name: "Contact",
            link: "/contact",
            icon: "/contact.png"
        }
    ]

    const menuOpener = () => setActive(true)
    const menuCloser = () => setActive(false)
  return (
    <nav className="flex justify-between items-center h-[70px] font-bold">
        <NavLink to="/" className="logo flex items-center gap-5">
            <img src="/logo.svg" alt="" className="w-7 md:w-9 "/>
            <h1 className="text-xl lg:block md:hidden sm:block text-[#0D263B] mt-2">Skyline</h1>
        </NavLink>
        <div className="links hidden sm:flex gap-3 xl:gap-0 lg:w-[30%] justify-between font-semibold text-sm md:text-base">
            {
                links.map(link => <NavLink to={link.link} key={link.name} 
                    className={e=> e.isActive? "link text-[#0D263B] hover:text-black hover:-translate-y-1 ease-in-out duration-200": 
                        "link text-[#7C8893] hover:text-black hover:-translate-y-1 ease-in-out duration-200"} 
                    
                    >{link.name}</NavLink>)
            }
        </div>
        <div className="authorization sm:flex gap-5 text-xs md:text-sm hidden">
            {user? 
                <Link to={'/profile'} className="user flex items-center gap-5 relative">
                    <div className="notification absolute -top-2 -right-2 bg-[#ff416a] w-5 h-5 flex items-center justify-center p-3 rounded-full text-white">3</div>
                    <img src={userData[0].img} alt="user image" className="w-11 h-11 object-cover rounded-full"/>
                    <h1 className="bg-[#0061E0] px-5 py-2 text-white hover:bg-transparent hover:text-[#0061E0] border-[3px] border-[#0061E0] ease-in-out duration-200 cursor-pointer">{userData[0].name}</h1>
                </Link>:
                <>
                    <button className="text-[#0061E0] hover:text-black ease-in-out duration-200">Log In</button>
                    <button className="bg-[#0061E0] px-5 py-2 text-white hover:bg-transparent hover:text-[#0061E0] border-[3px] border-[#0061E0] ease-in-out duration-200">Sign Up</button>
                </>
            }
        </div>
        <div className="menuIcon sm:hidden w-[30px] cursor-pointer" onClick={() => menuOpener()}>
            <img src="/menu.png" alt="menu icon" />
        </div>
        <div className={`mobile-menu absolute top-0 z-20 bg-[#0d263bd2] w-full text-[#F4F9FF] h-screen sm:hidden ${active ? "right-0" : "right-[-100%]"} custom-transition backdrop-blur-lg`}>
           
            <div className="w-[90%] mx-auto flex gap-5 items-center mt-5">
                <NavLink to="/" className="logo items-center gap-3 flex mr-2">
                    <img src="/logo-white.svg" alt="" className="w-7 md:w-9"/>
                    <h1 className="text-xl text-white mt-1">Skyline</h1>
                </NavLink>
                <button className="border-2 rounded-full p-1 border-[#ff416a] text-[#5a1827] bg-[#ff416a]" onClick={menuCloser}>

                    <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 384 512"><path fill="#5a1827" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                </button>


            </div>
            <div className="links flex flex-col gap-5 mt-10">
                {
                    links.map(link => <NavLink to={link.link} key={link.name} 
                        className={(e)=> e.isActive? "bg-[#dcecff] w-[90%] mx-auto py-2 px-4 rounded text-[#0d263b] flex gap-3 items-center": 
                        "bg-[#dcecff6e] w-[90%] mx-auto py-2 px-4 rounded text-[#0d263b] flex gap-3 items-center"} onClick={menuCloser}
                    >
                        <img src={link.icon} alt="" className="w-5 h-5"/>
                        <h1>{link.name}</h1>
                    </NavLink>)
                }
            </div>
            <div className="authorization flex w-[90%] mx-auto gap-5 mt-10 text-[#dcecff]">
                <button className="uppercase border-2 rounded px-3 py-2 border-[#dcecff]">Log In</button>
                <button className="uppercase border-2 rounded px-3 py-2 border-[#dcecff]">Sign Up</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar