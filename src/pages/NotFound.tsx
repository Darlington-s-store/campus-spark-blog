
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { BookOpen, Search, Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-16">
        <div className="text-center px-4">
          <div className="mb-8 relative">
            <BookOpen className="h-24 w-24 mx-auto text-gray-300" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="text-4xl font-bold text-campus-primary">404</div>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
          
          <p className="text-lg text-gray-600 max-w-md mx-auto mb-8">
            We couldn't find the page you're looking for. It might have been moved,
            deleted, or never existed in the first place.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button asChild className="flex items-center">
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            
            <Button asChild variant="outline">
              <Link to="/featured">
                <BookOpen className="mr-2 h-4 w-4" />
                Browse Featured Posts
              </Link>
            </Button>
            
            <Button asChild variant="outline" onClick={() => window.history.back()}>
              <div>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </div>
            </Button>
          </div>
          
          <div className="max-w-md mx-auto">
            <h2 className="text-lg font-medium mb-3">Looking for something specific?</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search posts..."
                className="w-full rounded-full border-2 border-gray-200 py-2 pl-10 pr-4 focus:border-campus-primary focus:outline-none"
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
