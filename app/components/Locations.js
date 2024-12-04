'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, Suspense } from 'react';
import { LocationIcon } from './Icons';
import { useLoadScript } from '@react-google-maps/api';
import { useTheme } from '../context/ThemeContext';
import MapSkeleton from './MapSkeleton';
import dynamic from 'next/dynamic';

// Dynamically import the Map component
const Map = dynamic(() => import('./Map'), {
  loading: () => <MapSkeleton />,
  ssr: false
});

const locations = [
  {
    name: "Kyan Cafe - Unaizah",
    address: "Unaizah - City Center - King Abdulaziz",
    coordinates: { lat: 26.0760677, lng: 43.9595921 },
    phone: "920011100"
  },
  {
    name: "Kyan Cafe - Riyadh", 
    address: "Riyadh - Al Malqa District",
    coordinates: { lat: 24.7136, lng: 46.6753 },
    phone: "920011100"
  }
];

const mapContainerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '1rem'
};

const center = {
  lat: 26.0760677,
  lng: 43.9595921
};

// Add dark mode styles for the map
const mapStyles = {
  light: [
    {
      featureType: "all",
      elementType: "labels.text.fill",
      stylers: [{ color: "#171717" }]
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#00BED6" }]
    }
  ],
  dark: [
    { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }]
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }]
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [{ color: "#263c3f" }]
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [{ color: "#6b9a76" }]
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#38414e" }]
    },
    {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [{ color: "#212a37" }]
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [{ color: "#9ca5b3" }]
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [{ color: "#746855" }]
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [{ color: "#1f2835" }]
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [{ color: "#f3d19c" }]
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#00BED6" }]
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [{ color: "#515c6d" }]
    },
    {
      featureType: "water",
      elementType: "labels.text.stroke",
      stylers: [{ color: "#17263c" }]
    }
  ]
};

export default function Locations() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showMap, setShowMap] = useState(false);
  const { theme } = useTheme();

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    loading: <MapSkeleton />,
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setShowMap(true);
        observer.disconnect();
      }
    }, { 
      threshold: 0.1,
      rootMargin: '500px 0px',
      passive: true
    });

    const section = document.getElementById('locations');
    if (section) {
      observer.observe(section);
    }

    const timer = setTimeout(() => {
      if (window.location.hash === '#locations') {
        setShowMap(true);
      }
    }, 100);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const handleFindNearest = () => {
    const searchQuery = encodeURIComponent('Kyan Cafe');
    window.open(`https://www.google.com/maps/search/${searchQuery}/,13z`, '_blank');
  };

  return (
    <section id="locations" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Our Branches</h2>
          <p className="text-gray-600 dark:text-gray-300">We are present in different regions of the Kingdom to be close to you</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl h-full">
              <div className="space-y-6">
                {locations.map((location, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className={`p-4 rounded-lg cursor-pointer ${
                      selectedLocation === index 
                        ? 'bg-[#00BED6] text-white' 
                        : 'bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600'
                    }`}
                    onClick={() => setSelectedLocation(index)}
                  >
                    <div className="flex items-start gap-4">
                      <LocationIcon className={selectedLocation === index ? 'text-white' : 'text-gray-600 dark:text-gray-300'} />
                      <div>
                        <h3 className={`font-bold mb-1 ${
                          selectedLocation === index ? 'text-white' : 'text-gray-900 dark:text-white'
                        }`}>{location.name}</h3>
                        <p className={
                          selectedLocation === index 
                            ? 'text-white/90' 
                            : 'text-gray-600 dark:text-gray-300'
                        }>
                          {location.address}
                        </p>
                        <p className={`mt-2 ${
                          selectedLocation === index 
                            ? 'text-white/90' 
                            : 'text-gray-600 dark:text-gray-300'
                        }`}>
                          {location.phone}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                onClick={handleFindNearest}
                className="w-full mt-6 bg-[#00BED6] text-white px-6 py-3 rounded-lg font-bold 
                          flex items-center justify-center gap-2 hover:bg-[#00a8bd]"
              >
                <LocationIcon />
                Nearest Branch to Your Location
              </motion.button>
            </div>
          </div>

          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="h-full rounded-xl overflow-hidden shadow-lg"
            >
              <Suspense fallback={<MapSkeleton />}>
                {showMap && isLoaded ? (
                  <Map
                    mapContainerStyle={mapContainerStyle}
                    center={center}
                    locations={locations}
                    selectedLocation={selectedLocation}
                    setSelectedLocation={setSelectedLocation}
                    mapStyles={mapStyles}
                    theme={theme}
                  />
                ) : (
                  <MapSkeleton />
                )}
              </Suspense>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}