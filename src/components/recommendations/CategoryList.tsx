import { Category } from "./data";

interface CategoryListProps {
  categories: Category[];
  selectedCategory: string;
  onCategorySelect: (categoryId: string) => void;
}

export const CategoryList = ({ categories, selectedCategory, onCategorySelect }: CategoryListProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <h3 className="text-lg font-medium text-gray-900 px-4 py-3 border-b border-gray-200">קטגוריות</h3>
      <ul className="divide-y divide-gray-200">
        {categories.map((category) => (
          <li key={category.id}>
            <button
              onClick={() => onCategorySelect(category.id)}
              className={`w-full text-right px-4 py-3 text-sm font-medium transition-colors duration-150 ${
                selectedCategory === category.id
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-50 active:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};