import { Marker, Popup } from 'react-leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Map = ({ data }) => {
    const [position, setPosition] = useState([51.505, -0.09]);
    const [zoom, setZoom] = useState(6);

    const handleMarkerClick = (latitude, longitude) => {
      setPosition([latitude, longitude]);
      setZoom(7.5);
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
                            <img src={property.img} alt="property thumbnail" className='rounded'/>
                            <div className="textContainer">
                              <Link to={`/${property.id}`} className='font-bold'>{property.title}</Link>
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
