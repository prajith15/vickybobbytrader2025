import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Master the Art of <span className="text-blue-600">Trading</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Learn professional trading strategies from experienced mentors. Transform your trading journey with our comprehensive courses and personalized guidance.
            </p>
            <div className="flex space-x-4">
              <a href="#courses" className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 flex items-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="#about" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50">
                Learn More
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="vicky.jpg"
              alt="Trading Analysis"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}