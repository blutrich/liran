import React from 'react';

interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}

interface CategoryListProps {
  categories: Category[];
  selectedCategory: string;
  onCategorySelect: (categoryId: string) => void;
}

export const CategoryList: React.FC<CategoryListProps> = ({
  categories,
  selectedCategory,
  onCategorySelect,
}) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-4 bg-gray-50 border-b border-gray-200">
        <h2 className="font-medium text-gray-700">Categories</h2>
      </div>
      <nav className="mt-2">
        <ul>
          {categories.map((category) => (
            <li key={category.id}>
              <button
                onClick={() => onCategorySelect(category.id)}
                className={`flex items-center w-full px-4 py-2 text-left ${
                  selectedCategory === category.id
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span 
                  className="w-8 h-8 flex items-center justify-center rounded-full mr-3"
                  style={{ backgroundColor: `${category.color}20` }}
                >
                  <span style={{ color: category.color }}>{category.icon}</span>
                </span>
                <span className="text-sm font-medium">{category.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}; 