import React from 'react';
import { Link } from 'react-router-dom';
import { contactInfo, navigationLinks } from '../mock';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const iconMap = {
    Facebook: Facebook,
    Twitter: Twitter,
    Linkedin: Linkedin,
    Instagram: Instagram
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-teal-400">Data Lineage</span> Consulting
            </h3>
            <p className="text-gray-400 mb-4">
              Delivering innovative solutions to tackle the biggest consulting and staffing challenges.
            </p>
            <div className="flex space-x-4">
              {contactInfo.socials.map((social) => {
                const IconComponent = iconMap[social.icon];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    className="w-10 h-10 bg-gray-700 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all duration-300"
                    aria-label={social.name}
                  >
                    <IconComponent size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:bg-clip-text transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:bg-clip-text transition-all cursor-pointer">Application Development</li>
              <li className="hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:bg-clip-text transition-all cursor-pointer">Data Management</li>
              <li className="hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:bg-clip-text transition-all cursor-pointer">Data Warehousing</li>
              <li className="hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:bg-clip-text transition-all cursor-pointer">Contract Staffing</li>
              <li className="hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:bg-clip-text transition-all cursor-pointer">Permanent Hire</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mt-1 flex-shrink-0" style={{WebkitTextStroke: '0.5px rgba(168, 85, 247, 0.5)'}} />
                <div className="text-gray-400 text-sm">
                  <p>{contactInfo.address.company}</p>
                  <p>{contactInfo.address.street}</p>
                  <p>{contactInfo.address.street2}</p>
                  <p>{contactInfo.address.city}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text flex-shrink-0" style={{WebkitTextStroke: '0.5px rgba(168, 85, 247, 0.5)'}} />
                <a href={`tel:${contactInfo.phone}`} className="text-gray-400 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:bg-clip-text text-sm">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text flex-shrink-0" style={{WebkitTextStroke: '0.5px rgba(168, 85, 247, 0.5)'}} />
                <a href={`mailto:${contactInfo.email}`} className="text-gray-400 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:bg-clip-text text-sm">
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            Copyright © {new Date().getFullYear()} All rights reserved Data Lineage Consulting Limited.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
