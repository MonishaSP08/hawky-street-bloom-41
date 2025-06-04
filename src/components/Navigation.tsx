
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, User } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Browse Vendors', path: '/vendors' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Vendor Academy', path: '/vendor-academy' },
    { name: 'Impact', path: '/impact' },
    { name: 'Careers', path: '/careers' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Bigger but not as big as before */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/fc706038-1e1f-4243-a8e0-5fa230c47d80.png" 
              alt="Hawky Logo" 
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation - Bold Font with normal size */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`transition-colors duration-200 font-bold ${
                  isActive(item.path)
                    ? 'text-hawky-orange'
                    : 'text-gray-700 hover:text-hawky-orange'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-hawky-orange text-hawky-orange hover:bg-hawky-orange hover:text-white font-bold">
              <Phone className="w-4 h-4 mr-2" />
              Support
            </Button>
            <Button className="hawky-button font-bold">
              <User className="w-4 h-4 mr-2" />
              Sign In
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation - Bold Font */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-bold transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-hawky-orange bg-orange-50'
                      : 'text-gray-700 hover:text-hawky-orange hover:bg-gray-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="border-hawky-orange text-hawky-orange hover:bg-hawky-orange hover:text-white font-bold">
                  <Phone className="w-4 h-4 mr-2" />
                  Support
                </Button>
                <Button className="hawky-button font-bold">
                  <User className="w-4 h-4 mr-2" />
                  Sign In
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
