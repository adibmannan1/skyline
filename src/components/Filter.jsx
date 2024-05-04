import CustomInput from "./CustomInput";

const Filter = ({menuCloser}) => {
  const propertyTypes = ['apartment', 'house', 'room', 'vila'];
  const amenities = ['furnished', 'utilities', 'pets allowed', 'extra security'];

  return (
      <div className="px-4 py-5 h-full flex flex-col justify-between">
        {/* Categories Section */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold">Categories</h2>
            <button className="sm:hidden border-2 rounded-full p-1 border-[#ff416a] text-[#5a1827] bg-[#ff416a]" onClick={menuCloser}>

              <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 384 512"><path fill="#5a1827" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                </button>
          </div>
          <ul>
            {propertyTypes.map(property => (
            <li key={property} className="py-1">
              <label className="flex items-center capitalize">
              <input
                type="checkbox"
                className="h-5 w-5 mr-2"
              />
                  {property}
              </label>
            </li>
            ))}
          </ul>
        </div>
        {/* Price Range Section */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Price Range</h2>
          <div className="flex items-center justify-between gap-2 flex-col">
            <input
              type="number"
              placeholder="Min"
              className="border p-2 focus:outline-none border-[#b4c6df]"
            />
            <input
              type="number"
              placeholder="Max"
              className="border p-2 focus:outline-none border-[#b4c6df]"
            />
          </div>
        </div>
        {/* Amenities Section */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Amenities</h2>
          {/* Replace 'amenities' with your actual amenity options */}
          <ul>
            {amenities.map((amenity, index) => (
            <li key={index} className="py-1">
              <label className="flex items-center capitalize">
                <input type="checkbox" className="mr-2 h-5 w-5" />
                {amenity}
              </label>
            </li>
            ))}
          </ul>
        </div>
      </div>

  );
};

export default Filter;
