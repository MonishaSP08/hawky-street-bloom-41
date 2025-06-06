
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { CheckCircle } from 'lucide-react';

interface ComparisonItem {
  before: string;
  after: string;
}

interface BeforeAfterComparisonProps {
  title: string;
  items: ComparisonItem[];
  gradientFrom: string;
  gradientTo: string;
  icon?: React.ReactNode;
}

const BeforeAfterComparison = ({
  title,
  items,
  gradientFrom,
  gradientTo,
  icon
}: BeforeAfterComparisonProps) => {
  const [sliderValue, setSliderValue] = useState([50]);

  return (
    <div className="mb-16">
      <div className="flex items-center gap-3 mb-6">
        {icon}
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
      </div>
      
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="font-semibold text-gray-700">Before Hawky</span>
          <span className="font-semibold text-gray-700">After Hawky</span>
        </div>
        <Slider
          className="mb-6"
          value={sliderValue}
          onValueChange={setSliderValue}
          max={100}
          step={1}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className={`bg-gradient-to-br from-gray-100 to-gray-200 border-0 transition-opacity duration-300`}
              style={{ opacity: (100 - sliderValue[0]) / 100 + 0.3 }}>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Before Hawky</h3>
            <ul className="space-y-3">
              {items.map((item, index) => (
                <li key={`before-${index}`} className="flex items-start">
                  <span className="text-gray-500 text-sm mr-3">●</span>
                  <span className="text-gray-600">{item.before}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className={`bg-gradient-to-br from-${gradientFrom} to-${gradientTo} border-0 text-white transition-opacity duration-300`}
              style={{ opacity: sliderValue[0] / 100 + 0.3 }}>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">After Hawky</h3>
            <ul className="space-y-3">
              {items.map((item, index) => (
                <li key={`after-${index}`} className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span>{item.after}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BeforeAfterComparison;
