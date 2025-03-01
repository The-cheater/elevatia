import React from 'react';

const Heatmap = ({ userId, data, color, className }) => {
  // Default props if not provided
  const safeUserId = userId || 'default-user';
  const safeData = data || [];
  const safeColor = color || '#ec4899';
  const safeClassName = className || 'h-32';

  // Calculate maximum value for scaling
  const maxCount = Math.max(...safeData.map(item => item.count), 1);

  // Get intensity based on count
  const getIntensity = (count) => {
    return Math.max(0.1, count / maxCount);
  };

  return (
    <div className={`${safeClassName} w-full`}>
      <div className="flex h-full justify-between">
        {safeData.map((item, index) => {
          const intensity = getIntensity(item.count);
          const opacity = Math.max(0.1, intensity).toFixed(1);
          
          return (
            <div key={`${item.date}-${index}`} className="flex flex-col h-full justify-end flex-1 mx-1">
              <div 
                className="w-full rounded-sm" 
                style={{ 
                  backgroundColor: safeColor,
                  opacity: opacity,
                  height: `${intensity * 100}%`,
                }}
                title={`${item.date}: ${item.count} entries`}
              />
              <div className="text-xs text-center mt-1 truncate" style={{ color: safeColor }}>
                {new Date(item.date).getDate()}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Heatmap;