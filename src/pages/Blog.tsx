
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PostCard from '@/components/blog/PostCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { categories, getAllPosts } from '@/data/mockData';
import { Filter, Search, SlidersHorizontal } from 'lucide-react';

const Blog = () => {
  const allPosts = getAllPosts();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  
  // Filter posts based on search query and category
  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  
  // Sort posts
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortBy === 'newest') {
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    } else if (sortBy === 'oldest') {
      return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
    } else if (sortBy === 'popular') {
      return b.views - a.views;
    }
    return 0;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12 bg-gray-50">
        <div className="campus-container">
          <div className="flex flex-col space-y-8">
            <div className="flex flex-col space-y-4">
              <h1 className="text-4xl font-bold">Blog</h1>
              <p className="text-lg text-gray-600">
                Explore the latest thoughts, research, and insights from the academic community.
              </p>
            </div>
            
            {/* Search and Filters */}
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <div className="flex gap-4">
                  <div className="w-full md:w-40">
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger>
                        <div className="flex items-center">
                          <Filter className="h-4 w-4 mr-2" />
                          <SelectValue placeholder="Category" />
                        </div>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        {categories.map(category => (
                          <SelectItem key={category.slug} value={category.slug}>
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="w-full md:w-40">
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger>
                        <div className="flex items-center">
                          <SlidersHorizontal className="h-4 w-4 mr-2" />
                          <SelectValue placeholder="Sort by" />
                        </div>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="newest">Newest</SelectItem>
                        <SelectItem value="oldest">Oldest</SelectItem>
                        <SelectItem value="popular">Most Popular</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
            
            {/* View Options */}
            <Tabs defaultValue="grid" className="w-full">
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  {sortedPosts.length} {sortedPosts.length === 1 ? 'article' : 'articles'} found
                </div>
                <TabsList>
                  <TabsTrigger value="grid">Grid View</TabsTrigger>
                  <TabsTrigger value="list">List View</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="grid" className="mt-6">
                {sortedPosts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sortedPosts.map(post => (
                      <PostCard key={post.id} post={post} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-lg text-gray-500">No articles found matching your criteria.</p>
                    <Button 
                      variant="link" 
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedCategory('all');
                      }}
                    >
                      Clear filters
                    </Button>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="list" className="mt-6">
                {sortedPosts.length > 0 ? (
                  <div className="space-y-6">
                    {sortedPosts.map(post => (
                      <div key={post.id} className="flex flex-col md:flex-row gap-6 bg-white rounded-lg border p-4 hover:shadow-md transition-shadow">
                        <div className="md:w-1/4">
                          <Link to={`/post/${post.slug}`}>
                            <img 
                              src={post.coverImage} 
                              alt={post.title} 
                              className="w-full h-48 md:h-full object-cover rounded-md"
                            />
                          </Link>
                        </div>
                        <div className="md:w-3/4 flex flex-col justify-between">
                          <div>
                            <Link 
                              to={`/category/${post.category}`}
                              className={`category-badge bg-category-${post.category}/10 text-category-${post.category} mb-2`}
                            >
                              {categories.find(c => c.slug === post.category)?.name || post.category}
                            </Link>
                            <Link to={`/post/${post.slug}`}>
                              <h3 className="text-xl font-bold mb-2 hover:text-campus-primary">{post.title}</h3>
                            </Link>
                            <p className="text-gray-600 mb-4">{post.excerpt}</p>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                              <Link to={`/user/${post.author.id}`}>
                                <img 
                                  src={post.author.avatar} 
                                  alt={post.author.name} 
                                  className="w-8 h-8 rounded-full"
                                />
                              </Link>
                              <div>
                                <Link to={`/user/${post.author.id}`} className="text-sm font-medium text-gray-900 hover:underline">
                                  {post.author.name}
                                </Link>
                                <p className="text-xs text-gray-500">
                                  {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                                    year: 'numeric', 
                                    month: 'short', 
                                    day: 'numeric' 
                                  })}
                                </p>
                              </div>
                            </div>
                            <p className="text-sm text-gray-500">{post.readTime} min read</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-lg text-gray-500">No articles found matching your criteria.</p>
                    <Button 
                      variant="link" 
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedCategory('all');
                      }}
                    >
                      Clear filters
                    </Button>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
