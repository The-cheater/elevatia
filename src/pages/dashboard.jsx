import { Bell, Menu, ChevronRight, BookText, Database, Terminal } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      {/* Header Section */}
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <button className="md:hidden">
            <Menu size={24} />
          </button>
          <h1 className="text-2xl font-bold">Welcome back, John!</h1>
        </div>
        <div className="flex items-center gap-4">
          <Bell size={24} />
          <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Daily Notice Section */}
          <section className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Daily notice</h2>
              <button className="flex items-center text-blue-600">
                See all <ChevronRight size={20} />
              </button>
            </div>
            <div className="space-y-4">
              {/* Add notice items here */}
            </div>
          </section>

          {/* Your Courses Section */}
          <section className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">YOUR COURSES</h2>
              <button className="flex items-center text-blue-600">
                See more <ChevronRight size={20} />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <CourseCard 
                icon={<Terminal size={24} />}
                title="Object oriented programming"
              />
              <CourseCard 
                icon={<Database size={24} />}
                title="Fundamentals of database systems"
              />
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Enrolled Courses Section */}
          <section className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Enrolled Courses</h2>
              <button className="flex items-center text-blue-600">
                See all <ChevronRight size={20} />
              </button>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {/* Add enrolled course items here */}
            </div>
          </section>

          {/* Semester Courses Section */}
          <section className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Semester Courses</h2>
              <button className="flex items-center text-blue-600">
                See more <ChevronRight size={20} />
              </button>
            </div>
            {/* Add semester courses content */}
          </section>
        </div>
      </main>
    </div>
  );
};

// Reusable Course Card Component
const CourseCard = ({ icon, title }) => (
  <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
    <div className="flex items-center gap-3 mb-2">
      <div className="text-blue-600">{icon}</div>
      <h3 className="font-medium">{title}</h3>
    </div>
    <button className="w-full py-2 text-sm bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200 transition-colors">
      View
    </button>
  </div>
);

export default Dashboard;