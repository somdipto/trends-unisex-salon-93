
import { Facebook, Instagram } from 'lucide-react';
import { memo } from 'react';

const Footer = () => {
  const whatsappNumber = "+919071331124";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  const mainInstagramUrl = "https://www.instagram.com/the_trends_salon_malleswaram";
  const mainFacebookUrl = "https://www.facebook.com/people/The-Trends-unisex-salon/61570822178102";

  return (
    <footer className="bg-gray-50 text-gray-900 py-12 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-black leading-relaxed">
              The Trends Unisex Salon is a premium hair & beauty salon offering top-quality services across Bangalore.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-black">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/services"
                  className="text-gray-800 hover:text-black transition"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-black transition"
                >
                  Book Appointment
                </a>
              </li>
              <li>
                <a
                  href="/locations"
                  className="text-gray-800 hover:text-black transition"
                >
                  Locations
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-black">Branch Contacts</h3>
            <ul className="space-y-2 text-gray-800">
              <li>
                <p className="font-medium">Malleshwaram:</p>
                <a href="tel:+919071331124" className="hover:text-black transition">
                  +91 90713 31124
                </a>
              </li>
              <li>
                <p className="font-medium">Rajajinagar:</p>
                <a href="tel:+918123328824" className="hover:text-black transition">
                  +91 81233 28824
                </a>
              </li>
              <li>
                <a href="mailto:trendsunisexsalon8@gmail.com" className="hover:text-black transition">
                  Email: trendsunisexsalon8@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-black">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href={mainFacebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-black transition"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href={mainInstagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-pink-600 transition"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-black">
          <p className="text-sm">&copy; {new Date().getFullYear()} The Trends Unisex Salon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
