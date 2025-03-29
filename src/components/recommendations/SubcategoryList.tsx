import React from 'react';
import { Subcategory } from './data';

interface SubcategoryListProps {
  subcategories: Subcategory[];
  selectedSubcategory: string;
  onSubcategorySelect: (subcategoryId: string) => void;
}

export const SubcategoryList = ({ subcategories, selectedSubcategory, onSubcategorySelect }: SubcategoryListProps) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 mt-4">
      <h3 className="text-lg font-medium text-gray-900 mb-4">תתי קטגוריות</h3>
      <ul className="space-y-2">
        {subcategories.map((subcategory) => (
          <li key={subcategory.id}>
            <button
              onClick={() => onSubcategorySelect(subcategory.id)}
              className={`w-full text-right px-4 py-2 rounded-md text-sm font-medium ${
                selectedSubcategory === subcategory.id
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {subcategory.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}; 