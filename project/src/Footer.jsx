import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 rounded-t-4xl mt-20 text-white py-12 px-4 sm:px-6 lg:px-8">
      <section id='footer'>
        <div className="max-w-7xl mx-auto">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Let's Comment section */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-4 text-white">Let's Comment there</h2>
              <div className="bg-gray-800 p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2 text-orange-500">Biplob Pokhrel</h3>
                <p className="text-gray-300">
                  I'm a graphic designer who blends creativity with strategy to craft bold, impactful visuals. From branding to digital design, I help ideas come to life — beautifully and effectively.
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Navigation</h3>
              <ul className="space-y-2">
                {['Home', 'About Us', 'Service', 'Resume', 'Project'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.replace(/\s+/g, '').toLowerCase()}`} className="text-gray-300 hover:text-orange-500 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
              <ul className="space-y-2 text-gray-300">
                <li>+0123-456-789</li>
                <li>biplobpokhrel1@gmail.com</li>
              </ul>
              <div className="flex space-x-4 mt-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 text-xl">
                  <FaFacebookF />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 text-xl">
                  <FaTwitter />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 text-xl">
                  <FaLinkedinIn />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 text-xl">
                  <FaGithub />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 text-xl">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 my-8"></div>

          {/* Bottom footer */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              Copyright © {new Date().getFullYear()} Jenny. All Rights Reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                User Terms & Conditions
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
