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
  BookOpen,
  Calculator,
  TrendingUp,
  Award,
  CheckCircle,
  ArrowRight,
  DollarSign,
  Target,
  BarChart,
  Lightbulb,
  Gift,
  Camera
} from 'lucide-react';

const VendorAcademy = () => {
  const modules = [
    {
      title: "Mastering Street Food Hygiene",
      description: "Learn essential food safety practices to keep your customers healthy and happy.",
      icon: CheckCircle,
      lessons: 5,
      duration: "30 mins",
      progress: 80
    },
    {
      title: "Optimizing Your Cart Location",
      description: "Discover how to find the best spots for maximum visibility and foot traffic.",
      icon: MapPin,
      lessons: 4,
      duration: "45 mins",
      progress: 60
    },
    {
      title: "Pricing Strategies for Profit",
      description: "Set competitive prices that attract customers while ensuring healthy margins.",
      icon: DollarSign,
      lessons: 6,
      duration: "60 mins",
      progress: 40
    },
    {
      title: "Effective Customer Engagement",
      description: "Build lasting relationships with your customers through exceptional service.",
      icon: Users,
      lessons: 3,
      duration: "25 mins",
      progress: 90
    },
    {
      title: "Menu Planning for Success",
      description: "Craft a menu that balances popular favorites with unique offerings.",
      icon: BookOpen,
      lessons: 5,
      duration: "40 mins",
      progress: 70
    },
    {
      title: "Financial Management Basics",
      description: "Understand how to track your income, expenses, and profits effectively.",
      icon: Calculator,
      lessons: 4,
      duration: "35 mins",
      progress: 50
    },
    {
      title: "Leveraging Social Media",
      description: "Use social media to promote your cart and connect with your local community.",
      icon: TrendingUp,
      lessons: 6,
      duration: "50 mins",
      progress: 30
    },
    {
      title: "Winning Awards and Recognition",
      description: "Learn how to enter contests and earn accolades for your delicious creations.",
      icon: Award,
      lessons: 3,
      duration: "20 mins",
      progress: 100
    },
    {
      title: "AI-Powered Inventory Management",
      description: "Use AI to predict demand and optimize your inventory, reducing waste and maximizing profits.",
      icon: BarChart,
      lessons: 5,
      duration: "45 mins",
      progress: 65
    },
    {
      title: "Creative Marketing Strategies",
      description: "Discover innovative ways to attract new customers and keep them coming back for more.",
      icon: Lightbulb,
      lessons: 4,
      duration: "35 mins",
      progress: 55
    },
    {
      title: "Special Occasion Promotions",
      description: "Plan promotions for holidays and events to boost sales and create excitement.",
      icon: Gift,
      lessons: 6,
      duration: "50 mins",
      progress: 45
    },
    {
      title: "High-Quality Food Photography",
      description: "Take mouth-watering photos of your dishes to entice customers on social media and online menus.",
      icon: Camera,
      lessons: 3,
      duration: "25 mins",
      progress: 75
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-green-100 via-yellow-100 to-orange-100 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-gradient-to-r from-green-50 to-yellow-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Unlock Your Street Food Potential
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Welcome to the Vendor Academy - your one-stop destination for mastering the art of street food vending.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-4">
                <BookOpen className="w-5 h-5 mr-2" />
                Start Learning Now
              </Button>
              <Button size="lg" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white text-lg px-8 py-4">
                <Users className="w-5 h-5 mr-2" />
                Join Our Community
              </Button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500">120+</div>
                <div className="text-sm text-gray-600">Expert Instructors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">250+</div>
                <div className="text-sm text-gray-600">Training Modules</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-500">5,000+</div>
                <div className="text-sm text-gray-600">Graduated Vendors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500">95%</div>
                <div className="text-sm text-gray-600">Vendor Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <ArrowRight className="w-6 h-6 text-green-500 mx-auto animate-pulse" />
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore Our Training Modules
            </h2>
            <p className="text-lg text-gray-600">
              From food safety to marketing strategies, we've got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <Card key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 group cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <module.icon className="w-6 h-6 text-green-500" />
                      <h3 className="text-xl font-semibold text-gray-900">{module.title}</h3>
                    </div>
                    <span className="text-sm text-gray-500">{module.progress}%</span>
                  </div>
                  <p className="text-gray-600 mb-4">{module.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <BookOpen className="w-4 h-4 text-orange-500" />
                      <span className="text-sm text-gray-500">{module.lessons} Lessons</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-blue-500" />
                      <span className="text-sm text-gray-500">{module.duration}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Get Certified and Stand Out
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Earn a Hawky Vendor Certification to showcase your expertise and commitment to quality.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Boost your credibility with customers</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Target className="w-5 h-5 text-orange-500" />
                  <span>Gain access to exclusive opportunities</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span>Be recognized for excellence in street food vending</span>
                </li>
              </ul>
              <Button className="bg-green-500 hover:bg-green-600 text-white mt-6">
                Get Certified Now
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop"
                alt="Vendor Certification"
                className="w-full rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-40 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Vendors Are Saying
            </h2>
            <p className="text-lg text-gray-600">
              Real stories from vendors who have transformed their businesses with Hawky.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center p-6">
              <CardContent className="p-0">
                <div className="text-2xl mb-3">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-600 mb-4">
                  "The Vendor Academy helped me improve my food safety practices and attract more customers. I highly recommend it!"
                </p>
                <div className="text-sm font-semibold text-green-500">- Ravi Kumar</div>
                <div className="text-xs text-gray-500">Ravi's Chaat Corner</div>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center p-6">
              <CardContent className="p-0">
                <div className="text-2xl mb-3">⭐⭐⭐⭐</div>
                <p className="text-gray-600 mb-4">
                  "I learned how to optimize my cart location and increase my profits. The modules are easy to follow and very informative."
                </p>
                <div className="text-sm font-semibold text-orange-500">- Priya Sharma</div>
                <div className="text-xs text-gray-500">South Dosa Hub</div>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center p-6">
              <CardContent className="p-0">
                <div className="text-2xl mb-3">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-600 mb-4">
                  "Thanks to the Academy, I now have a solid understanding of financial management and marketing. My business is thriving!"
                </p>
                <div className="text-sm font-semibold text-yellow-500">- Tenzin Wangdu</div>
                <div className="text-xs text-gray-500">Momos Kingdom</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VendorAcademy;
