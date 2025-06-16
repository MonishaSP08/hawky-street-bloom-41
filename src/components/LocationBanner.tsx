
import { MapPin, X } from 'lucide-react';
import { useState } from 'react';

const LocationBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-hawky-orange to-hawky-yellow text-white py-2 px-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-center text-center">
        <MapPin className="w-4 h-4 mr-2" />
        <span className="text-sm font-medium">
          🎯 Hawky is exclusively available in Bangalore • Order now or join as a vendor!
        </span>
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute right-4 hover:bg-white/20 rounded-full p-1 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default LocationBanner;
