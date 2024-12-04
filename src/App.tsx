import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/home/Hero';
import Features from './components/home/Features';
import Courses from './components/home/Courses';
import Contact from './components/home/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Courses />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;