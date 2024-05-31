import { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import Upload from '../components/Upload';
import apiRequest from '../lib/apiRequest';
import { useNavigate } from 'react-router-dom';

const NewPost = () => {
  const [error, setError] = useState(null);
  const [desc, setDesc] = useState('');
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  const amenitiesOptions = ["furnished", "pets allowed", "utilities"];

  const handleSubmit = async(e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData);
    try{
      const res = await apiRequest.post('/posts/add', {
          title: inputs.title,
          description: desc,
          price: parseInt(inputs.price),
          address: inputs.address,
          category: inputs.category,
          bedroom: parseInt(inputs.bedroom),
          bathroom: parseInt(inputs.bathroom),
          type: inputs.type,
          size: parseInt(inputs.size),
          property: inputs.property,
          latitude: parseFloat(inputs.latitude),
          longitude: parseFloat(inputs.longitude),
          images: images,
          amenities: [inputs.amenities]

      })

      navigate(`/list/${res.data.id}`)
    }catch(err){
      setError(err.response.data)
    }
  };
  return (
    <div className="flex items-center justify-center">

      <div className={`fixed ${error? 'top-15 left-1/2 opacity-100' : 'top-0 opacity-0'} custom-transition top-15 left-1/2 transform -translate-x-1/2 bg-red-300 p-4 rounded`}>
        <p className="text-red-700 font-semibold">{error}</p>
      </div>


    <form onSubmit={handleSubmit} className="w-1/2">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold mb-6">Create New Post</h2>
        <button type="submit" className="bg-[#0061E0] text-white h-10 px-5 rounded hover:bg-blue-600">
          Create
        </button>
      </div>
      
      <div className="three-inputs flex justify-between gap-4 mb-4">
        <div className="flex-1">
          <input
            type="text"
            name="title"
            minLength={3}
            className="w-full mt-1 p-3 bg-transparent border rounded focus:outline-none focus:border-blue-300"
            placeholder='Title'
          />
        </div>
        <div className="flex-1">
          <input
            type="number"
            name="bedroom"
            min={0}
            className="w-full mt-1 p-3 bg-transparent border rounded focus:outline-none focus:border-blue-300"
            placeholder='Bedrooms'
          />
        </div>
        <div className="flex-1">
          <input
            type="number"
            name="bathroom"
            min={0}
            className="w-full mt-1 p-3 bg-transparent border rounded focus:outline-none focus:border-blue-300"
            placeholder='Bathrooms'
          />
        </div>
      </div>


      <div className="three-inputs flex justify-between gap-4 mb-4">
        <div className="flex-1">
          <input
          type="number"
          name="price"
          min={0}
          className="w-full mt-1 p-3 bg-transparent border rounded focus:outline-none focus:border-blue-300"
          placeholder='Price'
        />
        </div>
        <div className="flex-1">
          <input
            type="text"
            name="address"
            minLength={3}
            className="w-full mt-1 p-3 bg-transparent border rounded focus:outline-none focus:border-blue-300"
            placeholder='Address'
          />
        </div>
        <div className="flex-1">
        <input
          type="number"
          name="size"
          min={0}
          className="w-full mt-1 p-3 bg-transparent border rounded focus:outline-none focus:border-blue-300"
          placeholder='Size'
        />
        </div>
      </div>


      <div className="three-inputs flex justify-between gap-4 mb-4">
        <div className="flex-1">
          <input
            type="text"
            name="latitude"
            className="mt-1 p-3 bg-transparent border rounded focus:outline-none focus:border-blue-300"
            placeholder='Latitude'
            />
        </div>
        <div className="flex-1">
          <input
            type="text"
            name="longitude"
            className="mt-1 p-3 bg-transparent border rounded focus:outline-none focus:border-blue-300"
            placeholder='Longitude'
            />
        </div>
        <div className="flex-1">
          <select name="type" id="type" className="w-full mt-1 p-3 bg-transparent border rounded bg-gray-100 cursor-pointer text-gray-400">
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
      </div>

      <div className="boxes flex justify-between">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Category</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="category"
                value="house"
              />
              <span className="ml-2 text-gray-500">House</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="category"
                value="apartment"
              />
              <span className="ml-2 text-gray-500">Apartment</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="category"
                value="apartment"
              />
              <span className="ml-2 text-gray-500">Room</span>
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Amenities</label>
          <div className="flex gap-4">
            {amenitiesOptions.map((amenity) => (
              <label key={amenity} className="flex items-center">
                <input
                  type="checkbox"
                  name="amenities"
                  value={amenity}
                />
                <span className="ml-2 text-gray-500 capitalize">{amenity}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Description</label>
          <ReactQuill theme='snow' onChange={setDesc} value={desc} className='h-[200px]'/>
      </div>
    </form>


  

      <div className="flex-1 flex flex-col">
        <div className='flex flex-wrap items-center justify-end gap-4'>
          {images && images.map((image, index) => (
            <img key={index} src={image} alt="property photo" className="max-w-[300px] h-auto rounded-lg" />
          ))}
        </div>
        <div className="mt-4 flex flex-col items-end justify-start">
          <Upload uwConfig={{
            cloudName: 'adibmannan',
            uploadPreset: 'skyline',
            multiple: true,
            maxImageFile: 4000000,
            folder: 'posts'
          }} setState={setImages}/>
          <p className="text-sm text-gray-400 mt-1">click twice and upload 4 images</p>
        </div>
      </div>
  </div>
  )
}

export default NewPost


