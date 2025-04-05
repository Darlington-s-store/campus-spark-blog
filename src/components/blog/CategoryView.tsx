
import React from 'react';
import { Link } from 'react-router-dom';
import { Category, Post } from '@/types/blog';
import PostCard from './PostCard';
import { Beaker, BookOpen, PenSquare, Cpu, BarChartHorizontal } from 'lucide-react';

interface CategoryViewProps {
  category: Category;
  posts: Post[];
}

const getCategoryIcon = (slug: string) => {
  switch (slug) {
    case 'arts':
      return <PenSquare className="w-6 h-6" />;
    case 'science':
      return <Beaker className="w-6 h-6" />;
    case 'humanities':
      return <BookOpen className="w-6 h-6" />;
    case 'technology':
      return <Cpu className="w-6 h-6" />;
    case 'business':
      return <BarChartHorizontal className="w-6 h-6" />;
    default:
      return <BookOpen className="w-6 h-6" />;
  }
};

const CategoryView: React.FC<CategoryViewProps> = ({ category, posts }) => {
  // Filter posts by category
  const categoryPosts = posts.filter(post => post.category.slug === category.slug);
  
  return (
    <div className="space-y-8">
      <div className={`flex items-center gap-4 bg-category-${category.slug}/10 p-6 rounded-lg border border-category-${category.slug}/20`}>
        <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white bg-category-${category.slug}`}>
          {getCategoryIcon(category.slug)}
        </div>
        
        <div>
          <h2 className="text-2xl font-bold">{category.name}</h2>
          <p className="text-gray-600">{category.description || 'Explore posts in this academic category.'}</p>
        </div>
      </div>
      
      {categoryPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-lg border">
          <BookOpen className="h-16 w-16 mx-auto text-gray-300 mb-4" />
          <h3 className="text-xl font-medium mb-2">No posts yet</h3>
          <p className="text-gray-600 mb-6">Be the first to contribute to this category.</p>
          <Link 
            to="/write" 
            className="px-6 py-3 bg-campus-primary text-white rounded-md hover:bg-campus-dark-blue transition-colors"
          >
            Create Post
          </Link>
        </div>
      )}
    </div>
  );
};

export default CategoryView;
