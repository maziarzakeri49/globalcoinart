// components/Header.js
'use client'; // Required for client-side interactivity (mobile menu toggle)

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Exhibit', href: '/exhibit' },
  { name: 'Contribute', href: '/contribute' },
  { name: 'Contact', href: '/contact' },
];


export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">

          
            <Link href="/" className=" flex items-center">
            <Image
                            src="/asset/mazpic/logo3.jpg" // Replace with your logo
                            alt="Global Coin Art"
                            width={120}
                            height={120}
                            className="h-12 w-auto rounded"
                          />
              <h1 className='pl-2 text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-800 text-transparent bg-clip-text'>GlobalCoinArt</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-blue-600"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute w-full left-0 right-0 bg-white shadow-lg z-50">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}