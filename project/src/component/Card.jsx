import React, { useState } from 'react';

const Card = ({ img, title, images = [] }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleViewProject = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setCurrentIndex(0);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {/* Card */}
      <div className='w-80 h-90 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 relative group'>
        <div className='absolute inset-0 bg-gray-800'>
          {img && (
            <img 
              src={img} 
              alt={title} 
              className='w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity duration-300'
            />
          )}
        </div>
        <div className='absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent'></div>
        <div className='absolute bottom-0 left-0 right-0 p-6'>
          <h2 className='text-white text-xl font-bold text-center drop-shadow-md'>
            {title}
          </h2>
        </div>
        <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6'>
          <button 
            className='bg-orange-500 hover:cursor-pointer hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-full transition-colors duration-300'
            onClick={handleViewProject}
          >
            View Project
          </button>
        </div>
      </div>

      {/* Modal Carousel */}
      {showModal && (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
          <div className='bg-[#454444] rounded-lg p-6 max-w-4xl w-full relative'>
            {/* Close Button */}
            <button 
              className='absolute top-4 right-4 text-gray-300 hover:text-white text-2xl font-bold'
              onClick={handleClose}
            >
              ✕
            </button>

            {/* Title */}
            <h2 className='text-2xl text-white font-serif font-bold mb-6 text-center'>{title}</h2>

            {/* Image Carousel */}
            <div className='relative w-full h-96 flex items-center justify-center'>
              <img 
                src={images[currentIndex]} 
                alt={`Slide ${currentIndex + 1}`} 
                className='h-full object-contain rounded-lg max-w-full'
              />

              {/* Prev Button */}
              <button 
                className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-black'
                onClick={prevImage}
              >
                ‹
              </button>

              {/* Next Button */}
              <button 
                className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-black'
                onClick={nextImage}
              >
                ›
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
