import { Marker, Popup } from 'react-leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Map = ({ item, single }) => {
    const data = single ? [item] : item;
    const [zoom, setZoom] = useState(single ? 8 : 6);
    const [position, setPosition] = useState([data[0].latitude, data[0].longitude]);

    const handleMarkerClick = (latitude, longitude) => {
        if(single){
          setZoom(10);
        }else{
          setZoom(7.5);
        }
        setPosition([latitude, longitude]);
    };


    return (
        <MapContainer key={`${position[0]}-${position[1]}`} center={position} zoom={zoom} scrollWheelZoom={true} className='w-full h-full'>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            
              
                <div>
                
                {data.map(property => (
                    <Marker
                        key={property.id}
                        position={[property.latitude, property.longitude]}
                        eventHandlers={{
                            click: () => handleMarkerClick(property.latitude, property.longitude)
                        }}
                    >
                      <Popup>
                          <>
                            <img src={property.images[0]} alt="property thumbnail" className='rounded'/>
                            <div className="textContainer">
                              <Link to={`list/${property.id}`} className='font-bold'>{property.title}</Link>
                              <p>{`${property.bedroom} bed, ${property.bathroom} bath`}</p>
                              <p className='font-bold'>€{property.price}</p>
                            </div>
                          </>
                      </Popup>
                    </Marker>
                ))}

            </div> 
        
            
            
        </MapContainer>
    );
}

export default Map;