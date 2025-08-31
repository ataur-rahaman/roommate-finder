import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        

        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <p>Email: support@roommatefinder.com</p>
          <p>Phone: +880 1234-567890</p>
          <p>Dhaka, Bangladesh</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a href="/terms" className="hover:text-sky-400 transition">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-sky-400 transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-sky-400 transition">
                About Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-2 bg-sky-600 rounded-full hover:bg-sky-500 transition">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 bg-sky-400 rounded-full hover:bg-sky-300 transition">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2 bg-pink-500 rounded-full hover:bg-pink-400 transition">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 bg-blue-700 rounded-full hover:bg-blue-600 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6">
        <p className="text-center text-sm py-4">
          © {new Date().getFullYear()} Roommate Finder. All rights reserved.
        </p>
      </div>
    </footer>
    );
};

export default Footer;