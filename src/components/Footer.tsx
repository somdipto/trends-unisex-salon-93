
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const whatsappNumber = "+919071331124";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <footer className="bg-gray-50 text-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-black leading-relaxed">
            Trends Unisex Salon is a premium hair & beauty salon offering top-quality services across Bangalore.
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
                <p className="font-medium">Hebbal:</p>
                <a href="tel:+916362856410" className="hover:text-black transition">
                  +91 63628 56410
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
                href="#"
                className="text-gray-800 hover:text-black transition"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-black transition"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-black transition"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-black">
          <p className="text-sm">&copy; {new Date().getFullYear()} Trends Unisex. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
