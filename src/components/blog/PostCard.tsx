
import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '@/types/blog';
import { Clock, ThumbsUp, MessageSquare } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { categories } from '@/data/mockData';

interface PostCardProps {
  post: Post;
  isFeatured?: boolean;
}

const PostCard: React.FC<PostCardProps> = ({ post, isFeatured = false }) => {
  const formattedDate = formatDistanceToNow(new Date(post.publishedAt), { addSuffix: true });
  const categoryName = categories.find(c => c.slug === post.category)?.name || post.category;
  
  // Regular card styling
  let cardClasses = "group bg-white rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition-shadow";
  
  // Featured card styling
  if (isFeatured) {
    cardClasses = "group bg-white rounded-lg overflow-hidden border-2 border-campus-primary shadow-md hover:shadow-lg transition-shadow";
  }
  
  return (
    <article className={cardClasses}>
      <Link to={`/post/${post.slug}`} className="block">
        <div className="aspect-video relative overflow-hidden">
          <img 
            src={post.coverImage || "/placeholder.svg"} 
            alt={post.title}
            className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
          />
          <div className="absolute top-4 left-4">
            <span 
              className={`category-badge bg-category-${post.category}/10 text-category-${post.category}`}
            >
              {categoryName}
            </span>
            {isFeatured && (
              <span className="ml-2 category-badge bg-campus-primary text-white">
                Featured
              </span>
            )}
          </div>
        </div>
      </Link>
      
      <div className="p-5">
        <div className="flex items-center mb-3">
          <img 
            src={post.author.avatar} 
            alt={post.author.name}
            className="w-8 h-8 rounded-full mr-3"
          />
          <div>
            <p className="text-sm font-medium">{post.author.name}</p>
            <p className="text-xs text-gray-500">{post.author.role === 'educator' ? 'Professor' : 'Student'}</p>
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-2 group-hover:text-campus-primary transition-colors">
          <Link to={`/post/${post.slug}`}>{post.title}</Link>
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
        
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              {post.readTime} min read
            </span>
            <span className="flex items-center">
              <ThumbsUp className="w-3 h-3 mr-1" />
              {post.likes}
            </span>
            <span className="flex items-center">
              <MessageSquare className="w-3 h-3 mr-1" />
              {post.comments.length}
            </span>
          </div>
          <time dateTime={post.publishedAt}>{formattedDate}</time>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
