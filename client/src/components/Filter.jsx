import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Filter = ({ menuCloser }) => {
  const [searchParams, setSearchParams] = useSearchParams(); // Get the search parameters from the URL

  const [query, setQuery] = useState({
    type: searchParams.get('type') || '',
    bedroom: searchParams.get('bedroom') || 0,
    minPrice: searchParams.get('minPrice') || 0,
    maxPrice: searchParams.get('maxPrice') || 100000000,
    category: searchParams.get('category') || '',
    amenity1: searchParams.get('amenity1') || '',
    amenity2: searchParams.get('amenity2') || '',
    amenity3: searchParams.get('amenity3') || ''
  });


  const handleChange = (e) => {
    setQuery(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  useEffect(() => {
    setSearchParams(query)
  }, [query, setSearchParams]);

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
        <form>
          <div className="py-1">
            <label className="flex items-center capitalize cursor-pointer">
              <input
                type="radio"
                id='apartment'
                name='category'
                value='apartment'
                className="h-5 w-5 mr-2 cursor-pointer"
                onChange={handleChange}
              />
              Apartment
            </label>
          </div>
          <li className="py-1">
            <label className="flex items-center capitalize cursor-pointer">
              <input
                type="radio"
                id='house'
                name='category'
                value='house'
                className="h-5 w-5 mr-2 cursor-pointer"
                onChange={handleChange}
              />
              House
            </label>
          </li>
          <li className="py-1">
            <label className="flex items-center capitalize cursor-pointer">
              <input
                type="radio"
                id='room'
                name='category'
                value='room'
                className="h-5 w-5 mr-2 cursor-pointer"
                onChange={handleChange}
              />
              Room
            </label>
          </li>
        </form>
      </div>

       {/* Type Filter */}
       <div className="mb-4 flex flex-col">
        <label htmlFor="type" className="text-lg font-semibold mb-2">
          Type
        </label>
        <select name="type" id="type" className='w-full p-2 focus:outline-none border border-[#b4c6df] bg-transparent font-medium text-[#7C8893]'onChange={handleChange}>
          <option value="buy">Buy</option>
          <option value="rent">Rent</option>
        </select>
      </div>

       {/* Bedroom Filter */}
       <div className="mb-4">
        <label htmlFor="bedroom" className="text-lg font-semibold mb-2 cursor-pointer">
          Bedrooms
        </label>
        <input
          type="number"
          name='bedroom'
          id="bedroom"
          placeholder="No of bedrooms"
          className="border w-full p-2 focus:outline-none border-[#b4c6df]"
          onChange={handleChange}/>
      </div>

      {/* Price Range Section */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Price Range</h2>
        <div className="flex gap-2">
          <input
            type="number"
            name='minPrice'
            placeholder="Min"
            className="border p-2 focus:outline-none border-[#b4c6df] w-full"
            onChange={handleChange}/>
          <input
            type="number"
            name='maxPrice'
            placeholder="Max"
            className="border p-2 focus:outline-none border-[#b4c6df] w-full"
            onChange={handleChange}/>
        </div>
      </div>

      {/* Amenities Section */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Amenities</h2>
        <form>

          <div className="py-1">
            <label  className="flex items-center capitalize">
              <input id='furniture' name='amenity1' type="checkbox"
              className="mr-2 h-5 w-5 cursor-pointer" onChange={(e)=>{
                setQuery(prev => ({ ...prev, [e.target.name]: e.target.checked? e.target.id: '' }));
              }}/>
              Furniture
            </label>
          </div>

          <div className="py-1">
            <label className="flex items-center capitalize">
              <input id='utilities' name='amenity2' type="checkbox" 
              className="mr-2 h-5 w-5 cursor-pointer" onChange={(e)=>{
                setQuery(prev => ({ ...prev, [e.target.name]: e.target.checked? e.target.id: '' }));
              }}/>
              Utilities
            </label>
          </div>

          <div className="py-1">
            <label  className="flex items-center capitalize">
              <input id='pets-allowed' name='amenity3' type="checkbox" 
              className="mr-2 h-5 w-5 cursor-pointer" onChange={(e)=>{
                setQuery(prev => ({ ...prev, [e.target.name]: e.target.checked? e.target.id: '' }));
              }}/>
               Pets Allowed
            </label>
          </div>
     
        </form>
      </div>

    </div>
  );
};

export default Filter;
