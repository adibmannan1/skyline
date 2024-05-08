import { useState } from 'react';
import Details from '../components/Details';

import {listData} from '../lib/dummydata'
import Map from '../components/Map';
import { useParams } from 'react-router-dom';
import ImageGrid from '../components/ImageGrid';
const SinglePage = () => {
  const {id} = useParams();
 
  return (
    <div className='flex hero justify-between py-3 gap-16'>
      <div className='property-contents w-[110%]'>
        <ImageGrid img={listData[(id-1)].img} img2={listData[(id-1)].img2} img3={listData[(id-1)].img3} img4={listData[(id-1)].img4}/>
        <Details property={listData[(id-1)]}/>
      </div>

      <div className='map flex'>
        <div className='w-full rounded-lg overflow-hidden'>
          <Map data={listData}/>
        </div>
      </div>
    </div>
  )
}

export default SinglePage