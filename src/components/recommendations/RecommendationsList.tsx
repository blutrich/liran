import React from 'react';
import { RecommendationCard } from './RecommendationCard'

interface Recommendation {
  id: number;
  date: string;
  sender: string;
  message: string;
  category?: string;
  subcategory?: string;
}

interface RecommendationsListProps {
  recommendations: Recommendation[];
  isSearching: boolean;
  getCategoryName: (categoryId: string) => string;
  getSubcategoryName: (categoryId: string, subcategoryId: string) => string;
}

export const RecommendationsList: React.FC<RecommendationsListProps> = ({
  recommendations,
  isSearching,
  getCategoryName,
  getSubcategoryName,
}) => {
  if (recommendations.length === 0) {
    return (
      <div className="p-4">
        <div className="text-center py-8">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">No recommendations found</h3>
          <p className="mt-1 text-sm text-gray-500">
            {isSearching 
              ? "Try adjusting your search terms." 
              : "There are no recommendations in this category yet."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <ul className="divide-y divide-gray-200">
        {recommendations.map((recommendation) => (
          <li key={recommendation.id} className="py-4">
            <RecommendationCard
              id={recommendation.id}
              sender={recommendation.sender}
              date={recommendation.date}
              message={recommendation.message}
              category={recommendation.category}
              subcategory={recommendation.subcategory}
              categoryName={recommendation.category ? getCategoryName(recommendation.category) : undefined}
              subcategoryName={recommendation.category && recommendation.subcategory 
                ? getSubcategoryName(recommendation.category, recommendation.subcategory)
                : undefined}
              showCategory={isSearching}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}; 