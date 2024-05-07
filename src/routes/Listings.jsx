import { useState } from 'react'
import Filter from '../components/Filter'
import List from '../components/List'
import {listData} from '../lib/dummydata'
import '../index.css'
import SearchFilter from '../components/SearchFilter'
import Map from '../components/Map'
const ListPage = () => {
  const [open, setOpen] = useState(false)

  const menuOpener = () => setOpen(true)
  const menuCloser = () => setOpen(false)

  return (
    <div className='flex relative hero mx-auto border-t-2'>
      <div className={`${open ? 'left-0' : 'left-[-110%]'} absolute top-0 z-20 md:static custom-transition max-sm:w-full xl:w-[45%]`}>
        <Filter menuCloser={menuCloser}/>
      </div>

      <div className={`lists w-[130%] py-3`}>
        <div className='md:px-2 flex gap-4'>
          <div className="menuIcon md:hidden w-[40px] cursor-pointer bg-gray-200 p-2 rounded border-2 border-gray-300" onClick={menuOpener}>
              <img src="/filter.png" alt="filter icon" />
          </div>

          <div className="search w-full">
            <SearchFilter onSearch={(query) => console.log(query)}/>
          </div>
        </div>

        <div className='list-height overflow-y-scroll mt-3 custom-scroll md:px-2 pb-2'>
          <div className='grid xl:grid-cols-2 gap-4 green'>
            {listData.map((property, index) => (
              <List key={index} property={property} />
            ))}
          </div>
        </div>
      </div>

        <div className='w-full py-3 max-md:pl-3 pl-2 hidden xs:block'>
          <div className='h-full rounded-lg overflow-hidden'>
            <Map data={listData}/>
          </div>
        </div>

    </div>
  )
}

export default ListPage