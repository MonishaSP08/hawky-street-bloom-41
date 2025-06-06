
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
  Calendar,
  Phone,
  ArrowRight,
  BeforeAfter
} from 'lucide-react';

const Index = () => {
  const featuredVendors = [
    {
      id: 1,
      name: "Ravi's Chaat Corner",
      cuisine: "North Indian",
      rating: 4.8,
      deliveryTime: "12 mins",
      image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=200&fit=crop",
      specialty: "Pani Puri, Bhel Puri, Aloo Tikki",
      isOpen: true
    },
    {
      id: 2,
      name: "South Dosa Hub",
      cuisine: "South Indian",
      rating: 4.9,
      deliveryTime: "15 mins",
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&h=200&fit=crop",
      specialty: "Masala Dosa, Rava Dosa, Uttapam",
      isOpen: true
    },
    {
      id: 3,
      name: "Juice Junction",
      cuisine: "Beverages",
      rating: 4.6,
      deliveryTime: "8 mins",
      image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=200&fit=crop",
      specialty: "Fresh Orange, Sugarcane, Seasonal Fruits",
      isOpen: true
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
      
      {/* Hero Section with street vendor background */}
      <section 
        className="relative pt-16 pb-16 min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/lovable-uploads/a9cb1884-7589-485d-b893-4de13581833e.png')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Hawky Logo */}
          <div className="flex justify-center mb-12 pt-16">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/88ac5167-8fcd-4e8a-9e98-0009211187af.png" 
                alt="Hawky Logo" 
                className="h-32 w-auto"
              />
            </div>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              From Street Carts<br />
              To Your Cart —<br />
              <span className="text-green-400">Instantly.</span>
            </h1>
            
            {/* Location search bar */}
            <div className="mb-8">
              <div className="flex bg-white rounded-lg shadow-lg overflow-hidden max-w-lg mx-auto">
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
            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
              <Button className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-4 rounded-lg font-bold">
                Browse
              </Button>
              <Button className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-4 rounded-lg font-bold">
                Download App
              </Button>
              <Button className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-4 rounded-lg font-bold">
                Become Vendor
              </Button>
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

      {/* Vendors Near You Now Section */}
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
            {featuredVendors.map((vendor) => (
              <Card key={vendor.id} className="vendor-card group cursor-pointer">
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
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{vendor.name}</h3>
                    <p className="text-hawky-orange font-semibold mb-2">{vendor.specialty}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-hawky-yellow fill-current" />
                        <span className="font-semibold">{vendor.rating}</span>
                        <span className="text-gray-500">• {vendor.cuisine}</span>
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

      {/* Before & After Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              See the Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how Hawky transforms the lives of vendors and enhances the customer experience
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl border border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Vendors</h3>
              <p className="mb-4 text-gray-700">
                From struggling street carts to thriving digital businesses - see how vendors increase their daily earnings by up to 300%.
              </p>
              <div className="flex items-center text-green-700 font-semibold">
                <div className="bg-green-100 p-2 rounded-full mr-2">
                  <ArrowUp className="w-4 h-4" />
                </div>
                <span>50+ plates per day</span>
              </div>
            </div>
            
            <div className="flex-1 bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Customers</h3>
              <p className="mb-4 text-gray-700">
                From hunting for food carts to having your favorite street food delivered in minutes - discover the convenience of Hawky.
              </p>
              <div className="flex items-center text-blue-700 font-semibold">
                <div className="bg-blue-100 p-2 rounded-full mr-2">
                  <Clock className="w-4 h-4" />
                </div>
                <span>15-minute delivery</span>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link to="/before-after">
              <Button className="bg-green-500 hover:bg-green-600 text-white">
                View Before & After Stories
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
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
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-4">
              Download Mobile App
            </Button>
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-4">
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
