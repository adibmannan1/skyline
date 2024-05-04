const List = ({ property }) => {
  const { title, img, bedroom, bathroom, price, address } = property;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={img} alt={title} className="w-full h-64 object-cover object-center" />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-2">{address}</p>
        <div className="flex items-center text-gray-600 text-sm mb-2">
          <span className="mr-2">{bedroom} bedrooms</span>
          <span className="mr-2">{bathroom} bathrooms</span>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold text-indigo-700">${price}</h3>
          <button className="bg-indigo-700 hover:bg-indigo-800 text-white px-4 py-2 rounded-lg">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default List;
