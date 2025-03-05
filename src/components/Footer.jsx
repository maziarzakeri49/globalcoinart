// components/Footer.js
import Link from 'next/link';
import Image from 'next/image';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { FaFacebook, FaTelegram, FaInstagram, FaYoutube } from 'react-icons/fa';
import SubmitEmail from './SubmitEmail';
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* About Section */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center">
              <Image
                src="/asset/mazpic/logo3.jpg" // Replace with your logo
                alt="Global Coin Art"
                width={120}
                height={40}
                className="h-10 w-auto rounded"
              />
              <h2 className='pl-3 text-lg font-semibold text-white'>GlobalCoinArt</h2>
            </Link>
            
            <p className="text-gray-400 text-sm leading-relaxed">
              Global Coin Art is a worldwide collaborative project celebrating cultural heritage through currency. Join us in creating a living mosaic of human connection.
            </p>
            <div className="flex space-x-4">
            <FaFacebook className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
            <FaTelegram className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
            <FaInstagram className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
            <FaYoutube className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
              
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <nav className="space-y-2">
              {[
                { name: 'About Project', href: '/about' },
                { name: 'How It Works', href: '/how-it-works' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'Contribute', href: '/contribute' },
                { name: 'Exhibitions', href: '/exhibitions' },
                { name: 'FAQ', href: '/faq' }
              ].map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <div className="space-y-3 text-gray-400 text-sm">
              <div className="flex items-start space-x-3">
                <MapPinIcon className="h-5 w-5 flex-shrink-0" />
                <p>
                  Global Coin Art Headquarters<br />
                  123 Cultural Exchange Blvd.<br />
                  World Heritage City, Earth
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 flex-shrink-0" />
                <p>+1 (234) 567-8900</p>
              </div>
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="h-5 w-5 flex-shrink-0" />
                <p>info@globalcoinart.com</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-400 text-sm">
              Subscribe to our newsletter for project updates, exhibition news, and global coin stories.
            </p>
            <SubmitEmail/>
            
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Global Coin Art. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-white text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;