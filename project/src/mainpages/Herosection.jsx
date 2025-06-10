import React from 'react';
import image from '../image/profile-pic.png'; // Replace with your image path

function Herosection() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center px-4 py-10">
      <section id="home">
      <div className="max-w-6xl w-full text-center flex flex-col items-center space-y-10">

        {/* Hello tag */}
        <div className="inline-block border-2 border-gray-500 rounded-full text-sm font-medium text-gray-700 p-2 w-20">
          Hello!
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          I’m <span className="text-orange-600">Biplob,</span><br />
          Graphic Designer.
        </h1>

        {/* Main Content Section */}
        <div className="flex flex-col md:flex-row justify-between w-full mt-10 text-left px-4 gap-10">
          
          {/* Left - Testimonial */}
          <div className="flex-1 text-gray-600">
            <p className="text-4xl font-bold text-gray-900 mb-2">“</p>
            <p>Biplob’s graphic design work elevated our brand identity with precision and creativity. A reliable designer with exceptional attention to detail.</p>
            <p className="mt-4 text-xl font-bold">200+ <span className="font-normal text-sm">Clients Served</span></p>
          </div>

          {/* Center - Image and Buttons */}
          <div className="relative flex-1 flex flex-col items-center">
            <div className='border-4 border-orange-400 rounded-full'>
              <img src={image} className='w-[260px] h-[250px] rounded-full' />
            </div>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10 z-10">
              <button className="bg-orange-600 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-700 transition">
                <a href="#project">Portfolio →</a>
                
              </button>
              <button className="border border-gray-400 text-gray-800 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition">
                <a href="#footer">Hire Me</a>
                
              </button>
            </div>
          </div>

          {/* Right - Experience */}
          <div className="flex-1 flex flex-col items-center md:items-end ">
            <div className="text-orange-600 text-2xl mb-2">★★★★★</div>
            <p className="text-3xl font-semibold">3 Years</p>
            <p className="text-gray-600">Experience</p>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
}

export default Herosection;
