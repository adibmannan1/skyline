import List from "./List"

const Listings = ({listData}) => {
  console.log(listData)
  return (
      <div className='grid xl:grid-cols-2 gap-4 green'>
        {listData.map((property, index) => (
          <List key={index} property={property} />
        ))}
      </div>
  )
}

export default Listings