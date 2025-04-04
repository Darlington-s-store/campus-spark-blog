
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mail, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-campus-dark-blue text-white">
      <div className="campus-container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-white" />
              <span className="text-xl font-bold">CampusSpark</span>
            </Link>
            <p className="mt-4 text-sm text-gray-300">
              A platform for academic expression, knowledge sharing, and community building
              among students and educators.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="mailto:contact@campusspark.edu" className="text-gray-300 hover:text-white">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium">Categories</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/category/arts" className="text-gray-300 hover:text-white">Arts & Design</Link>
              </li>
              <li>
                <Link to="/category/science" className="text-gray-300 hover:text-white">Science</Link>
              </li>
              <li>
                <Link to="/category/humanities" className="text-gray-300 hover:text-white">Humanities</Link>
              </li>
              <li>
                <Link to="/category/technology" className="text-gray-300 hover:text-white">Technology</Link>
              </li>
              <li>
                <Link to="/category/business" className="text-gray-300 hover:text-white">Business</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/guidelines" className="text-gray-300 hover:text-white">Posting Guidelines</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white">FAQ</Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-300 hover:text-white">Support</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white">Terms of Service</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium">Subscribe</h3>
            <p className="mt-4 text-sm text-gray-300">
              Stay updated with the latest posts and campus news
            </p>
            <form className="mt-4">
              <div className="flex max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-l-md border-gray-300 px-4 py-2 text-gray-800 focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-r-md bg-campus-primary px-4 py-2 text-white hover:bg-blue-700"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-center text-sm text-gray-300">
            &copy; {new Date().getFullYear()} CampusSpark. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
