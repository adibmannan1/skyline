const CallToAction = () => {
  return (
    <div className='flex justify-between gap-4 items-center'>
          <button className='flex items-center gap-2 sm:gap-0 md:gap-4 font-bold border-2 
          border-[#7C8893] px-2 py-1 md:px-6 md:py-3 rounded ease-in-out duration-200 hover:bg-[#d7dee5]'>
            <img src="/chat.svg" alt="" className='w-3 md:w-5'/>
            <h1 className='text-[#7C8893] text-sm md:text-base'>Talk To The Owner</h1>
          </button>
          <button className='flex gap-2 sm:gap-0 md:gap-4 font-bold items-center bg-[#0061E0] px-2 py-1 md:px-6 md:py-3 text-white hover:bg-[#09213f] ease-in-out duration-200 rounded'>
            <img src="/save.png" alt="" className='w-3 h-3 md:w-5 md:h-5'/>
            <h1 className="text-sm md:text-base">Add To Favorites</h1>
          </button>
    </div>
  )
}

export default CallToAction