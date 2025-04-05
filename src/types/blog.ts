
export interface Author {
  id: string;
  name: string;
  avatar: string;
  role: 'student' | 'educator' | 'admin';
  department?: string;
  bio?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
}

export interface Comment {
  id: string;
  author: Author;
  content: string;
  createdAt: string;
  replies?: Comment[]; // Adding this back to fix errors in PostDetail.tsx
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string | null;
  author: Author;
  category: Category;
  tags: string[];
  publishedAt: string;
  updatedAt?: string; // Adding this back to fix errors
  featured?: boolean; // Adding this back to fix errors in getFeaturedPosts
  comments: Comment[];
  likes: number;
  views: number;
  readTime: number;
  status: 'draft' | 'pending' | 'published' | 'rejected';
}
