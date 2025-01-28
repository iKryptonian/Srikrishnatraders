import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { FireworksAnimation } from '../components/FireworksAnimation';

export const ContactPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <FireworksAnimation />
      
      <div className="text-center">
        <h2 className="text-3xl font-bold text-orange-400">Contact Us</h2>
        <p className="text-gray-600 mt-2">
          Get in touch with us to explore our products and make your celebrations truly memorable.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-8">
          <h3 className="text-2xl font-semibold text-orange-400 mb-6">Sri Krishna Traders</h3>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-orange-500 mt-1" />
              <div>
                <h4 className="font-semibold">Address</h4>
                <p className="text-gray-600">
                  Sathur Main road, Naranapuram,<br />
                  Sivakasi, Tamil Nadu
                </p>
                <a 
                  href="https://maps.app.goo.gl/EnsbnEXKyLFoH39k9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-purple-700 inline-flex items-center space-x-1 mt-2"
                >
                  <span>View on Google Maps</span>
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-orange-500" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <a href="tel:+919597273656" className="text-orange-600 hover:text-purple-600">

                <span className="text-black">Pandian at</span> +91 95972 73656<br />
                                                                                                                                                                                                                                                                                               
                
                </a>
              </div><br />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <a href="tel:+919042129123" className="text-orange-600 hover:text-purple-600">

                <span className="text-black">Nivash at</span> +91 90421 29123<br />
                                                                                                                                                                                                                                                                                               
                
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Clock className="h-6 w-6 text-orange-400" />
              <div>
                <h4 className="font-semibold">Business Hours</h4>
                <p className="text-gray-600">Monday - Saturday: 7:00 AM - 10:00 PM</p>
                <p className="text-gray-600">Sunday: 9:00 AM - 10:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-96 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3935.7322181082914!2d77.8357607!3d9.4448648!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06cd028c4e1b31%3A0xe2e510ed414d2090!2z4K644K-N4K6w4K-A4K6V4K6_4K6w4K-B4K634K-N4K6j4K6-4K6f4K6_4K6w4K-H4K6f4K6w4K-N4K644K-N4K6q4K6f4K-N4K6f4K6-4K6a4K-B4K6V4K6y4K-N!5e0!3m2!1sen!2sin!4v1737205961720!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};