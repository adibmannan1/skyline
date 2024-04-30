const Navbar = () => {
    const links = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "About",
            link: "/about"
        },
        {
            name: "Agents",
            link: "/agents"
        },
        {
            name: "Contact",
            link: "/contact"
        }
    ]
  return (
    <nav className="flex justify-between items-center h-[70px] font-bold">
        <a href="/" className="logo flex items-center gap-5">
            <img src="/logo.svg" alt="" className="w-7 md:w-9 "/>
            <h1 className="text-xl hidden md:block text-[#0D263B]">Skyline</h1>
        </a>
        <div className="links flex gap-3 xl:gap-0 lg:w-[30%] justify-between font-semibold text-sm md:text-base">
            {
                links.map(link => <a href={link.link} key={link.name} className="link text-[#7C8893] hover:text-black hover:-translate-y-1 ease-in-out duration-200">{link.name}</a>)
            }
        </div>
        <div className="authorization flex gap-5 text-xs md:text-sm">
            <button className="text-[#0061E0] hover:text-black ease-in-out duration-200">Log In</button>
            <button className="bg-[#0061E0] px-5 py-2 text-white hover:bg-transparent hover:text-[#0061E0] border-[3px] border-[#0061E0] ease-in-out duration-200">Sign Up</button>
        </div>
    </nav>
  )
}

export default Navbar