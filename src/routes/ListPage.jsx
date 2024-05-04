import { useState } from 'react'
import Filter from '../components/Filter'
import List from '../components/List'
import {listData} from '../lib/dummydata'
const ListPage = () => {
  const [open, setOpen] = useState(false)

  const data = listData
  const menuOpener = () => setOpen(true)
  const menuCloser = () => setOpen(false)

  return (
    <div className='container flex sm:grid-cols-3 md:grid-cols-5 hero mx-auto border-t-2'>
      <div className={`filter ${!open && 'max-sm:hidden'} flex border-r-2`}>
        <Filter menuCloser={menuCloser}/>
      </div>

      <div className={`lists w-full ${open && 'max-sm:hidden'}`}>
        <div className="menuIcon sm:hidden w-[30px] cursor-pointer" onClick={menuOpener}>
            <img src="/menu.png" alt="menu icon" />
        </div>
        <div className='grid grid-cols-2'>
          {listData.map((property, index) => (
            <List key={index} property={property} />
          ))}
        </div>
      </div>
      <div className='map w-[70%] hidden md:flex'>
        map
      </div>
    </div>
  )
}

export default ListPage