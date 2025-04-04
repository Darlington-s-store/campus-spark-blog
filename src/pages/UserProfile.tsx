
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import PostCard from '@/components/blog/PostCard';
import { getUserById, getRecentPosts } from '@/data/mockData';
import { Post } from '@/types/blog';
import { BookOpen, Bookmark, Users, MessageSquare, Settings } from 'lucide-react';

const UserProfile = () => {
  const { userId } = useParams<{ userId: string }>();
  const user = getUserById(userId || '');
  
  // Since getPostsByAuthor doesn't exist, we'll use getRecentPosts as a fallback
  // In a real application, we would filter posts by author ID
  const userPosts = getRecentPosts(4);
  
  if (!user) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">User Not Found</h1>
            <p className="mb-6">The user profile you're looking for doesn't exist.</p>
            <Button asChild variant="default">
              <a href="/">Return to Home</a>
            </Button>
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
          {/* Profile Header */}
          <div className="mb-10">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <img 
                src={user.avatar} 
                alt={user.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
              />
              
              <div className="flex-grow">
                <h1 className="text-3xl font-bold mb-1">{user.name}</h1>
                <p className="text-gray-600 mb-3">
                  {user.role === 'educator' ? 'Professor' : 'Student'} 
                  {user.department && ` • ${user.department}`}
                </p>
                
                <p className="max-w-2xl mb-4">{user.bio || 'No bio available.'}</p>
                
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center text-gray-700">
                    <BookOpen className="w-4 h-4 mr-2" />
                    <span>12 Posts</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Bookmark className="w-4 h-4 mr-2" />
                    <span>23 Bookmarks</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Users className="w-4 h-4 mr-2" />
                    <span>48 Followers</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    <span>156 Comments</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button>Follow</Button>
                <Button variant="outline" size="icon">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Tabs */}
          <Tabs defaultValue="posts" className="mb-10">
            <TabsList className="border-b w-full rounded-none justify-start mb-6 bg-transparent">
              <TabsTrigger value="posts" className="text-base">Posts</TabsTrigger>
              <TabsTrigger value="bookmarks" className="text-base">Bookmarks</TabsTrigger>
              <TabsTrigger value="comments" className="text-base">Comments</TabsTrigger>
              <TabsTrigger value="about" className="text-base">About</TabsTrigger>
            </TabsList>
            
            <TabsContent value="posts">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {userPosts.map((post: Post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="bookmarks">
              <div className="bg-gray-50 rounded-lg p-10 text-center">
                <h3 className="text-xl font-medium mb-2">No Bookmarks Yet</h3>
                <p className="text-gray-500 mb-4">Bookmark posts to save them for later reading.</p>
                <Button>Explore Posts</Button>
              </div>
            </TabsContent>
            
            <TabsContent value="comments">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <a href="#" className="font-medium hover:text-campus-primary">On "The Future of AI in Education"</a>
                      <p className="text-xs text-gray-500">April 2, 2025</p>
                    </div>
                  </div>
                  <p>This is a great analysis of how AI is transforming the classroom experience. I've seen similar trends in my department.</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <a href="#" className="font-medium hover:text-campus-primary">On "Research Methods in Digital Humanities"</a>
                      <p className="text-xs text-gray-500">March 28, 2025</p>
                    </div>
                  </div>
                  <p>I would add that mixed methods approaches are becoming increasingly important in this field. Great post overall!</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="about">
              <div className="max-w-3xl">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Bio</h3>
                    <p className="text-gray-700">{user.bio || 'No bio available.'}</p>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">Academic Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Department</p>
                        <p className="font-medium">{user.department || 'Not specified'}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Role</p>
                        <p className="font-medium">{user.role === 'educator' ? 'Professor' : 'Student'}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Joined</p>
                        <p className="font-medium">January 2024</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Research Interests</p>
                        <p className="font-medium">Machine Learning, Digital Humanities</p>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">Contact</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-medium">user@university.edu</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Office</p>
                        <p className="font-medium">Building A, Room 204</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Office Hours</p>
                        <p className="font-medium">Tuesdays and Thursdays, 10-12pm</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default UserProfile;
