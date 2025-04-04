import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PostCard from '@/components/blog/PostCard';
import { getPostsByCategory, categories } from '@/data/mockData';
import { Category } from '@/types/blog';
import { Beaker, BookOpen, PenSquare, Cpu, BarChartHorizontal } from 'lucide-react';

const getCategoryIcon = (slug: string) => {
  switch (slug) {
    case 'arts':
      return <PenSquare className="w-8 h-8" />;
    case 'science':
      return <Beaker className="w-8 h-8" />;
    case 'humanities':
      return <BookOpen className="w-8 h-8" />;
    case 'technology':
      return <Cpu className="w-8 h-8" />;
    case 'business':
      return <BarChartHorizontal className="w-8 h-8" />;
    default:
      return <BookOpen className="w-8 h-8" />;
  }
};

const getCategoryData = (slug: string): Category | undefined => {
  return categories.find(category => category.slug === slug);
};

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = getCategoryData(slug || '');
  const posts = getPostsByCategory(slug || '');
  
  if (!category) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
            <p className="mb-6">The category you're looking for doesn't exist.</p>
            <Link to="/" className="text-campus-primary hover:underline">
              Return to homepage
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Category header */}
        <section className={`bg-category-${category.slug}/10 py-16`}>
          <div className="campus-container">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center text-white bg-category-${category.slug}`}>
                {getCategoryIcon(category.slug)}
              </div>
              
              <div>
                <h1 className="text-3xl font-bold mb-2">{category.name}</h1>
                <p className="text-gray-600 max-w-3xl">
                  {category.description || 'Explore posts in this academic category.'}
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Posts grid */}
        <section className="py-12">
          <div className="campus-container">
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <span className="w-10 h-1 bg-campus-primary mr-3"></span>
              Latest Posts in {category.name}
            </h2>
            
            {posts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
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
        </section>
        
        {/* Other categories */}
        <section className="py-12 bg-gray-50">
          <div className="campus-container">
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <span className="w-10 h-1 bg-campus-primary mr-3"></span>
              Explore Other Categories
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {categories
                .filter(cat => cat.slug !== category.slug)
                .map((cat) => (
                  <Link 
                    key={cat.id}
                    to={`/category/${cat.slug}`}
                    className={`flex items-center p-4 bg-white rounded-lg border shadow-sm hover:shadow-md transition-all hover:border-category-${cat.slug}`}
                  >
                    <div className={`w-10 h-10 mr-4 rounded-full flex items-center justify-center text-white bg-category-${cat.slug}`}>
                      {getCategoryIcon(cat.slug)}
                    </div>
                    <div>
                      <h3 className="font-medium">{cat.name}</h3>
                      <p className="text-sm text-gray-500 line-clamp-1">{cat.description}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
