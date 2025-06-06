
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  location: string;
  image?: string;
}

const TestimonialCard = ({
  quote,
  name,
  role,
  location,
  image = "photo-1649972904349-6e44c42644a7"
}: TestimonialCardProps) => {
  return (
    <Card className="overflow-hidden shadow-lg">
      <CardContent className="p-0">
        <div className="relative">
          <div className="bg-gray-900/75 absolute inset-0 z-10"></div>
          <img 
            src={`https://images.unsplash.com/${image}?w=600&h=300&fit=crop`}
            alt={name}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center p-8">
            <div className="text-white">
              <Star className="w-8 h-8 text-yellow-400 mb-4" />
              <p className="text-xl italic mb-6">"{quote}"</p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-green-500"></div>
                </div>
                <div>
                  <p className="font-bold text-lg">{name}</p>
                  <p className="text-sm opacity-80">{role} • {location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
