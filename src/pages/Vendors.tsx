import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import LocationBanner from '@/components/LocationBanner';
import { 
  Search, 
  Filter, 
  MapPin, 
  Clock, 
  Star, 
  Award,
  CheckCircle,
  Zap
} from 'lucide-react';

const Vendors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All Vendors', count: 2500 },
    { id: 'open', name: 'Open Now', count: 1200 },
    { id: 'quick', name: 'Quick Delivery', count: 800 },
    { id: 'certified', name: 'Hygiene Certified', count: 1500 },
    { id: 'popular', name: 'Popular Today', count: 150 }
  ];

  const vendors = [
    {
      id: 1,
      name: "Ravi's Chaat Corner",
      cuisine: "North Indian",
      rating: 4.8,
      reviewCount: 1250,
      deliveryTime: "12-15 mins",
      distance: "0.8 km",
      image: "https://images.unsplash.com/photo-1626132647523-66f85bf36e84?w=500&h=200&fit=crop", // Pani Puri image
      specialties: ["Pani Puri", "Bhel Puri", "Aloo Tikki"],
      isOpen: true,
      isCertified: true,
      isQuickDelivery: true,
      priceRange: "₹50-150",
      vendorStory: "Serving authentic Delhi street food for 15 years"
    },
    {
      id: 2,
      name: "South Dosa Hub",
      cuisine: "South Indian",
      rating: 4.9,
      reviewCount: 890,
      deliveryTime: "15-20 mins",
      distance: "1.2 km",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&h=200&fit=crop", // Dosa image
      specialties: ["Masala Dosa", "Rava Dosa", "Uttapam"],
      isOpen: true,
      isCertified: true,
      isQuickDelivery: false,
      priceRange: "₹80-200",
      vendorStory: "Traditional recipes from Tamil Nadu"
    },
    {
      id: 3,
      name: "Momos Kingdom",
      cuisine: "Tibetan",
      rating: 4.7,
      reviewCount: 650,
      deliveryTime: "10-12 mins",
      distance: "0.5 km",
      image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500&h=200&fit=crop", // Momos image
      specialties: ["Steamed Momos", "Fried Momos", "Jhol Momos"],
      isOpen: false,
      isCertified: true,
      isQuickDelivery: true,
      priceRange: "₹60-120",
      vendorStory: "Authentic Tibetan recipes"
    },
    {
      id: 4,
      name: "Juice Junction",
      cuisine: "Beverages",
      rating: 4.6,
      reviewCount: 420,
      deliveryTime: "8-10 mins",
      distance: "0.3 km",
      image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500&h=200&fit=crop", // Fresh juice image
      specialties: ["Fresh Orange", "Sugarcane", "Seasonal Fruits"],
      isOpen: true,
      isCertified: true,
      isQuickDelivery: true,
      priceRange: "₹30-80",
      vendorStory: "Fresh fruits sourced daily"
    },
    {
      id: 5,
      name: "Paratha Palace",
      cuisine: "North Indian",
      rating: 4.8,
      reviewCount: 1100,
      deliveryTime: "18-22 mins",
      distance: "1.8 km",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=500&h=200&fit=crop", // Paratha image
      specialties: ["Aloo Paratha", "Paneer Paratha", "Gobhi Paratha"],
      isOpen: true,
      isCertified: false,
      isQuickDelivery: false,
      priceRange: "₹70-180",
      vendorStory: "Traditional Punjabi breakfast specialist"
    },
    {
      id: 6,
      name: "Idli Express",
      cuisine: "South Indian",
      rating: 4.5,
      reviewCount: 780,
      deliveryTime: "14-16 mins",
      distance: "1.0 km",
      image: "https://images.unsplash.com/photo-1545016803-a7e357a737e4?w=500&h=200&fit=crop", // Idli image
      specialties: ["Soft Idli", "Medu Vada", "Coconut Chutney"],
      isOpen: true,
      isCertified: true,
      isQuickDelivery: true,
      priceRange: "₹40-100",
      vendorStory: "Healthy breakfast options"
    }
  ];

  const filteredVendors = vendors.filter(vendor => {
    const matchesSearch = vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vendor.cuisine.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vendor.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    
    switch (selectedFilter) {
      case 'open':
        return matchesSearch && vendor.isOpen;
      case 'quick':
        return matchesSearch && vendor.isQuickDelivery;
      case 'certified':
        return matchesSearch && vendor.isCertified;
      case 'popular':
        return matchesSearch && vendor.rating >= 4.7;
      default:
        return matchesSearch;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <LocationBanner />
      <Navigation />
      
      {/* Header */}
      <section className="pt-20 pb-8 bg-gradient-to-r from-hawky-orange/10 to-hawky-yellow/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Street Vendors in Bangalore
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Fresh, authentic street food from verified local vendors across Bangalore
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search for vendors, cuisines, or dishes in Bangalore..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-4 text-lg rounded-full border-2 border-gray-200 focus:border-hawky-orange"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <Card className="hawky-card p-6 sticky top-24">
              <CardContent className="p-0">
                <div className="flex items-center space-x-2 mb-6">
                  <Filter className="w-5 h-5 text-hawky-orange" />
                  <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                </div>
                
                <div className="space-y-3">
                  {filters.map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => setSelectedFilter(filter.id)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        selectedFilter === filter.id
                          ? 'bg-hawky-orange text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{filter.name}</span>
                        <span className="text-sm opacity-75">{filter.count}</span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Quick Stats */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Bangalore Stats</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Vendors</span>
                      <span className="font-semibold text-hawky-orange">2,500+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Open Now</span>
                      <span className="font-semibold text-hawky-green">1,200+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Avg Delivery</span>
                      <span className="font-semibold text-hawky-blue">15 mins</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Vendors Grid */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Showing {filteredVendors.length} of {vendors.length} vendors in Bangalore
              </p>
              <Button variant="outline" className="border-hawky-orange text-hawky-orange hover:bg-hawky-orange hover:text-white">
                <MapPin className="w-4 h-4 mr-2" />
                View on Map
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredVendors.map((vendor) => (
                <Card key={vendor.id} className="vendor-card group cursor-pointer hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={vendor.image}
                        alt={vendor.name}
                        className="w-full h-60 object-cover rounded-t-xl"
                      />
                      
                      {/* Status Badges */}
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        {vendor.isOpen ? (
                          <span className="bg-hawky-green text-white text-xs px-2 py-1 rounded-full flex items-center">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Open Now
                          </span>
                        ) : (
                          <span className="bg-gray-500 text-white text-xs px-2 py-1 rounded-full">
                            Closed
                          </span>
                        )}
                        
                        {vendor.isQuickDelivery && (
                          <span className="bg-hawky-orange text-white text-xs px-2 py-1 rounded-full flex items-center">
                            <Zap className="w-3 h-3 mr-1" />
                            Quick
                          </span>
                        )}
                        
                        {vendor.isCertified && (
                          <span className="bg-hawky-blue text-white text-xs px-2 py-1 rounded-full flex items-center">
                            <Award className="w-3 h-3 mr-1" />
                            Certified
                          </span>
                        )}
                      </div>

                      {/* Delivery Time */}
                      <div className="absolute top-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                        <Clock className="w-3 h-3 inline mr-1" />
                        {vendor.deliveryTime}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">{vendor.name}</h3>
                          <p className="text-hawky-orange font-medium">{vendor.cuisine}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-hawky-yellow fill-current" />
                            <span className="font-semibold">{vendor.rating}</span>
                          </div>
                          <p className="text-xs text-gray-500">({vendor.reviewCount} reviews)</p>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-3">{vendor.vendorStory}</p>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {vendor.specialties.slice(0, 3).map((specialty, index) => (
                          <span 
                            key={index}
                            className="bg-hawky-orange/10 text-hawky-orange text-xs px-2 py-1 rounded-full"
                          >
                            {specialty}
                          </span>
                        ))}
                        {vendor.specialties.length > 3 && (
                          <span className="text-xs text-gray-500">+{vendor.specialties.length - 3} more</span>
                        )}
                      </div>
                      
                      <div className="flex justify-between items-center text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{vendor.distance}</span>
                        </div>
                        <span className="font-semibold text-hawky-green">{vendor.priceRange}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredVendors.length === 0 && (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No vendors found</h3>
                <p className="text-gray-600">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Vendors;
