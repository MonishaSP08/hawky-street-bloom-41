import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/88ac5167-8fcd-4e8a-9e98-0009211187af.png" 
                alt="Hawky Logo" 
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm">
              From Street Carts To Your Cart — Instantly. Empowering local vendors with AI-powered hyperlocal delivery.
            </p>
            <div className="flex space-x-4">
              <Instagram className="w-5 h-5 text-gray-400 hover:text-hawky-orange cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 text-gray-400 hover:text-hawky-orange cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-hawky-orange cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/vendors" className="text-gray-400 hover:text-white transition-colors">Browse Vendors</Link></li>
              <li><Link to="/how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/vendor-academy" className="text-gray-400 hover:text-white transition-colors">Vendor Academy</Link></li>
              <li><Link to="/impact" className="text-gray-400 hover:text-white transition-colors">Our Impact</Link></li>
            </ul>
          </div>

          {/* For Vendors */}
          <div>
            <h3 className="text-lg font-semibold mb-4">For Vendors</h3>
            <ul className="space-y-2">
              <li><Link to="/vendor-signup" className="text-gray-400 hover:text-white transition-colors">Join as Vendor</Link></li>
              <li><Link to="/vendor-academy" className="text-gray-400 hover:text-white transition-colors">Business Tools</Link></li>
              <li><Link to="/support" className="text-gray-400 hover:text-white transition-colors">Vendor Support</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-hawky-orange" />
                <span className="text-gray-400 text-sm">hello@hawky.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-hawky-orange" />
                <span className="text-gray-400 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-4 h-4 text-hawky-orange mt-1">📍</div>
                <span className="text-gray-400 text-sm">
                  Bangalore, Hyderabad, Pune<br />
                  Coming to more cities soon!
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Hawky. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
            <Link to="/support" className="text-gray-400 hover:text-white text-sm transition-colors">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
