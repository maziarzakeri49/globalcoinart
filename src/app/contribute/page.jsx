// app/contribute/page.js
import Image from 'next/image';
import {
  EnvelopeIcon,
  DocumentTextIcon,
  CurrencyDollarIcon,
  ClipboardDocumentCheckIcon,
  TruckIcon,
  PhotoIcon,
  UserCircleIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';
import ConfirmationForm from '@/components/ConfirmationForm';

export const metadata = {
  title: 'Contribute to Global Coin Art | Join Our Global Art Movement',
  description: 'Learn how to contribute your coins to Global Coin Art in 7 simple steps. Be part of a worldwide collaborative art project celebrating cultural heritage and unity through coins.',
  keywords: [
    'contribute coins',
    'Global Coin Art contribution',
    'coin art project',
    'cultural collaboration',
    'send coins for art',
    'global art movement',
  ],
  openGraph: {
    title: 'Contribute to Global Coin Art | Join Our Global Art Movement',
    description: 'Learn how to contribute your coins to Global Coin Art in 7 simple steps. Be part of a worldwide collaborative art project celebrating cultural heritage and unity through coins.',
    url: 'https://www.globalcoinart.com/contribute',
    siteName: 'Global Coin Art',
    images: [
      {
        url: '/asset/sendcoin/sendcoinpic5.png', // Use a representative image from your contribution steps
        width: 1200,
        height: 630,
        alt: 'How to contribute coins to Global Coin Art',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contribute to Global Coin Art | Join Our Global Art Movement',
    description: 'Learn how to contribute your coins to Global Coin Art in 7 simple steps. Be part of a worldwide collaborative art project celebrating cultural heritage and unity through coins.',
    images: ['/asset/sendcoin/sendcoinpic5.png'], // Use a representative image from your contribution steps
  },
};

export default function ContributePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-purple-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-300">
              How to Contribute
            </span>
          </h1>
          <p className="text-xl md:text-2xl">
            Join Our Global Art Movement in 7 Simple Steps
          </p>
        </div>
      </section>

      {/* Roadmap Visualization */}
      <div className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Contribution Roadmap</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { number: 1, act: 'Prepare your coin' },
            { number: 2, act: 'Document' },
            { number: 3, act: 'Package' },
            { number: 4, act: 'Address' },
            { number: 5, act: 'Mail' },
            { number: 6, act: 'Confirm' },
            { number: 7, act: 'Sending mailing receipt' },
          ].map((step) => (
            <div key={step.number} className="flex items-center justify-center">
              <div className="items-center flex flex-col justify-center">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center">
                  {step.number}
                </div>
                <div className="font-bold flex items-center justify-center pt-2">{step.act}</div>
              </div>
              {step.number < 7 && <div className="w-16 h-1 bg-blue-200"></div>}
            </div>
          ))}
        </div>
      </div>

      {/* Steps Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Step 1 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center">1</div>
                <h3 className="text-2xl font-bold">Prepare Your Coins</h3>
              </div>
              <p className="text-gray-600">
                Collect 1-2 sets of current coins from your country. Arrange them in a straight line on a clean sheet of paper and secure them with transparent tape as shown.
              </p>
              <CurrencyDollarIcon className="h-12 w-12 text-blue-600" />
            </div>
            <div className="relative aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/asset/sendcoin/sendcoinpic5.png"
                alt="How to prepare coins for contribution"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center">2</div>
                <h3 className="text-2xl font-bold">Document Details</h3>
              </div>
              <p className="text-gray-600">
                On a separate paper, write a description of each coin's symbols, historical significance, and cultural meaning. Include your personal connection to these coins.
              </p>
              <DocumentTextIcon className="h-12 w-12 text-green-600" />
            </div>
            <div className="relative aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/asset/sendcoin/canadian coin description.png"
                alt="How to document coin details"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center">3</div>
                <h3 className="text-2xl font-bold">Package Securely</h3>
              </div>
              <p className="text-gray-600">
                Carefully fold <span className="font-bold">the coin paper</span> and <span className="font-bold">description sheet</span> together. Place them in a sturdy envelope to prevent damage during shipping.
              </p>
              <EnvelopeIcon className="h-12 w-12 text-purple-600" />
            </div>
            <div className="relative aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/asset/sendcoin/packaging2.png"
                alt="How to package coins securely"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Step 4 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center">4</div>
                <h3 className="text-2xl font-bold">Address Envelope</h3>
              </div>
              <p className="text-gray-600">
                Clearly write both the return address (your address) and our mailing address on the envelope. Use permanent ink and ensure legibility.
              </p>
              <p className="text-gray-600">
                <span className="text-black font-bold">Our Mailing Address:</span>
                Global Coin Art, PO Box 1234, Toronto, ON, Canada M5V 3L9
              </p>
              <ClipboardDocumentCheckIcon className="h-12 w-12 text-yellow-600" />
            </div>
            <div className="relative aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/asset/sendcoin/sending address.png"
                alt="How to address the envelope"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Step 5 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center">5</div>
                <h3 className="text-2xl font-bold">Mail Package</h3>
              </div>
              <p className="text-gray-600">
                Visit your local post office and send the envelope via registered mail. Keep your receipt safe for tracking purposes.
              </p>
              <TruckIcon className="h-12 w-12 text-red-600" />
            </div>
            <div className="relative aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/asset/sendcoin/mailing.png"
                alt="How to mail the package"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Step 6 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center">6</div>
                <h3 className="text-2xl font-bold">Confirm Shipment</h3>
              </div>
              <p className="text-gray-600">
                Take a clear photo of your mailing receipt and email it to us at{' '}
                <span className="font-bold">contributions@gmail.com</span> for tracking and confirmation.
              </p>
              <p className="text-gray-600">
                <span className="font-bold pr-1">Please note:</span>
                By sending your coins via mail, you understand and acknowledge that they are{' '}
                <span className="font-bold">voluntary gifts</span> to the project. This means that once received, the coins become a property of the project and{' '}
                <span className="font-bold">part of the exhibition collection</span> and will not be returned.
              </p>
              <PhotoIcon className="h-12 w-12 text-pink-600" />
            </div>
            <div className="relative aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/asset/sendcoin/confirm shipment.png"
                alt="How to confirm shipment"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Step 7 */}
          <section className="py-16 px-4">
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 p-2">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center">7</div>
                <h3 className="text-2xl font-bold">Sending Mailing Receipt & Confirmation</h3>
                <CheckCircleIcon className="h-12 w-12 text-green-600" />
              </div>
              <div>
                <ConfirmationForm />
              </div>
            </div>
          </section>

          {/* Mailing Address */}
          <div className="bg-blue-50 p-8 rounded-xl text-center">
            <UserCircleIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Our Mailing Address</h3>
            <div className="text-gray-600 font-mono space-y-2">
              <p>Global Coin Art</p>
              <p>PO Box 1234</p>
              <p>Toronto, ON</p>
              <p>Canada M5V 3L9</p>
            </div>
            <p className="mt-6 text-gray-600">
              Please ensure your return address is clearly visible
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}