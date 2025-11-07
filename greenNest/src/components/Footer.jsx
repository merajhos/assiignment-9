import { Facebook, Instagram, Twitter } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div>
    <footer className="bg-green-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-extrabold mb-2">🌿 GreenNest</h2>
          <p className="text-sm text-gray-200">Nurture nature, grow your happiness.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-200">
            <li><Link to="/" className="hover:text-white">About</Link></li>
            <li><Link to="/" className="hover:text-white">Contact</Link></li>
            <li><Link to="/" className="hover:text-white">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <Instagram size={20} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <Facebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 border-t border-green-800 pt-4 text-center text-sm text-gray-300">
        © 2025 GreenNest. All rights reserved.
      </div>
    </footer>

        </div>
    );
};

export default Footer;