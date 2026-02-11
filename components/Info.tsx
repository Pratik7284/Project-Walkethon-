import React from 'react';

const Info: React.FC = () => {
  return (
    <section className="py-32 bg-[#F5FAFA]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-10">
          <div className="p-6 bg-white rounded-[32px] shadow-xl shadow-[#1FA6A8]/10 border border-gray-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#E53935]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-[#222222] mb-10 tracking-tight">Focusing on Heart Health</h2>
        <p className="text-xl md:text-2xl leading-relaxed text-gray-500 max-w-3xl mx-auto font-medium italic">
          "Lucknow Walkathon 2026 is a health awareness initiative bringing doctors together to promote fitness and heart health."
        </p>
        <div className="mt-14 h-1.5 w-24 bg-gradient-to-r from-[#E53935] to-[#F36C21] mx-auto rounded-full shadow-sm"></div>
      </div>
    </section>
  );
};

export default Info;