import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/context/AuthContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { categories } from '@/data/mockData';
import { Image, X, Clock, Tag } from 'lucide-react';

const WritePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState('');
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [readTime, setReadTime] = useState(5);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const navigate = useNavigate();
  const { toast } = useToast();
  const { requireAuth, isAuthenticated } = useAuth();
  
  useEffect(() => {
    if (!requireAuth()) {
      navigate('/login', { state: { from: '/write' } });
    }
  }, [isAuthenticated, navigate, requireAuth]);
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setCoverImage(file);
      
      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const removeImage = () => {
    setCoverImage(null);
    setPreviewUrl(null);
  };
  
  const addTag = () => {
    if (currentTag.trim() && !tags.includes(currentTag.trim())) {
      setTags([...tags, currentTag.trim()]);
      setCurrentTag('');
    }
  };
  
  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && currentTag.trim()) {
      e.preventDefault();
      addTag();
    }
  };
  
  const calculateReadTime = (text: string) => {
    // Average reading speed: 200-250 words per minute
    const wordCount = text.trim().split(/\s+/).length;
    const readTimeMinutes = Math.max(1, Math.ceil(wordCount / 225));
    return readTimeMinutes;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !content || !category) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Update read time based on content length
    const calculatedReadTime = calculateReadTime(content);
    setReadTime(calculatedReadTime);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Post submitted",
        description: "Your post has been submitted successfully",
      });
      navigate('/');
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8 bg-gray-50">
        <div className="campus-container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Create New Post</h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Post Details</CardTitle>
                  <CardDescription>
                    Fill in the details for your new post
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="title" className="text-base">Title*</Label>
                    <Input 
                      id="title"
                      placeholder="Enter a descriptive title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="text-lg"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="excerpt" className="text-base">Excerpt*</Label>
                    <Textarea 
                      id="excerpt"
                      placeholder="Write a brief summary of your post (50-150 characters)"
                      value={excerpt}
                      onChange={(e) => setExcerpt(e.target.value)}
                      className="resize-none"
                      rows={2}
                    />
                    <p className="text-xs text-gray-500">
                      {excerpt.length}/150 characters
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="content" className="text-base">Content*</Label>
                    <Textarea 
                      id="content"
                      placeholder="Write your post content here..."
                      value={content}
                      onChange={(e) => {
                        setContent(e.target.value);
                        const calculatedReadTime = calculateReadTime(e.target.value);
                        setReadTime(calculatedReadTime);
                      }}
                      className="min-h-[300px]"
                    />
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>Estimated read time: {readTime} min</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="category" className="text-base">Category*</Label>
                    <Select value={category} onValueChange={setCategory}>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category.id} value={category.slug}>
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-base">Tags</Label>
                    <div className="flex items-center">
                      <Input 
                        placeholder="Add a tag and press Enter"
                        value={currentTag}
                        onChange={(e) => setCurrentTag(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="flex-grow"
                      />
                      <Button 
                        type="button"
                        onClick={addTag}
                        className="ml-2"
                        variant="outline"
                      >
                        Add
                      </Button>
                    </div>
                    {tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {tags.map((tag) => (
                          <div
                            key={tag}
                            className="flex items-center bg-gray-100 text-gray-800 px-3 py-1 rounded-full"
                          >
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                            <button
                              type="button"
                              onClick={() => removeTag(tag)}
                              className="ml-2 text-gray-500 hover:text-gray-700"
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-base">Cover Image</Label>
                    {!previewUrl ? (
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Image className="h-12 w-12 mx-auto text-gray-400 mb-2" />
                        <p className="text-sm text-gray-500 mb-2">
                          Drop your image here, or click to browse
                        </p>
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="hidden"
                          id="cover-image"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => document.getElementById('cover-image')?.click()}
                        >
                          Upload Image
                        </Button>
                      </div>
                    ) : (
                      <div className="relative">
                        <img
                          src={previewUrl}
                          alt="Cover preview"
                          className="rounded-lg object-cover w-full h-[200px]"
                        />
                        <Button
                          type="button"
                          variant="destructive"
                          size="sm"
                          className="absolute top-2 right-2"
                          onClick={removeImage}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
                
                <CardFooter className="flex justify-between">
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => navigate(-1)}
                  >
                    Cancel
                  </Button>
                  <div className="flex space-x-2">
                    <Button 
                      type="button" 
                      variant="outline"
                      onClick={() => {
                        toast({
                          title: "Draft saved",
                          description: "Your post has been saved as a draft",
                        });
                      }}
                    >
                      Save as Draft
                    </Button>
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Publishing..." : "Publish Post"}
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </form>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default WritePost;
