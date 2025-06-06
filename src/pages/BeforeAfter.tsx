
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BeforeAfterComparison from '@/components/BeforeAfterComparison';
import TestimonialCard from '@/components/TestimonialCard';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Chef, 
  Users, 
  ShoppingCart,
  ChevronRight, 
  ChevronLeft
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const BeforeAfter = () => {
  const vendorComparisonItems = [
    {
      before: 'Street cart limited to nearby pedestrians only',
      after: 'Orders from entire neighborhood & city through app'
    },
    {
      before: 'No online visibility',
      after: 'Profile listed in Hawky app with ratings & photos'
    },
    {
      before: 'Cash-only',
      after: 'Accepts UPI, Paytm, Credit Cards'
    },
    {
      before: 'Unpredictable sales',
      after: 'Daily consistent orders'
    },
    {
      before: 'No order tracking',
      after: 'Real-time order dashboard'
    },
    {
      before: 'Hygiene not verified',
      after: 'Hygiene Verified Badge on profile'
    },
    {
      before: 'No access to training',
      after: 'Vendor Academy with free business courses'
    },
    {
      before: 'No growth insights',
      after: 'Sales analytics, inventory alerts, peak hours insights'
    },
    {
      before: 'No financial help',
      after: 'Eligible for Vendor Credit Score-based micro-financing'
    },
    {
      before: 'Completely dependent on weather/footfall',
      after: 'Orders even during low-footfall hours thanks to delivery'
    }
  ];

  const customerComparisonItems = [
    {
      before: 'Had to visit street carts physically',
      after: 'Order from home in few clicks'
    },
    {
      before: 'Limited options at any given location',
      after: 'Browse 100s of vendors city-wide'
    },
    {
      before: 'No real-time hygiene info',
      after: 'Hawky Hygiene Verified Badge visible'
    },
    {
      before: 'No delivery option',
      after: '15-20 minute hyperlocal delivery'
    },
    {
      before: 'No loyalty rewards',
      after: 'Hawky Coins & referral bonuses'
    },
    {
      before: 'No AI-powered recommendations',
      after: 'Smart AI shows regular favorites and reordering suggestions'
    },
    {
      before: 'Cash only payments',
      after: 'Fully digital payments with UPI, cards, pay-later options'
    },
    {
      before: 'Uncertain availability',
      after: 'Live map shows which vendors are open & nearby'
    },
    {
      before: 'Vendor discovery by word-of-mouth',
      after: 'Vendor discovery through ratings, reviews, trending lists'
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

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Vendor Comparison */}
          <BeforeAfterComparison 
            title="Vendor Before & After"
            items={vendorComparisonItems}
            gradientFrom="green-600"
            gradientTo="green-800"
            icon={<Chef className="h-8 w-8 text-green-600" />}
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
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
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
