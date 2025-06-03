
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Search, 
  MapPin, 
  Clock, 
  CheckCircle,
  Smartphone,
  Award,
  Users,
  TrendingUp,
  Zap,
  ShoppingCart,
  Star
} from 'lucide-react';

const HowItWorks = () => {
  const customerFlow = [
    {
      step: 1,
      title: "Discover Vendors",
      description: "Browse nearby street vendors using our live map. Filter by cuisine, delivery time, and hygiene ratings.",
      icon: Search,
      features: ["Real-time vendor locations", "Live operating hours", "Hygiene certifications", "Customer reviews"]
    },
    {
      step: 2,
      title: "Smart Ordering",
      description: "AI-powered recommendations based on your preferences. Quick reorder from favorites with one tap.",
      icon: Smartphone,
      features: ["Predictive suggestions", "Personalized menu", "Quick reorder", "Voice ordering"]
    },
    {
      step: 3,
      title: "Live Tracking",
      description: "Track your order in real-time from preparation to delivery. Get updates at every step.",
      icon: MapPin,
      features: ["Real-time GPS tracking", "Preparation updates", "Delivery partner info", "ETA notifications"]
    },
    {
      step: 4,
      title: "Enjoy & Review",
      description: "Enjoy fresh street food at your doorstep. Rate your experience to help other customers.",
      icon: Star,
      features: ["Quality guarantee", "Easy rating system", "Photo reviews", "Loyalty rewards"]
    }
  ];

  const vendorFlow = [
    {
      step: 1,
      title: "Easy Onboarding",
      description: "Join Hawky with simple verification. Get your hygiene certification and start earning.",
      icon: CheckCircle,
      features: ["Quick signup process", "Document verification", "Hygiene training", "Business setup"]
    },
    {
      step: 2,
      title: "Smart Tools",
      description: "Access our vendor dashboard with inventory management, sales analytics, and business insights.",
      icon: TrendingUp,
      features: ["Inventory tracking", "Sales analytics", "Customer insights", "Demand prediction"]
    },
    {
      step: 3,
      title: "Orders & Growth",
      description: "Receive orders through our AI-powered matching system. Grow your business with our coaching.",
      icon: ShoppingCart,
      features: ["Smart order routing", "Business coaching", "Financial insights", "Marketing support"]
    },
    {
      step: 4,
      title: "Earn & Expand",
      description: "Build a loyal customer base and increase earnings. Access micro-financing for growth.",
      icon: Users,
      features: ["Steady income", "Customer loyalty", "Growth financing", "Multi-location support"]
    }
  ];

  const deliveryFlow = [
    {
      step: 1,
      title: "Flexible Schedule",
      description: "Work on your own schedule. Choose your delivery zones and preferred time slots.",
      icon: Clock,
      features: ["Flexible hours", "Zone selection", "Peak hour bonuses", "Weekly payouts"]
    },
    {
      step: 2,
      title: "Smart Routing",
      description: "Get optimized delivery routes. AI helps you complete more deliveries efficiently.",
      icon: Zap,
      features: ["Optimized routes", "Batch deliveries", "Real-time updates", "Navigation support"]
    },
    {
      step: 3,
      title: "Earn Rewards",
      description: "Earn money for every delivery plus tips and bonuses. Track your earnings in real-time.",
      icon: Award,
      features: ["Per-delivery pay", "Customer tips", "Performance bonuses", "Insurance coverage"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section with How Hawky Works image */}
      <section 
        className="pt-20 pb-16 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/lovable-uploads/c3f92fdd-4e9d-4dfb-89b5-5b9f01d16994.png)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              HOW <span className="text-green-400">HAWKY</span> WORKS
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
              Connecting street vendors, hungry customers, and delivery partners through
              AI-powered technology
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="hawky-button">Become a Customer</Button>
              <Button className="hawky-button-secondary">Join as Vendor</Button>
              <Button variant="outline" className="border-hawky-blue text-white hover:bg-hawky-blue hover:text-white">Deliver with Hawky</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Flow */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              For Customers
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the convenience of street food delivered to your doorstep
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {customerFlow.map((step) => (
              <Card key={step.step} className="hawky-card hover:scale-105 transition-transform">
                <CardContent className="p-8">
                  <div className="bg-hawky-orange/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <step.icon className="w-8 h-8 text-hawky-orange" />
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="bg-hawky-orange text-white text-sm font-semibold w-8 h-8 rounded-full flex items-center justify-center mr-3">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{step.description}</p>
                  
                  <ul className="space-y-2">
                    {step.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-hawky-green mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* AI Feature Callout */}
          <div className="mt-16 p-8 bg-gradient-to-r from-hawky-orange/10 to-hawky-yellow/10 rounded-xl shadow-lg">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart AI-Powered Reordering</h3>
                <p className="text-lg text-gray-600 mb-4">
                  Hawky learns your preferences over time and suggests your favorite meals before you even search for them.
                </p>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <p className="italic text-gray-600">
                    "You usually get Pani Puri every Friday evening — want to pre-order for 6 PM delivery?"
                  </p>
                </div>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="w-40 h-40 bg-gradient-hawky rounded-full flex items-center justify-center">
                  <Smartphone className="w-20 h-20 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vendor Flow */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              For Vendors
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transform your street food business with technology and reach more customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vendorFlow.map((step) => (
              <Card key={step.step} className="hawky-card hover:scale-105 transition-transform">
                <CardContent className="p-8">
                  <div className="bg-hawky-green/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <step.icon className="w-8 h-8 text-hawky-green" />
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="bg-hawky-green text-white text-sm font-semibold w-8 h-8 rounded-full flex items-center justify-center mr-3">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{step.description}</p>
                  
                  <ul className="space-y-2">
                    {step.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-hawky-green mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Analytics Feature */}
          <div className="mt-16 p-8 bg-gradient-to-r from-hawky-green/10 to-hawky-blue/10 rounded-xl shadow-lg">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-40 h-40 bg-gradient-vendor rounded-full flex items-center justify-center">
                  <TrendingUp className="w-20 h-20 text-white" />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Hyperlocal Performance Heatmaps</h3>
                <p className="text-lg text-gray-600 mb-4">
                  Know exactly where to set up or what to stock with our AI-powered demand prediction. See real-time heat maps showing customer demand in different areas.
                </p>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <p className="text-gray-600">
                    Our data shows 40% higher demand for chaat in Koramangala between 4-7 PM on weekdays. Set up there to maximize your sales!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Partner Flow */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              For Delivery Partners
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Flexible earning opportunities with smart routing and incentives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deliveryFlow.map((step) => (
              <Card key={step.step} className="hawky-card hover:scale-105 transition-transform">
                <CardContent className="p-8">
                  <div className="bg-hawky-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <step.icon className="w-8 h-8 text-hawky-blue" />
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="bg-hawky-blue text-white text-sm font-semibold w-8 h-8 rounded-full flex items-center justify-center mr-3">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{step.description}</p>
                  
                  <ul className="space-y-2">
                    {step.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-hawky-blue mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hawky">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join the Hawky Ecosystem?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Whether you're a food lover, street vendor, or delivery partner, Hawky has something for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-hawky-orange hover:bg-gray-100 text-lg px-8">
              Download App
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;
