import { useState, useEffect, useRef } from "react";
import { Bell, Menu, UserCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Heatmap from "@/components/ui/heatmap";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [username] = useState("Turanya Mishra");
  const activeTimeRef = useRef(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [userId, setUserId] = useState("user123"); // Default userId

  // Generate dummy heatmap data for Feb 25 - March 1
  const heatmapData = [
    { date: '2024-02-25', count: 3 },
    { date: '2024-02-26', count: 5 },
    { date: '2024-02-27', count: 7 },
    { date: '2024-02-28', count: 2 },
    { date: '2024-02-29', count: 4 },
    { date: '2024-03-01', count: 6 },
  ];

  // Track active time
  useEffect(() => {
    const interval = setInterval(() => {
      activeTimeRef.current += 1;
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  // Time formatter
  const formatTime = (minutes) => {
    const hrs = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hrs}h ${mins}m`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 p-4 md:p-8">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between mb-8 bg-gradient-to-r from-pink-600 to-purple-600 p-4 rounded-2xl shadow-xl"
      >
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hover:bg-white/10">
            <Menu className="h-6 w-6 text-white" />
          </Button>
          <h1 className="text-2xl font-bold text-white">Study Dashboard</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 bg-white/10 p-2 rounded-full pr-4">
            <UserCircle className="h-8 w-8 text-white bg-pink-500 rounded-full p-1" />
            <span className="text-lg font-medium text-white">{username}</span>
          </div>
          <Button variant="ghost" size="icon" className="hover:bg-white/10">
            <Bell className="h-6 w-6 text-white" />
          </Button>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-2xl shadow-xl border border-white/20"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-pink-800">Study Activity Heatmap</h2>
              <span className="text-sm text-pink-600">
                {currentTime.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
              </span>
            </div>
            <Heatmap 
              userId={userId}
              data={heatmapData}
              color="#ec4899"
              className="h-32"
            />
            <div className="mt-4 flex justify-between text-sm text-pink-600">
              <span>Less</span>
              <span>More</span>
            </div>
          </motion.section>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-2xl shadow-xl border border-white/20"
          >
            <h2 className="text-lg font-semibold text-pink-800 mb-6">Daily Progress</h2>
            <div className="flex flex-col items-center gap-4">
              <div className="relative w-40 h-40">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    className="stroke-pink-100"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    className="stroke-pink-600"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray="283"
                    strokeDashoffset={283 - (activeTimeRef.current / 120) * 283}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-pink-800">
                    {formatTime(activeTimeRef.current)}
                  </span>
                  <span className="text-sm text-pink-500">Active Today</span>
                </div>
              </div>
              <div className="text-center">
                <p className="text-pink-800">
                  <span className="font-bold">Current Session:</span> {formatTime(activeTimeRef.current % 120)}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-6 rounded-2xl shadow-xl border border-white/20"
          >
            <h2 className="text-lg font-semibold text-pink-800 mb-4">Quick Stats</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-pink-600">Total Study Hours:</span>
                <span className="font-bold text-pink-800">0h</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-pink-600">Current Streak:</span>
                <span className="font-bold text-pink-800">2 days 🔥</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-pink-600">Weekly Goal:</span>
                <span className="font-bold text-pink-800">85%</span>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Floating Time */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed bottom-4 right-4 bg-pink-600 text-white px-4 py-2 rounded-full shadow-lg"
      >
        {currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
      </motion.div>
    </div>
  );
};

export default Dashboard;