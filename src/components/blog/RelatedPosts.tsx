
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Post } from '@/types/blog';
import { getAllPosts } from '@/data/mockData';
import { Clock } from 'lucide-react';

interface RelatedPostsProps {
  currentPost: Post;
  limit?: number;
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ currentPost, limit = 3 }) => {
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);
  
  useEffect(() => {
    const fetchRelatedPosts = async () => {
      try {
        const allPosts = await getAllPosts();
        
        // Get posts with the same category, excluding the current post
        const sameCategoryPosts = allPosts.filter(post => 
          post.category.slug === currentPost.category.slug && post.id !== currentPost.id
        );
        
        // If we don't have enough posts in the same category, add some recent posts
        let postsToShow = [...sameCategoryPosts];
        
        if (postsToShow.length < limit) {
          const recentPosts = allPosts
            .filter(post => post.id !== currentPost.id && !sameCategoryPosts.includes(post))
            .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
            .slice(0, limit - postsToShow.length);
          
          postsToShow = [...postsToShow, ...recentPosts];
        } else {
          // If we have more than enough, take only the most recent ones
          postsToShow = postsToShow
            .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
            .slice(0, limit);
        }
        
        setRelatedPosts(postsToShow);
      } catch (error) {
        console.error("Error fetching related posts:", error);
        setRelatedPosts([]);
      }
    };
    
    fetchRelatedPosts();
  }, [currentPost, limit]);
  
  if (relatedPosts.length === 0) {
    return null;
  }
  
  return (
    <div className="mt-12 pt-8 border-t">
      <h3 className="text-xl font-bold mb-6">You might also like</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map(post => (
          <div key={post.id} className="bg-white rounded-lg border overflow-hidden hover:shadow-md transition-shadow">
            <Link to={`/post/${post.slug}`}>
              <img 
                src={post.coverImage || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-40 object-cover"
              />
            </Link>
            <div className="p-4">
              <Link to={`/post/${post.slug}`}>
                <h4 className="font-bold mb-2 hover:text-campus-primary transition-colors line-clamp-2">
                  {post.title}
                </h4>
              </Link>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-1" />
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
