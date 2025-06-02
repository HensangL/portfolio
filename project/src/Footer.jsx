import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 rounded-t-4xl mt-20 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Let's Comment section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4 text-white">Let's Comment there</h2>
            <div className="bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2 text-orange-500">Jenny</h3>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Navigation</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Service', 'Resume', 'Project'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
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
              <li>www.example.com</li>
              <li>example@gmail.com</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Get the latest information</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="flex-grow px-4 py-2 border border-gray-700 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
              <button className="bg-orange-500 text-white px-4 py-2 rounded-r-lg hover:bg-orange-600 transition-colors">
                Subscribe
              </button>
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
    </footer>
  );
}

export default Footer;