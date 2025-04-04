
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
  description?: string;
}

export interface Comment {
  id: string;
  author: Author;
  content: string;
  publishedAt: string;
  replies?: Comment[];
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  author: Author;
  category: Category;
  tags: string[];
  publishedAt: string;
  updatedAt?: string;
  featured?: boolean;
  readTime: number;
  likes: number;
  comments: Comment[];
}
