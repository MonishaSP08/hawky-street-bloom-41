
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Users, 
  TrendingUp, 
  Award, 
  Star,
  CheckCircle,
  MapPin
} from 'lucide-react';

const Impact = () => {
  const impactMetrics = [
    {
      title: "Total Vendors Empowered",
      value: "12k",
      description: "Street food vendors onboarded to our platform",
      icon: Users,
      color: "hawky-orange"
    },
    {
      title: "Street Vendor Income Growth",
      value: "37%",
      description: "Average income increase for vendors",
      icon: TrendingUp,
      color: "hawky-green"
    },
    {
      title: "Local Employment Generated",
      value: "5.2k",
      description: "Direct & indirect jobs in the ecosystem",
      icon: MapPin,
      color: "hawky-blue"
    }
  ];

  const testimonials = [
    {
      quote: "Hawky helped me grow my small pani puri stall into a successful business that now supports my entire family. My income has grown by 300% in just six months.",
      name: "Ramesh Kumar",
      role: "Chaat Vendor",
      location: "Bangalore",
      image: "photo-1649972904349-6e44c42644a7"
    },
    {
      quote: "Being part of Hawky has completely transformed my business. The hygiene certification and business training has helped me attract more customers and increase my daily earnings.",
      name: "Lakshmi Devi",
      role: "Dosa Vendor",
      location: "Hyderabad",
      image: "photo-1488590528505-98d2b5aba04b"
    }
  ];

  const sdgAlignment = [
    {
      goal: "No Poverty",
      impact: "Increasing vendor incomes by an average of 180%, lifting many families above the poverty line."
    },
    {
      goal: "Zero Hunger",
      impact: "Supporting food security by empowering local food vendors and increasing access to affordable food."
    },
    {
      goal: "Decent Work and Economic Growth",
      impact: "Creating over 5,000 jobs in the ecosystem and providing stable income opportunities."
    },
    {
      goal: "Reduced Inequalities",
      impact: "Providing financial inclusion and digital access for unbanked street vendors."
    }
  ];

  const impactStories = [
    {
      title: "Women Empowerment",
      description: "30% of our vendors are women who have established financial independence through our platform.",
      metrics: ["400+ women vendors", "200% avg. income increase", "1,200+ families supported"],
      image: "photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Digital Inclusion",
      description: "Helping traditional vendors embrace technology and reach digital customers they couldn't before.",
      metrics: ["87% vendors were offline before", "92% now use digital payments", "75% use inventory tools"],
      image: "photo-1526374965328-7f61d4dc18c5"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section with Impact image */}
      <section 
        className="pt-20 pb-16 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/lovable-uploads/7a96e4d7-be7a-41b5-86cf-288f4f4e93e6.png)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-green-400">Impact</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Improving lives by empowering street vendors
            </p>
            <Button size="lg" className="hawky-button-secondary">
              Support Our Mission
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Metrics with real metrics from image */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-green-900/40 p-8 rounded-lg">
              <h2 className="text-5xl font-bold text-white mb-4">12k</h2>
              <p className="text-xl font-semibold text-green-400 mb-2">Total Vendors Empowered</p>
            </div>
            <div className="text-center bg-green-900/40 p-8 rounded-lg">
              <h2 className="text-5xl font-bold text-white mb-4">37%</h2>
              <p className="text-xl font-semibold text-green-400 mb-2">Street Vendor Income Growth</p>
            </div>
            <div className="text-center bg-green-900/40 p-8 rounded-lg">
              <h2 className="text-5xl font-bold text-white mb-4">5.2k</h2>
              <p className="text-xl font-semibold text-green-400 mb-2">Local Employment Generated</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vendor Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Vendor Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real stories from vendors whose lives have been transformed
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hawky-card overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="bg-gray-900/80 absolute inset-0 z-10"></div>
                    <img 
                      src={`https://images.unsplash.com/${testimonial.image}?w=600&h=300&fit=crop`}
                      alt={testimonial.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 z-20 flex items-center p-8">
                      <div className="text-white">
                        <Star className="w-8 h-8 text-hawky-yellow mb-4" />
                        <p className="text-xl italic mb-6">"{testimonial.quote}"</p>
                        <div className="flex items-center">
                          <div className="mr-4">
                            <div className="w-12 h-12 rounded-full bg-hawky-orange"></div>
                          </div>
                          <div>
                            <p className="font-bold text-lg">{testimonial.name}</p>
                            <p className="text-sm opacity-80">{testimonial.role} • {testimonial.location}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="outline" className="border-hawky-green text-hawky-green hover:bg-hawky-green hover:text-white">
              View All Stories
            </Button>
          </div>
        </div>
      </section>

      {/* SDG Alignment */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sustainable Development Goals
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our work aligns with the UN Sustainable Development Goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sdgAlignment.map((sdg, index) => (
              <Card key={index} className="hawky-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <Award className="w-6 h-6 text-hawky-yellow" />
                    <h3 className="text-xl font-bold text-gray-900">{sdg.goal}</h3>
                  </div>
                  <p className="text-gray-600">
                    {sdg.impact}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vendor Boost Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Vendor Credit System
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Low-cost micro-financing for high-performing vendors
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="/lovable-uploads/fcc04cbb-441f-4896-bf2a-cefa6cf518a4.png"
                alt="Vendor Credit System"
                className="rounded-lg shadow-xl h-full object-cover"
              />
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-hawky-green mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Performance-based scoring</p>
                    <p className="text-gray-600">Vendors build credit history through consistent app usage and customer reviews.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-hawky-green mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Micro-loans for growth</p>
                    <p className="text-gray-600">Access to small business loans for inventory, equipment or location expansion.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-hawky-green mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Financial inclusion</p>
                    <p className="text-gray-600">First-time banking and formal credit access for traditionally unbanked vendors.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How Hawky Works Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How Hawky Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our ecosystem connects customers, vendors, and delivery partners
            </p>
          </div>
          
          <img 
            src="/lovable-uploads/c3f92fdd-4e9d-4dfb-89b5-5b9f01d16994.png"
            alt="How Hawky Works"
            className="w-full rounded-xl shadow-lg mb-8"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hawky-card">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Customer</h3>
                <p className="text-gray-600 mb-4">
                  Browse street food vendors, place an order for pickup or delivery
                </p>
              </CardContent>
            </Card>
            
            <Card className="hawky-card">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Vendor</h3>
                <p className="text-gray-600 mb-4">
                  Manage your menu and inventory, fulfill customer orders
                </p>
              </CardContent>
            </Card>
            
            <Card className="hawky-card">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Delivery Partner</h3>
                <p className="text-gray-600 mb-4">
                  Deliver orders to customers quickly and efficiently
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partner With Us */}
      <section className="py-16 bg-gradient-to-r from-hawky-green to-hawky-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Partner With Us For Greater Impact
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join us in our mission to empower street vendors and create sustainable livelihoods
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-hawky-green hover:bg-gray-100 text-lg px-8 py-4">
              Corporate Partnerships
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              Contact Impact Team
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Impact;
