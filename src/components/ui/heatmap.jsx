import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const Heatmap = () => {
  const [activityData, setActivityData] = useState({});
  const googleId = localStorage.getItem("googleId");

  // Fetch activity data from backend
  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/auth/activity/${googleId}`
        );
        setActivityData(response.data.activity || {});
      } catch (error) {
        console.error("Error fetching activity data:", error);
      }
    };
    
    if (googleId) fetchActivity();
  }, [googleId]);

  // Months configuration (updated for 2024)
  const months = [
    { name: "Jan", days: 31, startDay: 0, year: 2024, number: 1 },
    { name: "Feb", days: 29, startDay: 3, year: 2024, number: 2 },
    { name: "Mar", days: 31, startDay: 4, year: 2024, number: 3 },
    { name: "Apr", days: 30, startDay: 0, year: 2024, number: 4 },
    { name: "May", days: 31, startDay: 2, year: 2024, number: 5 },
    { name: "Jun", days: 30, startDay: 5, year: 2024, number: 6 },
  ];

  // Color intensity based on hours (0-4 hours)
  const getColorIntensity = (hours) => {
    if (!hours) return "bg-gray-200";
    if (hours >= 4) return "bg-green-800";
    if (hours >= 3) return "bg-green-600";
    if (hours >= 2) return "bg-green-400";
    if (hours >= 1) return "bg-green-300";
    return "bg-green-200";
  };

  return (
    <div className="overflow-x-auto pb-4">
      <div className="flex gap-4">
        {months.map((month) => (
          <div key={month.name} className="flex flex-col gap-1">
            <div className="grid grid-cols-7 gap-[2px]">
              {Array.from({ length: month.days }).map((_, dayIndex) => {
                const date = `${month.year}-${month.number}-${dayIndex + 1}`;
                const hours = activityData[date] || 0;
                
                return (
                  <motion.div
                    key={dayIndex}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    className={`w-3 h-3 rounded-sm ${getColorIntensity(hours)} 
                      transition-colors duration-300`}
                    title={`${month.name} ${dayIndex + 1}: ${hours} hours`}
                  />
                );
              })}
            </div>
            <div className="text-xs text-gray-600 text-center mt-1">
              {month.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Heatmap;