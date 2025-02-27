import { useState, useEffect } from "react";
import { Bell, Menu, ChevronRight, BookText, Clock, Calendar } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"; // Import shadcn Button
import Heatmap from "@/components/ui/Heatmap"; // Ensure this path is correct

const Dashboard = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update every second

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-cream-50 p-4 md:p-8"> {/* Cream background */}
      {/* Header Section */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between mb-8"
      >
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="md:hidden p-2 rounded-lg hover:bg-gradient-to-r from-pink-400 to-purple-400 transition-colors">
            <Menu size={24} className="text-white" />
          </Button>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-pink-800">
              Welcome back, John! 👋
            </h1>
            <p className="text-pink-600 text-sm mt-1 flex items-center gap-1">
              <Calendar size={16} />
              <span>
                {currentDate.toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="p-2 rounded-lg hover:bg-gradient-to-r from-pink-400 to-purple-400 relative transition-colors">
            <Bell size={24} className="text-white" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </Button>
          <Button className="w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white border border-pink-200 shadow-sm">
            JD
          </Button>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Recommended Courses Carousel */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-2xl shadow-lg"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-pink-800">
                Recommended Courses
              </h2>
              <Button className="bg-gradient-to-r from-pink-400 to-purple-400 text-white hover:from-pink-500 hover:to-purple-500 transition-colors">
                See all <ChevronRight size={20} />
              </Button>
            </div>
            <Carousel>
              <CarouselContent>
                {recommendedCourses.map((course, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="p-4 bg-cream-100 rounded-xl flex items-center gap-4 border border-pink-100 shadow-sm"
                    >
                      <div className="w-12 h-12 bg-pink-50 rounded-lg flex items-center justify-center">
                        <BookText className="text-pink-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-pink-800">{course.title}</h3>
                        <p className="text-sm text-pink-600">{course.description}</p>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-gradient-to-r from-pink-400 to-purple-400 text-white hover:from-pink-500 hover:to-purple-500" />
              <CarouselNext className="bg-gradient-to-r from-pink-400 to-purple-400 text-white hover:from-pink-500 hover:to-purple-500" />
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
                Login Activity
              </h2>
            </div>
            <Heatmap />
          </motion.section>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Previously Viewed Courses */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-6 rounded-2xl shadow-lg"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-pink-800">
                Previously Viewed
              </h2>
              <Button className="bg-gradient-to-r from-pink-400 to-purple-400 text-white hover:from-pink-500 hover:to-purple-500 transition-colors">
                See all <ChevronRight size={20} />
              </Button>
            </div>
            <div className="space-y-4">
              {previouslyViewedCourses.map((course, index) => (
                <EnrolledCourse 
                  key={index}
                  title={course.title}
                  code={course.code}
                  time={course.time}
                />
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
            <h3 className="font-semibold mb-4 text-pink-800">Semester Progress</h3>
            <div className="flex items-center gap-4">
              <div className="relative w-20 h-20">
                <CircularProgress percentage={65} />
              </div>
              <div>
                <p className="text-sm text-pink-600">12 weeks completed</p>
                <p className="text-sm text-pink-600">8 weeks remaining</p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

// Components
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

// Mock Data
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