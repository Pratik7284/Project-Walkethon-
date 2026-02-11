import React from 'react';

const Sponsors: React.FC = () => {
  return (
    <section className="py-24 bg-[#F5FAFA] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-sm font-black uppercase tracking-[0.4em] text-gray-400 mb-16">
          Powered By
        </h3>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
          {/* HeartWise Pill */}
          <div className="group flex flex-col items-center w-full max-w-[320px]">
            <div className="bg-white rounded-[50px] px-12 py-8 shadow-xl shadow-gray-200/50 border border-gray-100 flex items-center justify-center w-full h-32 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
              <img 
                src="https://i.ibb.co/nsCkp3zM/Screenshot-2026-02-11-152755.png" 
                alt="HeartWise@18" 
                className="h-14 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = `
                    <div class="flex items-center gap-2">
                      <span class="text-2xl font-black text-slate-700 tracking-tighter">HEART WISE</span>
                      <div class="bg-[#E53935] w-10 h-10 rounded-full flex items-center justify-center text-white text-[12px] font-bold">@18</div>
                    </div>
                  `;
                }}
              />
            </div>
            <span className="mt-6 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
              Main Sponsor
            </span>
          </div>

          {/* Atorva Pill */}
          <div className="group flex flex-col items-center w-full max-w-[320px]">
            <div className="bg-white rounded-[50px] px-12 py-8 shadow-xl shadow-gray-200/50 border border-gray-100 flex items-center justify-center w-full h-32 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
              <img 
                src="https://i.ibb.co/8LVshXxJ/Screenshot-2026-02-11-153403.png" 
                alt="Atorva" 
                className="h-12 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = `<span class="text-5xl font-black text-[#B22222] tracking-tight">Atorva</span>`;
                }}
              />
            </div>
            <span className="mt-6 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
              Healthcare Partner
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;