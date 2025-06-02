import React from 'react';
import image from '../image/image.jpg';

function Hire() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-16 px-6 md:px-20 mt-20">
      {/* Image */}
      <img
        src={image}
        alt="Profile"
        className="w-64 h-64 md:w-96 md:h-96 rounded-full object-cover"
      />

      {/* Content */}
      <div className="flex flex-col w-full max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-semibold mb-4">
          Why hire me for your next project?
        </h1>

        <p className="text-base md:text-lg text-gray-700 mb-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis eos ducimus libero
          quidem ad accusamus. Nulla sit consectetur ad tenetur ducimus praesentium error sunt
          corporis. Deserunt distinctio quae aliquid quas.
        </p>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row gap-10 mb-6">
          <div>
            <h2 className="text-3xl font-bold text-orange-500">50+</h2>
            <p className="text-lg">Projects Covered</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-orange-500">200+</h2>
            <p className="text-lg">Industries Covered</p>
          </div>
        </div>

        {/* Button */}
        <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all px-8 py-3 rounded-full text-lg w-fit">
          Hire Me
        </button>
      </div>
    </div>
  );
}

export default Hire;
