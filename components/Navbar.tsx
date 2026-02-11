
import React from 'react';

const Navbar: React.FC = () => {
  const scrollToRegister = () => {
    const el = document.getElementById('registration');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-4">
            <div className="h-10 md:h-12 flex items-center">
               <img 
                src="https://upload.wikimedia.org/wikipedia/en/0/0f/Zydus_Lifesciences.svg" 
                alt="Zydus Lifesciences" 
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="h-8 w-px bg-gray-200 hidden sm:block"></div>
            <span className="text-xs font-bold text-[#222222] uppercase tracking-[0.2em] hidden md:block">
              Walkathon 2026
            </span>
          </div>
          <button
            onClick={scrollToRegister}
            className="bg-[#1FA6A8] hover:bg-[#198a8c] text-white px-5 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg active:scale-95 whitespace-nowrap"
          >
            Register Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
