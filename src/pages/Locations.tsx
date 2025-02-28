
import Navbar from "@/components/Navbar";
import LocationMap from "@/components/LocationMap";

const Locations = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar with highest z-index */}
      <div className="fixed w-full top-0 z-[100]">
        <Navbar />
      </div>
      
      {/* Main content with lower z-index */}
      <div className="relative z-0 pt-16">
        <LocationMap />
      </div>
    </div>
  );
};

export default Locations;
