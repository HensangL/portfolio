import React, { useState, useEffect } from 'react';
import image from './ufc.jpg'; // Import once and reuse

const images = [image, image, image]; // Same image used three times

function Carousel() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-10">
      <section id='project'>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 px-4">
        <h1 className="text-2xl font-bold mb-4 sm:mb-0">Let's Have a Look at my Portfolio</h1>
        <button className="px-6 py-2 text-orange-500 border border-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition-colors">
          See More
        </button>
      </div>

      

      <div className="overflow-hidden rounded-xl">
        <img
          src={images[current]}
          alt={`Slide ${current}`}
          className="w-full h-64 md:h-96 object-cover transition-all duration-700"
        />
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl font-bold bg-black bg-opacity-30 px-2 py-1 rounded-full"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl font-bold bg-black bg-opacity-30 px-2 py-1 rounded-full"
      >
        ›
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? 'bg-orange-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
      </section>
    </div>
  );
}

export default Carousel;