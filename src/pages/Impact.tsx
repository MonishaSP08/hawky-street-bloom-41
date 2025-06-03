
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
  Briefcase,
  GraduationCap
} from 'lucide-react';

const Impact = () => {
  const impactMetrics = [
    {
      title: "Vendors Empowered",
      value: "2,500+",
      description: "Street food vendors onboarded to our platform",
      icon: Users,
      color: "hawky-orange"
    },
    {
      title: "Income Growth",
      value: "180%",
      description: "Average income increase for vendors",
      icon: TrendingUp,
      color: "hawky-green"
    },
    {
      title: "Jobs Created",
      value: "5,000+",
      description: "Direct & indirect jobs in the ecosystem",
      icon: Briefcase,
      color: "hawky-blue"
    },
    {
      title: "Skills Training",
      value: "18,000+",
      description: "Hours of business & food safety training",
      icon: GraduationCap,
      color: "hawky-yellow"
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

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-hawky-green/10 via-hawky-blue/10 to-hawky-orange/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Community <span className="bg-gradient-to-r from-hawky-green to-hawky-blue bg-clip-text text-transparent">Impact</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Hawky is more than just a food delivery platform. We're on a mission to empower street food vendors and create sustainable livelihoods.
            </p>
            <Button size="lg" className="hawky-button-secondary">
              Support Our Mission
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Impact By Numbers
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Measuring our success by the positive change we create in vendors' lives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <Card key={index} className="hawky-card text-center hover:scale-105 transition-transform">
                <CardContent className="p-8">
                  <div className={`bg-${metric.color}/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6`}>
                    <metric.icon className={`w-8 h-8 text-${metric.color}`} />
                  </div>
                  <h3 className={`text-3xl font-bold text-${metric.color} mb-2`}>{metric.value}</h3>
                  <p className="text-lg font-semibold text-gray-900 mb-2">{metric.title}</p>
                  <p className="text-gray-600">{metric.description}</p>
                </CardContent>
              </Card>
            ))}
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

      {/* Impact Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Impact Initiatives
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Special programs designed to create lasting social impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {impactStories.map((story, index) => (
              <Card key={index} className="hawky-card overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row h-full">
                    <div className="md:w-2/5">
                      <img 
                        src={`https://images.unsplash.com/${story.image}?w=400&h=500&fit=crop`}
                        alt={story.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-3/5 p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{story.title}</h3>
                      <p className="text-gray-600 mb-6">{story.description}</p>
                      <ul className="space-y-2 mb-6">
                        {story.metrics.map((metric, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-hawky-green mr-2 flex-shrink-0" />
                            <span>{metric}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="bg-hawky-green hover:bg-hawky-green-dark text-white">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Dashboard */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Community Impact Dashboard
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real-time updates on the impact we're creating together
            </p>
          </div>
          
          <Card className="hawky-card">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-hawky-orange mb-2">₹125 Cr+</div>
                  <p className="text-gray-900 font-semibold">Total Vendor Earnings</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-hawky-green mb-2">12,000+</div>
                  <p className="text-gray-900 font-semibold">Financial Inclusion</p>
                  <p className="text-sm text-gray-500">First bank accounts</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-hawky-blue mb-2">8,500+</div>
                  <p className="text-gray-900 font-semibold">Digital Literacy</p>
                  <p className="text-sm text-gray-500">Digital training hours</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-hawky-yellow mb-2">94%</div>
                  <p className="text-gray-900 font-semibold">Vendor Retention</p>
                  <p className="text-sm text-gray-500">Annual retention rate</p>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-gray-600 italic mb-8">
                  "Our vision is to create a thriving ecosystem where street food vendors have the tools, technology, and support to build sustainable businesses and provide for their families."
                </p>
                <Button className="hawky-button-secondary">
                  View Detailed Impact Report
                </Button>
              </div>
            </CardContent>
          </Card>
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
