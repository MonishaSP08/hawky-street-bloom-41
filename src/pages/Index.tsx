import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  MapPin, 
  Clock, 
  Star, 
  Users, 
  ArrowDown, 
  Search,
  Award,
  Calendar
} from 'lucide-react';

const Index = () => {
  const featuredVendors = [
    {
      id: 1,
      name: "Ravi's Chaat Corner",
      cuisine: "North Indian",
      rating: 4.8,
      deliveryTime: "12 mins",
      image: "https://images.unsplash.com/photo-1626132647523-66f85bf36e84?w=400&h=200&fit=crop",
      specialty: "Pani Puri",
      isOpen: true
    },
    {
      id: 2,
      name: "South Dosa Hub",
      cuisine: "South Indian",
      rating: 4.9,
      deliveryTime: "15 mins",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=200&fit=crop",
      specialty: "Crispy Dosas",
      isOpen: true
    },
    {
      id: 3,
      name: "Momos Kingdom",
      cuisine: "Tibetan",
      rating: 4.7,
      deliveryTime: "10 mins",
      image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&h=200&fit=crop",
      specialty: "Steamed Momos",
      isOpen: false
    }
  ];

  const categories = [
    { 
      name: "Chaat", 
      icon: "🥗", 
      count: "120+ vendors",
      image: "https://images.unsplash.com/photo-1626132647523-66f85bf36e84?w=300&h=200&fit=crop"
    },
    { 
      name: "Dosas", 
      icon: "🥞", 
      count: "85+ vendors",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=200&fit=crop"
    },
    { 
      name: "Momos", 
      icon: "🥟", 
      count: "95+ vendors",
      image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=300&h=200&fit=crop"
    },
    { 
      name: "Juices", 
      icon: "🧃", 
      count: "150+ vendors",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=200&fit=crop"
    },
    { 
      name: "Breakfast", 
      icon: "🍳", 
      count: "200+ vendors",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=300&h=200&fit=crop"
    },
    { 
      name: "Snacks", 
      icon: "🍿", 
      count: "180+ vendors",
      image: "https://images.unsplash.com/photo-1555992336-03a23c7b4012?w=300&h=200&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section with street vendor background matching the reference image */}
      <section 
        className="relative pt-24 pb-16 min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1555992336-03a23c7b4012?w=1200&h=800&fit=crop')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              From Street Carts<br />
              To Your Cart —<br />
              <span className="text-green-400">Instantly.</span>
            </h1>
            
            {/* Location search bar */}
            <div className="mb-8">
              <div className="flex bg-white rounded-lg shadow-lg overflow-hidden max-w-lg">
                <div className="flex items-center px-4 py-4 text-gray-500">
                  <MapPin className="w-5 h-5 text-green-500" />
                </div>
                <input 
                  type="text" 
                  placeholder="Enter your location"
                  className="flex-1 px-4 py-4 text-gray-900 focus:outline-none text-lg"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-4 rounded-lg font-bold">
                Browse
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black text-lg px-8 py-4 rounded-lg font-bold">
                Download App
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black text-lg px-8 py-4 rounded-lg font-bold">
                Become Vendor
              </Button>
            </div>

            {/* Map placeholder */}
            <div className="bg-green-100 rounded-lg p-6 mb-8 relative overflow-hidden max-w-lg">
              <div className="grid grid-cols-6 grid-rows-4 gap-2 opacity-30">
                {Array.from({length: 24}).map((_, i) => (
                  <div key={i} className="bg-green-200 rounded"></div>
                ))}
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4 h-4 bg-orange-500 rounded-full absolute top-6 left-8"></div>
                <div className="w-4 h-4 bg-orange-500 rounded-full absolute top-12 left-16"></div>
                <div className="w-4 h-4 bg-green-500 rounded-full absolute top-8 right-12"></div>
                <div className="w-4 h-4 bg-red-500 rounded-full absolute bottom-8 left-12"></div>
                <div className="w-4 h-4 bg-orange-500 rounded-full absolute bottom-6 right-8"></div>
              </div>
            </div>

            {/* Food Categories with images */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
              {categories.slice(0, 4).map((category, index) => (
                <div key={category.name} className="text-center">
                  <div className="bg-white rounded-lg p-4 mb-2 shadow-lg">
                    <img 
                      src={category.image}
                      alt={category.name}
                      className="w-full h-20 object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-white font-semibold">{category.name}</p>
                </div>
              ))}
            </div>

            {/* Additional categories row */}
            <div className="mt-8 bg-gray-100 rounded-lg p-6 max-w-4xl">
              <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
                {categories.map((category, index) => (
                  <div key={category.name} className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2 mx-auto">
                      <span className="text-2xl">{category.icon}</span>
                    </div>
                    <p className="text-gray-700 text-sm font-medium">{category.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vendors Near You Now Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">Vendors Near You Now</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredVendors.map((vendor) => (
              <Card key={vendor.id} className="vendor-card group cursor-pointer bg-gray-800 border-gray-700">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={vendor.image}
                      alt={vendor.specialty}
                      className="w-full h-48 object-cover rounded-t-xl"
                    />
                    <div className="absolute top-4 left-4 flex items-center space-x-2">
                      <span className={`text-white text-xs px-2 py-1 rounded-full ${
                        vendor.isOpen ? 'bg-hawky-green' : 'bg-gray-500'
                      }`}>
                        {vendor.isOpen ? 'Open Now' : 'Closed'}
                      </span>
                      <span className="bg-hawky-orange text-white text-xs px-2 py-1 rounded-full">
                        <Clock className="w-3 h-3 inline mr-1" />
                        {vendor.deliveryTime}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Award className="w-6 h-6 text-hawky-yellow" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{vendor.name}</h3>
                    <p className="text-hawky-orange font-semibold mb-2">{vendor.specialty}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-hawky-yellow fill-current" />
                        <span className="font-semibold text-white">{vendor.rating}</span>
                        <span className="text-gray-400">• {vendor.cuisine}</span>
                      </div>
                      <MapPin className="w-4 h-4 text-hawky-green" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* City Launch Model Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              CITY Launch Model
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Hawky launches in select metro cities to start.
            </p>
            <div className="inline-block bg-white text-orange-500 px-8 py-4 rounded-lg text-xl font-semibold">
              Bangalore • Hyderabad • Pune
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Categories
            </h2>
            <p className="text-lg text-gray-600">
              From traditional chaat to modern fusion - discover your favorites
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Card key={category.name} className="hawky-card text-center p-6 cursor-pointer group hover:scale-105 transition-transform">
                <CardContent className="p-0">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Vendors */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Vendors Near You Now
              </h2>
              <p className="text-lg text-gray-600">
                Fresh, hot food from verified street vendors
              </p>
            </div>
            <Link to="/vendors">
              <Button variant="outline" className="border-hawky-orange text-hawky-orange hover:bg-hawky-orange hover:text-white">
                View All Vendors
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Ravi's Chaat Corner with Pani Puri shop image */}
            <Card className="vendor-card group cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1626132647523-66f85bf36e84?w=400&h=200&fit=crop"
                    alt="Pani Puri Corner Shop"
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <span className="bg-hawky-green text-white text-xs px-2 py-1 rounded-full">
                      Open Now
                    </span>
                    <span className="bg-hawky-orange text-white text-xs px-2 py-1 rounded-full">
                      <Clock className="w-3 h-3 inline mr-1" />
                      12 mins
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Award className="w-6 h-6 text-hawky-yellow" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Ravi's Chaat Corner</h3>
                  <p className="text-hawky-orange font-semibold mb-2">Pani Puri</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-hawky-yellow fill-current" />
                      <span className="font-semibold">4.8</span>
                      <span className="text-gray-500">• North Indian</span>
                    </div>
                    <MapPin className="w-4 h-4 text-hawky-green" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* South Dosa Hub with Dosa shop image */}
            <Card className="vendor-card group cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=200&fit=crop"
                    alt="Crispy Dosa Shop"
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <span className="bg-hawky-green text-white text-xs px-2 py-1 rounded-full">
                      Open Now
                    </span>
                    <span className="bg-hawky-orange text-white text-xs px-2 py-1 rounded-full">
                      <Clock className="w-3 h-3 inline mr-1" />
                      15 mins
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Award className="w-6 h-6 text-hawky-yellow" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">South Dosa Hub</h3>
                  <p className="text-hawky-orange font-semibold mb-2">Crispy Dosas</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-hawky-yellow fill-current" />
                      <span className="font-semibold">4.9</span>
                      <span className="text-gray-500">• South Indian</span>
                    </div>
                    <MapPin className="w-4 h-4 text-hawky-green" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Momos Kingdom with Momos shop image */}
            <Card className="vendor-card group cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&h=200&fit=crop"
                    alt="Steamed Momos Shop"
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <span className="bg-gray-500 text-white text-xs px-2 py-1 rounded-full">
                      Closed
                    </span>
                    <span className="bg-hawky-orange text-white text-xs px-2 py-1 rounded-full">
                      <Clock className="w-3 h-3 inline mr-1" />
                      10 mins
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Award className="w-6 h-6 text-hawky-yellow" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Momos Kingdom</h3>
                  <p className="text-hawky-orange font-semibold mb-2">Steamed Momos</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-hawky-yellow fill-current" />
                      <span className="font-semibold">4.7</span>
                      <span className="text-gray-500">• Tibetan</span>
                    </div>
                    <MapPin className="w-4 h-4 text-hawky-green" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vendor Subscription Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-green-500 p-3 rounded-full mr-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">HAWKY BOOST</h2>
            </div>
            <h3 className="text-4xl font-bold text-white mb-6">
              Vendor Subscription Packs
            </h3>
            <p className="text-xl text-white/90 mb-8">
              Promote your street cart for extra visibility
            </p>
            <Button className="bg-green-500 hover:bg-green-600 text-white text-xl px-12 py-4 rounded-lg font-semibold">
              CHOOSE A PLAN
            </Button>
          </div>
        </div>
      </section>

      {/* Vendor Credit Score Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Vendor Credit Score System
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Low-cost micro-financing for high-performing vendors
              </p>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <p className="text-gray-500 mb-2">VENDOR CREDIT SCORE</p>
                <div className="flex items-center justify-between">
                  <span className="text-5xl font-bold text-gray-900">784</span>
                  <span className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold">GOOD</span>
                </div>
              </div>
            </div>
            <div>
              {/* Content space for additional details if needed */}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hawky">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Street Food Experience?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of food lovers and vendors already using Hawky
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-hawky-orange hover:bg-gray-100 text-lg px-8 py-4">
              Download Mobile App
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-hawky-orange text-lg px-8 py-4">
              Start as Vendor
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
