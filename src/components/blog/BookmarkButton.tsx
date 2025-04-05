
import React, { useState, useEffect } from 'react';
import { Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/context/AuthContext';

interface BookmarkButtonProps {
  postId: string;
  postTitle: string;
}

const BookmarkButton: React.FC<BookmarkButtonProps> = ({ postId, postTitle }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const { toast } = useToast();
  const { isAuthenticated } = useAuth();
  
  // Check if post is bookmarked on component mount
  useEffect(() => {
    if (isAuthenticated) {
      const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
      setIsBookmarked(bookmarks.includes(postId));
    }
  }, [postId, isAuthenticated]);
  
  const toggleBookmark = () => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication required",
        description: "Please log in to bookmark articles",
        variant: "destructive",
      });
      return;
    }
    
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    
    if (isBookmarked) {
      // Remove bookmark
      const updatedBookmarks = bookmarks.filter((id: string) => id !== postId);
      localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
      setIsBookmarked(false);
      toast({
        title: "Bookmark removed",
        description: `"${postTitle}" has been removed from your bookmarks`,
      });
    } else {
      // Add bookmark
      const updatedBookmarks = [...bookmarks, postId];
      localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
      setIsBookmarked(true);
      toast({
        title: "Article bookmarked",
        description: `"${postTitle}" has been added to your bookmarks`,
      });
    }
  };
  
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleBookmark}
      className={`flex items-center gap-1 ${isBookmarked ? 'text-campus-primary' : 'text-gray-500 hover:text-gray-700'}`}
    >
      <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
      <span>{isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
    </Button>
  );
};

export default BookmarkButton;
