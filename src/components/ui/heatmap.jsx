import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Heatmap = () => {
  // Mock data for February and March
  const months = [
    { name: "Feb", days: 28, startDay: 6 }, // 0 = Sunday, 1 = Monday...
    { name: "Mar", days: 31, startDay: 6 },
    { name: "April", days: 31, startDay: 0 },
    { name: "May", days: 30, startDay: 0 },
    { name: "June", days: 31, startDay: 0 },
    { name: "July", days: 30, startDay: 0 },
  ];

  // Generate activity data (only Feb 26 to Mar 1 will have activity)
  const generateActivity = () => {
    const activity = Array.from({ length: 59 }, () => 0); // 28 (Feb) + 31 (Mar) = 59 days
    activity[25] = 1; // Feb 26
    activity[26] = 2; // Feb 27
    activity[27] = 3; // Feb 28
    activity[28] = 1; // Mar 1
    return activity;
  };

  const [activity] = useState(generateActivity());

  return (
    <div className="overflow-x-auto pb-4">
      <div className="flex gap-4">
        {months.map((month, monthIndex) => (
          <div key={month.name} className="flex flex-col gap-1">
            {/* Days grid */}
            <div className="grid grid-cols-7 gap-[2px]">
              {/* Empty cells for days before February 26 */}
              {month.name === "Feb" &&
                Array.from({ length: 25 }).map((_, i) => (
                  <div key={`empty-${i}`} className="w-3 h-3 bg-gray-200 rounded-sm" />
                ))}
              {/* Actual days */}
              {Array.from({ length: month.days }).map((_, dayIndex) => {
                if (month.name === "Feb" && dayIndex < 25) return null; // Skip days before Feb 26
                const activityLevel = activity[monthIndex * 31 + dayIndex] || 0;
                return (
                  <div
                    key={dayIndex}
                    className={`w-3 h-3 rounded-sm ${
                      [
                        "bg-gray-200", // 0 = no activity
                        "bg-green-300", // 1 = low activity
                        "bg-green-400", // 2 = medium activity
                        "bg-green-500", // 3 = high activity
                      ][activityLevel]
                    }`}
                    title={`${month.name} ${dayIndex + 1}: ${activityLevel} activities`}
                  />
                );
              })}
            </div>
            {/* Month label */}
            <div className="text-xs text-gray-600 text-center mt-1">
              {month.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl p-6 shadow-sm max-w-6xl mx-auto"
      >
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Login Activity</h2>
        <Heatmap />
        <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
          <span>Less</span>
          <div className="flex gap-[2px]">
            {[0, 1, 2, 3].map((level) => (
              <div
                key={level}
                className={`w-3 h-3 rounded-sm ${
                  [
                    "bg-gray-200",
                    "bg-green-300",
                    "bg-green-400",
                    "bg-green-500",
                  ][level]
                }`}
              />
            ))}
          </div>
          <span>More</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;