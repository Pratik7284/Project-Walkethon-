import React from 'react';

const Navbar: React.FC = () => {
  const scrollToRegister = () => {
    const el = document.getElementById('registration');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center gap-4 md:gap-8">
            <div className="h-10 md:h-12 flex items-center">
               <img 
                src="https://upload.wikimedia.org/wikipedia/en/0/0f/Zydus_Lifesciences.svg" 
                alt="Zydus Lifesciences" 
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="h-10 w-px bg-gray-200 hidden sm:block"></div>
            <div className="h-14 md:h-16 flex items-center">
               
            </div>
          </div>
          <button
            onClick={scrollToRegister}
            className="bg-[#1FA6A8] hover:bg-[#198a8c] text-white px-5 sm:px-8 py-3 rounded-full font-black text-sm transition-all shadow-md hover:shadow-xl active:scale-95 whitespace-nowrap"
          >
            REGISTER NOW
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;