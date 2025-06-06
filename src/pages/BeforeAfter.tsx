
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BeforeAfterComparison from '@/components/BeforeAfterComparison';
import TestimonialCard from '@/components/TestimonialCard';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Utensils, // Using Utensils instead of Chef
  Users, 
  ShoppingCart,
  ChevronRight, 
  ChevronLeft,
  Download
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BeforeAfterFlowChart from '@/components/BeforeAfterFlowChart';

const BeforeAfter = () => {
  const vendorComparisonItems = [
    {
      before: 'Street cart limited to nearby pedestrians only',
      after: 'Orders from entire neighborhood & city through app',
      beforeImage: 'photo-1487958449943-2429e8be8625',
      afterImage: 'photo-1461749280684-dccba630e2f6'
    },
    {
      before: 'No online visibility',
      after: 'Profile listed in Hawky app with ratings & photos',
      beforeImage: 'photo-1542744094-3a31f272c490',
      afterImage: 'photo-1519389950473-47ba0277781c'
    },
    {
      before: 'Cash-only',
      after: 'Accepts UPI, Paytm, Credit Cards',
      beforeImage: 'photo-1556742049-0cfed4f6a45d',
      afterImage: 'photo-1563013544-824ae1b704d3'
    },
    {
      before: 'Unpredictable sales',
      after: 'Daily consistent orders',
      beforeImage: 'photo-1559526324-4b87b5e36e44',
      afterImage: 'photo-1460925895917-afdab827c52f'
    },
    {
      before: 'No order tracking',
      after: 'Real-time order dashboard',
      beforeImage: 'photo-1554224155-8d04cb21cd6c',
      afterImage: 'photo-1551288049-bebda4e38f71'
    },
    {
      before: 'Hygiene not verified',
      after: 'Hygiene Verified Badge on profile',
      beforeImage: 'photo-1571019613454-1cb2f99b2d8b',
      afterImage: 'photo-1576091160399-112ba8d25d1f'
    },
    {
      before: 'No access to training',
      after: 'Vendor Academy with free business courses',
      beforeImage: 'photo-1507003211169-0a1dd7228f2d',
      afterImage: 'photo-1522202176988-66273c2fd55f'
    },
    {
      before: 'No growth insights',
      after: 'Sales analytics, inventory alerts, peak hours insights',
      beforeImage: 'photo-1590736969955-71cc94901144',
      afterImage: 'photo-1551288049-bebda4e38f71'
    },
    {
      before: 'No financial help',
      after: 'Eligible for Vendor Credit Score-based micro-financing',
      beforeImage: 'photo-1579621970563-ebec7560ff3e',
      afterImage: 'photo-1554224155-6726b3ff858f'
    },
    {
      before: 'Completely dependent on weather/footfall',
      after: 'Orders even during low-footfall hours thanks to delivery',
      beforeImage: 'photo-1504113888839-1c8eb50233aa',
      afterImage: 'photo-1487887235947-a955ef187fcc'
    }
  ];

  const customerComparisonItems = [
    {
      before: 'Had to visit street carts physically',
      after: 'Order from home in few clicks',
      beforeImage: 'photo-1506905925346-21bda4d32df4',
      afterImage: 'photo-1721322800607-8c38375eef04'
    },
    {
      before: 'Limited options at any given location',
      after: 'Browse 100s of vendors city-wide',
      beforeImage: 'photo-1487958449943-2429e8be8625',
      afterImage: 'photo-1461749280684-dccba630e2f6'
    },
    {
      before: 'No real-time hygiene info',
      after: 'Hawky Hygiene Verified Badge visible',
      beforeImage: 'photo-1571019613454-1cb2f99b2d8b',
      afterImage: 'photo-1576091160399-112ba8d25d1f'
    },
    {
      before: 'No delivery option',
      after: '15-20 minute hyperlocal delivery',
      beforeImage: 'photo-1506905925346-21bda4d32df4',
      afterImage: 'photo-1487887235947-a955ef187fcc'
    },
    {
      before: 'No loyalty rewards',
      after: 'Hawky Coins & referral bonuses',
      beforeImage: 'photo-1556742049-0cfed4f6a45d',
      afterImage: 'photo-1607863680198-23d4b2565df0'
    },
    {
      before: 'No AI-powered recommendations',
      after: 'Smart AI shows regular favorites and reordering suggestions',
      beforeImage: 'photo-1507003211169-0a1dd7228f2d',
      afterImage: 'photo-1485827404703-89b55fcc595e'
    },
    {
      before: 'Cash only payments',
      after: 'Fully digital payments with UPI, cards, pay-later options',
      beforeImage: 'photo-1556742049-0cfed4f6a45d',
      afterImage: 'photo-1563013544-824ae1b704d3'
    },
    {
      before: 'Uncertain availability',
      after: 'Live map shows which vendors are open & nearby',
      beforeImage: 'photo-1590736969955-71cc94901144',
      afterImage: 'photo-1524661135-423995f22d0b'
    },
    {
      before: 'Vendor discovery by word-of-mouth',
      after: 'Vendor discovery through ratings, reviews, trending lists',
      beforeImage: 'photo-1507003211169-0a1dd7228f2d',
      afterImage: 'photo-1556761175-b413da4baf72'
    }
  ];

  const vendorTestimonials = [
    {
      quote: "From 10 plates/day to 50+ plates/day after joining Hawky.",
      name: "Anil Kumar",
      role: "Dosa Vendor",
      location: "Pune",
      image: "photo-1649972904349-6e44c42644a7"
    },
    {
      quote: "My daily income has tripled, and now I don't worry about bad weather affecting sales.",
      name: "Lakshmi Devi",
      role: "Chaat Vendor",
      location: "Bangalore",
      image: "photo-1581091226825-a6a2a5aee158"
    },
    {
      quote: "The vendor training has helped me improve my menu and attract more customers.",
      name: "Raju Singh",
      role: "Momos Vendor",
      location: "Hyderabad",
      image: "photo-1488590528505-98d2b5aba04b"
    }
  ];

  const customerTestimonials = [
    {
      quote: "I order my favorite pani puri every Friday, and it arrives in 15 mins.",
      name: "Neha",
      role: "Customer",
      location: "Bangalore",
      image: "photo-1721322800607-8c38375eef04"
    },
    {
      quote: "Now I can order from street vendors across the city without leaving my office.",
      name: "Vikram",
      role: "Customer",
      location: "Pune",
      image: "photo-1460925895917-afdab827c52f"
    },
    {
      quote: "The hygiene verification gives me confidence to try new vendors.",
      name: "Priya",
      role: "Customer",
      location: "Hyderabad",
      image: "photo-1498050108023-c5249f4df085"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-green-700 to-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Before & After <span className="text-green-300">Hawky</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              See the transformation we're bringing to street food vendors and customers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-700 hover:bg-green-100">
                Join as Vendor
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                Start Ordering
                <ShoppingCart className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Flow Chart Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Hawky Transformation Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how Hawky transforms the entire street food ecosystem through digital innovation
            </p>
          </div>
          <BeforeAfterFlowChart />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Vendor Comparison */}
          <BeforeAfterComparison 
            title="Vendor Before & After"
            items={vendorComparisonItems}
            gradientFrom="green-600"
            gradientTo="green-800"
            icon={<Utensils className="h-8 w-8 text-green-600" />}
          />

          {/* Vendor Testimonials */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Vendor Success Stories</h3>
            <Carousel className="w-full">
              <CarouselContent>
                {vendorTestimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <TestimonialCard {...testimonial} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-end gap-2 mt-4">
                <CarouselPrevious className="static transform-none h-10 w-10" />
                <CarouselNext className="static transform-none h-10 w-10" />
              </div>
            </Carousel>
          </div>
          
          {/* Customer Comparison */}
          <BeforeAfterComparison 
            title="Customer Before & After"
            items={customerComparisonItems}
            gradientFrom="blue-500"
            gradientTo="blue-700"
            icon={<Users className="h-8 w-8 text-blue-600" />}
          />

          {/* Customer Testimonials */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Customer Success Stories</h3>
            <Carousel className="w-full">
              <CarouselContent>
                {customerTestimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <TestimonialCard {...testimonial} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-end gap-2 mt-4">
                <CarouselPrevious className="static transform-none h-10 w-10" />
                <CarouselNext className="static transform-none h-10 w-10" />
              </div>
            </Carousel>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-8 md:p-12 text-white">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Experience?</h2>
              <p className="text-xl mb-8">
                Whether you're a vendor looking to grow your business or a customer seeking convenient street food options, Hawky is here for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-green-700 hover:bg-green-100">
                  Join as Vendor
                </Button>
                <Button size="lg" className="bg-white text-green-700 hover:bg-green-100 flex items-center font-semibold">
                  <Download className="mr-2 h-4 w-4" />
                  Download App
                </Button>
              </div>
            </div>
          </div>
          
          {/* Future Extensions */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Coming Soon</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-lg mb-2">Real Success Stories</h4>
                <p className="text-gray-600">
                  From our first city launches in Bangalore, Hyderabad, and Pune.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-lg mb-2">Video Interviews</h4>
                <p className="text-gray-600">
                  Short 30-second reels embedded on the website.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-lg mb-2">SEO-Rich Content</h4>
                <p className="text-gray-600">
                  Boosting organic traffic with success stories and vendor journeys.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BeforeAfter;
