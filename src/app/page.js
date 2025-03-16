// app/page.js
import Link from 'next/link';
import Image from 'next/image';
import { GlobeAmericasIcon, CurrencyDollarIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import SubmitForm from '@/components/SubmitForm';

export const metadata = {
  title: 'Global Coin Art | Transforming Coins into Cultural Masterpieces',
  description: 'Join Global Coin Art, a worldwide collaborative art project celebrating coins, culture, and creativity. Explore how coins become art and contribute to a global tapestry of unity and heritage.',
  keywords: [
    'coin art',
    'global coin market',
    'coin culture',
    'coin collaboration',
    'art from coins',
    'cultural coin project',
    'coin history',
    'coin stories',
    'world coin art',
    'coin exhibitions',
    'coin art installations',
    'coin art project',
    'global art collaboration',
  ],
  openGraph: {
    title: 'Global Coin Art | Transforming Coins into Cultural Masterpieces',
    description: 'Join Global Coin Art, a worldwide collaborative art project celebrating coins, culture, and creativity. Explore how coins become art and contribute to a global tapestry of unity and heritage.',
    url: 'https://www.globalcoinart.com',
    siteName: 'Global Coin Art',
    images: [
      {
        url: '/asset/coin-pic/world-map4.png', // Use a representative image
        width: 1200,
        height: 630,
        alt: 'Global Coin Art - A Worldwide Collaborative Art Project',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Global Coin Art | Transforming Coins into Cultural Masterpieces',
    description: 'Join Global Coin Art, a worldwide collaborative art project celebrating coins, culture, and creativity. Explore how coins become art and contribute to a global tapestry of unity and heritage.',
    images: ['/asset/coin-pic/world-map4.png'], // Use a representative image
  },
};

export default function Home() {
  const coinpic = [
    {
      country: 'Albania',
      pic: "/asset/coin pic/albaniacoin.png",
      story: "This coin features the national hero Skanderbeg, symbolizing Albania's rich history of resistance and independence.",
    },
    {
      country: 'Canada',
      pic: "/asset/coin pic/canadian coin.png",
      story: "The iconic loon design represents Canada's natural beauty and connection to its vast wilderness.",
    },
    {
      country: 'France',
      pic: "/asset/coin pic/frenchcoin.png",
      story: "Marianne, the national symbol of liberty, graces this coin, embodying French revolutionary ideals.",
    },
  ];

  return (
    <div className="min-h-screen bg-blue-50">
      {/* --- Hero Section --- */}
      <section className="relative bg-gradient-to-br from-blue-800 to-purple-900 text-white py-24 px-4">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-300">
                Global Coin Art
              </span>
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-light">
              A Worldwide Collaboration Celebrating <strong>Coin Art</strong> and <strong>Cultural Heritage</strong>
            </p>
            <p className="text-lg max-w-2xl mx-auto text-blue-100">
              ✨ Imagine a sprawling, dynamic artwork crafted entirely from <strong>coins</strong> sent by people like <em>you</em>—from bustling cities, remote villages, and everywhere in between. This is <strong>“Coins of the World”</strong>: a collaborative <strong>art project</strong> celebrating global unity, cultural pride, and the stories hidden in everyday objects.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
            <Link
              href="/contribute"
              className="inline-flex items-center justify-center bg-yellow-400 text-blue-900 px-8 py-4 rounded-xl text-lg font-bold hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg"
            >
              Submit Your Coins Now
            </Link>
          </div>
        </div>
      </section>

      {/* --- The Vision Section --- */}
      <section className="py-20 px-4 bg-gradient-to-tr from-blue-100 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
                A Pixel of Humanity: <strong>Coin Art</strong> That Connects the World
              </h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  ✨ Imagine standing before a wall of <strong>coins</strong>, seeing your contribution alongside a farmer's from Kenya, a student's from Peru, or an elder's from Japan. <strong>“We are different, but we belong together“</strong>
                </p>
                <p>
                  Each <strong>coin</strong> becomes a pixel in a grand, global tapestry—a shimmering map of the world displayed with its history, your voice, and moments in time.
                </p>
              </div>
            </div>
            <div className="relative aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/asset/coin pic/world map4.png"
                alt="Art installation concept - Global Coin Art"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- Participation Process --- */}
      <section className="py-20 bg-gradient-to-br from-blue-100 to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Here's How You Become Part of <strong>Coin Art</strong> History
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: UserGroupIcon,
                title: "1. Join the Movement",
                content: "Every country has a story. Yours does too. Send one current <strong>coin</strong> from your nation—a symbol of your heritage—to our platform. Alongside it, share your photo, a personal note, or a memory tied to that <strong>coin</strong>.",
              },
              {
                icon: CurrencyDollarIcon,
                title: "2. The Art of Connection",
                content: "Each <strong>coin</strong> is meticulously arranged into a large-scale <strong>art installation</strong>. Your contribution becomes part of a shimmering map of the world, displayed with its history and your personal story.",
              },
              {
                icon: GlobeAmericasIcon,
                title: "3. A Stage for Every Nation",
                content: "The finished <strong>artwork</strong> will tour museums, galleries, and public spaces worldwide. See your contribution alongside others from every corner of the globe.",
              },
            ].map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-6 p-4 w-fit rounded-lg bg-blue-100">
                  <step.icon className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: step.content }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Why It Matters --- */}
      <section className="py-20 bg-gradient-to-tr from-blue-100 to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-blue-100 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Why <strong>Coin Art</strong> Matters
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "🌍 Global Connection: Coins become bridges connecting strangers across oceans",
                "🎨 Creativity & Uniqueness: A kaleidoscope of human ingenuity",
                "✨ Pride & Legacy: Your culture matters in the world's story",
                "📚 Historical Record: Preserving modern currency for future generations",
                "🤝 Cultural Exchange: Understanding through shared artifacts",
                "🌐 Digital Archive: Creating a permanent global collection",
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg">
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Featured Coins with Stories --- */}
      <section className="py-20 bg-gradient-to-br from-blue-100 to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Featured <strong>Coins</strong> & Their Stories
            </h2>
            <p className="text-xl text-gray-600">
              Discover the rich narratives behind each contribution
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {coinpic.map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all hover:transform hover:scale-110 bg-gray-50 duration-1000">
                <div className="relative h-64">
                  <Image
                    src={item.pic}
                    alt={`${item.country} coin - Global Coin Art`}
                    fill
                    className="object-contain p-8"
                    priority
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    {item.country}
                  </h3>
                  <p className="text-gray-600">{item.story}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Final CTA --- */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-800">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Together, We'll Prove:
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto italic">
              "The world isn't just made of borders—it's made of people. And in our hands, even small <strong>coins</strong> can build something monumental."
            </p>
            <div className="mt-8">
              <Link
                href="/contribute"
                className="inline-flex items-center justify-center bg-yellow-400 text-blue-900 px-8 py-4 rounded-xl text-lg font-bold hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg"
              >
                Be the Voice of Your Nation
                <GlobeAmericasIcon className="ml-2 h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- Newsletter --- */}
      <section className="py-20 bg-gradient-to-tr from-blue-100 to-purple-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-blue-900">
              Stay Connected
            </h2>
            <p className="text-gray-600 text-lg">
              Track the <strong>artwork's</strong> global journey and receive updates
            </p>
            <div className="max-w-md mx-auto">
              <SubmitForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}