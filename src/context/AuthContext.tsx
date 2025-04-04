
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Author } from '@/types/blog';
import { useToast } from '@/hooks/use-toast';

interface AuthContextType {
  user: Author | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (userData: RegisterData) => Promise<boolean>;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  role: 'student' | 'educator';
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
    
    // In a real app, this would be an API call
    // For demo purposes, we'll simulate a successful login
    // if the email contains "@" and password is not empty
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email.includes('@') && password) {
          // Create a mock user
          const newUser: Author = {
            id: 'user-1',
            name: email.split('@')[0].replace(/[.]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
            avatar: '/placeholder.svg',
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
          avatar: '/placeholder.svg',
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
  
  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
