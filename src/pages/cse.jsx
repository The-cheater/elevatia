import { 
  BookOpen,
  Youtube,
  Users,
  Link2,
  Home,
  Shield,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

export default function CSE() {
  const courseSections = [
    {
      title: "Core CSE Courses",
      icon: <BookOpen className="w-5 h-5" />,
      items: [
        { name: "Introduction to Computer Science", url: "https://youtube.com/playlist?list=PL_CSE_PLAYLIST_1" },
        { name: "Data Structures Masterclass", url: "https://youtube.com/playlist?list=PL_CSE_PLAYLIST_2" },
        { name: "Algorithm Design & Analysis", url: "https://youtube.com/playlist?list=PL_CSE_PLAYLIST_3" }
      ]
    },
    {
      title: "Advanced Topics",
      icon: <Youtube className="w-5 h-5" />,
      items: [
        { name: "Operating Systems Deep Dive", url: "https://youtube.com/playlist?list=PL_CSE_PLAYLIST_4" },
        { name: "Computer Networks Complete Guide", url: "https://youtube.com/playlist?list=PL_CSE_PLAYLIST_5" },
        { name: "Database Systems Tutorials", url: "https://youtube.com/playlist?list=PL_CSE_PLAYLIST_6" }
      ]
    },
    {
      title: "CSE Notes & Resources",
      icon: <Link2 className="w-5 h-5" />,
      items: [
        { name: "Programming Cheatsheets", url: "#" },
        { name: "Project Ideas Repository", url: "#" },
        { name: "Interview Preparation Kit", url: "#" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <h1 className="text-4xl font-bold text-blue-800 mb-8">Computer Science & Engineering Courses</h1>

        {/* Course Sections Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {courseSections.map((section, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                {section.icon}
                <h2 className="ml-2 text-xl font-semibold text-gray-800">{section.title}</h2>
              </div>
              <ul className="space-y-3">
                {section.items.map((item, idx) => (
                  <li key={idx}>
                    <a 
                      href={item.url} 
                      className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Youtube className="w-4 h-4 mr-2" />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <Users className="w-6 h-6 mr-2" />
            Contact Information
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="flex items-center mb-3">
                <MapPin className="w-5 h-5 mr-2 text-gray-600" />
                123 Tech Avenue, Silicon City
              </p>
              <p className="flex items-center mb-3">
                <Phone className="w-5 h-5 mr-2 text-gray-600" />
                +91 98765 43210
              </p>
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-gray-600" />
                cse.department@university.edu
              </p>
            </div>
            <div>
              <nav className="space-y-3">
                <a href="#" className="flex items-center text-gray-700 hover:text-blue-600">
                  <Home className="w-4 h-4 mr-2" />
                  Campus Portal
                </a>
                <a href="#" className="flex items-center text-gray-700 hover:text-blue-600">
                  <Shield className="w-4 h-4 mr-2" />
                  Academic Policies
                </a>
              </nav>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center text-gray-600">
          <p>© 2023 Elevatia University. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}