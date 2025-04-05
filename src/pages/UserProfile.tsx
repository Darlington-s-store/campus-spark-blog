
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getUserById, getAllPosts } from '@/data/mockData';
import { Post } from '@/types/blog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import PostCard from '@/components/blog/PostCard';

const UserProfile = () => {
  const { userId } = useParams<{ userId: string }>();
  const [user, setUser] = useState(null);
  const [userPosts, setUserPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('published');
  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (!userId) return;
        
        const userData = getUserById(userId);
        if (userData) {
          setUser(userData);
          
          // Fetch all posts to filter by author and status
          const allPosts = await getAllPosts();
          setUserPosts(allPosts.filter(post => post.author.id === userId));
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchUserData();
  }, [userId]);
  
  if (loading) {
    return <div className="container mx-auto py-8">Loading user profile...</div>;
  }
  
  if (!user) {
    return <div className="container mx-auto py-8">User not found</div>;
  }
  
  // Filter posts by status
  const publishedPosts = userPosts.filter(post => post.status === 'published');
  const pendingPosts = userPosts.filter(post => post.status === 'pending');
  const draftPosts = userPosts.filter(post => post.status === 'draft');
  const rejectedPosts = userPosts.filter(post => post.status === 'rejected');
  
  // Format date helper function
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };
  
  return (
    <div className="container mx-auto py-8">
      {/* User profile header */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
        <img 
          src={user.avatar} 
          alt={user.name} 
          className="rounded-full w-32 h-32 object-cover" 
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{user.name}</h1>
          <div className="flex flex-wrap gap-2 my-2">
            <Badge variant="outline" className="capitalize">{user.role}</Badge>
            {user.department && (
              <Badge variant="secondary" className="capitalize">{user.department}</Badge>
            )}
          </div>
          <p className="text-muted-foreground mt-2">{user.bio || "No bio available"}</p>
        </div>
      </div>
      
      {/* User's posts section */}
      <div className="mt-8">
        <Tabs defaultValue="published" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="published">
              Published 
              <Badge className="ml-2 bg-green-500">{publishedPosts.length}</Badge>
            </TabsTrigger>
            <TabsTrigger value="pending">
              Pending 
              <Badge className="ml-2 bg-yellow-500">{pendingPosts.length}</Badge>
            </TabsTrigger>
            <TabsTrigger value="draft">
              Drafts 
              <Badge className="ml-2 bg-gray-500">{draftPosts.length}</Badge>
            </TabsTrigger>
            <TabsTrigger value="rejected">
              Rejected 
              <Badge className="ml-2 bg-red-500">{rejectedPosts.length}</Badge>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="published">
            {publishedPosts.length === 0 ? (
              <Card>
                <CardContent className="pt-6">
                  <p className="text-center text-muted-foreground">No published posts yet</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {publishedPosts.map(post => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="pending">
            {pendingPosts.length === 0 ? (
              <Card>
                <CardContent className="pt-6">
                  <p className="text-center text-muted-foreground">No pending posts</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pendingPosts.map(post => (
                  <Card key={post.id}>
                    <CardHeader>
                      <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                      <CardDescription>
                        Submitted on {formatDate(post.publishedAt)}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="line-clamp-3 text-muted-foreground">{post.excerpt}</p>
                    </CardContent>
                    <CardFooter>
                      <div className="flex justify-between w-full items-center">
                        <Badge className="bg-yellow-500">Pending Review</Badge>
                        <Link 
                          to={`/post/${post.slug}`} 
                          className="text-sm font-medium text-primary hover:underline"
                        >
                          Preview
                        </Link>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="draft">
            {draftPosts.length === 0 ? (
              <Card>
                <CardContent className="pt-6">
                  <p className="text-center text-muted-foreground">No draft posts</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {draftPosts.map(post => (
                  <Card key={post.id}>
                    <CardHeader>
                      <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                      <CardDescription>
                        Last updated on {formatDate(post.updatedAt || post.publishedAt)}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="line-clamp-3 text-muted-foreground">{post.excerpt}</p>
                    </CardContent>
                    <CardFooter>
                      <div className="flex justify-between w-full items-center">
                        <Badge className="bg-gray-500">Draft</Badge>
                        <Link 
                          to={`/post/${post.slug}`} 
                          className="text-sm font-medium text-primary hover:underline"
                        >
                          Edit
                        </Link>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="rejected">
            {rejectedPosts.length === 0 ? (
              <Card>
                <CardContent className="pt-6">
                  <p className="text-center text-muted-foreground">No rejected posts</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rejectedPosts.map(post => (
                  <Card key={post.id}>
                    <CardHeader>
                      <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                      <CardDescription>
                        Submitted on {new Date(post.publishedAt).toLocaleDateString()}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="line-clamp-3 text-muted-foreground">{post.excerpt}</p>
                    </CardContent>
                    <CardFooter>
                      <div className="flex justify-between w-full items-center">
                        <Badge className="bg-red-500">Rejected</Badge>
                        <Link 
                          to={`/post/${post.slug}`} 
                          className="text-sm font-medium text-primary hover:underline"
                        >
                          View
                        </Link>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default UserProfile;
