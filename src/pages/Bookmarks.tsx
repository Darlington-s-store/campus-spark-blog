
import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BookmarksList from '@/components/user/BookmarksList';
import { Bookmark } from 'lucide-react';

const Bookmarks = () => {
  const { isAuthenticated, requireAuth } = useAuth();
  const navigate = useNavigate();
  
  React.useEffect(() => {
    if (!requireAuth()) {
      navigate('/login', { state: { from: '/bookmarks' } });
    }
  }, [isAuthenticated, navigate, requireAuth]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12 bg-gray-50">
        <div className="campus-container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-3 mb-8">
              <Bookmark className="h-6 w-6 text-campus-primary" />
              <h1 className="text-3xl font-bold">Your Bookmarks</h1>
            </div>
            
            <BookmarksList />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Bookmarks;
