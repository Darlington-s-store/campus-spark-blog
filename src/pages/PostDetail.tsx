
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { getPostBySlug } from '@/data/mockData';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { 
  Heart, 
  MessageSquare, 
  Share2, 
  Bookmark, 
  Calendar, 
  Clock, 
  ArrowLeft, 
  Send
} from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import ReadingProgress from '@/components/blog/ReadingProgress';
import RelatedPosts from '@/components/blog/RelatedPosts';

const PostDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug || '');
  const [comment, setComment] = useState('');
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likesCount, setLikesCount] = useState(post?.likes || 0);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
            <p className="mb-6">The post you're looking for doesn't exist.</p>
            <Button asChild variant="default">
              <Link to="/">Return to Home</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(current => isLiked ? current - 1 : current + 1);
  };
  
  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    toast({
      title: isBookmarked ? "Removed from bookmarks" : "Added to bookmarks",
      description: isBookmarked ? "This post has been removed from your bookmarks." : "This post has been added to your bookmarks.",
    });
  };
  
  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!comment.trim()) {
      toast({
        title: "Error",
        description: "Comment cannot be empty",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Comment submitted",
      description: "Your comment has been submitted for review.",
    });
    
    setComment('');
  };
  
  const formattedDate = format(new Date(post.publishedAt), 'MMMM d, yyyy');
  
  return (
    <div className="min-h-screen flex flex-col">
      <ReadingProgress />
      <Header />
      
      <main className="flex-grow">
        {/* Post Header */}
        <section className="bg-white py-8 border-b">
          <div className="campus-container">
            <div className="mb-6">
              <Button 
                variant="ghost" 
                size="sm" 
                className="flex items-center text-gray-500 mb-4" 
                onClick={() => navigate(-1)}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              
              <Link 
                to={`/category/${post.category.slug}`}
                className={`category-badge bg-category-${post.category.slug}/10 text-category-${post.category.slug} mb-4`}
              >
                {post.category.name}
              </Link>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {post.title}
              </h1>
              
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Calendar className="h-4 w-4 mr-1" />
                <span className="mr-4">{formattedDate}</span>
                <Clock className="h-4 w-4 mr-1" />
                <span>{post.readTime} min read</span>
              </div>
              
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src={post.author.avatar} alt={post.author.name} />
                  <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <Link to={`/user/${post.author.id}`} className="font-medium text-gray-900 hover:text-campus-primary">
                    {post.author.name}
                  </Link>
                  <p className="text-sm text-gray-500">
                    {post.author.role === 'educator' ? 'Professor' : 'Student'}
                    {post.author.department && ` • ${post.author.department}`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Post Content */}
        <section className="py-8">
          <div className="campus-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-8">
                {post.coverImage && (
                  <div className="mb-8">
                    <img 
                      src={post.coverImage} 
                      alt={post.title} 
                      className="w-full rounded-lg object-cover h-[400px]"
                    />
                  </div>
                )}
                
                <article className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-medium prose-a:text-campus-primary prose-a:no-underline hover:prose-a:underline">
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </article>
                
                <div className="mt-8 flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <Link 
                      key={tag} 
                      to={`/tag/${tag.replace(/\s+/g, '-').toLowerCase()}`}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
                
                <div className="mt-8 flex items-center justify-between border-t border-b py-4">
                  <div className="flex items-center space-x-4">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={handleLike}
                      className={isLiked ? "text-red-500" : ""}
                    >
                      <Heart className={`mr-1 h-5 w-5 ${isLiked ? "fill-current" : ""}`} />
                      <span>{likesCount}</span>
                    </Button>
                    
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => document.getElementById('comments-section')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      <MessageSquare className="mr-1 h-5 w-5" />
                      <span>{post.comments.length}</span>
                    </Button>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        navigator.clipboard.writeText(window.location.href);
                        toast({
                          title: "Link copied",
                          description: "The post link has been copied to your clipboard.",
                        });
                      }}
                    >
                      <Share2 className="h-5 w-5" />
                    </Button>
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleBookmark}
                      className={isBookmarked ? "text-campus-primary" : ""}
                    >
                      <Bookmark className={`h-5 w-5 ${isBookmarked ? "fill-current" : ""}`} />
                    </Button>
                  </div>
                </div>
                
                {/* Related Posts */}
                <RelatedPosts currentPost={post} />
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-4">
                <div className="sticky top-8 space-y-8">
                  {/* Author Card */}
                  <div className="bg-white p-6 rounded-lg border">
                    <h3 className="text-lg font-medium mb-4">About the Author</h3>
                    <div className="flex items-center mb-4">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage src={post.author.avatar} alt={post.author.name} />
                        <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <Link to={`/user/${post.author.id}`} className="font-medium text-gray-900 hover:text-campus-primary">
                          {post.author.name}
                        </Link>
                        <p className="text-sm text-gray-500">
                          {post.author.role === 'educator' ? 'Professor' : 'Student'}
                          {post.author.department && ` • ${post.author.department}`}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{post.author.bio || 'No bio available.'}</p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to={`/user/${post.author.id}`}>View Profile</Link>
                    </Button>
                  </div>
                  
                  {/* Category Card */}
                  <div className="bg-white p-6 rounded-lg border">
                    <h3 className="text-lg font-medium mb-4">Category</h3>
                    <Link 
                      to={`/category/${post.category.slug}`}
                      className={`block p-4 rounded-md bg-category-${post.category.slug}/10 border border-category-${post.category.slug}/20 hover:bg-category-${post.category.slug}/20 transition-colors`}
                    >
                      <h4 className={`font-medium text-category-${post.category.slug}`}>{post.category.name}</h4>
                      <p className="text-sm text-gray-600 mt-1">{post.category.description}</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Comments Section */}
        <section id="comments-section" className="py-8 bg-gray-50">
          <div className="campus-container">
            <h2 className="text-2xl font-bold mb-8">
              Comments ({post.comments.length})
            </h2>
            
            <div className="mb-8">
              <form onSubmit={handleSubmitComment} className="space-y-4">
                <Textarea 
                  placeholder="Write a comment..." 
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="min-h-[100px]"
                />
                <div className="flex justify-end">
                  <Button type="submit" className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Post Comment
                  </Button>
                </div>
              </form>
            </div>
            
            {post.comments.length > 0 ? (
              <div className="space-y-6">
                {post.comments.map((comment) => (
                  <div key={comment.id} className="bg-white p-6 rounded-lg border">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-10 w-10 mr-3">
                        <AvatarImage src={comment.author.avatar} alt={comment.author.name} />
                        <AvatarFallback>{comment.author.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <Link to={`/user/${comment.author.id}`} className="font-medium text-gray-900 hover:text-campus-primary">
                          {comment.author.name}
                        </Link>
                        <p className="text-xs text-gray-500">
                          {format(new Date(comment.publishedAt), 'MMM d, yyyy • h:mm a')}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700">{comment.content}</p>
                    
                    {comment.replies && comment.replies.length > 0 && (
                      <div className="mt-4 pl-4 border-l-2 border-gray-200">
                        {comment.replies.map((reply) => (
                          <div key={reply.id} className="mt-4">
                            <div className="flex items-center mb-2">
                              <Avatar className="h-8 w-8 mr-2">
                                <AvatarImage src={reply.author.avatar} alt={reply.author.name} />
                                <AvatarFallback>{reply.author.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <Link to={`/user/${reply.author.id}`} className="font-medium text-gray-900 hover:text-campus-primary">
                                  {reply.author.name}
                                </Link>
                                <p className="text-xs text-gray-500">
                                  {format(new Date(reply.publishedAt), 'MMM d, yyyy • h:mm a')}
                                </p>
                              </div>
                            </div>
                            <p className="text-gray-700">{reply.content}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg border">
                <MessageSquare className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-medium mb-2">No comments yet</h3>
                <p className="text-gray-500 mb-4">Be the first to share your thoughts!</p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PostDetail;
