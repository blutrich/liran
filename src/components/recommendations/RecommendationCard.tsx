import React from 'react';
import { formatDate } from '@/lib/utils'

interface RecommendationCardProps {
  id: number;
  sender: string;
  date: string;
  message: string;
  category?: string;
  subcategory?: string;
  categoryName?: string;
  subcategoryName?: string;
  showCategory?: boolean;
}

export const RecommendationCard: React.FC<RecommendationCardProps> = ({
  sender,
  date,
  message,
  category,
  subcategory,
  categoryName,
  subcategoryName,
  showCategory = false,
}) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 pt-1">
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
          {sender.charAt(0)}
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-900 truncate">
            {sender}
          </p>
          <p className="text-xs text-gray-500">
            {formatDate(date)}
          </p>
        </div>
        <p className="mt-1 text-sm text-gray-600 whitespace-pre-line" dir="auto">
          {message}
        </p>
        
        {/* Show category tags if specified */}
        {showCategory && category && categoryName && (
          <div className="mt-2 flex items-center space-x-2">
            {subcategory && subcategoryName ? (
              <>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {categoryName}
                </span>
                <span className="text-gray-400">›</span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  {subcategoryName}
                </span>
              </>
            ) : (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {categoryName}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}; 