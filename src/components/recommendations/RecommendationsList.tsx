import { Recommendation } from './data';

interface RecommendationsListProps {
  recommendations: Recommendation[];
  isSearching?: boolean;
  getCategoryName: (categoryId: string) => string;
  getSubcategoryName: (categoryId: string, subcategoryId: string) => string;
}

export const RecommendationsList = ({ recommendations, isSearching = false, getCategoryName, getSubcategoryName }: RecommendationsListProps) => {
  if (recommendations.length === 0) {
    return (
      <div className="p-4">
        <div className="text-center py-8">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">לא נמצאו המלצות</h3>
          <p className="mt-1 text-sm text-gray-500">
            {isSearching 
              ? "נסה לשנות את מילות החיפוש." 
              : "אין המלצות בקטגוריה זו עדיין."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {recommendations.map((recommendation) => (
        <div key={recommendation.id} className="bg-white rounded-lg shadow-sm p-4 sm:p-6 hover:shadow-md transition-shadow">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">
                {new Date(recommendation.date).toLocaleDateString('he-IL', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              <span className="text-sm font-medium text-gray-900">{recommendation.sender}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {recommendation.category && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {getCategoryName(recommendation.category)}
                </span>
              )}
              {recommendation.subcategory && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {getSubcategoryName(recommendation.category!, recommendation.subcategory)}
                </span>
              )}
            </div>
          </div>
          <p className="mt-4 text-gray-700 whitespace-pre-wrap">{recommendation.message}</p>
        </div>
      ))}
    </div>
  );
}; 