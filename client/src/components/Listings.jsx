import { useState } from "react"
import List from "./List"

const Listings = ({listData}) => {
  const [listDataItems, setListDataItems] = useState(listData)
  
  return (
    <div className='grid xl:grid-cols-2 gap-4 green'>
      {listDataItems.map((property, index) => (
        <List key={index} property={property} />
      ))}
    </div>
  )
}

export default Listings