import { useState } from "react";
import { userData } from "../lib/dummydata";

const Details = ({ property }) => {
  const menuItems = [
    { id: 'price', content: property.price },
    { id: 'details', content: property.size },
    { id: 'description', content: property.description }
  ];

  const [activeMenuItem, setActiveMenuItem] = useState(menuItems[0]);

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  return (
    <div className="w-full max-md:py-2 h-[180px] md:h-[220px]">
      {/* Horizontal Menu */}
      <div className="flex gap-4 mb-2 overflow-x-auto">
        {menuItems.map((menuItem) => (
          <button
            key={menuItem.id}
            className={`menu-item ${activeMenuItem.id === menuItem.id ? 'active' : ''}`}
            onClick={() => handleMenuItemClick(menuItem)}
          >
            <div
              className={`capitalize px-4 py-2 md:text-lg ${
                activeMenuItem.id === menuItem.id ? 'bg-black text-white rounded custom-transition' : ''
              }`}
            >
              {menuItem.id}
            </div>
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="py-3 rounded h-full overflow-hidden">
        {activeMenuItem.id === 'price' ? (
          <Price property={property} />
        ) : activeMenuItem.id === 'details' ? (
          <DetailComponent property={property} />
        ) : (
          <div className="font-semibold text-[#7C8893] h-full overflow-y-auto">{property.description}</div>
        )}
      </div>
    </div>
  );
};

export default Details;



export const Price = ({property}) => {
  return(
  <div className="flex justify-between item-center">

    <div className="price flex flex-col justify-between">
      <div className="single-price flex flex-col md:text-lg">
        <h1 className="font-medium">Total Price</h1>
        <p className="font-bold text-lg md:text-3xl">€ {property.price}</p>
      </div>
      <div className="price-per-sqm flex flex-col md:text-lg">
        <h1 className="font-medium">Price Per Square Meters</h1>
        <p className="text-gray-500 font-bold text-lg md:text-3xl">€ {Math.round(property.price/property.size)} / sqm</p>
      </div>
    </div>


    <div className="user flex flex-col gap-2 justify-between items-center">
      <div className="w-16 h-16 md:w-28 md:h-28 rounded-full overflow-hidden">
        <img
          src={userData[0].img}
          alt="user image"
          className="w-full h-full object-cover"
        />
      </div>
        <h1 className="font-bold md:font-extrabold bg-gray-200 text-sm md:text-base p-2 rounded">{userData[0].name}</h1>
      </div>
    </div>
  )
}
export const DetailComponent = ({property}) => {
  return(
  <div className="flex justify-between item-center room-details gap-4">
    
      <div className="room-dimensions font-medium flex flex-col gap-3 text-lg ">
        <h1 className="font-bold md:font-extrabold uppercase mb-0 md:mb-3">Room Dimensions</h1>
        <div className="text-[#7C8893]  flex items-center gap-2">
          <img src="/size.png" alt="size image" className="w-4 h-4 md:w-6 md:h-6"/>
          <p>{property.size} sqm</p>
        </div>
        <div className="text-[#7C8893] flex items-center gap-2 rounded">
          <img src="/bed.png" alt="bed image" className="w-4 h-4 md:w-6 md:h-6"/>
          <p>{property.bedroom} Bedrooms</p>
        </div>
        <div className="text-[#7C8893] flex items-center gap-2 rounded">
          <img src="/bath.png" alt="bed image" className="w-4 h-4 md:w-6 md:h-6"/>
          <p>{property.bathroom} Bathrooms</p>
        </div>
      </div>

      <div className="amenities font-medium flex flex-col gap-3 text-lg">
        <h1 className="font-bold md:font-extrabold uppercase mb-0 md:mb-3">Amenities</h1>
        <div className="text-[#7C8893] flex flex-col gap-2 capitalize">
          {
            property.amenities.map(amenity => (
              <div key={amenity} className="text-[#7C8893] flex items-center gap-2 rounded">
                <img src={`/${amenity.split(' ').join('-')}.png`} alt="size image" className="w-4 h-4 md:w-6 md:h-6"/>
                <p key={amenity}>{amenity}</p>
              </div>
            ))
          }
        </div>
      </div>
   
  </div>
  )
}