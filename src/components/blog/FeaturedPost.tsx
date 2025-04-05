
import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '@/types/blog';
import { Clock, User, Calendar } from 'lucide-react';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';

interface FeaturedPostProps {
  post: Post;
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
  const formattedDate = format(new Date(post.publishedAt), 'MMMM d, yyyy');

  return (
    <div className="relative rounded-xl overflow-hidden">
      {/* Background image with gradient overlay */}
      <div className="relative h-[500px]">
        <img 
          src={post.coverImage || '/placeholder.svg'} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      </div>

      {/* Content overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
        <span className={`inline-block mb-4 category-badge bg-category-${post.category.slug}`}>
          {post.category.name}
        </span>
        
        <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
          <Link to={`/post/${post.slug}`} className="hover:text-campus-primary transition-colors">
            {post.title}
          </Link>
        </h2>
        
        <p className="text-gray-200 mb-6 max-w-3xl line-clamp-2 md:line-clamp-3">{post.excerpt}</p>
        
        <div className="flex flex-wrap items-center gap-6 mb-6">
          <div className="flex items-center">
            <img 
              src={post.author.avatar} 
              alt={post.author.name}
              className="w-10 h-10 rounded-full mr-3 border-2 border-white"
            />
            <div>
              <p className="font-medium">{post.author.name}</p>
              <p className="text-sm text-gray-300">{post.author.role === 'educator' ? 'Professor' : 'Student'}</p>
            </div>
          </div>
          
          <div className="flex items-center text-sm text-gray-300">
            <Calendar className="w-4 h-4 mr-2" />
            {formattedDate}
          </div>
          
          <div className="flex items-center text-sm text-gray-300">
            <Clock className="w-4 h-4 mr-2" />
            {post.readTime} min read
          </div>
        </div>
        
        <Link to={`/post/${post.slug}`}>
          <Button variant="default" className="bg-campus-primary hover:bg-campus-dark-blue">
            Read Article
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedPost;
