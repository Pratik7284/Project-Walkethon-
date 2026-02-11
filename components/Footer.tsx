
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-20 border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <div className="h-10 mb-6 flex justify-center md:justify-start">
               <img 
                src="https://upload.wikimedia.org/wikipedia/en/0/0f/Zydus_Lifesciences.svg" 
                alt="Zydus Logo" 
                className="h-full w-auto object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-default"
              />
            </div>
            <h4 className="text-xl font-black text-[#222222]">Lucknow Walkathon 2026</h4>
            <p className="text-sm text-gray-400 mt-2 max-w-xs leading-relaxed">An initiative for a healthier medical community and cardiac wellness. Organized with care by Zydus Lifesciences.</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.3em] mb-4">Organized By</p>
            <div className="flex items-center gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/0/0f/Zydus_Lifesciences.svg"
                alt="Zydus Logo"
                className="h-12 w-auto object-contain"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-gray-50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[11px] font-medium text-gray-400">
            &copy; {new Date().getFullYear()} Zydus Healthcare Ltd. All rights reserved. Professional Event for Medical Practitioners.
          </p>
          <div className="flex gap-8">
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider cursor-pointer hover:text-[#1FA6A8] transition-colors">Privacy Policy</span>
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider cursor-pointer hover:text-[#1FA6A8] transition-colors">Contact Us</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
