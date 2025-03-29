import React from 'react';

interface Subcategory {
  id: string;
  name: string;
}

interface SubcategoryListProps {
  subcategories: Subcategory[];
  selectedSubcategory: string;
  onSubcategorySelect: (subcategoryId: string) => void;
}

export const SubcategoryList: React.FC<SubcategoryListProps> = ({
  subcategories,
  selectedSubcategory,
  onSubcategorySelect,
}) => {
  return (
    <div className="mt-4 bg-white rounded-lg shadow overflow-hidden">
      <div className="p-4 bg-gray-50 border-b border-gray-200">
        <h2 className="font-medium text-gray-700">Subcategories</h2>
      </div>
      <nav className="mt-2">
        <ul>
          {subcategories.map((subcategory) => (
            <li key={subcategory.id}>
              <button
                onClick={() => onSubcategorySelect(subcategory.id)}
                className={`flex items-center w-full px-4 py-2 text-left ${
                  selectedSubcategory === subcategory.id
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span className="text-sm font-medium">{subcategory.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}; 