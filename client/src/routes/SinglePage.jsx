import Details from '../components/Details';
import Map from '../components/Map';
import ImageGrid from '../components/ImageGrid';
import CallToAction from '../components/CallToAction';
import { useLoaderData } from 'react-router-dom';
const SinglePage = () => {
  
  const post = useLoaderData();
  return (
    <div className='flex hero justify-between py-3'>
      <div className='property-contents sm:w-[80%] mx-auto flex flex-col justify-between z-10'>
        <ImageGrid images={post.images}/>
        <div>
          <Details property={post}/>
        </div>
        <CallToAction/>
      </div>

      <div className='map hidden sm:flex z-0'>
        <div className='w-[90%] ml-auto rounded-lg overflow-hidden'>
          <Map item={post} single={true}/>
        </div>
      </div>
    </div>
  )
}

export default SinglePage