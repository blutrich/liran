import { useState } from 'react';
import { CategoryList } from './CategoryList';
import { SubcategoryList } from './SubcategoryList';
import { RecommendationsList } from './RecommendationsList';
import { SearchBar } from './SearchBar';
import { categoriesData, subcategoriesData, recommendationsData, Category, Subcategory } from './data';

// Define interfaces for our data types
interface Recommendation {
  id: number;
  date: string;
  sender: string;
  message: string;
  category?: string;
  subcategory?: string;
}

type RecommendationsData = {
  [key: string]: {
    [key: string]: Recommendation[];
  } | Recommendation[];
};

export const RecommendationsDirectory = () => {
  // State variables for filtering and navigation
  const [selectedCategory, setSelectedCategory] = useState<string>('events');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('venues');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<Recommendation[]>([]);

  // Search recommendations by query
  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setIsSearching(false);
      return;
    }

    const results: Recommendation[] = [];
    const lowercaseQuery = query.toLowerCase();

    // Search through all categories and subcategories
    Object.keys(recommendationsData).forEach(catKey => {
      const categoryData = (recommendationsData as RecommendationsData)[catKey];
      if (Array.isArray(categoryData)) {
        // For categories without subcategories
        categoryData.forEach((recommendation: Recommendation) => {
          if (
            recommendation.sender.toLowerCase().includes(lowercaseQuery) ||
            recommendation.message.toLowerCase().includes(lowercaseQuery) ||
            recommendation.date.toLowerCase().includes(lowercaseQuery)
          ) {
            results.push({
              ...recommendation,
              category: catKey,
              subcategory: undefined
            });
          }
        });
      } else {
        // For categories with subcategories
        Object.keys(categoryData).forEach(subcatKey => {
          categoryData[subcatKey].forEach((recommendation: Recommendation) => {
            if (
              recommendation.sender.toLowerCase().includes(lowercaseQuery) ||
              recommendation.message.toLowerCase().includes(lowercaseQuery) ||
              recommendation.date.toLowerCase().includes(lowercaseQuery)
            ) {
              results.push({
                ...recommendation,
                category: catKey,
                subcategory: subcatKey
              });
            }
          });
        });
      }
    });

    setSearchResults(results);
    setIsSearching(true);
  };

  // Reset search
  const clearSearch = () => {
    setSearchQuery('');
    setIsSearching(false);
  };

  // Handle category selection
  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    
    // Set first subcategory when category changes
    if (subcategoriesData[categoryId] && subcategoriesData[categoryId].length > 0) {
      setSelectedSubcategory(subcategoriesData[categoryId][0].id);
    } else {
      setSelectedSubcategory('');
    }
  };

  // Get current recommendations based on selected category/subcategory
  const getCurrentRecommendations = (): Recommendation[] => {
    if (isSearching) {
      return searchResults;
    }

    const categoryData = (recommendationsData as RecommendationsData)[selectedCategory];
    if (selectedCategory === 'other' || !subcategoriesData[selectedCategory]) {
      return Array.isArray(categoryData) ? categoryData : [];
    }

    return Array.isArray(categoryData) ? [] : (categoryData[selectedSubcategory] || []);
  };

  // Helper function to get category name
  const getCategoryName = (categoryId: string): string => {
    const category = categoriesData.find((cat: Category) => cat.id === categoryId);
    return category ? category.name : 'Unknown Category';
  };

  // Helper function to get subcategory name
  const getSubcategoryName = (categoryId: string, subcategoryId: string): string => {
    if (!subcategoriesData[categoryId]) return 'Unknown Subcategory';
    
    const subcategory = subcategoriesData[categoryId].find((subcat: Subcategory) => subcat.id === subcategoryId);
    return subcategory ? subcategory.name : 'Unknown Subcategory';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar - Categories and Subcategories */}
          <div className="w-full lg:w-64 space-y-4">
            <CategoryList
              categories={categoriesData}
              selectedCategory={selectedCategory}
              onCategorySelect={handleCategorySelect}
            />
            {selectedCategory && subcategoriesData[selectedCategory] && (
              <SubcategoryList
                subcategories={subcategoriesData[selectedCategory]}
                selectedSubcategory={selectedSubcategory}
                onSubcategorySelect={setSelectedSubcategory}
              />
            )}
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow p-4 sm:p-6">
              <div className="mb-6">
                <SearchBar
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  onSearch={handleSearch}
                  onClear={clearSearch}
                />
              </div>

              <div className="space-y-4">
                {getCurrentRecommendations().length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    {searchQuery ? 'לא נמצאו המלצות מתאימות לחיפוש שלך' : 'בחר קטגוריה או תת-קטגוריה כדי לראות המלצות'}
                  </div>
                ) : (
                  <RecommendationsList
                    recommendations={getCurrentRecommendations()}
                    isSearching={isSearching}
                    getCategoryName={getCategoryName}
                    getSubcategoryName={getSubcategoryName}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};