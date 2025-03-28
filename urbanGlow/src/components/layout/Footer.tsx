
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <Link to="/" className="font-serif text-2xl font-bold tracking-tighter">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-urban-dark to-urban">
                urbanGlow
              </span>
            </Link>
            <p className="mt-4 text-muted-foreground">
              Elevate your style with our curated collection of fashion-forward clothing and accessories.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-500 hover:text-urban transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-urban transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-urban transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-urban transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="font-medium text-lg mb-4">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/women" className="text-muted-foreground hover:text-urban transition-colors">
                  Women's Clothing
                </Link>
              </li>
              <li>
                <Link to="/men" className="text-muted-foreground hover:text-urban transition-colors">
                  Men's Clothing
                </Link>
              </li>
              <li>
                <Link to="/accessories" className="text-muted-foreground hover:text-urban transition-colors">
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/new-arrivals" className="text-muted-foreground hover:text-urban transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/sale" className="text-muted-foreground hover:text-urban transition-colors">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h3 className="font-medium text-lg mb-4">Help</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/customer-service" className="text-muted-foreground hover:text-urban transition-colors">
                  Customer Service
                </Link>
              </li>
              <li>
                <Link to="/track-order" className="text-muted-foreground hover:text-urban transition-colors">
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-muted-foreground hover:text-urban transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-muted-foreground hover:text-urban transition-colors">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-urban transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-medium text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mt-1 mr-2 text-urban" />
                <span className="text-muted-foreground">
                  123 Fashion Street<br />
                  Chennai, TN 600063
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-urban" />
                <a href="tel:+91 1234567890" className="text-muted-foreground hover:text-urban transition-colors">
                  (91) 1234567890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-urban" />
                <a href="mailto:mail@urbanglow.com" className="text-muted-foreground hover:text-urban transition-colors">
                  mail@urbanglow.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-200 pt-8 pb-6">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="font-medium text-lg mb-2">Stay in the glow</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for exclusive offers and style updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="urban-input rounded-lg flex-grow"
              />
              <button className="urban-button whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} urbanGlow. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link to="/privacy-policy" className="hover:text-urban transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-urban transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
