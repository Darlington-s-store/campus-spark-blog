
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, Calendar, Clock, Trash2 } from 'lucide-react';
import { getAllPosts } from '@/data/mockData';
import { Post } from '@/types/blog';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { formatDistanceToNow } from 'date-fns';

const BookmarksList = () => {
  const [bookmarkedPosts, setBookmarkedPosts] = useState<Post[]>([]);
  const { toast } = useToast();
  
  useEffect(() => {
    loadBookmarks();
  }, []);
  
  const loadBookmarks = () => {
    const bookmarkIds = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    const allPosts = getAllPosts();
    const posts = allPosts.filter(post => bookmarkIds.includes(post.id));
    setBookmarkedPosts(posts);
  };
  
  const removeBookmark = (postId: string, postTitle: string) => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    const updatedBookmarks = bookmarks.filter((id: string) => id !== postId);
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
    
    // Update state
    setBookmarkedPosts(bookmarkedPosts.filter(post => post.id !== postId));
    
    toast({
      title: "Bookmark removed",
      description: `"${postTitle}" has been removed from your bookmarks`,
    });
  };
  
  const clearAllBookmarks = () => {
    localStorage.setItem('bookmarks', JSON.stringify([]));
    setBookmarkedPosts([]);
    
    toast({
      title: "Bookmarks cleared",
      description: "All bookmarks have been removed",
    });
  };
  
  if (bookmarkedPosts.length === 0) {
    return (
      <div className="bg-white rounded-lg border p-8 text-center">
        <Bookmark className="h-12 w-12 mx-auto text-gray-300 mb-4" />
        <h3 className="text-xl font-medium mb-2">No bookmarks yet</h3>
        <p className="text-gray-600 mb-6">You haven't bookmarked any articles yet.</p>
        <Link 
          to="/blog" 
          className="inline-block px-6 py-3 bg-campus-primary text-white rounded-md hover:bg-campus-dark-blue transition-colors"
        >
          Browse Articles
        </Link>
      </div>
    );
  }
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center pb-4 border-b">
        <h3 className="text-xl font-medium">
          Your Bookmarks ({bookmarkedPosts.length})
        </h3>
        <Button variant="outline" size="sm" onClick={clearAllBookmarks}>
          Clear all
        </Button>
      </div>
      
      {bookmarkedPosts.map(post => (
        <div key={post.id} className="flex gap-4 p-4 bg-white rounded-lg border hover:shadow-sm transition-shadow">
          <Link to={`/post/${post.slug}`} className="shrink-0">
            <img 
              src={post.coverImage || "/placeholder.svg"} 
              alt={post.title} 
              className="w-20 h-20 object-cover rounded-md"
            />
          </Link>
          <div className="flex-1 min-w-0">
            <Link to={`/post/${post.slug}`}>
              <h4 className="text-lg font-medium mb-1 hover:text-campus-primary transition-colors">{post.title}</h4>
            </Link>
            <p className="text-sm text-gray-600 mb-2 line-clamp-1">{post.excerpt}</p>
            <div className="flex text-xs text-gray-500 gap-4">
              <span className="flex items-center">
                <Calendar className="w-3 h-3 mr-1" />
                {formatDistanceToNow(new Date(post.publishedAt), { addSuffix: true })}
              </span>
              <span className="flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                {post.readTime} min read
              </span>
            </div>
          </div>
          <button 
            onClick={() => removeBookmark(post.id, post.title)}
            className="text-gray-400 hover:text-red-500 transition-colors"
            title="Remove bookmark"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default BookmarksList;
