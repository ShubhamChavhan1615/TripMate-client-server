import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiInstagram } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:justify-between md:items-center border-b border-gray-700 pb-6 mb-6">
          <div className="flex justify-center md:justify-start mb-4 md:mb-0">
            <span className="font-bold text-2xl text-white">TripMate</span>
          </div>
          <div className="flex flex-col md:flex-row mt-4 md:m-auto md:items-center md:justify-center md:text-center">
            <Link to="/" className="text-gray-300 hover:text-gray-400 px-3 py-2">Home</Link>
            <Link to="/About" className="text-gray-300 hover:text-gray-400 px-3 py-2">About Us</Link>
            <Link to="/Services" className="text-gray-300 hover:text-gray-400 px-3 py-2">Services</Link>
            <Link to="/Contact" className="text-gray-300 hover:text-gray-400 px-3 py-2">Contact</Link>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-semibold text-lg text-white">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-gray-500">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-500">Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-500">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-500">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-white">Destinations</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-gray-500">Asia</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-500">Europe</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-500">America</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-500">Africa</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-white">Contact Us</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="mailto:support@tripmate.com" className="text-gray-400 hover:text-gray-500">support@tripmate.com</a></li>
              <li><a href="tel:+1234567890" className="text-gray-400 hover:text-gray-500">+91 9359720973</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-500">123 Main St, Anytown, Pune</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-white">Follow Us</h3>
            <div className="mt-2 flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <FaXTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <SiInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 md:mt-12">
          <p className="text-gray-500">&copy; 2024 TripMate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
