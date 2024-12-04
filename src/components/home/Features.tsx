import React from 'react';
import { BookOpen, Users, Trophy, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: <BookOpen className="w-8 h-8 text-blue-600" />,
    title: 'Expert Training',
    description: 'Learn from experienced traders with proven track records in the market.'
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: 'Community Support',
    description: 'Join our active community of traders for discussions and market insights.'
  },
  {
    icon: <Trophy className="w-8 h-8 text-blue-600" />,
    title: 'Proven Results',
    description: 'Our students consistently achieve profitable trading results.'
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
    title: 'Market Analysis',
    description: 'Daily market updates and technical analysis to keep you informed.'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Trading Program?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive trading education with a focus on practical skills and real-market experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}