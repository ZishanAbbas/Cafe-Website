import { useState, useEffect } from "react";


const images = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
  ];
  

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden z-0">
      {/* Background Image Slider */}
      <div className="">
        <img
          src={images[currentIndex]}
          alt="Hero Background"
          className="w-full h-[100vh] object-cover bg-black opacity-80"
        />
      </div>


      {/* Overlay & Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6 ">
        <h1 className="text-7xl text-black font-bold mb-4">Welcome to Amro Cafe</h1>
        <p className="text-xl text-black mb-6">Enjoy the finest coffee and cozy ambiance.</p>
        <a href="/menu" className="bg-yellow-500 px-6 py-3 rounded-md text-lg font-semibold">
          Explore Menu
        </a>
      </div>
    </section>
  );
};

export default Hero;
