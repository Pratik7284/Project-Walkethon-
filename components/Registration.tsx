import React from 'react';

const Registration: React.FC = () => {
  return (
    <section id="registration" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-[#222222] mb-4">Registration Form</h2>
        <p className="text-lg text-gray-500 mb-16">Join the community of health professionals leading the walk.</p>
        
        <div className="bg-white rounded-[40px] p-2 sm:p-10 shadow-2xl shadow-gray-100 border border-gray-100 flex justify-center">
          <div className="w-full max-w-[700px] overflow-hidden rounded-2xl">
            {/* Embedded Google Form */}
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSdvn-Sk-sy4a9ccOAD1y7AvWpWS7ggV1w539Ry2M9cL_cuIUw/viewform?embedded=true" 
              width="100%" 
              height="1277" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
              className="w-full"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;