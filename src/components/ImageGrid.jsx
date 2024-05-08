const ImageGrid = ({img, img2, img3, img4}) => {
  return (
    <div className="grid grid-cols-9 gap-4">
        <img src={img} alt="thumnail image" className="col-span-7 rounded-2xl"/>
        <div className="col-span-2 flex flex-col justify-between">
          <img src={img2} alt="thumnail image" className='rounded-lg'/>
          <img src={img3} alt="thumnail image" className='rounded-lg'/>
          <img src={img4} alt="thumnail image" className='rounded-lg'/>
        </div>
    </div>
  )
}

export default ImageGrid