
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Author, Post } from '@/types/blog';
import PostCard from '@/components/blog/PostCard';
import { getPostsByAuthor } from '@/data/mockData';
import { BookOpen, GraduationCap, Mail, MapPin, User } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

// Sample author data (would come from an API in a real application)
const getUserData = (userId: string): Author => {
  return {
    id: userId,
    name: 'Dr. Jane Smith',
    avatar: 'https://randomuser.me/api/portraits/women/62.jpg',
    role: 'educator',
    department: 'Department of Computer Science',
    bio: 'Professor of Computer Science with a focus on artificial intelligence and machine learning. Published author with over 15 years of teaching experience.',
  };
};

const UserProfile = () => {
  const { userId } = useParams<{ userId: string }>();
  const [author, setAuthor] = useState<Author | null>(null);
  const [authorPosts, setAuthorPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 800));
        
        if (!userId) throw new Error("User ID is required");
        
        // Get author data
        const authorData = getUserData(userId);
        setAuthor(authorData);
        
        // Get author posts
        const posts = getPostsByAuthor(userId);
        setAuthorPosts(posts);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow py-8">
          <div className="campus-container">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <Skeleton className="h-64 w-full rounded-lg" />
              </div>
              <div className="md:w-2/3">
                <Skeleton className="h-10 w-1/2 mb-4" />
                <Skeleton className="h-6 w-full mb-2" />
                <Skeleton className="h-6 w-full mb-2" />
                <Skeleton className="h-6 w-3/4" />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!author) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <User className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-4">User Not Found</h1>
            <p className="text-gray-600 mb-6">The user you're looking for doesn't exist or has been removed.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="campus-container">
          {/* Profile header */}
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="md:w-1/3">
              <div className="bg-white rounded-lg border shadow-sm p-6 sticky top-6">
                <div className="flex flex-col items-center text-center mb-6">
                  <img 
                    src={author.avatar} 
                    alt={author.name}
                    className="w-32 h-32 rounded-full border-4 border-campus-light-blue mb-4"
                  />
                  <h1 className="text-2xl font-bold">{author.name}</h1>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <GraduationCap className="w-4 h-4 mr-1" />
                    <span>{author.role === 'educator' ? 'Professor' : 'Student'}</span>
                  </div>
                  
                  {author.department && (
                    <div className="flex items-center text-sm text-gray-500 mt-2">
                      <BookOpen className="w-4 h-4 mr-1" />
                      <span>{author.department}</span>
                    </div>
                  )}
                </div>
                
                <div className="border-t pt-6 space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-gray-500 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-gray-600 text-sm">University of Technology, Main Campus</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-gray-500 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Contact</h3>
                      <p className="text-gray-600 text-sm">jane.smith@university.edu</p>
                    </div>
                  </div>
                  
                  <button className="w-full mt-6 py-2 border border-campus-primary text-campus-primary rounded-md hover:bg-campus-primary hover:text-white transition-colors">
                    Contact
                  </button>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <div className="bg-white rounded-lg border shadow-sm p-6 mb-8">
                <h2 className="text-xl font-bold mb-4">About</h2>
                <p className="text-gray-700">{author.bio || 'No bio available.'}</p>
              </div>
              
              <Tabs defaultValue="posts">
                <TabsList className="mb-6">
                  <TabsTrigger value="posts">Posts</TabsTrigger>
                  <TabsTrigger value="comments">Comments</TabsTrigger>
                  <TabsTrigger value="activity">Recent Activity</TabsTrigger>
                </TabsList>
                
                <TabsContent value="posts">
                  <h2 className="text-xl font-bold mb-4">
                    Published Posts ({authorPosts.length})
                  </h2>
                  
                  {authorPosts.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6">
                      {authorPosts.map((post) => (
                        <PostCard key={post.id} post={post} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 bg-gray-50 rounded-lg border">
                      <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-lg font-medium mb-2">No posts yet</h3>
                      <p className="text-gray-600">This user hasn't published any posts yet.</p>
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="comments">
                  <div className="text-center py-12 bg-gray-50 rounded-lg border">
                    <h3 className="text-lg font-medium mb-2">Comments coming soon</h3>
                    <p className="text-gray-600">We're working on this feature.</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="activity">
                  <div className="text-center py-12 bg-gray-50 rounded-lg border">
                    <h3 className="text-lg font-medium mb-2">Activity feed coming soon</h3>
                    <p className="text-gray-600">We're working on this feature.</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default UserProfile;
