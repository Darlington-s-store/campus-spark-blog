
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Author } from '@/types/blog';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
  user: Author | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (userData: RegisterData) => Promise<boolean>;
  requireAuth: (redirectUrl?: string) => boolean;
  isAdmin: () => boolean;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  role: 'student' | 'educator' | 'admin';
  department?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<Author | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  // Check if user is already logged in
  useEffect(() => {
    const savedUser = localStorage.getItem('campusspark_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Failed to parse saved user:', error);
        localStorage.removeItem('campusspark_user');
      }
    }
    setIsLoading(false);
  }, []);
  
  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Special case for admin login
    if (email === 'admin@campusspark.com' && password === 'admin123') {
      const adminUser: Author = {
        id: 'admin-1',
        name: 'Admin User',
        avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
        role: 'admin',
        department: 'Administration',
        bio: 'Campus administrator responsible for content management.'
      };
      
      setUser(adminUser);
      localStorage.setItem('campusspark_user', JSON.stringify(adminUser));
      
      toast({
        title: 'Admin Login Successful',
        description: 'Welcome back, Administrator!',
      });
      
      setIsLoading(false);
      return true;
    }
    
    // Regular user login
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email.includes('@') && password) {
          // Create a mock user
          const newUser: Author = {
            id: 'user-1',
            name: email.split('@')[0].replace(/[.]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
            role: 'student',
            department: 'Computer Science',
            bio: 'A student passionate about technology and knowledge sharing.'
          };
          
          setUser(newUser);
          localStorage.setItem('campusspark_user', JSON.stringify(newUser));
          
          toast({
            title: 'Login successful',
            description: `Welcome back, ${newUser.name}!`,
          });
          
          setIsLoading(false);
          resolve(true);
        } else {
          toast({
            title: 'Login failed',
            description: 'Invalid email or password.',
            variant: 'destructive',
          });
          
          setIsLoading(false);
          resolve(false);
        }
      }, 1000);
    });
  };
  
  const logout = () => {
    setUser(null);
    localStorage.removeItem('campusspark_user');
    toast({
      title: 'Logged out',
      description: 'You have been successfully logged out.',
    });
    navigate('/');
  };
  
  const register = async (userData: RegisterData): Promise<boolean> => {
    setIsLoading(true);
    
    // In a real app, this would be an API call
    // For demo purposes, we'll simulate a successful registration
    return new Promise((resolve) => {
      setTimeout(() => {
        // Create a new user
        const newUser: Author = {
          id: `user-${Date.now()}`,
          name: userData.name,
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
          role: userData.role,
          department: userData.department,
          bio: ''
        };
        
        setUser(newUser);
        localStorage.setItem('campusspark_user', JSON.stringify(newUser));
        
        toast({
          title: 'Registration successful',
          description: `Welcome to CampusSpark, ${newUser.name}!`,
        });
        
        setIsLoading(false);
        resolve(true);
      }, 1500);
    });
  };
  
  // New method to check if user is authenticated and redirect if not
  const requireAuth = (redirectUrl: string = '/login'): boolean => {
    if (!user && !isLoading) {
      toast({
        title: 'Authentication required',
        description: 'Please sign in to access this feature.',
        variant: 'destructive',
      });
      
      navigate(redirectUrl);
      return false;
    }
    
    return true;
  };
  
  // Method to check if user is an admin
  const isAdmin = (): boolean => {
    return user?.role === 'admin';
  };
  
  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
        register,
        requireAuth,
        isAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
