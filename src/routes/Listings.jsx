import { useState } from 'react'
import Filter from '../components/Filter'
import List from '../components/List'
import {listData} from '../lib/dummydata'
import '../index.css'
import SearchFilter from '../components/SearchFilter'
const ListPage = () => {
  const [open, setOpen] = useState(false)

  const menuOpener = () => setOpen(true)
  const menuCloser = () => setOpen(false)

  return (
    <div className='flex sm:grid-cols-3 md:grid-cols-5 hero mx-auto border-t-2 bg'>
      <div className={`filter ${!open && 'max-sm:hidden'} flex custom-transition duration-200 ease-in-out max-sm:w-full`}>
        <Filter menuCloser={menuCloser}/>
      </div>

      <div className={`lists w-full ${open && 'max-sm:hidden'} p-3`}>
        <div>
          <div className="menuIcon sm:hidden w-[40px] cursor-pointer bg-gray-200 p-2 rounded" onClick={menuOpener}>
              <img src="/filter.png" alt="filter icon" />
          </div>

          <div className="search">
            <SearchFilter onSearch={(query) => console.log(query)}/>
          </div>
        </div>

        <div className='h-full overflow-y-auto mt-3 custom-scroll sm:px-5 md:px-2'>
          <div className='grid xl:grid-cols-2 gap-4 green'>
            {listData.map((property, index) => (
              <List key={index} property={property} />
            ))}
          </div>
        </div>
      </div>
      <div className='map w-[60%] hidden md:flex'>
        map
      </div>
    </div>
  )
}

export default ListPage