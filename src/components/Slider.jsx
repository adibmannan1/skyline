const Slider = ({ images, currentIndex, setCurrentIndex }) => {
    return (
      <div className="Slider-container absolute top-0 left-0 bg-[#0a1829d4] backdrop-blur-lg flex items-center justify-between h-screen w-full overflow-hidden px-2 md:px-8 gap-2 lg:gap-4 xl:gap-0">
         <button className="border-2 rounded-full p-2 md:p-5 border-[#ff416a] text-[#5a1827] bg-[#ff416a] hover:bg-black hover:border-black duration-300 ease-in-out absolute top-10 right-10" onClick={() => setCurrentIndex(null)}>

            <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 384 512"><path fill="#5a1827" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
        </button>
        <div className="arrow rotate-180 w-32 cursor-pointer hover:brightness-75 duration-300 ease-in-out" onClick={() => {
            if (currentIndex === 0) {
                setCurrentIndex(images.length - 1)
            }else{
                setCurrentIndex(currentIndex - 1)
            }
        }}>
          <img src="/arrow.png" alt="arrow icon" />
        </div>
        <div className="image-container h-full flex justify-center items-center">

            <img
              src={images[currentIndex]}
              alt="slider image"
              className="object-contain h-full w-full"
            />

        </div>
        <div className="arrow w-32 cursor-pointer hover:brightness-75 duration-300 ease-in-out" onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}>
          <img src="/arrow.png" alt="arrow icon"/>
        </div>
      </div>
    );
  };
  
  export default Slider;
  