import { Suspense, useState } from 'react'
import Filter from '../components/Filter'
import '../index.css'
import SearchFilter from '../components/SearchFilter'
import Map from '../components/Map'
import Listings from '../components/Listings'
import { Await, useLoaderData } from 'react-router-dom'
const ListPage = () => {
  const [open, setOpen] = useState(false)

  const menuOpener = () => setOpen(true)
  const menuCloser = () => setOpen(false)

  const listData = useLoaderData();


  return (
    <div className='flex relative hero mx-auto border-t-2'>
      <div className={`${open ? 'left-0' : 'left-[-110%]'} absolute top-0 z-20 md:static custom-transition max-sm:w-full xl:w-[45%]`}>
        <Filter menuCloser={menuCloser}/>
      </div>

      <div className={`lists w-[135%] py-3`}>
        <div className='md:px-2 flex gap-4'>
          <div className="menuIcon md:hidden w-[40px] cursor-pointer bg-gray-200 p-2 rounded border-2 border-gray-300" onClick={menuOpener}>
              <img src="/filter.png" alt="filter icon" />
          </div>

          <div className="search w-full">
            <SearchFilter onSearch={(query) => console.log(query)}/>
          </div>
        </div>
        <div className='list-height overflow-y-scroll mt-3 custom-scroll md:px-2 pb-2'>
        <Suspense
        fallback={<p>Loading...</p>}
        >
          <Await
            resolve={listData.posts}
            errorElement={
              <p>Error while loading.</p>
            }
          >
            {posts => (
            <Listings listData={posts.data}/>
            )}
          </Await>
        </Suspense>
        </div>
      </div>

        <div className='w-full py-3 max-md:pl-3 pl-2 hidden xs:block'>
          <div className='h-full rounded-lg overflow-hidden'>
          <Suspense
        fallback={<p>Loading...</p>}
        >
          <Await
            resolve={listData.posts}
            errorElement={
              <p>Error while loading.</p>
            }
          >
            {posts => (
              <Map item={posts.data} single={false}/>
            )}
          </Await>
        </Suspense>
          </div>
        </div>

    </div>
  )
}

export default ListPage