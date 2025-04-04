
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FeaturedPost from '@/components/blog/FeaturedPost';
import PostCard from '@/components/blog/PostCard';
import CategoryList from '@/components/blog/CategoryList';
import { categories, getFeaturedPosts, getRecentPosts } from '@/data/mockData';
import { BookOpen } from 'lucide-react';

const Home = () => {
  const featuredPosts = getFeaturedPosts();
  const recentPosts = getRecentPosts(6);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-campus-light-blue py-12">
          <div className="campus-container">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold text-campus-dark-blue mb-4 leading-tight">
                  Share Your Academic Journey and Discoveries
                </h1>
                <p className="text-lg text-gray-700 mb-6">
                  CampusSpark is a platform where students and educators can share knowledge, 
                  engage in academic discussions, and build community through thoughtful content.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#featured" className="px-6 py-3 bg-campus-primary text-white rounded-md hover:bg-campus-dark-blue transition-colors">
                    Explore Featured Posts
                  </a>
                  <a href="#categories" className="px-6 py-3 border border-campus-primary text-campus-primary rounded-md hover:bg-campus-primary hover:text-white transition-colors">
                    Browse Categories
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute -z-10 top-6 -left-6 w-full h-full rounded-xl bg-campus-secondary opacity-20"></div>
                  <div className="w-full aspect-square rounded-xl bg-white shadow-xl flex flex-col items-center justify-center p-8 border">
                    <BookOpen className="w-20 h-20 text-campus-primary mb-6" />
                    <h3 className="text-xl font-bold mb-2">Campus Voices</h3>
                    <p className="text-center text-gray-600">A platform for academic expression, knowledge sharing, and community building.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured post */}
        <section id="featured" className="py-12">
          <div className="campus-container">
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <span className="w-10 h-1 bg-campus-primary mr-3"></span>
              Featured Post
            </h2>
            
            {featuredPosts.length > 0 && <FeaturedPost post={featuredPosts[0]} />}
          </div>
        </section>
        
        {/* Categories */}
        <section id="categories" className="py-12 bg-gray-50">
          <div className="campus-container">
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <span className="w-10 h-1 bg-campus-primary mr-3"></span>
              Explore Categories
            </h2>
            
            <CategoryList categories={categories} />
          </div>
        </section>
        
        {/* Recent posts */}
        <section className="py-12">
          <div className="campus-container">
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <span className="w-10 h-1 bg-campus-primary mr-3"></span>
              Recent Posts
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA section */}
        <section className="py-16 bg-campus-dark-blue text-white">
          <div className="campus-container text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Share Your Knowledge?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our community of students and educators sharing their academic journeys, 
              research findings, and creative projects.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <button className="px-6 py-3 bg-white text-campus-dark-blue font-medium rounded-md hover:bg-gray-100 transition-colors">
                Create Account
              </button>
              <button className="px-6 py-3 border border-white text-white rounded-md hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
