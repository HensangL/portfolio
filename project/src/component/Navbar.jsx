import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-center mt-10 px-4'>
      <nav className='bg-black w-full max-w-6xl h-auto flex items-center rounded-4xl p-6 overflow-x-auto'>
        <ul className='flex flex-wrap gap-6 md:gap-20 justify-center w-full'>
          <li className='text-white font-medium hover:text-orange-500 flex self-center'><a href="#">Home</a></li>
          <li className='text-white font-medium hover:text-orange-500 flex self-center'><a href="#home">About</a></li>
          <li className='text-white font-medium hover:text-orange-500 flex self-center'><a href="#service">Service</a></li>
          <li className='text-white font-medium hover:text-orange-500 flex self-center'><p className='text-2xl flex items-center font-serif'>BIPLOB</p></li>
          <li className='text-white font-medium hover:text-orange-500 flex self-center'><a href="#experience">Resume</a></li>
          <li className='text-white font-medium hover:text-orange-500 flex self-center'><a href="#project">Project</a></li>
          <li className='text-white font-medium hover:text-orange-500 flex self-center'><a href="#footer">Contact us</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
