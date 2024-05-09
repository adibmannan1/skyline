const ImageGrid = ({img, img2, img3, img4}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-9 gap-4">
        <img src={img} alt="thumnail image" className="grid-cols-1 sm:col-span-7 rounded-2xl"/>
        <div className="sm:col-span-2 grid grid-cols-3 max-sm:gap-4 sm:flex sm:flex-col justify-between">
          <img src={img2} alt="thumnail image" className='rounded-lg'/>
          <img src={img3} alt="thumnail image" className='rounded-lg'/>
          <img src={img4} alt="thumnail image" className='rounded-lg'/>
        </div>
    </div>
  )
}

export default ImageGrid