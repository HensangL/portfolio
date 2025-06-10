import React, { useState } from 'react';

const Card = ({ img, title , img1 , img2 , img3 }) => {
  const [showModal, setShowModal] = useState(false);

  const handleViewProject = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className='w-80 h-90 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 relative group'>
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
          <h2 className='text-white text-xl font-bold text-center drop-shadow-md'>
            {title}
          </h2>
        </div>

        {/* Hover Button */}
        <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6'>
          <button 
            className='bg-orange-500 hover:cursor-pointer hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-full transition-colors duration-300'
            onClick={handleViewProject}
          >
            View Project
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
       <div className='fixed inset-0  bg-opacity-80 flex items-center justify-center z-50'>
  <div className='bg-[#454444] rounded-lg p-6 max-w-4xl w-full relative'>
    {/* Close Button */}
    <button 
      className='absolute top-4 right-4 text-gray-500 hover:text-black hover:cursor-pointer text-2xl font-bold'
      onClick={handleClose}
    >
      ✕
    </button>

    {/* Title */}
    <h2 className='text-2xl text-white font-serif font-bold mb-6 text-center'>{title}</h2>

    {/* Side-by-side images */}
    <div className='flex gap-4 justify-center items-center '>
      <img src={img1} alt={`${title} 1`} className='w-1/2 h-80 object-cover rounded-lg' />
      <img src={img2} alt={`${title} 2`} className='w-1/2 h-80 object-cover rounded-lg' />
    </div>
  </div>
</div>

      )}
    </>
  );
};

export default Card;
