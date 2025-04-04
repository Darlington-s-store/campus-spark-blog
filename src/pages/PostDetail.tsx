
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getPostBySlug, getRecentPosts } from '@/data/mockData';
import { Post } from '@/types/blog';
import PostCard from '@/components/blog/PostCard';
import { Clock, Calendar, ThumbsUp, MessageSquare, Share2, Bookmark } from 'lucide-react';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';

const PostDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug || '');
  const relatedPosts = getRecentPosts(3);
  
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
            <p className="mb-6">The post you're looking for doesn't exist or has been removed.</p>
            <Link to="/" className="text-campus-primary hover:underline">
              Return to homepage
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const formattedDate = format(new Date(post.publishedAt), 'MMMM d, yyyy');
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero section */}
        <div className="relative h-[400px] md:h-[500px]">
          <img 
            src={post.coverImage || '/placeholder.svg'} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
            <div className="campus-container">
              <span className={`inline-block mb-4 category-badge bg-category-${post.category.slug}`}>
                {post.category.name}
              </span>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight max-w-4xl">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6">
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
            </div>
          </div>
        </div>
        
        {/* Post content */}
        <div className="campus-container py-10">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Main content */}
            <div className="lg:w-2/3">
              {/* Social sharing */}
              <div className="flex justify-between items-center mb-8 pb-4 border-b">
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <ThumbsUp className="w-4 h-4" />
                    <span>{post.likes}</span>
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    <span>{post.comments.length}</span>
                  </Button>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon">
                    <Share2 className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Bookmark className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              {/* Post body */}
              <div 
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>') }}
              />
              
              {/* Tags */}
              <div className="mt-10 pb-6 border-b">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <Link 
                      key={index} 
                      to={`/tag/${tag}`}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Author box */}
              <div className="mt-10 bg-gray-50 rounded-lg p-6 border">
                <div className="flex flex-col sm:flex-row gap-6">
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  
                  <div>
                    <h3 className="text-xl font-bold mb-2">{post.author.name}</h3>
                    <p className="text-sm text-gray-500 mb-3">
                      {post.author.role === 'educator' ? 'Professor' : 'Student'} 
                      {post.author.department && ` • ${post.author.department}`}
                    </p>
                    <p className="text-gray-700 mb-4">{post.author.bio || 'No bio available.'}</p>
                    <Button variant="outline" size="sm">View Profile</Button>
                  </div>
                </div>
              </div>
              
              {/* Comments */}
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-6">Comments ({post.comments.length})</h3>
                
                {post.comments.length > 0 ? (
                  <div className="space-y-6">
                    {post.comments.map((comment) => (
                      <div key={comment.id} className="bg-white p-5 rounded-lg border">
                        <div className="flex items-center mb-3">
                          <img 
                            src={comment.author.avatar} 
                            alt={comment.author.name}
                            className="w-8 h-8 rounded-full mr-3"
                          />
                          <div>
                            <p className="text-sm font-medium">{comment.author.name}</p>
                            <p className="text-xs text-gray-500">
                              {format(new Date(comment.publishedAt), 'MMM d, yyyy')}
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-700">{comment.content}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No comments yet. Be the first to share your thoughts!</p>
                )}
                
                {/* Comment form */}
                <div className="mt-8 bg-white p-6 rounded-lg border">
                  <h4 className="text-lg font-medium mb-4">Leave a Comment</h4>
                  <textarea 
                    placeholder="Share your thoughts..." 
                    className="w-full border rounded-md p-3 h-32 focus:outline-none focus:ring-2 focus:ring-campus-primary mb-4"
                  ></textarea>
                  <Button className="bg-campus-primary hover:bg-campus-dark-blue">
                    Post Comment
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-6">
                <div className="bg-gray-50 rounded-lg p-6 mb-8 border">
                  <h3 className="text-lg font-bold mb-4">Related Posts</h3>
                  <div className="space-y-6">
                    {relatedPosts.map((relatedPost) => (
                      <div key={relatedPost.id} className="flex gap-4">
                        <Link to={`/post/${relatedPost.slug}`} className="flex-shrink-0">
                          <img 
                            src={relatedPost.coverImage || '/placeholder.svg'} 
                            alt={relatedPost.title}
                            className="w-16 h-16 object-cover rounded"
                          />
                        </Link>
                        <div>
                          <Link 
                            to={`/post/${relatedPost.slug}`}
                            className="font-medium hover:text-campus-primary transition-colors line-clamp-2"
                          >
                            {relatedPost.title}
                          </Link>
                          <p className="text-xs text-gray-500 mt-1">
                            {format(new Date(relatedPost.publishedAt), 'MMM d, yyyy')}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 border">
                  <h3 className="text-lg font-bold mb-4">Popular Categories</h3>
                  <div className="space-y-2">
                    <Link 
                      to="/category/arts" 
                      className="flex items-center justify-between p-3 rounded hover:bg-white transition-colors"
                    >
                      <span>Arts & Design</span>
                      <span className="bg-category-arts text-white text-xs px-2 py-1 rounded-full">12</span>
                    </Link>
                    <Link 
                      to="/category/science" 
                      className="flex items-center justify-between p-3 rounded hover:bg-white transition-colors"
                    >
                      <span>Science</span>
                      <span className="bg-category-science text-white text-xs px-2 py-1 rounded-full">9</span>
                    </Link>
                    <Link 
                      to="/category/humanities" 
                      className="flex items-center justify-between p-3 rounded hover:bg-white transition-colors"
                    >
                      <span>Humanities</span>
                      <span className="bg-category-humanities text-white text-xs px-2 py-1 rounded-full">14</span>
                    </Link>
                    <Link 
                      to="/category/technology" 
                      className="flex items-center justify-between p-3 rounded hover:bg-white transition-colors"
                    >
                      <span>Technology</span>
                      <span className="bg-category-technology text-white text-xs px-2 py-1 rounded-full">18</span>
                    </Link>
                    <Link 
                      to="/category/business" 
                      className="flex items-center justify-between p-3 rounded hover:bg-white transition-colors"
                    >
                      <span>Business</span>
                      <span className="bg-category-business text-white text-xs px-2 py-1 rounded-full">7</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PostDetail;
