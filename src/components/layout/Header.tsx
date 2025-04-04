
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Search, BookOpen, User, PenTool } from 'lucide-react';

const Header = () => {
  return (
    <header className="border-b bg-white shadow-sm">
      <div className="campus-container py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-campus-primary" />
              <span className="text-2xl font-bold text-campus-dark-blue">CampusSpark</span>
            </Link>
            
            <NavigationMenu>
              <NavigationMenuList>
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
                  <Link to="/featured" className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-campus-primary">
                    Featured
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
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search posts..."
                className="w-64 rounded-full border-2 border-gray-200 py-2 pl-10 pr-4 text-sm focus:border-campus-primary focus:outline-none"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
            
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Sign In</span>
            </Button>
            
            <Button size="sm" className="flex items-center gap-2 bg-campus-primary hover:bg-campus-dark-blue">
              <PenTool className="h-4 w-4" />
              <span>Write</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
