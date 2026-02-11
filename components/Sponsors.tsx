
import React, { useState } from 'react';

interface LogoProps {
  src: string;
  alt: string;
  fallback: React.ReactNode;
}

const LogoWithFallback: React.FC<LogoProps> = ({ src, alt, fallback }) => {
  const [error, setError] = useState(false);

  if (error) return <>{fallback}</>;

  return (
    <img
      src={src}
      alt={alt}
      className="h-full w-full object-contain"
      onError={() => setError(true)}
    />
  );
};

const Sponsors: React.FC = () => {
  return (
    <section className="py-24 bg-[#F5FAFA] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-sm font-black uppercase tracking-[0.3em] text-gray-400 mb-16">
          Powered By
        </h3>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
          {/* HeartWise@18 */}
          <div className="group flex flex-col items-center w-full max-w-[280px]">
            <div className="h-28 w-full bg-white rounded-3xl shadow-sm border border-gray-100 flex items-center justify-center p-6 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
              <LogoWithFallback
                src="https://i.ibb.co/nsCkp3zM/Screenshot-2026-02-11-152755.png"
                alt="HeartWise@18"
                fallback={
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-2 mb-1">
                      <svg className="w-8 h-8 text-[#B44AA3]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                      <span className="text-2xl font-black text-[#222222] tracking-tighter">HeartWise</span>
                    </div>
                    <span className="text-sm font-bold text-[#B44AA3] bg-[#B44AA3]/10 px-3 py-0.5 rounded-full">@18</span>
                  </div>
                }
              />
            </div>
            <span className="mt-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              Main Sponsor
            </span>
          </div>

          {/* Atorva */}
          <div className="group flex flex-col items-center w-full max-w-[280px]">
            <div className="h-28 w-full bg-white rounded-3xl shadow-sm border border-gray-100 flex items-center justify-center p-6 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
              <LogoWithFallback
                src="https://i.ibb.co/8LVshXxJ/Screenshot-2026-02-11-153403.png"
                alt="Atorva"
                fallback={
                  <div className="flex flex-col items-center">
                    <span className="text-4xl font-black text-[#1FA6A8] tracking-tighter italic uppercase">Atorva</span>
                    <div className="h-1 w-16 bg-[#B44AA3] mt-1 rounded-full"></div>
                  </div>
                }
              />
            </div>
            <span className="mt-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              Healthcare Partner
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
