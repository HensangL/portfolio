import React from 'react';

const Card = ({ img, title }) => {
  return (
    <div className='w-80 h-96 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 relative group'>
      {/* Background Image */}
      <div className='absolute inset-0 bg-gray-800'>
        {img && (
          <img 
            src={img} 
            alt={title} 
            className='w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity duration-300'
          />
        )}
      </div>
      
      {/* Gradient Overlay */}
      <div className='absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent'></div>
      
      {/* Title */}
      <div className='absolute bottom-0 left-0 right-0 p-6'>
        <h2 className='text-white text-2xl font-bold text-center drop-shadow-md'>
          {title}
        </h2>
      </div>
      
      {/* Optional: Add hover effect content */}
      <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6'>
        <button className='bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-full transition-colors duration-300'>
          View Project
        </button>
      </div>
    </div>
  );
};

export default Card;