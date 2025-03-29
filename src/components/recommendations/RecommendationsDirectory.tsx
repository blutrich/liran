import React, { useState, useEffect } from 'react';
import { CategoryList } from './CategoryList';
import { SubcategoryList } from './SubcategoryList';
import { RecommendationsList } from './RecommendationsList';
import { SearchBar } from './SearchBar';
import { categoriesData, subcategoriesData, recommendationsData } from './data';

// Define interfaces for our data types
interface Recommendation {
  id: number;
  date: string;
  sender: string;
  message: string;
  category?: string;
  subcategory?: string | null;
}

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
      if (typeof recommendationsData[catKey] === 'object' && !Array.isArray(recommendationsData[catKey])) {
        // For categories with subcategories
        Object.keys(recommendationsData[catKey]).forEach(subcatKey => {
          recommendationsData[catKey][subcatKey].forEach((recommendation: any) => {
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
      } else if (Array.isArray(recommendationsData[catKey])) {
        // For categories without subcategories
        recommendationsData[catKey].forEach((recommendation: any) => {
          if (
            recommendation.sender.toLowerCase().includes(lowercaseQuery) ||
            recommendation.message.toLowerCase().includes(lowercaseQuery) ||
            recommendation.date.toLowerCase().includes(lowercaseQuery)
          ) {
            results.push({
              ...recommendation,
              category: catKey,
              subcategory: null
            });
          }
        });
      }
    });

    setSearchResults(results);
    setIsSearching(true);
  };

  // Calculate total recommendations count
  const calculateTotalRecommendations = () => {
    let count = 0;
    
    Object.keys(recommendationsData).forEach(catKey => {
      if (typeof recommendationsData[catKey] === 'object' && !Array.isArray(recommendationsData[catKey])) {
        // For categories with subcategories
        Object.keys(recommendationsData[catKey]).forEach(subcatKey => {
          count += recommendationsData[catKey][subcatKey].length;
        });
      } else if (Array.isArray(recommendationsData[catKey])) {
        // For categories without subcategories
        count += recommendationsData[catKey].length;
      }
    });
    
    return count;
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
      // Use empty string instead of null to avoid type errors
      setSelectedSubcategory('');
    }
  };

  // Get current recommendations based on selected category/subcategory
  const getCurrentRecommendations = (): Recommendation[] => {
    if (isSearching) {
      return searchResults;
    }

    if (selectedCategory === 'other' || !subcategoriesData[selectedCategory]) {
      return recommendationsData[selectedCategory] || [];
    }

    return (recommendationsData[selectedCategory] && 
            recommendationsData[selectedCategory][selectedSubcategory]) || [];
  };

  // Helper function to get category name
  const getCategoryName = (categoryId: string): string => {
    const category = categoriesData.find((cat: any) => cat.id === categoryId);
    return category ? category.name : 'Unknown Category';
  };

  // Helper function to get subcategory name
  const getSubcategoryName = (categoryId: string, subcategoryId: string): string => {
    if (!subcategoriesData[categoryId]) return 'Unknown Subcategory';
    
    const subcategory = subcategoriesData[categoryId].find((subcat: any) => subcat.id === subcategoryId);
    return subcategory ? subcategory.name : 'Unknown Subcategory';
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">WhatsApp Community Directory</h1>
                <p className="text-sm text-gray-500">
                  Browse {calculateTotalRecommendations()} recommendations shared in the Wellbeing HR Community
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  Liran Wolf
                  <br />
                  <span className="text-gray-500">Founder of Mindfulness & Wellness Solutions | HR Community Leader | Employee Well-being Expert</span>
                </p>
              </div>
            </div>
            
            {/* Search */}
            <div className="w-1/3">
              <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                onSearch={handleSearch}
                onClear={clearSearch}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-6">
          {/* Sidebar */}
          <div className="w-72 flex-shrink-0">
            {/* Categories */}
            <CategoryList 
              categories={categoriesData}
              selectedCategory={selectedCategory}
              onCategorySelect={handleCategorySelect}
            />

            {/* Subcategories */}
            {subcategoriesData[selectedCategory] && !isSearching && (
              <SubcategoryList
                subcategories={subcategoriesData[selectedCategory]}
                selectedSubcategory={selectedSubcategory}
                onSubcategorySelect={setSelectedSubcategory}
              />
            )}
          </div>

          {/* Recommendations list */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow">
              <div className="border-b border-gray-200 p-4 bg-gray-50">
                <h2 className="text-lg font-medium text-gray-700">
                  {isSearching 
                    ? `Search Results (${searchResults.length})` 
                    : selectedSubcategory 
                      ? `${getSubcategoryName(selectedCategory, selectedSubcategory)}` 
                      : `${getCategoryName(selectedCategory)}`
                  }
                </h2>
              </div>
              
              <RecommendationsList 
                recommendations={getCurrentRecommendations()}
                isSearching={isSearching}
                getCategoryName={getCategoryName}
                getSubcategoryName={getSubcategoryName}
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-sm text-gray-500">
            WhatsApp "Wellbeing HR" Community Recommendations Directory - Data from April 2024 to March 2025
          </p>
        </div>
      </footer>
    </div>
  );
};