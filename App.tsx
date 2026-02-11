import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Info from './components/Info';
import Registration from './components/Registration';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Info />
        <Registration />
      </main>
      <Footer />
    </div>
  );
};

export default App;