// app/about-me/page.js
import { GlobeAltIcon, UserGroupIcon, SparklesIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export const metadata = {
  title: 'About MAZ - Founder of Global Coin Art | Metallurgical Engineer & Visionary',
  description: 'Meet MAZ, a metallurgical engineer and the founder of Global Coin Art. Discover his vision for a global collaborative art project that unites people through coins and celebrates cultural diversity.',
  keywords: ['MAZ', 'Global Coin Art', 'metallurgical engineer', 'coin art project', 'cultural diversity', 'global unity'],
  openGraph: {
    title: 'About MAZ - Founder of Global Coin Art | Metallurgical Engineer & Visionary',
    description: 'Meet MAZ, a metallurgical engineer and the founder of Global Coin Art. Discover his vision for a global collaborative art project that unites people through coins and celebrates cultural diversity.',
    url: 'https://www.globalcoinart.com/about-me',
    siteName: 'Global Coin Art',
    images: [
      {
        url: '/asset/mazpic/maziarpic4.jpg',
        width: 800,
        height: 600,
        alt: 'MAZ - Founder of Global Coin Art',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About MAZ - Founder of Global Coin Art | Metallurgical Engineer & Visionary',
    description: 'Meet MAZ, a metallurgical engineer and the founder of Global Coin Art. Discover his vision for a global collaborative art project that unites people through coins and celebrates cultural diversity.',
    images: ['/asset/mazpic/maziarpic4.jpg'],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-purple-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
          <div className="relative h-40 w-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white">
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <img src='/asset/mazpic/maziarpic4.jpg' alt="MAZ - Founder of Global Coin Art" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-300'>MAZ</span>
          </h1>
          <p className="text-xl md:text-2xl">Metallurgical Engineer & Founder of Global Coin Art</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-2xl font-bold text-gray-800 mb-6">Hi, I'm MAZ</p>
            <p className="text-gray-600 mb-6">
              I'm a metallurgical engineer with a master's degree in metal extraction, currently living in Toronto, Canada. For years, I've worked in industries where metals are extracted and transformed to improve lives. But now, I want to do something different—something that brings people together, rather than just materials.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Global Coin Art</h2>
              <p className="text-gray-600">
                This is a project born from my belief in the power of unity and the beauty of diversity. It's a global community where people from every corner of the world can come together to create something extraordinary.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Here's how it works:</h3>
              <p className="text-gray-600">
                You send me <strong>1 or 2 sets of current coins</strong> from your country, along with a description of the <strong>history and symbols</strong> on those coins and a little about <strong>your culture</strong> and yourself. I'll collect these coins and transform them into a stunning piece of art—a mosaic of global unity. This artwork will then be exhibited in galleries and museums around the world, showcasing the collective power of humanity.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Why am I doing this?</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <UserGroupIcon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">The Power of Unity</h3>
                    <p className="text-gray-600">
                      People around the world have an incredible strength when they come together. By participating in a global project like this—one that transcends governments, religions, geographies, and cultures—we can create a better life for ourselves and a better universe for everyone. The world is not divided by borders; it's the home of all people.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <GlobeAltIcon className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Celebrating Diversity</h3>
                    <p className="text-gray-600">
                      Every coin tells a story—a story of a country, its people, and its culture. Through this project, we can introduce our cultures to one another, fostering understanding and appreciation for our differences. It's a way to say, "This is who we are, and we're proud to share it with the world."
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-lg">
                    <SparklesIcon className="h-8 w-8 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Metals for Humanity</h3>
                    <p className="text-gray-600">
                      As a metallurgical engineer, I've spent years working with metals to improve lives. But now, I want metals to work for humanity in a different way—by bringing us together. Coins, made of metal, are more than just currency; they're symbols of connection. Through this project, I want to show how something as simple as a coin can unite us all.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">This project is for everyone</h2>
              <p className="text-gray-600 mb-8">
                It doesn't matter where you're from, what language you speak, or what you believe in. What matters is that you're part of this world, and your contribution—your coins, your stories, your culture—will help create something beautiful.
              </p>

              <div className="bg-gradient-to-r from-blue-600 to-purple-700 p-1 rounded-full inline-block">
                <Link href='/contribute'>
                  <button className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-bold hover:bg-opacity-90 transition-all">
                    Join the Movement
                  </button>
                </Link>
              </div>

              <p className="mt-8 text-2xl font-bold text-gray-800">
                Together, we can make history.<br />
                <span className="text-blue-600">One coin at a time.</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}