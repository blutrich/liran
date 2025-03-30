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
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <SearchBar value={searchQuery} onChange={handleSearch} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
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
        
        <div className="md:col-span-3">
          <RecommendationsList
            recommendations={getFilteredRecommendations()}
            isSearching={isSearching}
          />
        </div>
      </div>
    </div>
  );
};