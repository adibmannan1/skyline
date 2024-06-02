import Details from '../components/Details';
import Map from '../components/Map';
import ImageGrid from '../components/ImageGrid';
import CallToAction from '../components/CallToAction';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from "../context/AuthContext";
import apiRequest from '../lib/apiRequest';
const SinglePage = () => {
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()

  const post = useLoaderData();
  const [saved, setSaved] = useState(post.isSaved)
  
  const handleSave = async() => {
    if(!user){
      navigate('/login')
    }
    
    try{
      await apiRequest.post('/users/save', {
        postId: post.id
      })
      setSaved(prev => !prev)
      console.log('it worked')
    }catch(err){
      console.log(err)
    }
   
      // post.isSaved = false
   

  }

  return (
    <div className='flex hero justify-between py-3'>
      <div className='property-contents sm:w-[80%] mx-auto flex flex-col justify-between z-10'>
        <ImageGrid images={post.images}/>
        <div>
          <Details property={post}/>
        </div>
        <CallToAction saved={saved} handleSave={handleSave}/>
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