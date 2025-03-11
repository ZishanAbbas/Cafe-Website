import React from 'react';

const Location = () => {
  return (
    <section id="location" className="py-12 bg-gray-100 text-center px-6 md:px-16">
      
      {/* Section Heading */}
      <div className="w-full text-center mb-8">
        <h2 className="text-5xl font-bold mb-10 text-[#6F4E37]">Location</h2>
      </div>

      {/* Content Wrapper */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side - Information */}
        <div className="md:w-1/2 text-left mb-6 md:mb-0">
          <h2 className="text-4xl font-bold text-[#6F4E37] mb-4">Visit Our Cafe</h2>
          <p className="text-gray-700 text-2xl mb-4">
            Indulge in the finest coffee, crafted with passion and precision. Our café is the perfect spot to unwind, meet friends, or simply enjoy a peaceful moment.
          </p>
          <p className="text-gray-700 text-2xl">
            Step in and savor a delightful experience with every sip!
          </p>
        </div>

        {/* Right Side - Google Maps Link */}
        <div className="md:w-1/2 flex justify-center">
          <a
            href="https://maps.app.goo.gl/rMywgoBLVbFNraGw7"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg hover:scale-102 transition-transform duration-300"
          >
            <img
              src="./public/images/location1.png"
              alt="Cafe Location"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-opacity-30 flex items-center justify-center">
            <span className="text-black text-2xl font-semibold transform transition-transform duration-300 hover:scale-110 animate-pulse">View on Maps</span>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Location;
