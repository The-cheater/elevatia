import { BrainCircuit, Binary, BookText, Mail, MapPin, Phone, ClipboardList, Home } from 'lucide-react';

export default function EceCourses() {
  const courses = [
    {
      title: "Introduction to Artificial Intelligence",
      icon: <BrainCircuit className="w-8 h-8 mb-2" />,
      link: "https://youtube.com/playlist?list=PLxCzCOWd7aiHGhOHV-nwb0HR5US5GFKFI"
    },
    {
      title: "Machine Learning Fundamentals",
      icon: <Binary className="w-8 h-8 mb-2" />,
      link: "https://youtube.com/playlist?list=PLKnIA16_RmvbAlyx4_rdtR66B7EHgo5PW"
    },
    // Add more courses as needed
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-800">
            <span className="text-blue-600">CSE</span> Course Hub
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <a
              key={index}
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-center">
                {course.icon}
                <h3 className="text-lg font-semibold text-gray-800">{course.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-12">
        <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-bold mb-4 flex items-center">
              <BookText className="mr-2" /> About Us
            </h4>
            <p className="text-gray-300">Premier destination for cutting-edge CSE learning resources</p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 flex items-center">
              <MapPin className="mr-2" /> Contact
            </h4>
            <div className="space-y-2">
              <p className="flex items-center">
                <Phone className="mr-2" /> +91 98765 43210
              </p>
              <p className="flex items-center">
                <Mail className="mr-2" /> contact@csehub.in
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 flex items-center">
              <ClipboardList className="mr-2" /> Links
            </h4>
            <div className="space-y-2">
              <a href="#" className="flex items-center hover:text-blue-400">
                <Home className="mr-2" /> Home
              </a>
              <a href="#" className="hover:text-blue-400">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}