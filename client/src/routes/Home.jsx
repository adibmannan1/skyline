import { useEffect, useMemo, useState } from "react";
import Achievements from "../components/Acheivements"
import HeroImage from "../components/HeroImage";
import SearchBar from "../components/SearchBar";
/* eslint-disable react/no-unescaped-entities */
const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = useMemo(() => [
    {
      src: '/house1.png',
      width: 100
    },
    {
      src: '/house2.png',
      width: 100
    },
    {
      src: '/house3.png',
      width: 100
    }
  ], []);

  useEffect(() => {

    const timer = setTimeout(() => {
      const nextIndex = (currentImageIndex + 1) % images.length;
      setCurrentImageIndex(nextIndex);
    }, 3000);
  
    return () => clearTimeout(timer);
  }, [currentImageIndex, images.length]);
  

  return (
    <>
      <div className="mt-5 md:mt-0 max-sm:h-full hero w-full mx-auto dark:bg-black bg-transparent  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">

      {/* lg:w-[95%] xl:w-[90%] */}
      <main className="z-10 flex flex-col w-full md:flex-row items-center justify-between mb-10">
       <div className="texts flex flex-col gap-10">
         <div className="content flex flex-col gap-5">
             <h1 className="hero-h font-bold leading-none text-[#0D263B]">Discover A Place You'll Love To Live.</h1>
             <p className="w-full text-[#7C8893]">Skyline is a real estate solution that gives you the info about homes.
             Search confidently with your trusted source of homes.</p>
             <SearchBar/>
         </div>
         <div className="content flex flex-col gap-5">
             <div className="acheivements flex gap-14">
                 <Achievements number="10+" description="Years of experience"/>
                 <Achievements number="350" description="Reviews Posted"/>
                 <Achievements number="2030+" description="Properties listed"/>
             </div>
         </div>
       </div>
       <div className="image w-full xl:w-[80%]">
         <HeroImage src={images[currentImageIndex].src} />
       </div>
   </main>




      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-[#F4F9FF] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>
    </>
  )
}

export default Home
