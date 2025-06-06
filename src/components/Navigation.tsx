
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
    { name: 'Before & After', path: '/before-after' },
    { name: 'Careers', path: '/careers' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-green-600 shadow-lg border-b border-green-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Navigation Items - All in one line */}
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`transition-colors duration-200 font-bold ${
                  isActive(item.path)
                    ? 'text-white'
                    : 'text-green-100 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-white text-green-600 hover:bg-green-50 font-bold">
              <Phone className="w-4 h-4 mr-2" />
              Support
            </Button>
            <Button className="bg-white text-green-600 hover:bg-green-50 font-bold">
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
              className="text-white hover:bg-green-700"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-green-600 border-t border-green-700">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-bold transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-white bg-green-700'
                      : 'text-green-100 hover:text-white hover:bg-green-700'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button className="bg-white text-green-600 hover:bg-green-50 font-bold">
                  <Phone className="w-4 h-4 mr-2" />
                  Support
                </Button>
                <Button className="bg-white text-green-600 hover:bg-green-50 font-bold">
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
