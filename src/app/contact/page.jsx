// app/contact/page.js
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import SubmitForm from '@/components/SubmitForm';

export const metadata = {
  title: 'Contact Global Coin Art | Get in Touch for Inquiries & Collaborations',
  description: 'Reach out to Global Coin Art for inquiries, collaborations, or general questions. Connect with us via email, phone, or visit our address in Toronto, Canada.',
  keywords: [
    'coin','coin collection',
    'coin market',
    'coin culture',
    'coin collaboration',
    'art from coins',
    'cultural coin project',
    'coin history',
    'coin stories',
    'contact Global Coin Art',
    'coin art inquiries',
    'collaborate with Global Coin Art',
    'art project contact',
    'global art collaboration',
    'Toronto art project',
  ],
  openGraph: {
    title: 'Contact Global Coin Art | Get in Touch for Inquiries & Collaborations',
    description: 'Reach out to Global Coin Art for inquiries, collaborations, or general questions. Connect with us via email, phone, or visit our address in Toronto, Canada.',
    url: 'https://www.globalcoinart.com/contact',
    siteName: 'Global Coin Art',
    images: [
      {
        url: '/asset/contact-hero.jpg', // Use a representative image for the contact page
        width: 1200,
        height: 630,
        alt: 'Contact Global Coin Art',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Global Coin Art | Get in Touch for Inquiries & Collaborations',
    description: 'Reach out to Global Coin Art for inquiries, collaborations, or general questions. Connect with us via email, phone, or visit our address in Toronto, Canada.',
    images: ['/asset/contact-hero.jpg'], // Use a representative image for the contact page
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-100 to-purple-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-purple-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-300">
              Contact Us
            </span>
          </h1>
          <p className="text-xl md:text-2xl">
            We'd love to hear from you! Reach out for inquiries, collaborations, or just to say hello.
          </p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <SubmitForm />

            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Get in Touch
              </h2>
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <EnvelopeIcon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Email
                    </h3>
                    <p className="text-gray-600">
                      globalcoinart@gmail.com
                    </p>
                    <p className="text-gray-600">
                      support@globalcoinart.com
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <PhoneIcon className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Phone
                    </h3>
                    <p className="text-gray-600">
                      +1 (647) 778-1302
                    </p>
                    
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <MapPinIcon className="h-8 w-8 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Address
                    </h3>
                    <p className="text-gray-600">
                      Global Coin Art
                    </p>
                    <p className="text-gray-600">
                    1511-30 Roehampton Avenue
                    </p>
                    <p className="text-gray-600">
                      Toronto, ON, Canada M4P 0B9
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-gray-100 h-64 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.2692505416353!2d-79.38924548450267!3d43.64256617912172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d68bf33a9b%3A0x15edd8c4de1c7581!2sCN%20Tower%2C%20Toronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1633023226785!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}