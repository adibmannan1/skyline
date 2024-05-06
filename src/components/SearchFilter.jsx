import { useState } from 'react';

const SearchFilter = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search your city"
        className="w-full outline-none p-2 rounded"
      />
      <button
        onClick={handleSearch}
        className="ml-2 p-2 bg-[#0061E0] text-white rounded-md"
      >
        <img src="/search-white.png" alt="" className='w-5'/>
      </button>
    </div>
  );
};

export default SearchFilter;
