import { useEffect, useMemo, useState } from "react";
import Achievements from "./Acheivements"
import HeroImage from "./HeroImage";
/* eslint-disable react/no-unescaped-entities */
const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = useMemo(() => [
    {
      src: '/house1.png',
      width: 100
    },
    {
      src: '/house2.png',
      width: 90
    },
    {
      src: '/house3.png',
      width: 80
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
    <div>
      <div className="hero w-full dark:bg-black bg-transparent  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">


      <main className="z-10 flex items-center pb-12 gap-10">
          <div className="texts flex flex-col gap-10">
            <div className="content flex flex-col gap-5">
                <h1 className="hero-h font-bold leading-none text-[#0D263B]">Discover A Place You'll Love To Live.</h1>
                <p className="w-full text-[#7C8893]">Skyline is a real estate soluation that gives you the local scoop about homes.
                Search confidently with your trusted source of homes for sale or rent.</p>
            </div>
            <div className="content flex flex-col gap-5">
                <div className="acheivements flex gap-14">
                    <Achievements number="10+" description="Years of experience"/>
                    <Achievements number="350" description="Reviews Posted"/>
                    <Achievements number="2030+" description="Properties listed"/>
                </div>
            </div>
          </div>
          <div className="image pb-5 w-[130%]">
            <HeroImage src={images[currentImageIndex].src} width={images[currentImageIndex].width} />
          </div>
      </main>


      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-[#F4F9FF] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>
    </div>
  )
}

export default Hero