import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[95vh] flex items-center justify-center pt-24 pb-16 bg-white overflow-hidden">
      {/* Decorative Brand Blurs */}
      <div className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#1FA6A8] rounded-full blur-[140px]"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] bg-[#E53935] rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Event Logo on top of title */}
        <div className="flex justify-center mb-8">
          <img 
            src="https://i.ibb.co/j9KK7FFK/Screenshot-2026-02-11-171813.png" 
            alt="Lucknow Walkathon Logo" 
            className="h-32 md:h-48 w-auto object-contain drop-shadow-sm"
          />
        </div>

        <h1 className="text-6xl md:text-8xl font-[900] text-[#222222] mb-4 tracking-tighter leading-[1.05]">
          Lucknow <span className="text-[#1FA6A8]">Walkathon</span> <span className="text-[#E53935]">2026</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-500 font-semibold mb-16 tracking-tight">
          Welcomes All Participants
        </p>

        {/* Powered By Section - Enhanced Size and Pill Design */}
        <div className="flex flex-col items-center mb-16">
          <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.5em] mb-10">Powered By</p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20">
            
            {/* HeartWise Pill + Label */}
            <div className="flex flex-col items-center gap-5">
              <div className="bg-white rounded-[60px] px-14 py-10 shadow-2xl shadow-gray-200/50 border border-gray-50 flex items-center justify-center min-w-[320px] md:min-w-[420px] h-40 md:h-52 transition-transform hover:scale-105 duration-300">
                <img 
                  src="https://i.ibb.co/nsCkp3zM/Screenshot-2026-02-11-152755.png" 
                  alt="HeartWise@18" 
                  className="h-24 md:h-32 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `
                      <div class="flex items-center gap-3">
                        <span class="text-3xl font-black text-slate-700 tracking-tighter">HEART WISE</span>
                        <div class="bg-[#E53935] w-12 h-12 rounded-full flex items-center justify-center text-white text-[14px] font-bold">@18</div>
                      </div>
                    `;
                  }}
                />
              </div>
              <span className="text-[12px] font-black text-slate-400 uppercase tracking-[0.3em]"></span>
            </div>

            {/* Atorva Pill + Label */}
            <div className="flex flex-col items-center gap-5">
              <div className="bg-white rounded-[60px] px-14 py-10 shadow-2xl shadow-gray-200/50 border border-gray-50 flex items-center justify-center min-w-[320px] md:min-w-[420px] h-40 md:h-52 transition-transform hover:scale-105 duration-300">
                <img 
                  src="https://i.ibb.co/8LVshXxJ/Screenshot-2026-02-11-153403.png" 
                  alt="Atorva" 
                  className="h-20 md:h-28 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `<span class="text-6xl md:text-8xl font-black text-[#B22222] tracking-tight">Atorva</span>`;
                  }}
                />
              </div>
              <span className="text-[12px] font-black text-slate-400 uppercase tracking-[0.3em]"></span>
            </div>
            
          </div>
        </div>

        {/* Date & Time Info */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-14">
          <div className="bg-[#F5FAFA] px-10 py-5 rounded-3xl border border-gray-100 flex items-center gap-4 min-w-[260px] shadow-sm">
            <div className="p-3 bg-white rounded-2xl shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#E53935]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-[9px] text-gray-400 uppercase font-black tracking-widest">Event Date</p>
              <p className="text-xl font-extrabold text-[#222222]">14 Feb 2026</p>
            </div>
          </div>

          <div className="bg-[#F5FAFA] px-10 py-5 rounded-3xl border border-gray-100 flex items-center gap-4 min-w-[260px] shadow-sm">
            <div className="p-3 bg-white rounded-2xl shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1FA6A8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-[9px] text-gray-400 uppercase font-black tracking-widest">Reporting Time</p>
              <p className="text-xl font-extrabold text-[#222222]">6:30 AM</p>
            </div>
          </div>
        </div>

        <button
          onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-gradient-to-r from-[#1FA6A8] to-[#198a8c] hover:scale-105 text-white px-14 py-6 rounded-full font-black text-xl transition-all shadow-2xl shadow-[#1FA6A8]/30 active:scale-95 mb-20"
        >
          Register For Walk
        </button>

        <div className="rounded-[48px] overflow-hidden shadow-2xl shadow-gray-200 border-[12px] border-white bg-white group">
          <img 
            src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=1400&h=700" 
            alt="Medical Walkathon Banner" 
            className="w-full h-auto object-cover max-h-[550px] group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;