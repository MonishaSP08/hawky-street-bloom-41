import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import LocationBanner from '@/components/LocationBanner';
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
  ArrowUpDown
} from 'lucide-react';

const Index = () => {
  const featuredVendors = [
    {
      id: 1,
      name: "Ravi's Chaat Corner",
      cuisine: "North Indian",
      rating: 4.8,
      deliveryTime: "12 mins",
      image: "https://images.unsplash.com/photo-1626132647523-66f85bf36e84?w=400&h=200&fit=crop", // Pani Puri image
      specialty: "Pani Puri, Bhel Puri, Aloo Tikki",
      isOpen: true
    },
    {
      id: 2,
      name: "South Dosa Hub",
      cuisine: "South Indian",
      rating: 4.9,
      deliveryTime: "15 mins",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=200&fit=crop", // Dosa image
      specialty: "Masala Dosa, Rava Dosa, Uttapam",
      isOpen: true
    },
    {
      id: 3,
      name: "Juice Junction",
      cuisine: "Beverages",
      rating: 4.6,
      deliveryTime: "8 mins",
      image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=200&fit=crop", // Juice image
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
      <LocationBanner />
      <Navigation />
      
      {/* Hero Section with new street vendor background */}
      <section className="relative pt-16 pb-16 min-h-screen overflow-hidden">
        {/* Image Background - updated with new uploaded image */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/lovable-uploads/74df48f6-b428-4e4b-b3bd-6795ae62c604.png"
            alt="Street vendors background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hawky Logo - Made Much Bigger */}
          <div className="flex justify-center mb-8 pt-16">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/b87e42f2-8fc3-4fb5-a78c-c4757a40365d.png" 
                alt="Hawky Logo" 
                className="h-48 w-auto md:h-64 lg:h-80"
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            {/* Enlarged and Centered Tagline */}
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight text-center">
              <span className="block text-center">From Street Carts To Your Cart —</span>
              <span className="text-green-400 block text-center">Instantly.</span>
            </h1>
            
            {/* Fixed Location - Bangalore Only */}
            <div className="mb-8">
              <div className="flex bg-white rounded-lg shadow-lg overflow-hidden max-w-lg mx-auto">
                <div className="flex items-center px-4 py-4 text-gray-500">
                  <MapPin className="w-5 h-5 text-green-500" />
                </div>
                <div className="flex-1 px-4 py-4 text-gray-900 text-lg bg-gray-50 flex items-center justify-center">
                  <span className="font-semibold">📍 Bangalore Only</span>
                </div>
              </div>
              <p className="text-white/80 text-sm mt-2">
                Hawky is exclusively available in Bangalore • Other cities coming soon!
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
              <Button className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-4 rounded-lg font-bold">
                Order in Bangalore
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
      <section className="py-16 bg-gray-50 relative">
        {/* Subtle background video */}
        <div className="absolute inset-0 w-full h-full opacity-20">
          <video 
            autoPlay 
            muted 
            loop 
            className="w-full h-full object-cover"
          >
            <source src="https://videos.pexels.com/video-files/4253687/4253687-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Categories in Bangalore
            </h2>
            <p className="text-lg text-gray-600">
              From traditional chaat to modern fusion - discover your favorites across Bangalore
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

      {/* Before & After Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              See the Impact in Bangalore
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how Hawky transforms the lives of vendors and enhances the customer experience across Bangalore
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl border border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Vendors</h3>
              <p className="mb-4 text-gray-700">
                From struggling street carts to thriving digital businesses - see how vendors increase their earnings significantly.
              </p>
            </div>
            
            <div className="flex-1 bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Customers</h3>
              <p className="mb-4 text-gray-700">
                From hunting for food carts to having your favorite street food delivered quickly - discover the convenience of Hawky.
              </p>
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
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 relative overflow-hidden">
        {/* Background video */}
        <div className="absolute inset-0 w-full h-full opacity-30">
          <video 
            autoPlay 
            muted 
            loop 
            className="w-full h-full object-cover"
          >
            <source src="https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-green-500 p-3 rounded-full mr-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">HAWKY BOOST</h2>
            </div>
            <h3 className="text-4xl font-bold text-white mb-6">
              Vendor Subscription Packs for Bangalore
            </h3>
            <p className="text-xl text-white/90 mb-8">
              Promote your street cart for extra visibility across Bangalore
            </p>
            <Button className="bg-green-500 hover:bg-green-600 text-white text-xl px-12 py-4 rounded-lg font-semibold">
              CHOOSE A PLAN
            </Button>
          </div>
        </div>
      </section>

      {/* Vendor Credit Score Section */}
      <section className="py-16 bg-gray-50 relative">
        {/* Background video */}
        <div className="absolute inset-0 w-full h-full opacity-20">
          <video 
            autoPlay 
            muted 
            loop 
            className="w-full h-full object-cover"
          >
            <source src="https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Vendor Credit Score System
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Low-cost micro-financing for high-performing vendors in Bangalore
              </p>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <p className="text-gray-500 mb-2">VENDOR CREDIT SCORE</p>
                <div className="flex items-center justify-between">
                  <span className="text-5xl font-bold text-gray-900">784</span>
                  <span className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold">GOOD</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
                alt="Hawky Digital Payment System"
                className="w-full rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900 to-transparent opacity-40 rounded-xl"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="text-lg font-bold">Digital Payment Integration</h4>
                <p className="text-sm">Secure transactions for street vendors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hawky relative overflow-hidden">
        {/* Background video */}
        <div className="absolute inset-0 w-full h-full opacity-40">
          <video 
            autoPlay 
            muted 
            loop 
            className="w-full h-full object-cover"
          >
            <source src="https://videos.pexels.com/video-files/4253687/4253687-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Street Food Experience in Bangalore?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of food lovers and vendors already using Hawky across Bangalore
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
