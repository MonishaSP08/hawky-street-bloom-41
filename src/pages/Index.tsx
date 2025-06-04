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
      image: "photo-1649972904349-6e44c42644a7",
      specialty: "Pani Puri",
      isOpen: true
    },
    {
      id: 2,
      name: "South Dosa Hub",
      cuisine: "South Indian",
      rating: 4.9,
      deliveryTime: "15 mins",
      image: "photo-1488590528505-98d2b5aba04b",
      specialty: "Crispy Dosas",
      isOpen: true
    },
    {
      id: 3,
      name: "Momos Kingdom",
      cuisine: "Tibetan",
      rating: 4.7,
      deliveryTime: "10 mins",
      image: "photo-1581091226825-a6a2a5aee158",
      specialty: "Steamed Momos",
      isOpen: false
    }
  ];

  const categories = [
    { name: "Chaat", icon: "🥗", count: "120+ vendors" },
    { name: "Dosas", icon: "🥞", count: "85+ vendors" },
    { name: "Momos", icon: "🥟", count: "95+ vendors" },
    { name: "Juices", icon: "🧃", count: "150+ vendors" },
    { name: "Breakfast", icon: "🍳", count: "200+ vendors" },
    { name: "Snacks", icon: "🍿", count: "180+ vendors" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section with street vendor background */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50 overflow-hidden">
        {/* Background image of street vendor shop */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1555992336-03a23c7b4012?w=1200&h=800&fit=crop')`,
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              From Street Carts To<br />
              <span className="text-orange-500">
                Your Cart — Instantly
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Discover authentic street food from verified local vendors. 
              AI-powered delivery in under 20 minutes with real-time tracking.
            </p>
            
            {/* Location search bar */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 max-w-2xl mx-auto">
              <div className="flex w-full bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="flex items-center px-4 py-3 text-gray-500">
                  <MapPin className="w-5 h-5 text-green-500" />
                </div>
                <input 
                  type="text" 
                  placeholder="Enter your delivery location"
                  className="flex-1 px-4 py-3 text-gray-900 focus:outline-none"
                />
                <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg font-semibold rounded-none">
                  FIND VENDORS
                </Button>
              </div>
            </div>

            {/* Live Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">2,500+</div>
                <div className="text-sm text-gray-600">Active Vendors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500">15 mins</div>
                <div className="text-sm text-gray-600">Avg Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-500">50,000+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500">3 Cities</div>
                <div className="text-sm text-gray-600">& Growing</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <ArrowDown className="w-6 h-6 text-orange-500 mx-auto animate-bounce" />
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
