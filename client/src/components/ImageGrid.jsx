import { useState } from "react"
import Slider from "./Slider"

const ImageGrid = ({img, img2, img3, img4}) => {
  const [currentIndex, setCurrentIndex] = useState(null)
  const images = [img, img2, img3, img4]
  return (
    <div className="grid grid-cols-1 sm:grid-cols-9 gap-4 cursor-pointer">
      {
        currentIndex !== null && (
          <Slider images={images} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>
        )
      }
      <img src={img} alt="thumnail image" className="grid-cols-1 sm:col-span-7 rounded-2xl" onClick={() => setCurrentIndex(0)}/>
      <div className="sm:col-span-2 grid grid-cols-3 max-sm:gap-4 sm:flex sm:flex-col justify-between">
        <img src={img2} alt="thumnail image" className='rounded-lg' onClick={() => setCurrentIndex(1)}/>
        <img src={img3} alt="thumnail image" className='rounded-lg' onClick={() => setCurrentIndex(2)}/>
        <img src={img4} alt="thumnail image" className='rounded-lg' onClick={() => setCurrentIndex(3)}/>
      </div>
    </div>
  )
}

export default ImageGrid