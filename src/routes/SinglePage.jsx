import { useState } from 'react';
import Details from '../components/Details';

import {listData} from '../lib/dummydata'
import Map from '../components/Map';
const SinglePage = () => {
 
  return (
    <div className='flex hero mx-auto justify-between'>
      
      <div className='property-contents w-1/2'>
        <Details/>
      </div>

      <div className='map flex rounded-lg py-3 ml-3 overflow-hidden'>
        <div className='w-1/2 rounded-lg overflow-hidden'>
          <Map data={listData}/>
        </div>
      </div>
    </div>
  )
}

export default SinglePage


// const SinglePage = () => {

//   return (
//     <div className='flex'>
//       <div className='property-contents w-1/2'>

//       <Details/>
//       </div>
//       <div className='map w-1/2 h-full bg-green-500'>
//         <Map data={listData}/>
//       </div>
//     </div>
//   );
// };

// export default SinglePage;
