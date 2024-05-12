import { listData } from "../lib/dummydata"
import List from "./List"

const Listings = () => {
  return (
      <div className='grid xl:grid-cols-2 gap-4 green'>
        {listData.map((property, index) => (
          <List key={index} property={property} />
        ))}
      </div>
  )
}

export default Listings