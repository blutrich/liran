import { Recommendation } from "./data";

interface RecommendationsListProps {
  recommendations: Recommendation[];
  isSearching: boolean;
}

export const RecommendationsList = ({ recommendations, isSearching }: RecommendationsListProps) => {
  if (recommendations.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">
          {isSearching ? "לא נמצאו המלצות מתאימות לחיפוש שלך" : "אין המלצות זמינות כרגע"}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {recommendations.map((recommendation, index) => (
        <div key={index} className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
            <span>מאת: {recommendation.sender}</span>
            <span>{recommendation.date}</span>
          </div>
          <p className="text-gray-700 whitespace-pre-wrap">{recommendation.message}</p>
        </div>
      ))}
    </div>
  );
};