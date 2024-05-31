import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
const SearchBar = () => {
  const [query, setQuery] = useState({
    type: 'buy',
    bedroom: 0,
    maxPrice: 100000000,
    minPrice: 0
  });
  const switchType = (val) => {
    setQuery(prev => ({ ...prev, type: val }));
  };

  const handleChange = (e) => {
    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const bedRoomInputRef = useRef(null);

  // Use useEffect to focus the "Bedroom" input field when the component mounts
  useEffect(() => {
    // Check if the input ref exists and then focus it
    if (bedRoomInputRef.current) {
      bedRoomInputRef.current.focus();
    }
  }, []);

  return (
    <div className="my-6 w-[93%]">
      <div className="filters flex bg-white rounded-t-lg w-[150px] justify-between font-semibold text-[#91a4b5] overflow-hidden uppercase cursor-pointer">
          <div className={`${query.type === 'buy'? 'bg-[#95ccff] text-[#0061E0]' : ''} px-4 py-2`} onClick={() => switchType('buy')}>
            Buy
          </div>
          <div className={`${query.type === 'rent'? 'bg-[#95ccff] text-[#0061E0]' : ''} px-4 py-2`} onClick={() => switchType('rent')}>
            Rent
          </div>
      </div>
      <form action="" className="grid md:grid-cols-2 bg-white rounded-b-xl rounded-r-xl overflow-hidden custom-shadow">
        <input type="number" name="bedroom" placeholder="Bedrooms" className="input" ref={bedRoomInputRef} onChange={handleChange}/>
        <input type="number" name="maxPrice" min={0} max={1000000000} placeholder="Max Price" className="input" onChange={handleChange}/>
        <input type="number" name="minPrice" min={0} max={10000000} placeholder="Min Price" className="input" onChange={handleChange}/>
        <Link
          to={`/list?type=${query.type}&bedroom=${query.bedroom}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`} className="bg-[#95ccff] py-3 px-6 flex text-[#0061E0] font-semibold uppercase gap-4 items-center"
        >
            <img src="/search.png" alt="" className="w-5 h-5"/>
            <h1>Search</h1>
        </Link>
      </form>
    </div>
  )
}

export default SearchBar