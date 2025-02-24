
import { Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const whatsappNumber = "+919071331124";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  const mainInstagramUrl = "https://www.instagram.com/the_trends_salon_malleswaram";
  const mainFacebookUrl = "https://www.facebook.com/people/The-Trends-unisex-salon/61570822178102";

  return (
    <footer className="bg-white text-gray-900 py-12 relative z-10 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">Contact</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="tel:+919071331124" className="hover:text-black transition">
                  Malleshwaram: +91 90713 31124
                </a>
              </li>
              <li>
                <a href="tel:+918123328824" className="hover:text-black transition">
                  Rajajinagar: +91 81233 28824
                </a>
              </li>
              <li>
                <a href="tel:+916362856410" className="hover:text-black transition">
                  Hebbal: +91 63628 56410
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">Menu</h3>
            <ul className="space-y-2">
              <li>
                <a href="/services" className="text-gray-600 hover:text-black transition">Services</a>
              </li>
              <li>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition">
                  Book Appointment
                </a>
              </li>
              <li>
                <a href="/locations" className="text-gray-600 hover:text-black transition">Locations</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href={mainFacebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href={mainInstagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-600 transition"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-100 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Trends Unisex</p>
        </div>
      </div>
    </footer>
  );
}
