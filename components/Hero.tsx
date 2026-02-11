
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center pt-20 pb-16 bg-white overflow-hidden">
      {/* Decorative Brand Blurs */}
      <div className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#1FA6A8] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#B44AA3] rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 mb-8 bg-[#F5FAFA] text-[#1FA6A8] px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-[#1FA6A8]/20">
          <span className="w-2 h-2 rounded-full bg-[#1FA6A8] animate-pulse"></span>
          Organized by Zydus
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black text-[#222222] mb-6 tracking-tight leading-[1.1]">
          Lucknow <span className="text-[#1FA6A8]">Walkathon</span> <span className="text-[#B44AA3]">2026</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-500 font-medium mb-12 max-w-2xl mx-auto">
          Welcomes All Participants to a Healthier Future
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="bg-[#F5FAFA] px-8 py-6 rounded-2xl border border-gray-100 flex items-center gap-4 min-w-[240px]">
            <div className="p-3 bg-white rounded-xl shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#B44AA3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">Event Date</p>
              <p className="text-lg font-bold text-[#222222]">14 Feb 2026</p>
            </div>
          </div>

          <div className="bg-[#F5FAFA] px-8 py-6 rounded-2xl border border-gray-100 flex items-center gap-4 min-w-[240px]">
            <div className="p-3 bg-white rounded-xl shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1FA6A8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">Reporting Time</p>
              <p className="text-lg font-bold text-[#222222]">7:00 AM</p>
            </div>
          </div>
        </div>

        <button
          onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-[#1FA6A8] hover:bg-[#198a8c] text-white px-12 py-5 rounded-full font-black text-lg transition-all shadow-xl shadow-[#1FA6A8]/20 active:scale-95 mb-16"
        >
          Register For Walk
        </button>

        <div className="rounded-[40px] overflow-hidden shadow-2xl shadow-gray-200 border-8 border-white bg-white">
          <img 
            src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=1200&h=600" 
            alt="Medical Walkathon Banner" 
            className="w-full h-auto object-cover max-h-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
