import { 
  Building,
  Youtube,
  Users,
  Link2,
  Home,
  Shield,
  MapPin,
  Phone,
  Mail,
  Mountain,
  Droplet,
  Hammer
} from 'lucide-react';

export default function Civil() {
  const courseSections = [
    {
      title: "Core Civil Engineering",
      icon: <Building className="w-5 h-5" />,
      items: [
        { name: "Structural Engineering Basics", url: "https://youtube.com/playlist?list=PL_CIVIL_PLAYLIST_1" },
        { name: "Concrete Technology Guide", url: "https://youtube.com/playlist?list=PL_CIVIL_PLAYLIST_2" },
        { name: "Surveying Techniques", url: "https://youtube.com/playlist?list=PL_CIVIL_PLAYLIST_3" }
      ]
    },
    {
      title: "Specializations",
      icon: <Mountain className="w-5 h-5" />,
      items: [
        { name: "Geotechnical Engineering", url: "https://youtube.com/playlist?list=PL_CIVIL_PLAYLIST_4" },
        { name: "Hydraulics & Water Resources", url: "https://youtube.com/playlist?list=PL_CIVIL_PLAYLIST_5" },
        { name: "Transportation Engineering", url: "https://youtube.com/playlist?list=PL_CIVIL_PLAYLIST_6" }
      ]
    },
    {
      title: "Practical Resources",
      icon: <Hammer className="w-5 h-5" />,
      items: [
        { name: "AutoCAD Civil 3D Tutorials", url: "#" },
        { name: "Bridge Design Handbook", url: "#" },
        { name: "Construction Management", url: "#" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <h1 className="text-4xl font-bold text-amber-800 mb-8">Civil Engineering Courses</h1>

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
                      className="flex items-center text-amber-700 hover:text-amber-900 transition-colors"
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
            Department Contact
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="flex items-center mb-3">
                <MapPin className="w-5 h-5 mr-2 text-gray-600" />
                456 Construction Blvd, Terraform City
              </p>
              <p className="flex items-center mb-3">
                <Phone className="w-5 h-5 mr-2 text-gray-600" />
                +91 97654 32109
              </p>
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-gray-600" />
                civil.dept@terraformuni.edu
              </p>
            </div>
            <div>
              <nav className="space-y-3">
                <a href="#" className="flex items-center text-gray-700 hover:text-amber-700">
                  <Home className="w-4 h-4 mr-2" />
                  Campus Facilities
                </a>
                <a href="#" className="flex items-center text-gray-700 hover:text-amber-700">
                  <Shield className="w-4 h-4 mr-2" />
                  Safety Protocols
                </a>
              </nav>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center text-gray-600">
          <p>© 2023 Terraform University. Built to Last.</p>
        </footer>
      </main>
    </div>
  );
}