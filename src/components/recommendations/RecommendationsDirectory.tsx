import { useState } from "react";
import { CategoryList } from "./CategoryList";
import { SubcategoryList } from "./SubcategoryList";
import { SearchBar } from "./SearchBar";
import { RecommendationsList } from "./RecommendationsList";
import { categoriesData, subcategoriesData, recommendationsData } from "./data";
import type { Category, Subcategory, Recommendation } from "./data";

export const RecommendationsDirectory = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSelectedSubcategory("");
    setIsSearching(false);
  };

  const handleSubcategorySelect = (subcategoryId: string) => {
    setSelectedSubcategory(subcategoryId);
    setIsSearching(false);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setIsSearching(true);
  };

  const getFilteredRecommendations = (): Recommendation[] => {
    if (isSearching) {
      const query = searchQuery.toLowerCase();
      return Object.values(recommendationsData)
        .flatMap(category => Object.values(category as Record<string, Recommendation[]>))
        .flat()
        .filter(rec => 
          rec.message.toLowerCase().includes(query) ||
          rec.sender.toLowerCase().includes(query)
        );
    }

    if (!selectedCategory) return [];

    if (selectedSubcategory) {
      return (recommendationsData[selectedCategory] as Record<string, Recommendation[]>)?.[selectedSubcategory] || [];
    }

    return Object.values((recommendationsData[selectedCategory] as Record<string, Recommendation[]>) || {}).flat();
  };

  const getSubcategoriesForCategory = (categoryId: string): Subcategory[] => {
    return subcategoriesData[categoryId] || [];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="mb-4 sm:mb-6">
          <SearchBar value={searchQuery} onChange={handleSearch} />
        </div>
        
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
          <div className="lg:w-64 space-y-4">
            <CategoryList
              categories={categoriesData}
              selectedCategory={selectedCategory}
              onCategorySelect={handleCategorySelect}
            />
            
            {selectedCategory && (
              <SubcategoryList
                subcategories={getSubcategoriesForCategory(selectedCategory)}
                selectedSubcategory={selectedSubcategory}
                onSubcategorySelect={handleSubcategorySelect}
              />
            )}
          </div>
          
          <div className="flex-1">
            <RecommendationsList
              recommendations={getFilteredRecommendations()}
              isSearching={isSearching}
            />
          </div>
        </div>
      </div>
    </div>
  );
};