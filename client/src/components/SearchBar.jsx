import { useEffect, useRef, useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState({
    type: 'buy',
    location: '',
    maxPrice: 0,
    minPrice: 0
  });

  const locationInputRef = useRef(null);

  // Use useEffect to focus the "City" input field when the component mounts
  useEffect(() => {
    // Check if the input ref exists and then focus it
    if (locationInputRef.current) {
      locationInputRef.current.focus();
    }
  }, []);

  return (
    <div className="my-6">
      <div className="filters flex bg-white rounded-t-lg w-[150px] justify-between font-semibold text-[#91a4b5] overflow-hidden uppercase cursor-pointer">
          <div className={`${query.type === 'buy'? 'bg-[#95ccff] text-[#0061E0]' : ''} px-4 py-2`} onClick={() => setQuery({...query, type: 'buy'})}>
            Buy
          </div>
          <div className={`${query.type === 'rent'? 'bg-[#95ccff] text-[#0061E0]' : ''} px-4 py-2`} onClick={() => setQuery({...query, type: 'rent'})}>
            Rent
          </div>
      </div>
      <form action="" className="grid md:grid-cols-2 bg-white rounded-b-xl rounded-r-xl overflow-hidden custom-shadow">
        <input type="text" name="location" placeholder="City" className="input" ref={locationInputRef}/>
        <input type="text" name="maxPrice" min={0} max={1000000000} placeholder="Max Price" className="input"/>
        <input type="text" name="minPrice" min={0} max={10000000} placeholder="Min Price" className="input"/>
        <button className="bg-[#95ccff] py-3 px-6 flex text-[#0061E0] font-semibold uppercase gap-4 items-center">
          <img src="/search.png" alt="" className="w-5 h-5"/>
          <h1>Search</h1>
        </button>
      </form>
    </div>
  )
}

export default SearchBar