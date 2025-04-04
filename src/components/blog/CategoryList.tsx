
import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '@/types/blog';
import { PenSquare, Beaker, BookOpen, Cpu, BarChartHorizontal } from 'lucide-react';

interface CategoryListProps {
  categories: Category[];
}

const getCategoryIcon = (slug: string) => {
  switch (slug) {
    case 'arts':
      return <PenSquare className="w-5 h-5" />;
    case 'science':
      return <Beaker className="w-5 h-5" />;
    case 'humanities':
      return <BookOpen className="w-5 h-5" />;
    case 'technology':
      return <Cpu className="w-5 h-5" />;
    case 'business':
      return <BarChartHorizontal className="w-5 h-5" />;
    default:
      return <BookOpen className="w-5 h-5" />;
  }
};

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {categories.map((category) => (
        <Link 
          key={category.id}
          to={`/category/${category.slug}`}
          className={`flex flex-col items-center justify-center p-6 bg-white rounded-lg border shadow-sm hover:shadow-md transition-all hover:border-category-${category.slug} text-center`}
        >
          <div className={`w-12 h-12 mb-3 rounded-full flex items-center justify-center text-white bg-category-${category.slug}`}>
            {getCategoryIcon(category.slug)}
          </div>
          <h3 className="font-medium mb-1">{category.name}</h3>
          <p className="text-sm text-gray-500 line-clamp-2">{category.description}</p>
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;
