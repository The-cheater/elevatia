import { useState, useEffect } from "react";
import { Bell, Menu, ChevronRight, BookText, Clock, Calendar } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Heatmap from "@/components/ui/heatmap";
import axios from "axios"; // Added axios import

const Dashboard = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [activeTime, setActiveTime] = useState(0); // Added activeTime state

  // Existing date timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // New activity tracking timer (Added)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTime((prev) => prev + 1);
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  // New unload handler (Added)
  useEffect(() => {
    const handleUnload = async () => {
      const userId = localStorage.getItem("userId");
      try {
        await axios.post("http://localhost:5000/api/auth/update-hours", {
          googleId: userId,
          hours: activeTime
        });
      } catch (error) {
        console.error("Error updating hours:", error);
      }
    };

    window.addEventListener("beforeunload", handleUnload);
    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, [activeTime]);

  return (
    <div className="min-h-screen bg-cream-50 p-4 md:p-8">
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between mb-8"
      >
        {/* Header content remains unchanged */}
        {/* ... */}
      </motion.header>

      <main className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Recommended Courses Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-2xl shadow-lg"
          >
            {/* Courses carousel content */}
            {/* ... */}
          </motion.section>

          {/* Heatmap Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-2xl shadow-lg"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-pink-800">
                Login Activity
              </h2>
            </div>
            <Heatmap />
          </motion.section>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Previously Viewed Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-6 rounded-2xl shadow-lg"
          >
            {/* Previously viewed content */}
            {/* ... */}
          </motion.section>

          {/* Progress Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white p-6 rounded-2xl shadow-lg"
          >
            {/* Progress content */}
            {/* ... */}
          </motion.div>
        </div>
      </main>
    </div>
  );
};
const EnrolledCourse = ({ title, code, time }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="p-3 bg-cream-100 rounded-lg border border-pink-100 shadow-sm"
  >
    <div className="flex justify-between items-center">
      <div>
        <h4 className="font-medium text-pink-800">{title}</h4>
        <p className="text-sm text-pink-600">{code}</p>
      </div>
      <span className="text-sm bg-pink-50 text-pink-800 px-2 py-1 rounded-md">{time}</span>
    </div>
  </motion.div>
);

const CircularProgress = ({ percentage }) => (
  <svg className="w-full h-full" viewBox="0 0 100 100">
    <circle 
      className="text-pink-200"
      strokeWidth="8"
      stroke="currentColor"
      fill="transparent"
      r="40"
      cx="50"
      cy="50"
    />
    <circle 
      className="text-pink-600"
      strokeWidth="8"
      strokeDasharray={`${percentage} ${100 - percentage}`}
      strokeLinecap="round"
      stroke="currentColor"
      fill="transparent"
      r="40"
      cx="50"
      cy="50"
      transform="rotate(-90 50 50)"
    />
  </svg>
);

const recommendedCourses = [
  { title: "AI Fundamentals", description: "Master basic AI concepts" },
  { title: "Advanced Python", description: "Deep dive into Python programming" },
  { title: "Cloud Computing", description: "AWS & Azure fundamentals" },
  { title: "UI/UX Design", description: "Design modern interfaces" },
];

const previouslyViewedCourses = [
  { title: "Data Structures", code: "CS-101", time: "Mon 9:00 AM" },
  { title: "Web Development", code: "WD-201", time: "Wed 2:00 PM" },
];

export default Dashboard;