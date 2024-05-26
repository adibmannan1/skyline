import { useState } from "react"
import Slider from "./Slider"

const ImageGrid = ({images}) => {
  const [currentIndex, setCurrentIndex] = useState(null)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-9 gap-4 cursor-pointer">
      {
        currentIndex !== null && (
          <Slider images={images} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>
        )
      }
      <img src={images[0]} alt="thumnail image" className="grid-cols-1 sm:col-span-7 rounded-2xl" onClick={() => setCurrentIndex(0)}/>
      <div className="sm:col-span-2 grid grid-cols-3 max-sm:gap-4 sm:flex sm:flex-col justify-between">
        <img src={images[1]} alt="thumnail image" className='rounded-lg' onClick={() => setCurrentIndex(1)}/>
        <img src={images[2]} alt="thumnail image" className='rounded-lg' onClick={() => setCurrentIndex(2)}/>
        <img src={images[3]} alt="thumnail image" className='rounded-lg' onClick={() => setCurrentIndex(3)}/>
      </div>
    </div>
  )
}

export default ImageGrid