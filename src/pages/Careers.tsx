
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Briefcase, 
  MapPin, 
  Star, 
  Users,
  CheckCircle,
  TrendingUp,
  Award,
  Globe,
  Info
} from 'lucide-react';

const Careers = () => {
  const coreValues = [
    {
      title: "Vendor First",
      description: "We put street food vendors at the center of everything we do, ensuring our platform helps them grow and thrive.",
      icon: Users
    },
    {
      title: "Tech Innovation",
      description: "We leverage cutting-edge technology to solve real problems and create meaningful impact for our communities.",
      icon: Globe
    },
    {
      title: "Local Impact",
      description: "We're committed to strengthening local food ecosystems and creating sustainable livelihoods.",
      icon: MapPin
    },
    {
      title: "Growth Mindset",
      description: "We embrace challenges, persist in the face of obstacles, and view failure as an opportunity to learn.",
      icon: TrendingUp
    }
  ];

  const teams = [
    {
      name: "Technology",
      roles: [
        {
          title: "Senior React Native Developer",
          location: "Bangalore",
          type: "Full-time",
          description: "Build and enhance our mobile applications for vendors, customers, and delivery partners."
        },
        {
          title: "AI/ML Engineer",
          location: "Bangalore",
          type: "Full-time",
          description: "Develop and implement machine learning algorithms for demand prediction and vendor matching."
        },
        {
          title: "Backend Engineer",
          location: "Remote",
          type: "Full-time",
          description: "Build scalable backend systems using Node.js and PostgreSQL to support our growing platform."
        }
      ]
    },
    {
      name: "Operations",
      roles: [
        {
          title: "City Launch Manager",
          location: "Hyderabad",
          type: "Full-time",
          description: "Lead the launch of Hawky in new neighborhoods and cities, onboarding vendors and building local teams."
        },
        {
          title: "Vendor Success Manager",
          location: "Pune",
          type: "Full-time",
          description: "Work directly with street food vendors to help them maximize success on the Hawky platform."
        }
      ]
    },
    {
      name: "Marketing & Growth",
      roles: [
        {
          title: "Growth Marketing Manager",
          location: "Bangalore",
          type: "Full-time",
          description: "Drive customer acquisition and retention through data-driven marketing strategies."
        },
        {
          title: "Content Creator",
          location: "Remote",
          type: "Contract",
          description: "Create engaging content for our blog, social media, and vendor training materials."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-hawky-orange/10 via-hawky-yellow/10 to-hawky-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Join the <span className="bg-gradient-hawky bg-clip-text text-transparent">Hawky</span> Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Help us transform street food vending with technology and create meaningful impact
            </p>
            <Button size="lg" className="hawky-button">
              View Open Positions
            </Button>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and culture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="hawky-card hover:scale-105 transition-transform text-center">
                <CardContent className="p-8">
                  <div className="bg-gradient-hawky p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Hawky */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Join Hawky?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                At Hawky, you'll work on meaningful problems that impact thousands of street food vendors and millions of customers. Our mission goes beyond food delivery - we're creating sustainable livelihoods and transforming urban food ecosystems.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-hawky-orange rounded-full p-1 mr-3 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Impactful Work</h4>
                    <p className="text-gray-600">Make a real difference in vendors' lives</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-hawky-orange rounded-full p-1 mr-3 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Growth Opportunities</h4>
                    <p className="text-gray-600">Rapid advancement in a fast-growing startup</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-hawky-orange rounded-full p-1 mr-3 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Cutting-Edge Tech</h4>
                    <p className="text-gray-600">Work with AI, predictive analytics, and real-time systems</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-hawky-orange rounded-full p-1 mr-3 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Inclusive Culture</h4>
                    <p className="text-gray-600">Diverse, supportive, and collaborative workplace</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-6 p-6 bg-white rounded-xl shadow-lg">
              <div className="bg-hawky-orange/10 p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-hawky-orange mb-2">120+</div>
                <p className="text-gray-900">Team Members</p>
              </div>
              <div className="bg-hawky-green/10 p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-hawky-green mb-2">3</div>
                <p className="text-gray-900">Cities</p>
              </div>
              <div className="bg-hawky-blue/10 p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-hawky-blue mb-2">40%</div>
                <p className="text-gray-900">Female Employees</p>
              </div>
              <div className="bg-hawky-yellow/10 p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-hawky-yellow mb-2">4.8</div>
                <p className="text-gray-900">Employee Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join our team and be part of our journey to transform street food vending
            </p>
          </div>
          
          <Tabs defaultValue={teams[0].name.toLowerCase()} className="space-y-8">
            <TabsList className="grid grid-cols-3 gap-4 max-w-md mx-auto">
              {teams.map((team) => (
                <TabsTrigger key={team.name} value={team.name.toLowerCase()}>
                  {team.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {teams.map((team) => (
              <TabsContent key={team.name} value={team.name.toLowerCase()} className="space-y-6">
                <div className="flex items-center space-x-2 mb-2">
                  <Briefcase className="w-5 h-5 text-hawky-orange" />
                  <h3 className="text-xl font-bold text-gray-900">{team.name} Team</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {team.roles.map((role, idx) => (
                    <Card key={idx} className="hawky-card hover:-translate-y-1 transition-transform">
                      <CardContent className="p-6">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">{role.title}</h4>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="bg-hawky-orange/10 text-hawky-orange text-xs px-2 py-1 rounded-full flex items-center">
                            <MapPin className="w-3 h-3 mr-1" />
                            {role.location}
                          </span>
                          <span className="bg-hawky-green/10 text-hawky-green text-xs px-2 py-1 rounded-full">
                            {role.type}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 mb-6">{role.description}</p>
                        
                        <Button className="w-full bg-hawky-orange hover:bg-hawky-orange-dark">
                          Apply Now
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {team.roles.length === 0 && (
                  <div className="text-center py-12 bg-gray-50 rounded-xl">
                    <p className="text-gray-500">No open positions in this team right now.</p>
                    <p className="text-gray-600 mt-2">Check back soon or send your resume to <span className="text-hawky-orange">careers@hawky.com</span></p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
          
          {/* Not Seeing a Fit */}
          <div className="mt-16 bg-gradient-to-r from-hawky-orange/10 to-hawky-yellow/10 rounded-xl p-8 shadow-inner text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Don't see a role that fits?</h3>
            <p className="text-gray-600 mb-6">
              We're always looking for exceptional talent. Send your resume and tell us how you can contribute to our mission.
            </p>
            <Button className="hawky-button">
              Submit Open Application
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hawky">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join our mission to empower street food vendors and transform urban food ecosystems
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-hawky-orange hover:bg-gray-100 text-lg px-8 py-4">
              View Open Positions
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
