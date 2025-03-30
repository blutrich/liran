import { Recommendation } from "./data";

interface RecommendationsListProps {
  recommendations: Recommendation[];
  isSearching: boolean;
}

export const RecommendationsList = ({ recommendations, isSearching }: RecommendationsListProps) => {
  if (recommendations.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6 text-center">
        <p className="text-gray-500 text-base">
          {isSearching ? "לא נמצאו המלצות מתאימות לחיפוש שלך" : "אין המלצות זמינות כרגע"}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {recommendations.map((recommendation, index) => (
        <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-200">
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span className="font-medium">מאת: {recommendation.sender}</span>
              <span>{recommendation.date}</span>
            </div>
          </div>
          <div className="px-4 py-3">
            <p className="text-gray-700 text-base whitespace-pre-wrap">{recommendation.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
};