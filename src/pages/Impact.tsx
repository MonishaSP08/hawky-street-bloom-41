
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Users, 
  TrendingUp, 
  Heart, 
  MapPin,
  Award,
  Clock,
  CheckCircle,
  ArrowRight,
  DollarSign,
  Utensils,
  ShoppingBag,
  Star
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
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-green-800 via-green-700 to-green-900">
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
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 h-80 rounded-lg shadow-xl flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-4">Vendor Credit System</h3>
                <p className="text-lg">Visual representation of credit scoring</p>
              </div>
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
          
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 h-80 rounded-xl shadow-lg mb-8 flex items-center justify-center">
            <div className="text-center text-blue-800">
              <h3 className="text-2xl font-bold mb-4">How Hawky Works</h3>
              <p className="text-lg">Visual representation of the ecosystem</p>
            </div>
          </div>
          
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

      {/* Partnership CTA */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Partner with Us for Greater Impact
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join our mission to transform street food culture and support local communities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-700 hover:bg-green-100 text-lg px-8 font-semibold">
              Contact Impact Team
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 text-lg px-8">
              Learn About Partnerships
            </Button>
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Future Goals
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our vision for the future includes expanding our reach, improving vendor services, and supporting local communities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hawky-card">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Expand Reach</h3>
                <p className="text-gray-600 mb-4">
                  Increase our presence in new cities and regions to reach more street food vendors
                </p>
              </CardContent>
            </Card>
            
            <Card className="hawky-card">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Improve Vendor Services</h3>
                <p className="text-gray-600 mb-4">
                  Enhance our vendor management tools and support to improve the overall experience for vendors
                </p>
              </CardContent>
            </Card>
            
            <Card className="hawky-card">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Support Local Communities</h3>
                <p className="text-gray-600 mb-4">
                  Collaborate with local organizations and initiatives to support the growth and development of street food culture
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Impact;
