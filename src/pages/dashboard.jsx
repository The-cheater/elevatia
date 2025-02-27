import { useState, useEffect } from "react";
import { Bell, Menu, ChevronRight, BookText, Clock, Calendar } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Heatmap from "@/components/ui/heatmap";
import axios from "axios";

const Dashboard = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [activeMinutes, setActiveMinutes] = useState(0);
  const [userData, setUserData] = useState(null);
  const googleId = localStorage.getItem("googleId");

  // Track user activity
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMinutes((prev) => prev + 1);
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  // Update backend when component unmounts or active time changes
  useEffect(() => {
    const updateActivity = async () => {
      if (activeMinutes > 0 && googleId) {
        try {
          await axios.post("http://localhost:5000/api/auth/update-hours", {
            googleId,
            hours: activeMinutes / 60, // Convert minutes to hours
          });
          setActiveMinutes(0); // Reset counter after update
        } catch (error) {
          console.error("Error updating activity:", error);
        }
      }
    };

    return () => {
      updateActivity();
    };
  }, [activeMinutes, googleId]);

  // Fetch user data on mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/auth/user/${googleId}`);
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (googleId) fetchUserData();
  }, [googleId]);

  // Date timer (existing)
  useEffect(() => {
    const timer = setInterval(() => setCurrentDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-cream-50 p-4 md:p-8">
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between mb-8"
      >
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-semibold text-pink-800">Dashboard</h1>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <div className="text-sm text-pink-800">
            {currentDate.toLocaleDateString()} {currentDate.toLocaleTimeString()}
          </div>
        </div>
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
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-pink-800">Recommended Courses</h2>
              <Button variant="ghost" className="text-pink-600">
                View All <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
            <Carousel>
              <CarouselContent>
                {recommendedCourses.map((course, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-4 bg-cream-100 rounded-lg border border-pink-100 shadow-sm">
                      <h3 className="font-medium text-pink-800">{course.title}</h3>
                      <p className="text-sm text-pink-600">{course.description}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
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
                Study Activity - {userData?.hoursSpent?.toFixed(1)} Hours
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
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-pink-800">Previously Viewed</h2>
              <Button variant="ghost" className="text-pink-600">
                View All <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
            <div className="space-y-4">
              {previouslyViewedCourses.map((course, index) => (
                <EnrolledCourse key={index} {...course} />
              ))}
            </div>
          </motion.section>

          {/* Progress Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white p-6 rounded-2xl shadow-lg"
          >
            <h2 className="text-lg font-semibold text-pink-800 mb-6">Your Progress</h2>
            <div className="flex justify-center">
              <div className="w-24 h-24">
                <CircularProgress percentage={75} />
              </div>
            </div>
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