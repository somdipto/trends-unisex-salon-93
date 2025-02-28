
import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { motion } from "framer-motion";
import { MapPin, Instagram } from "lucide-react";
import type { LatLngTuple } from "leaflet";

const locations = [
  {
    name: "Trends Unisex Saloon - Malleshwaram",
    address: "184,3rd cross, Link Rd, Malleshwaram, Bengaluru, Karnataka 560003",
    phone: "+919071331124",
    hours: "Mon-Sat: 9AM-9PM, Sun: 10AM-6PM",
    coordinates: [12.995784605395825, 77.57368586724279] as LatLngTuple,
    instagram: "https://www.instagram.com/the_trends_salon_malleswaram",
  },
  {
    name: "Trends Unisex Saloon - Rajajinagar",
    address: "483, 1st Stage, 6th Phase, 60 Feet Road WOC Road, Rajajinagar, (opp to Reliance Fresh Mart), Bengaluru",
    phone: "+918123328824",
    hours: "Mon-Sat: 9AM-9PM, Sun: 10AM-6PM",
    coordinates: [12.987444307249396, 77.54460931117136] as LatLngTuple,
    instagram: "https://www.instagram.com/the_trends_salon_rajajinagar",
  },
  {
    name: "Trends Unisex Saloon - Hebbal",
    address: "Near Atria Institute of Technology, R.T Nagar, Hebbala, Bengaluru, Karnataka 560024",
    phone: "+916362856410",
    hours: "Mon-Sat: 9AM-9PM, Sun: 10AM-6PM",
    coordinates: [13.033676840844054, 77.5890606914712] as LatLngTuple,
    instagram: "https://www.instagram.com/the_trends_salon_hebbal",
  },
];

const LocationMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = L.map(mapContainer.current).setView(
      [12.995784605395825, 77.57368586724279] as LatLngTuple,
      12
    );

    L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    const customIcon = L.icon({
      iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
      shadowSize: [41, 41],
    });

    locations.forEach((location) => {
      const marker = L.marker(location.coordinates, {
        icon: customIcon,
      }).addTo(map);

      const popupContent = `
        <div class="p-4 min-w-[200px]">
          <h3 class="font-semibold text-lg mb-2">${location.name}</h3>
          <p class="text-sm text-gray-600 mb-2">${location.address}</p>
          <p class="text-sm text-gray-600 mb-2">${location.phone}</p>
          <p class="text-sm text-gray-600">${location.hours}</p>
        </div>
      `;

      marker.bindPopup(popupContent);
    });

    map.zoomControl.setPosition("topright");

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="py-8 md:py-16 bg-gradient-to-b from-gray-50 to-white relative z-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">Our Locations</h2>
          <p className="text-gray-600">Find a Trends Salon near you</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="space-y-4 md:space-y-6">
            {locations.map((location, index) => (
              <motion.div
                key={`${location.name}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 relative"
              >
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{location.name}</h3>
                <div className="space-y-2 text-sm md:text-base text-gray-600">
                  <p>{location.address}</p>
                  <p className="font-medium">{location.phone}</p>
                  <p>{location.hours}</p>
                </div>
                <div className="flex gap-2 mt-3 md:mt-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${location.coordinates[0]},${location.coordinates[1]}`, '_blank')}
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-gray-100 to-gray-200 text-black rounded-full transition-all duration-250 hover:from-black hover:to-gray-800 hover:text-white shadow-sm hover:shadow-md"
                  >
                    <MapPin className="w-4 h-4" />
                    Get Directions
                  </motion.button>
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={location.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 p-2 text-black hover:text-pink-600 transition-colors duration-200"
                  >
                    <Instagram className="w-6 h-6" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="h-[400px] md:h-[500px] lg:h-[550px] rounded-xl shadow-lg overflow-hidden border border-gray-200 relative z-0"
          >
            <div ref={mapContainer} className="h-full w-full" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
