import React from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">Vicky Bobby Trader</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="#features" className="text-gray-700 hover:text-blue-600">Services</a>
            <a href="#courses" className="text-gray-700 hover:text-blue-600">Courses</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
          </nav>

          {/* Contact Button */}
         { /* <div className="hidden md:flex items-center">
            <a href="tel:+918220055688" className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
              <Phone className="w-4 h-4 mr-2" />
              Contact Now
            </a>
           </div>
          */ }

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
              <a href="#courses" className="text-gray-700 hover:text-blue-600">Courses</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
              
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}