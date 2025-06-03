
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
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-orange-100 via-yellow-100 to-green-100 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-gradient-to-r from-orange-50 to-yellow-50"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              From Street Carts To<br />
              <span className="text-orange-500">
                Your Cart — Instantly
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover authentic street food from verified local vendors. 
              AI-powered delivery in under 20 minutes with real-time tracking.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-4">
                <Search className="w-5 h-5 mr-2" />
                Browse Vendors Near You
              </Button>
              <Button size="lg" variant="outline" className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white text-lg px-8 py-4">
                <Users className="w-5 h-5 mr-2" />
                Become a Vendor
              </Button>
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

      {/* Live Map Teaser */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Live Street Food Map
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See vendors operating near you in real-time. Track your order live from cart to your door.
            </p>
          </div>
          
          <div className="relative bg-white rounded-xl shadow-lg p-8 bg-gradient-to-br from-blue-50 to-green-50">
            <div className="absolute inset-0 opacity-30">
              <div className="w-full h-full bg-gradient-to-r from-blue-50 to-green-50 rounded-xl"></div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Interactive Vendor Discovery</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-orange-500" />
                      <span>Real-time vendor locations</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-green-500" />
                      <span>Live operating hours</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Star className="w-5 h-5 text-yellow-500" />
                      <span>Hygiene ratings & reviews</span>
                    </li>
                  </ul>
                  <Link to="/vendors">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white mt-6">
                      Explore Live Map
                    </Button>
                  </Link>
                </div>
                <div className="relative">
                  <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-green-100 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                      <p className="text-orange-500 font-semibold">Interactive Map</p>
                      <p className="text-sm text-gray-600">Coming in mobile app</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
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
              <Card key={category.name} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center p-6 cursor-pointer group hover:scale-105 transition-transform">
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
      <section className="py-16 bg-gray-50">
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
              <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                View All Vendors
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredVendors.map((vendor) => (
              <Card key={vendor.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 group cursor-pointer">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={`https://images.unsplash.com/${vendor.image}?w=400&h=200&fit=crop`}
                      alt={vendor.name}
                      className="w-full h-48 object-cover rounded-t-xl"
                    />
                    <div className="absolute top-4 left-4 flex items-center space-x-2">
                      {vendor.isOpen ? (
                        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                          Open Now
                        </span>
                      ) : (
                        <span className="bg-gray-500 text-white text-xs px-2 py-1 rounded-full">
                          Closed
                        </span>
                      )}
                      <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                        <Clock className="w-3 h-3 inline mr-1" />
                        {vendor.deliveryTime}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Award className="w-6 h-6 text-yellow-500" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{vendor.name}</h3>
                    <p className="text-orange-500 font-semibold mb-2">{vendor.specialty}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="font-semibold">{vendor.rating}</span>
                        <span className="text-gray-500">• {vendor.cuisine}</span>
                      </div>
                      <MapPin className="w-4 h-4 text-green-500" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features Teaser */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Powered by Smart AI
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Predictive ordering, personalized recommendations, and intelligent vendor matching
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center p-8 hover:scale-105 transition-transform">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-orange-400 to-red-500 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Predictive Ordering</h3>
                <p className="text-gray-600">
                  "You usually get Pani Puri every Friday evening — want to pre-order?"
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center p-8 hover:scale-105 transition-transform">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Smart Recommendations</h3>
                <p className="text-gray-600">
                  Personalized food suggestions based on your taste preferences and mood.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center p-8 hover:scale-105 transition-transform">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-orange-400 to-yellow-500 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Vendor Insights</h3>
                <p className="text-gray-600">
                  Real-time demand prediction helps vendors optimize inventory and location.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Street Food Experience?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of food lovers and vendors already using Hawky
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-orange-500 hover:bg-gray-100 text-lg px-8 py-4">
              Download Mobile App
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-500 text-lg px-8 py-4">
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
