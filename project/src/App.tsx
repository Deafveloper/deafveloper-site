import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Packages from './components/Packages';
import ExpressServices from './components/ExpressServices';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-dark-900">
      <Navbar />
      <Hero />
      <About />
      <Packages />
      <ExpressServices />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;