
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Award, 
  BookOpen, 
  Calculator, 
  ChevronRight, 
  Clock, 
  Star, 
  TrendingUp,
  Users,
  CheckCircle,
  Briefcase,
  Lock,
  ShieldCheck
} from 'lucide-react';

const VendorAcademy = () => {
  const courses = [
    {
      id: 1,
      title: "Food Safety & Hygiene Essentials",
      description: "Learn proper food handling, storage, and hygiene practices to ensure customer safety.",
      duration: "2 hours",
      modules: 5,
      level: "Beginner",
      icon: ShieldCheck,
      isFree: true,
      image: "photo-1498050108023-c5249f4df085"
    },
    {
      id: 2,
      title: "Menu Optimization",
      description: "Design a menu that increases sales and improves customer satisfaction.",
      duration: "3 hours",
      modules: 6,
      level: "Intermediate",
      icon: Star,
      isFree: true,
      image: "photo-1581091226825-a6a2a5aee158"
    },
    {
      id: 3,
      title: "Business Growth Strategies",
      description: "Learn how to scale your street food business and maximize profits.",
      duration: "4 hours",
      modules: 8,
      level: "Advanced",
      icon: TrendingUp,
      isFree: false,
      image: "photo-1531297484001-80022131f5a1"
    },
    {
      id: 4,
      title: "Customer Service Excellence",
      description: "Provide exceptional service that keeps customers coming back.",
      duration: "2.5 hours",
      modules: 5,
      level: "Beginner",
      icon: Users,
      isFree: true,
      image: "photo-1605810230434-7631ac76ec81"
    }
  ];

  const tools = [
    {
      title: "Earnings Calculator",
      description: "Estimate your potential earnings as a Hawky vendor based on your cuisine and location.",
      icon: Calculator
    },
    {
      title: "Business Health Check",
      description: "Analyze your current business performance and get personalized recommendations.",
      icon: TrendingUp
    },
    {
      title: "Inventory Planner",
      description: "Plan your daily inventory based on AI-powered demand prediction in your area.",
      icon: BookOpen
    }
  ];

  const successStories = [
    {
      name: "Ravi Kumar",
      business: "Mumbai Chaat Express",
      growth: "400%",
      location: "Bangalore",
      story: "I used to struggle with my small chaat stall on the roadside. After joining Hawky, my daily orders increased by 400% and I've been able to hire two assistants.",
      image: "photo-1649972904349-6e44c42644a7"
    },
    {
      name: "Shanti Devi",
      business: "South Indian Corner",
      growth: "350%",
      location: "Hyderabad",
      story: "The hygiene certification and business tools from Hawky helped me transform my small idli-dosa stall into a recognized brand in my neighborhood.",
      image: "photo-1488590528505-98d2b5aba04b"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-hawky-green/10 to-hawky-blue/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Hawky <span className="bg-gradient-vendor bg-clip-text text-transparent">Vendor Academy</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Free resources, tools, and courses to help street food vendors grow their business
            </p>
            <Button size="lg" className="hawky-button-secondary">
              Join as a Vendor
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Tabs defaultValue="courses" className="space-y-8">
          <TabsList className="grid grid-cols-3 gap-4 max-w-xl mx-auto">
            <TabsTrigger value="courses" className="text-lg">Courses</TabsTrigger>
            <TabsTrigger value="tools" className="text-lg">Business Tools</TabsTrigger>
            <TabsTrigger value="success" className="text-lg">Success Stories</TabsTrigger>
          </TabsList>
          
          {/* Courses Tab */}
          <TabsContent value="courses" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Learn & Grow
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Free courses designed specifically for street food vendors
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {courses.map((course) => (
                <Card key={course.id} className="hawky-card group overflow-hidden hover:shadow-2xl">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={`https://images.unsplash.com/${course.image}?w=500&h=250&fit=crop`}
                        alt={course.title}
                        className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                      />
                      {course.isFree ? (
                        <div className="absolute top-4 left-4 bg-hawky-green text-white text-xs font-semibold px-2 py-1 rounded-full">
                          Free
                        </div>
                      ) : (
                        <div className="absolute top-4 left-4 bg-hawky-blue text-white text-xs font-semibold px-2 py-1 rounded-full">
                          Premium
                        </div>
                      )}
                      <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full">
                        <course.icon className="w-6 h-6 text-hawky-orange" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                      <p className="text-gray-600 mb-4 h-12 overflow-hidden">{course.description}</p>
                      <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{course.duration}</span>
                        </div>
                        <div>{course.modules} modules</div>
                        <div className="bg-gray-100 px-2 py-1 rounded-full text-xs">
                          {course.level}
                        </div>
                      </div>
                      <Button className="w-full bg-hawky-green hover:bg-hawky-green-dark">
                        Start Learning
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <Button variant="outline" className="border-hawky-green text-hawky-green hover:bg-hawky-green hover:text-white">
                View All Courses
              </Button>
            </div>

            {/* Featured Course */}
            <Card className="hawky-card mt-16">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 bg-gradient-vendor p-8 text-white">
                    <Award className="w-12 h-12 mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Hygiene Certification</h3>
                    <p className="mb-6">
                      Get certified in food safety and hygiene standards to increase customer trust and meet Hawky requirements.
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5" />
                        <span>Government recognized</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5" />
                        <span>Valid for 2 years</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5" />
                        <span>Includes hygiene kit</span>
                      </li>
                    </ul>
                    <Button className="bg-white text-hawky-green hover:bg-gray-100">
                      Enroll Now
                    </Button>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Why Hygiene Certification Matters
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Vendors with hygiene certification earn up to 60% more and receive 45% more orders than non-certified vendors. Our certification process is simple and supported by expert trainers.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-hawky-orange mb-2">60%</div>
                        <p className="text-gray-600">Higher Earnings</p>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-hawky-green mb-2">45%</div>
                        <p className="text-gray-600">More Orders</p>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-hawky-blue mb-2">4.8/5</div>
                        <p className="text-gray-600">Avg. Rating</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <img 
                        src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=100&h=100&fit=crop"
                        alt="Certification"
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold">Next batch starts on:</h4>
                        <p className="text-hawky-orange">June 15, 2024</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Business Tools Tab */}
          <TabsContent value="tools" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Business Tools
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Smart tools to help you optimize your business and increase profits
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tools.map((tool, index) => (
                <Card key={index} className="hawky-card hover:scale-105 transition-transform">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="bg-hawky-green/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                      <tool.icon className="w-8 h-8 text-hawky-green" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{tool.title}</h3>
                    <p className="text-gray-600 mb-6 flex-grow">{tool.description}</p>
                    <Button className="bg-hawky-green hover:bg-hawky-green-dark text-white w-full">
                      Try Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Earnings Calculator */}
            <div className="mt-16 bg-gradient-to-r from-hawky-green/10 to-hawky-blue/10 rounded-xl p-8 shadow-lg">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Earnings Calculator
                  </h3>
                  <p className="text-lg text-gray-600 mb-8">
                    See how much you could earn as a Hawky vendor based on your cuisine type, location, and operating hours.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <p className="font-semibold mb-1">Average Daily Orders</p>
                      <div className="text-2xl font-bold text-hawky-green">40-50</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <p className="font-semibold mb-1">Avg. Order Value</p>
                      <div className="text-2xl font-bold text-hawky-orange">₹150-200</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <p className="font-semibold mb-1">Daily Earnings</p>
                      <div className="text-2xl font-bold text-hawky-blue">₹6K-10K</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <p className="font-semibold mb-1">Monthly Earnings</p>
                      <div className="text-2xl font-bold text-hawky-yellow">₹1.8L-3L</div>
                    </div>
                  </div>
                  
                  <Button className="hawky-button-secondary">
                    Calculate Your Earnings
                  </Button>
                </div>
                
                <div className="md:w-1/2">
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        Popular Cuisines & Their Earnings
                      </h4>
                      
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span>North Indian Chaat</span>
                          <span className="font-semibold">₹8K-12K per day</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-hawky-orange h-2 rounded-full" style={{ width: '90%' }}></div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span>South Indian</span>
                          <span className="font-semibold">₹10K-15K per day</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-hawky-orange h-2 rounded-full" style={{ width: '95%' }}></div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span>Momos & Tibetan</span>
                          <span className="font-semibold">₹6K-9K per day</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-hawky-orange h-2 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span>Fresh Juices</span>
                          <span className="font-semibold">₹5K-8K per day</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-hawky-orange h-2 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* Success Stories Tab */}
          <TabsContent value="success" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Vendor Success Stories
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Real stories from vendors who transformed their business with Hawky
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {successStories.map((story, index) => (
                <Card key={index} className="hawky-card overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row h-full">
                      <div className="md:w-2/5 relative">
                        <img 
                          src={`https://images.unsplash.com/${story.image}?w=400&h=600&fit=crop`}
                          alt={story.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-hawky text-white text-center py-2">
                          <p className="font-bold">{story.growth} Growth</p>
                        </div>
                      </div>
                      <div className="md:w-3/5 p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{story.name}</h3>
                        <p className="text-hawky-green font-semibold mb-4">{story.business}</p>
                        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                          <MapPin className="w-4 h-4" />
                          <span>{story.location}</span>
                        </div>
                        <p className="text-gray-600 mb-6">"{story.story}"</p>
                        <Button className="bg-hawky-green hover:bg-hawky-green-dark text-white">
                          Read Full Story
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Join Now Section */}
            <Card className="hawky-card mt-12">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Your Success Story Starts Here
                </h3>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Join thousands of street vendors who have transformed their business with Hawky's technology and support system.
                </p>
                <Button size="lg" className="hawky-button-secondary">
                  <Briefcase className="w-5 h-5 mr-2" />
                  Register as a Vendor
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-vendor">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Street Food Business?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join Hawky today and take your business to the next level with our technology-powered platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-hawky-green hover:bg-gray-100 text-lg px-8 py-4">
              Join as a Vendor
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VendorAcademy;
