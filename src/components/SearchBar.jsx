const SearchBar = () => {
  return (
    <div className="">
      <div className="filters">
          <div className="">
            Buy
          </div>
          <div className="">
            Rent
          </div>
      </div>
      <form action="">
        <input type="text" name="location" placeholder="City" />
        <input type="text" name="maxPrice" min={0} max={1000000000} placeholder="Max Price" />
        <input type="text" name="minPrice" min={0} max={10000000} placeholder="Min Price" />
        <button>
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  )
}

export default SearchBar