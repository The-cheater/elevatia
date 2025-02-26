import { Bell, Menu, ChevronRight, BookText, Database, Terminal, GraduationCap, Clock, Calendar } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { motion } from 'framer-motion';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-orange-400 p-4 md:p-8">
      {/* Header Section */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between mb-8"
      >
        <div className="flex items-center gap-4">
          <button className="md:hidden p-2 rounded-full hover:bg-pink-600/10 transition-colors">
            <Menu size={24} className="text-white" />
          </button>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
              Welcome back, John! 👋
            </h1>
            <p className="text-pink-100 text-sm mt-1 flex items-center gap-1">
              <Calendar size={16} />
              <span>Feb 22, 2025</span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-pink-600/10 relative">
            <Bell size={24} className="text-white" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="w-10 h-10 bg-gradient-to-br from-pink-600 to-purple-600 rounded-full flex items-center justify-center text-white">
            JD
          </div>
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
            className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 shadow-lg"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold flex items-center gap-2 bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
                <BookText className="text-white" /> Recommended Courses
              </h2>
              <button className="flex items-center text-white hover:text-pink-200 transition-colors">
                See all <ChevronRight size={20} />
              </button>
            </div>
            <Carousel>
              <CarouselContent>
                {recommendedCourses.map((course, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="p-4 bg-gradient-to-br from-pink-600/10 to-purple-600/10 rounded-xl flex items-center gap-4 border border-white/20 shadow-sm"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-600/20 to-purple-600/20 rounded-lg flex items-center justify-center">
                        <GraduationCap className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium text-white">{course.title}</h3>
                        <p className="text-sm text-pink-100">{course.description}</p>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="text-white hover:text-pink-200" />
              <CarouselNext className="text-white hover:text-pink-200" />
            </Carousel>
          </motion.section>

          {/* Your Courses Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 shadow-lg"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold flex items-center gap-2 bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
                <Terminal className="text-white" /> Your Courses
              </h2>
              <button className="flex items-center text-white hover:text-pink-200 transition-colors">
                See more <ChevronRight size={20} />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <CourseCard 
                icon={<Terminal className="text-white" />}
                title="Object Oriented Programming"
                progress={75}
              />
              <CourseCard 
                icon={<Database className="text-white" />}
                title="Database Systems"
                progress={60}
              />
            </div>
          </motion.section>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Previously Viewed Courses */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 shadow-lg"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold flex items-center gap-2 bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
                <Clock className="text-white" /> Previously Viewed
              </h2>
              <button className="flex items-center text-white hover:text-pink-200 transition-colors">
                See all <ChevronRight size={20} />
              </button>
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
            className="bg-gradient-to-br from-pink-600 to-purple-600 p-6 rounded-2xl text-white"
          >
            <h3 className="font-semibold mb-4">Semester Progress</h3>
            <div className="flex items-center gap-4">
              <div className="relative w-20 h-20">
                <CircularProgress percentage={65} />
              </div>
              <div>
                <p className="text-sm opacity-90">12 weeks completed</p>
                <p className="text-sm opacity-90">8 weeks remaining</p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

// Components
const CourseCard = ({ icon, title, progress }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="group p-4 bg-gradient-to-br from-pink-600/10 to-purple-600/10 rounded-xl border border-white/20 shadow-sm"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="w-12 h-12 bg-gradient-to-br from-pink-600/20 to-purple-600/20 rounded-lg flex items-center justify-center">
        {icon}
      </div>
      <h3 className="font-medium text-white">{title}</h3>
    </div>
    <div className="flex items-center gap-3">
      <div className="w-full bg-pink-200/20 rounded-full h-2">
        <div 
          className="bg-white h-2 rounded-full transition-all" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  </motion.div>
);

const EnrolledCourse = ({ title, code, time }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="p-3 bg-gradient-to-br from-pink-600/10 to-purple-600/10 rounded-lg border border-white/20 shadow-sm"
  >
    <div className="flex justify-between items-center">
      <div>
        <h4 className="font-medium text-white">{title}</h4>
        <p className="text-sm text-pink-100">{code}</p>
      </div>
      <span className="text-sm bg-pink-600/20 text-white px-2 py-1 rounded-md">{time}</span>
    </div>
  </motion.div>
);

const CircularProgress = ({ percentage }) => (
  <svg className="w-full h-full" viewBox="0 0 100 100">
    <circle 
      className="text-pink-200/20"
      strokeWidth="8"
      stroke="currentColor"
      fill="transparent"
      r="40"
      cx="50"
      cy="50"
    />
    <circle 
      className="text-white"
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