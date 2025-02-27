import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const Heatmap = () => {
  const [activityData, setActivityData] = useState({});
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/auth/activity/${userId}`);
        setActivityData(response.data);
      } catch (error) {
        console.error("Error fetching activity data:", error);
      }
    };
    fetchActivity();
  }, [userId]);

  const months = [
    { name: "Feb", days: 28, startDay: 6, year: 2025, number: 2 },
    { name: "Mar", days: 31, startDay: 6, year: 2025, number: 3 },
    { name: "Apr", days: 30, startDay: 0, year: 2025, number: 4 },
    { name: "May", days: 31, startDay: 0, year: 2025, number: 5 },
    { name: "Jun", days: 30, startDay: 0, year: 2025, number: 6 },
    { name: "Jul", days: 31, startDay: 0, year: 2025, number: 7 },
  ];

  const getColorIntensity = (minutes) => {
    if (!minutes) return "bg-gray-200";
    if (minutes > 60) return "bg-green-500";
    if (minutes > 30) return "bg-green-400";
    if (minutes > 0) return "bg-green-300";
    return "bg-gray-200";
  };

  return (
    <div className="overflow-x-auto pb-4">
      <div className="flex gap-4">
        {months.map((month) => (
          <div key={month.name} className="flex flex-col gap-1">
            <div className="grid grid-cols-7 gap-[2px]">
              {Array.from({ length: month.days }).map((_, dayIndex) => {
                const date = `${month.year}-${month.number}-${dayIndex + 1}`;
                const minutes = activityData[date] || 0;
                
                return (
                  <div
                    key={dayIndex}
                    className={`w-3 h-3 rounded-sm ${getColorIntensity(minutes)}`}
                    title={`${month.name} ${dayIndex + 1}: ${minutes} minutes`}
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