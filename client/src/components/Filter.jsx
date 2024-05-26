import { useState } from 'react';

const Filter = ({ menuCloser }) => {
  const propertyTypes = ['apartment', 'house', 'room'];
  const amenities = ['furnished', 'utilities', 'pets allowed'];

  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedBedrooms, setSelectedBedrooms] = useState(0);

  const handleBedroomChange = (e) => {
    const { value } = e.target;
    const isSelected = selectedBedrooms === value;

    if (isSelected) {
      setSelectedBedrooms(selectedBedrooms.filter(bedroom => bedroom !== value));
    } else {
      setSelectedBedrooms([...selectedBedrooms, value]);
    }
  };


  return (
    <div className="pr-4 py-5 h-screen sm:h-full flex flex-col justify-between w-full bg-[#F4F9FF]">
      {/* Categories Section */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold">Categories</h2>
          <button
            className="sm:hidden border-2 rounded-full p-1 border-[#ff416a] text-[#5a1827] bg-[#ff416a]"
            onClick={menuCloser}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="18"
              width="18"
              viewBox="0 0 384 512"
            >
              <path
                fill="#5a1827"
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
              />
            </svg>
          </button>
        </div>
        <ul>
          {propertyTypes.map(property => (
            <li key={property} className="py-1">
              <label htmlFor={property} className="flex items-center capitalize cursor-pointer">
                <input
                  type="radio"
                  id={property}
                  name='radio'
                  value={property}
                  className="h-5 w-5 mr-2 cursor-pointer"
                />
                {property}
              </label>
            </li>
          ))}
        </ul>
      </div>

       {/* Type Filter */}
       <div className="mb-4 flex flex-col">
        <label htmlFor="type" className="text-lg font-semibold mb-2">
          Type
        </label>
        <select name="type" id="type" className='w-full p-2 focus:outline-none border border-[#b4c6df] bg-transparent font-medium text-[#7C8893]'>
          <option value="buy">Buy</option>
          <option value="rent">Rent</option>
        </select>
      </div>

       {/* Bedroom Filter */}
       <div className="mb-4">
        <label htmlFor="bedroomInput" className="text-lg font-semibold mb-2 cursor-pointer">
          Bedrooms
        </label>
        <input
          type="number"
          name='bedroomInput'
          id="bedroomInput"
          placeholder="No of bedrooms"
          className="border w-full p-2 focus:outline-none border-[#b4c6df]"
          // You can add onChange handler here to capture the input value
        />
      </div>

      {/* Price Range Section */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Price Range</h2>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Min"
            className="border p-2 focus:outline-none border-[#b4c6df] w-full"
            value={minPrice}
            onChange={e => setMinPrice(e.target.value)}
          />
          <input
            type="number"
            placeholder="Max"
            className="border p-2 focus:outline-none border-[#b4c6df] w-full"
            value={maxPrice}
            onChange={e => setMaxPrice(e.target.value)}
          />
        </div>
      </div>

      {/* Amenities Section */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Amenities</h2>
        <ul>
          {amenities.map((amenity, index) => (
            <li key={index} className="py-1">
              <label className="flex items-center capitalize">
                <input type="checkbox" className="mr-2 h-5 w-5 cursor-pointer" />
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
