import { Bell, Menu, ChevronRight, BookText, Database, Terminal, GraduationCap, Clock, Calendar } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100 p-4 md:p-8">
      {/* Header Section */}
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <button className="md:hidden p-2 rounded-full hover:bg-pink-100 transition-colors">
            <Menu size={24} className="text-pink-600" />
          </button>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-pink-900">Welcome back, John! 👋</h1>
            <p className="text-pink-700 text-sm mt-1 flex items-center gap-1">
              <Calendar size={16} /> 
              <span>Feb 22, 2025</span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-pink-100 relative">
            <Bell size={24} className="text-pink-600" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white">
            JD
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Recommended Courses Carousel Section */}
          <section className="bg-white p-6 rounded-2xl shadow-lg border border-pink-100">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold flex items-center gap-2 text-pink-900">
                <BookText className="text-pink-500" /> Recommended Courses
              </h2>
              <button className="flex items-center text-pink-600 hover:text-pink-700 transition-colors">
                See all <ChevronRight size={20} />
              </button>
            </div>
            <Carousel className="w-full">
              <CarouselContent>
                {recommendedCourses.map((course, index) => (
                  <CarouselItem key={index} className="basis-1/2">
                    <div className="p-4 bg-pink-50 rounded-xl flex items-center gap-4 animate-fade-in">
                      <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                        <GraduationCap className="text-pink-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-pink-900">{course.title}</h3>
                        <p className="text-sm text-pink-700">{course.description}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="text-pink-600" />
              <CarouselNext className="text-pink-600" />
            </Carousel>
          </section>

          {/* Your Courses Section */}
          <section className="bg-white p-6 rounded-2xl shadow-lg border border-pink-100">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold flex items-center gap-2 text-pink-900">
                <Terminal className="text-pink-500" /> Your Courses
              </h2>
              <button className="flex items-center text-pink-600 hover:text-pink-700 transition-colors">
                See more <ChevronRight size={20} />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <CourseCard 
                icon={<Terminal className="text-pink-600" />}
                title="Object Oriented Programming"
                progress={75}
              />
              <CourseCard 
                icon={<Database className="text-pink-600" />}
                title="Database Systems"
                progress={60}
              />
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Previously Viewed Courses Section */}
          <section className="bg-white p-6 rounded-2xl shadow-lg border border-pink-100">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold flex items-center gap-2 text-pink-900">
                <Clock className="text-pink-500" /> Previously Viewed Courses
              </h2>
              <button className="flex items-center text-pink-600 hover:text-pink-700 transition-colors">
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
          </section>

          {/* Semester Progress */}
          <div className="bg-gradient-to-br from-pink-600 to-pink-700 p-6 rounded-2xl text-white">
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
          </div>
        </div>
      </main>
    </div>
  );
};

// Enhanced Course Card
const CourseCard = ({ icon, title, progress }) => (
  <div className="group p-4 border border-pink-200 rounded-xl hover:border-pink-100 hover:bg-pink-50 transition-all duration-300">
    <div className="flex items-center gap-4 mb-4">
      <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
        {icon}
      </div>
      <h3 className="font-medium text-pink-900">{title}</h3>
    </div>
    <div className="flex items-center gap-3">
      <div className="w-full bg-pink-200 rounded-full h-2">
        <div 
          className="bg-pink-600 h-2 rounded-full transition-all duration-500" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <span className="text-sm text-pink-600">{progress}%</span>
    </div>
  </div>
);

// Enrolled Course Component
const EnrolledCourse = ({ title, code, time }) => (
  <div className="p-3 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors border border-transparent hover:border-pink-200">
    <div className="flex justify-between items-center">
      <div>
        <h4 className="font-medium text-pink-900">{title}</h4>
        <p className="text-sm text-pink-700">{code}</p>
      </div>
      <span className="text-sm bg-pink-100 text-pink-800 px-2 py-1 rounded-md">{time}</span>
    </div>
  </div>
);

// Circular Progress Component
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
  { title: "Introduction to AI", description: "Learn the basics of Artificial Intelligence" },
  { title: "Data Science Fundamentals", description: "Understand the core concepts of Data Science" },
  { title: "Web Development Basics", description: "Start building websites from scratch" },
  { title: "Advanced Machine Learning", description: "Dive deep into Machine Learning algorithms" }
];

const previouslyViewedCourses = [
  { title: "Advanced Algorithms", code: "CS-504", time: "Mon/Wed 10:00 AM" },
  { title: "Web Development", code: "WD-301", time: "Tue/Thu 2:00 PM" }
];

export default Dashboard;