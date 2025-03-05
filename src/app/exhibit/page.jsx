// app/exhibit/page.js
import Image from 'next/image';

export const metadata = {
  title: 'Exhibit Global Coin Art | Partner Museums & Galleries Worldwide',
  description: 'Explore the world’s top museums and galleries showcasing Global Coin Art. Discover how coins transform into cultural masterpieces and connect humanity through art and history.',
  keywords: [
    'Global Coin Art exhibit',
    'coin art museums',
    'cultural art galleries',
    'global coin exhibitions',
    'coin-focused museums',
    'art and currency',
  ],
  openGraph: {
    title: 'Exhibit Global Coin Art | Partner Museums & Galleries Worldwide',
    description: 'Explore the world’s top museums and galleries showcasing Global Coin Art. Discover how coins transform into cultural masterpieces and connect humanity through art and history.',
    url: 'https://www.globalcoinart.com/exhibit',
    siteName: 'Global Coin Art',
    images: [
      {
        url: '/asset/museum/Louvre-Museum.png', // Use a representative image from your museum list
        width: 1200,
        height: 630,
        alt: 'Global Coin Art Exhibit at The Louvre',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Exhibit Global Coin Art | Partner Museums & Galleries Worldwide',
    description: 'Explore the world’s top museums and galleries showcasing Global Coin Art. Discover how coins transform into cultural masterpieces and connect humanity through art and history.',
    images: ['/asset/museum/Louvre-Museum.png'], // Use a representative image from your museum list
  },
};

const museums = [
  // General Museums
  {
    name: "The Louvre",
    location: "Paris, France",
    description: "The world's largest art museum and a historic monument in Paris. A perfect venue for showcasing global art.",
    image: "/asset/museum/Louvre-Museum.png",
    website: "https://www.louvre.fr",
  },
  {
    name: "The Metropolitan Museum of Art",
    location: "New York, USA",
    description: "One of the most prestigious art museums in the world, known for its diverse collections.",
    image: "/asset/museum/metropolitan-museum.jpg",
    website: "https://www.metmuseum.org",
  },
  {
    name: "The British Museum",
    location: "London, UK",
    description: "A museum of human history, art, and culture, with a vast collection of artifacts from around the world.",
    image: "/asset/museum/british-museum.jpg",
    website: "https://www.britishmuseum.org",
  },
  {
    name: "The State Hermitage Museum",
    location: "St. Petersburg, Russia",
    description: "One of the largest and oldest museums in the world, housing over 3 million items.",
    image: "/asset/museum/winter-palace.jpg",
    website: "https://www.hermitagemuseum.org",
  },
  {
    name: "The National Gallery of Art",
    location: "Washington, D.C., USA",
    description: "A national art museum with a vast collection of paintings, sculptures, and decorative arts.",
    image: "/asset/museum/National Gallery.png",
    website: "https://www.nga.gov",
  },
  {
    name: "The Uffizi Gallery",
    location: "Florence, Italy",
    description: "One of the most famous museums of paintings and sculptures in the world, with works by Renaissance masters.",
    image: "/asset/museum/Uffizi Gallery.png",
    website: "https://www.uffizi.it",
  },

  // Coin-Focused Museums
  {
    name: "The American Numismatic Association Money Museum",
    location: "Colorado Springs, USA",
    description: "Home to one of the world's most extensive collections of coins, medals, and paper money.",
    image: "/asset/museum/American Money Museum.png",
    website: "https://www.money.org",
  },
  {
    name: "The British Museum Coins and Medals Department",
    location: "London, UK",
    description: "A world-renowned collection of over 1 million coins, medals, and banknotes spanning 3,000 years.",
    image: "/asset/museum/British Museum Coins.png",
    website: "https://www.britishmuseum.org/collection/departments/coins-and-medals",
  },
  {
    name: "The Smithsonian National Numismatic Collection",
    location: "Washington, D.C., USA",
    description: "One of the largest collections of coins, currency, and financial objects in the world.",
    image: "/asset/museum/Smithsonian National Numismatic.png",
    website: "https://americanhistory.si.edu/collections/numismatics",
  },
  {
    name: "The Fitzwilliam Museum Coin Room",
    location: "Cambridge, UK",
    description: "A leading collection of coins and medals, with over 200,000 objects from ancient to modern times.",
    image: "/asset/museum/Fitzwilliam Museum Coin.png",
    website: "https://www.fitzmuseum.cam.ac.uk",
  },
  {
    name: "The Royal Australian Mint",
    location: "Canberra, Australia",
    description: "A museum and production facility showcasing the history and artistry of coin-making.",
    image: "/asset/museum/Royal Australian Mint.png",
    website: "https://www.ramint.gov.au",
  },
  {
    name: "The Bank of Canada Museum",
    location: "Ottawa, Canada",
    description: "A museum dedicated to the history of money, with a focus on Canadian and global currency.",
    image: "/asset/museum/Bank of Canada Museum.png",
    website: "https://www.bankofcanadamuseum.ca",
  },
];

export default function ExhibitPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* --- Hero Section --- */}
      <section className="bg-gradient-to-r from-blue-800 to-purple-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-300">
              Exhibit Our Art
            </span>
          </h1>
          <p className="text-xl md:text-2xl">
            Discover the World's Best Museums and Galleries
          </p>
        </div>
      </section>

      {/* --- Introduction Section --- */}
      <div>
        <div className="relative py-20 px-4 text-center">
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              Global Coin Art: Where Coin Meets Culture
            </h2>
            <div className="bg-white rounded-lg shadow-xl p-8 mb-12 text-left">
              <p className="space-y-6 text-lg text-gray-600">
                ✨ At Global Coin Art, we're revolutionizing how the world experiences currency. Our platform transforms ordinary coins into extraordinary art, creating a living mosaic of global heritage. Through our innovative exhibits, we bridge cultures and generations, showcasing the stories behind every coin.
              </p>
              <br />
              <p className="space-y-6 text-lg text-gray-600">
                ✨ This page introduces our partner museums and galleries that bring this vision to life. From prestigious Coin & Currency Museums to contemporary art spaces, each venue offers a unique perspective on our global collection. Discover how traditional numismatic displays merge with modern interactive art. Explore upcoming exhibitions, virtual tours, and special events. Learn how these institutions help preserve cultural narratives through currency.
              </p>
              <br />
              <p className="space-y-6 text-lg text-gray-600">
                ✨ Join us in celebrating the art of coin and the coin of art. Together, we're creating a new chapter in cultural exchange and artistic expression.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- General Museums Section --- */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Top Museums & Galleries
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {museums.slice(0, 6).map((museum, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <Image
                    src={museum.image}
                    alt={museum.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{museum.name}</h3>
                  <p className="text-gray-600 mb-4">{museum.location}</p>
                  <p className="text-gray-600 mb-4">{museum.description}</p>
                  <a
                    href={museum.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Coin-Focused Museums Section --- */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Coin & Currency Museums
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {museums.slice(6).map((museum, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <Image
                    src={museum.image}
                    alt={museum.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{museum.name}</h3>
                  <p className="text-gray-600 mb-4">{museum.location}</p>
                  <p className="text-gray-600 mb-4">{museum.description}</p>
                  <a
                    href={museum.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Call to Action --- */}
      <section className="bg-blue-50 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Want to Exhibit Our Art?
          </h2>
          <p className="text-gray-600 mb-8">
            If you're a museum or gallery interested in showcasing our global coin art, we'd love to hear from you.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}