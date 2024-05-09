import { useState } from 'react';
import Details from '../components/Details';

import {listData} from '../lib/dummydata'
import Map from '../components/Map';
import { useParams } from 'react-router-dom';
import ImageGrid from '../components/ImageGrid';
import CallToAction from '../components/CallToAction';
const SinglePage = () => {
  const {id} = useParams();
 
  return (
    <div className='flex hero justify-between py-3 gap-5 md:gap-10 lg:gap-12 xl:gap-16'>
      <div className='property-contents w-[90%] flex flex-col justify-between'>
        <ImageGrid img={listData[(id-1)].img} img2={listData[(id-1)].img2} img3={listData[(id-1)].img3} img4={listData[(id-1)].img4}/>
        <div>
          <Details property={listData[(id-1)]}/>
        </div>
        <CallToAction/>
      </div>

      <div className='map hidden sm:flex'>
        <div className='w-[90%] ml-auto rounded-lg overflow-hidden'>
          <Map data={listData}/>
        </div>
      </div>
    </div>
  )
}

export default SinglePage