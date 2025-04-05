
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Post } from '@/types/blog';
import { getAllPosts, updatePostStatus } from '@/data/mockData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, X, Eye, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const Admin = () => {
  const { user, requireAuth } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  useEffect(() => {
    if (!requireAuth('/login')) {
      return;
    }

    if (user?.role !== 'admin') {
      toast({
        title: 'Access Denied',
        description: 'Only administrators can access this page.',
        variant: 'destructive',
      });
      navigate('/');
      return;
    }

    const fetchPosts = async () => {
      const allPosts = await getAllPosts();
      setPosts(allPosts);
    };

    fetchPosts();
  }, [user, navigate, requireAuth, toast]);

  const handleApprovePost = async (post: Post) => {
    try {
      const updatedPost = await updatePostStatus(post.id, 'published');
      toast({
        title: 'Post Approved',
        description: `"${post.title}" has been published successfully.`,
      });
      
      setPosts(posts.map(p => p.id === post.id ? updatedPost : p));
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to approve post.',
        variant: 'destructive',
      });
    }
  };

  const handleRejectPost = async (post: Post) => {
    try {
      const updatedPost = await updatePostStatus(post.id, 'rejected');
      toast({
        title: 'Post Rejected',
        description: `"${post.title}" has been rejected.`,
      });
      
      setPosts(posts.map(p => p.id === post.id ? updatedPost : p));
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to reject post.',
        variant: 'destructive',
      });
    }
  };

  const handleDeletePost = async (post: Post) => {
    try {
      // In a real app, this would call an API to delete the post
      setPosts(posts.filter(p => p.id !== post.id));
      toast({
        title: 'Post Deleted',
        description: `"${post.title}" has been deleted.`,
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to delete post.',
        variant: 'destructive',
      });
    }
  };

  const filteredPosts = (status: Post['status']) => {
    return posts.filter(post => post.status === status);
  };

  const openPreview = (post: Post) => {
    setSelectedPost(post);
    setIsPreviewOpen(true);
  };

  const getBadgeColor = (status: Post['status']) => {
    switch (status) {
      case 'draft': return 'bg-gray-500';
      case 'pending': return 'bg-yellow-500';
      case 'published': return 'bg-green-500';
      case 'rejected': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      <Tabs defaultValue="pending" className="w-full">
        <TabsList className="grid grid-cols-4 mb-6">
          <TabsTrigger value="pending">
            Pending Approval 
            <Badge className="ml-2 bg-yellow-500">{filteredPosts('pending').length}</Badge>
          </TabsTrigger>
          <TabsTrigger value="published">
            Published 
            <Badge className="ml-2 bg-green-500">{filteredPosts('published').length}</Badge>
          </TabsTrigger>
          <TabsTrigger value="rejected">
            Rejected 
            <Badge className="ml-2 bg-red-500">{filteredPosts('rejected').length}</Badge>
          </TabsTrigger>
          <TabsTrigger value="draft">
            Drafts 
            <Badge className="ml-2 bg-gray-500">{filteredPosts('draft').length}</Badge>
          </TabsTrigger>
        </TabsList>
        
        {(['pending', 'published', 'rejected', 'draft'] as const).map(status => (
          <TabsContent key={status} value={status} className="space-y-4">
            {filteredPosts(status).length === 0 ? (
              <Card>
                <CardContent className="pt-6">
                  <p className="text-center text-muted-foreground">No posts with this status</p>
                </CardContent>
              </Card>
            ) : (
              filteredPosts(status).map(post => (
                <Card key={post.id} className="overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{post.title}</CardTitle>
                        <CardDescription>
                          By {post.author.name} in {post.category.name} · {new Date(post.publishedAt).toLocaleDateString()}
                        </CardDescription>
                      </div>
                      <Badge className={getBadgeColor(post.status)}>
                        {post.status.charAt(0).toUpperCase() + post.status.slice(1)}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="line-clamp-2 text-muted-foreground">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex justify-between w-full">
                      <Button variant="outline" size="sm" onClick={() => openPreview(post)}>
                        <Eye className="mr-2 h-4 w-4" />
                        Preview
                      </Button>
                      <div className="space-x-2">
                        {post.status === 'pending' && (
                          <>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="border-red-500 hover:bg-red-500 hover:text-white"
                              onClick={() => handleRejectPost(post)}
                            >
                              <X className="mr-2 h-4 w-4" />
                              Reject
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="border-green-500 hover:bg-green-500 hover:text-white"
                              onClick={() => handleApprovePost(post)}
                            >
                              <Check className="mr-2 h-4 w-4" />
                              Approve
                            </Button>
                          </>
                        )}
                        {post.status === 'rejected' && (
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="border-green-500 hover:bg-green-500 hover:text-white"
                            onClick={() => handleApprovePost(post)}
                          >
                            <Check className="mr-2 h-4 w-4" />
                            Approve
                          </Button>
                        )}
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="border-red-500 hover:bg-red-500 hover:text-white"
                          onClick={() => handleDeletePost(post)}
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              ))
            )}
          </TabsContent>
        ))}
      </Tabs>

      {selectedPost && (
        <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
          <DialogContent className="sm:max-w-4xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedPost.title}</DialogTitle>
              <DialogDescription>
                By {selectedPost.author.name} in {selectedPost.category.name} · {new Date(selectedPost.publishedAt).toLocaleDateString()}
              </DialogDescription>
            </DialogHeader>
            
            {selectedPost.coverImage && (
              <div className="my-4 rounded-md overflow-hidden">
                <img 
                  src={selectedPost.coverImage} 
                  alt={selectedPost.title} 
                  className="w-full h-auto object-cover"
                />
              </div>
            )}
            
            <div dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
            
            <DialogFooter className="flex justify-end gap-2 mt-6">
              {selectedPost.status === 'pending' && (
                <>
                  <Button 
                    variant="outline" 
                    className="border-red-500 hover:bg-red-500 hover:text-white"
                    onClick={() => {
                      handleRejectPost(selectedPost);
                      setIsPreviewOpen(false);
                    }}
                  >
                    <X className="mr-2 h-4 w-4" />
                    Reject
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-green-500 hover:bg-green-500 hover:text-white"
                    onClick={() => {
                      handleApprovePost(selectedPost);
                      setIsPreviewOpen(false);
                    }}
                  >
                    <Check className="mr-2 h-4 w-4" />
                    Approve
                  </Button>
                </>
              )}
              <Button onClick={() => setIsPreviewOpen(false)}>Close</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Admin;
