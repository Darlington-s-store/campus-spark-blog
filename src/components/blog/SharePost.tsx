
import React, { useState } from 'react';
import { Share2, Copy, Twitter, Facebook, Linkedin, Mail } from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface SharePostProps {
  postTitle: string;
  postSlug: string;
}

const SharePost: React.FC<SharePostProps> = ({ postTitle, postSlug }) => {
  const { toast } = useToast();
  const postUrl = `${window.location.origin}/post/${postSlug}`;
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(postUrl);
    toast({
      title: "Link copied",
      description: "Article link has been copied to clipboard",
    });
  };
  
  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(postTitle)}&url=${encodeURIComponent(postUrl)}`, '_blank');
  };
  
  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`, '_blank');
  };
  
  const shareOnLinkedin = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`, '_blank');
  };
  
  const shareByEmail = () => {
    window.location.href = `mailto:?subject=${encodeURIComponent(postTitle)}&body=${encodeURIComponent(`Check out this article: ${postUrl}`)}`;
  };
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
          <Share2 className="h-4 w-4" />
          <span>Share</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={copyToClipboard} className="cursor-pointer">
          <Copy className="h-4 w-4 mr-2" />
          <span>Copy link</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={shareOnTwitter} className="cursor-pointer">
          <Twitter className="h-4 w-4 mr-2" />
          <span>Twitter</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={shareOnFacebook} className="cursor-pointer">
          <Facebook className="h-4 w-4 mr-2" />
          <span>Facebook</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={shareOnLinkedin} className="cursor-pointer">
          <Linkedin className="h-4 w-4 mr-2" />
          <span>LinkedIn</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={shareByEmail} className="cursor-pointer">
          <Mail className="h-4 w-4 mr-2" />
          <span>Email</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SharePost;
