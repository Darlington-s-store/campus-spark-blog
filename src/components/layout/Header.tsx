
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '@/context/AuthContext';
import { 
  Search, 
  BookOpen, 
  User, 
  PenTool, 
  LogOut, 
  Settings,
  Bookmark,
  Menu,
  X,
  Home,
  FileText,
  Mail
} from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, navigate to search results page
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleWritePost = () => {
    if (isAuthenticated) {
      navigate('/write');
    } else {
      navigate('/login', { state: { from: '/write' } });
    }
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(prev => !prev);
  };

  return (
    <header className="border-b bg-white shadow-sm">
      <div className="campus-container py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Desktop Navigation */}
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-campus-primary" />
              <span className="text-2xl font-bold text-campus-dark-blue">CampusSpark</span>
            </Link>
            
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-campus-primary">
                    <div className="flex items-center gap-1">
                      <Home className="h-4 w-4" />
                      <span>Home</span>
                    </div>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/blog" className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-campus-primary">
                    <div className="flex items-center gap-1">
                      <FileText className="h-4 w-4" />
                      <span>Blog</span>
                    </div>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[400px] grid-cols-2">
                      <Link to="/category/arts" className="block p-3 space-y-1 rounded-md hover:bg-campus-light-blue">
                        <div className="text-sm font-medium text-category-arts">Arts & Design</div>
                        <div className="text-xs text-gray-500">Creative expression and aesthetic studies</div>
                      </Link>
                      <Link to="/category/science" className="block p-3 space-y-1 rounded-md hover:bg-campus-light-blue">
                        <div className="text-sm font-medium text-category-science">Science</div>
                        <div className="text-xs text-gray-500">Research, experiments, and discoveries</div>
                      </Link>
                      <Link to="/category/humanities" className="block p-3 space-y-1 rounded-md hover:bg-campus-light-blue">
                        <div className="text-sm font-medium text-category-humanities">Humanities</div>
                        <div className="text-xs text-gray-500">History, philosophy, and literature</div>
                      </Link>
                      <Link to="/category/technology" className="block p-3 space-y-1 rounded-md hover:bg-campus-light-blue">
                        <div className="text-sm font-medium text-category-technology">Technology</div>
                        <div className="text-xs text-gray-500">Computing, engineering, and innovation</div>
                      </Link>
                      <Link to="/category/business" className="block p-3 space-y-1 rounded-md hover:bg-campus-light-blue">
                        <div className="text-sm font-medium text-category-business">Business</div>
                        <div className="text-xs text-gray-500">Economics, management, and entrepreneurship</div>
                      </Link>
                      <Link to="/categories" className="block p-3 space-y-1 rounded-md hover:bg-campus-light-blue">
                        <div className="text-sm font-medium">View All Categories</div>
                        <div className="text-xs text-gray-500">Browse all academic fields</div>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/contact" className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-campus-primary">
                    <div className="flex items-center gap-1">
                      <Mail className="h-4 w-4" />
                      <span>Contact</span>
                    </div>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/about" className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-campus-primary">
                    About
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-gray-700 hover:text-campus-primary">
              {showMobileMenu ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
          
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 rounded-full border-2 border-gray-200 py-2 pl-10 pr-4 text-sm focus:border-campus-primary focus:outline-none"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </form>
            
            {isAuthenticated && user ? (
              <div className="flex items-center space-x-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Avatar className="h-8 w-8 cursor-pointer border-2 border-campus-light-blue">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>
                      <div className="flex flex-col space-y-1">
                        <span>{user.name}</span>
                        <span className="text-xs text-gray-500">{user.role === 'educator' ? 'Educator' : 'Student'}</span>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to={`/user/${user.id}`} className="cursor-pointer flex items-center">
                        <User className="mr-2 h-4 w-4" />
                        <span>Your Profile</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/bookmarks" className="cursor-pointer flex items-center">
                        <Bookmark className="mr-2 h-4 w-4" />
                        <span>Bookmarks</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/settings" className="cursor-pointer flex items-center">
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Account Settings</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={logout} className="cursor-pointer text-red-500 focus:text-red-500">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Logout</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                
                <Button 
                  onClick={handleWritePost}
                  size="sm" 
                  className="flex items-center gap-2 bg-campus-primary hover:bg-campus-dark-blue"
                >
                  <PenTool className="h-4 w-4" />
                  <span>Write</span>
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>Sign In</span>
                  </Button>
                </Link>
                
                <Button 
                  onClick={handleWritePost}
                  size="sm" 
                  className="flex items-center gap-2 bg-campus-primary hover:bg-campus-dark-blue"
                >
                  <PenTool className="h-4 w-4" />
                  <span>Write</span>
                </Button>
              </div>
            )}
          </div>
        </div>
        
        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="md:hidden mt-4 border-t pt-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="flex items-center text-gray-700 hover:text-campus-primary">
                <Home className="h-4 w-4 mr-2" />
                Home
              </Link>
              <Link to="/blog" className="flex items-center text-gray-700 hover:text-campus-primary">
                <FileText className="h-4 w-4 mr-2" />
                Blog
              </Link>
              <Link to="/contact" className="flex items-center text-gray-700 hover:text-campus-primary">
                <Mail className="h-4 w-4 mr-2" />
                Contact
              </Link>
              <Link to="/category/arts" className="flex items-center text-gray-700 hover:text-campus-primary">
                <span className="w-2 h-2 rounded-full bg-category-arts mr-2"></span>
                Arts & Design
              </Link>
              <Link to="/category/science" className="flex items-center text-gray-700 hover:text-campus-primary">
                <span className="w-2 h-2 rounded-full bg-category-science mr-2"></span>
                Science
              </Link>
              <Link to="/category/humanities" className="flex items-center text-gray-700 hover:text-campus-primary">
                <span className="w-2 h-2 rounded-full bg-category-humanities mr-2"></span>
                Humanities
              </Link>
              <Link to="/category/technology" className="flex items-center text-gray-700 hover:text-campus-primary">
                <span className="w-2 h-2 rounded-full bg-category-technology mr-2"></span>
                Technology
              </Link>
              <Link to="/category/business" className="flex items-center text-gray-700 hover:text-campus-primary">
                <span className="w-2 h-2 rounded-full bg-category-business mr-2"></span>
                Business
              </Link>
              <div className="border-t pt-4">
                <Link to="/about" className="block py-2 text-gray-700 hover:text-campus-primary">
                  About
                </Link>
              </div>
              
              <form onSubmit={handleSearch} className="relative mt-2">
                <input
                  type="text"
                  placeholder="Search posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-full border-2 border-gray-200 py-2 pl-10 pr-4 text-sm focus:border-campus-primary focus:outline-none"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </form>
              
              <div className="pt-2 flex flex-col space-y-2">
                {isAuthenticated && user ? (
                  <>
                    <div className="flex items-center space-x-2 py-2">
                      <Avatar className="h-8 w-8 border-2 border-campus-light-blue">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-xs text-gray-500">{user.role === 'educator' ? 'Educator' : 'Student'}</div>
                      </div>
                    </div>
                    <Link to={`/user/${user.id}`} className="block py-2 text-gray-700 hover:text-campus-primary">
                      Your Profile
                    </Link>
                    <Link to="/bookmarks" className="block py-2 text-gray-700 hover:text-campus-primary">
                      Bookmarks
                    </Link>
                    <Link to="/settings" className="block py-2 text-gray-700 hover:text-campus-primary">
                      Account Settings
                    </Link>
                    <button 
                      onClick={logout}
                      className="block py-2 text-red-500 hover:text-red-700"
                    >
                      Logout
                    </button>
                    <Button 
                      onClick={handleWritePost}
                      className="w-full mt-2 flex items-center justify-center gap-2 bg-campus-primary hover:bg-campus-dark-blue"
                    >
                      <PenTool className="h-4 w-4" />
                      <span>Write Post</span>
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/login">
                      <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                        <User className="h-4 w-4" />
                        <span>Sign In</span>
                      </Button>
                    </Link>
                    
                    <Button 
                      onClick={handleWritePost}
                      className="w-full flex items-center justify-center gap-2 bg-campus-primary hover:bg-campus-dark-blue"
                    >
                      <PenTool className="h-4 w-4" />
                      <span>Write Post</span>
                    </Button>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
