import { Link } from "react-router-dom";

const List = ({ property }) => {
  const { id, title, images, bedroom, bathroom, price, address } = property;

  return (
    <div className="bg-white rounded-lg p-2">
      <Link to={`/list/${id}`}><img src={images[0]} alt={title} className="w-full h-36 object-cover rounded cursor-pointer" /></Link>
      <div className="p-4">
        <Link to={`/list/${id}`}>
          <h2 className="font-bold text-lg mb-2 cursor-pointer">{title}</h2>
        </Link>
          <p className="text-gray-500 mb-2 font-medium">{address}</p>
        <div className="flex flex-col gap-2 text-gray-600 text-sm mb-2">
          <div className="mr-2 flex items-center gap-2">
            <img src="/bed.png" alt="" className="w-7 h-7 bg-[#e4f0ff] p-1 rounded"/>
            <p>{bedroom} bedrooms</p>
          </div>
          <div className="mr-2 flex items-center gap-2">
            <img src="/bath.png" alt="" className="w-7 h-7 bg-[#e4f0ff] p-1 rounded"/>
            <p>{bathroom} bathrooms</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold text-[#0061E0]">€{price}</h3>
          <div className="cursor-pointer flex gap-4">
            <img src="/save.svg" alt="" className="w-5 h-5 "/>
            <img src="/chat.svg" alt="" className="w-5 h-5"/>
          </div>
        </div>
        </div>
      </div>
  );
};

export default List;
