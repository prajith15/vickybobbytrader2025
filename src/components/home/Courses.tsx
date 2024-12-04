import React from 'react';
import { Clock, Users, Star } from 'lucide-react';

const courses = [
  {
    title: 'Recorded Class (English)',
    description: '1 Month Levels Group + Life Time Whatsapp Community',
    duration: '1 Year ',
    students: '100+',
    rating: '4.8',
    image: 'course1.png'
  },
  {
    title: 'Recorded Class (Tamil)',
    description: '1 Month Levels Group + Life Time Whatsapp Community',
    duration: '1 Year ',
    students: '100+',
    rating: '4.8',
    image: 'course1.png'
  },
  {
    title: 'One on One Mentorship (English & Tamil)',
    description: '1 Month Live Trade with Me + 1 Month Levels Group + Life Time Whatsapp Community',
    duration: '4 weeks ',
    students: '250+',
    rating: '4.5',
    image: 'course2.png'
  }
];

export default function Courses() {
  return (
    <section className="py-20 bg-gray-50" id="courses">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Trading Courses
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our selection of comprehensive trading courses designed to help you succeed in the financial markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {course.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center text-yellow-500">
                    <Star className="w-4 h-4 mr-1" />
                    <span>{course.rating}</span>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}