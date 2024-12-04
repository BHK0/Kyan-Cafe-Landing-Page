import { GoogleMap, Marker } from '@react-google-maps/api';

export default function Map({ 
  mapContainerStyle, 
  center, 
  locations, 
  selectedLocation, 
  setSelectedLocation,
  mapStyles,
  theme 
}) {
  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={selectedLocation !== null ? locations[selectedLocation].coordinates : center}
      zoom={13}
      options={{
        styles: theme === 'dark' ? mapStyles.dark : mapStyles.light
      }}
    >
      {locations.map((location, index) => (
        <Marker
          key={index}
          position={location.coordinates}
          animation={selectedLocation === index ? window.google.maps.Animation.BOUNCE : null}
          onClick={() => setSelectedLocation(index)}
        />
      ))}
    </GoogleMap>
  );
} 