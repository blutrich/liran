import { Subcategory } from "./data";

interface SubcategoryListProps {
  subcategories: Subcategory[];
  selectedSubcategory: string;
  onSubcategorySelect: (subcategoryId: string) => void;
}

export const SubcategoryList = ({ subcategories, selectedSubcategory, onSubcategorySelect }: SubcategoryListProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <h3 className="text-lg font-medium text-gray-900 px-4 py-3 border-b border-gray-200">תתי קטגוריות</h3>
      <ul className="divide-y divide-gray-200">
        {subcategories.map((subcategory) => (
          <li key={subcategory.id}>
            <button
              onClick={() => onSubcategorySelect(subcategory.id)}
              className={`w-full text-right px-4 py-3 text-sm font-medium transition-colors duration-150 ${
                selectedSubcategory === subcategory.id
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-50 active:bg-gray-100'
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