import { 
  BookOpen,
  Youtube,
  Link2,
  FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CSE() {
  const courseSections = [
    {
      title: "Core CSE Courses",
      icon: <BookOpen className="w-5 h-5 text-pink-600" />,
      items: [
        { name: "Introduction to Computer Science", url: "#" },
        { name: "Data Structures Masterclass", url: "#" },
        { name: "Algorithm Design & Analysis", url: "#" }
      ],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=200&q=80",
      roadmapUrl: "/roadmap" // Added roadmap URL
    },
    {
      title: "Advanced Topics",
      icon: <Youtube className="w-5 h-5 text-pink-600" />,
      items: [
        { name: "Operating Systems Deep Dive", url: "#" },
        { name: "Computer Networks Complete Guide", url: "#" },
        { name: "Database Systems Tutorials", url: "#" }
      ],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=200&q=80"
    },
    {
      title: "CSE Notes & Resources",
      icon: <Link2 className="w-5 h-5 text-pink-600" />,
      items: [
        { name: "Programming Cheatsheets", url: "#" },
        { name: "Project Ideas Repository", url: "#" },
        { name: "Interview Preparation Kit", url: "#" },
        { name: "Download Notes", url: "#", icon: <FileText className="w-4 h-4 mr-2 text-pink-600" /> }
      ],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=200&q=80"
    }
  ];

  // Floating animation for cards
  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Hover effect for cards
  const hoverEffect = {
    scale: 1.05,
    rotate: 0.5,
    boxShadow: "0 25px 50px -12px rgba(244, 114, 182, 0.25)"
  };

  // Particle system
  const ParticleBackground = () => (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-pink-400 rounded-full"
          initial={{
            x: Math.random() * 100 + "%",
            y: -50,
            opacity: 0
          }}
          animate={{
            y: "100vh",
            opacity: [0, 0.5, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 overflow-hidden relative">
      <ParticleBackground />

      <main className="max-w-4xl mx-auto px-4 py-12 relative z-10">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <AnimatePresence>
            <motion.h1 
              className="text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {"Computer Science & Engineering".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>
          </AnimatePresence>
        </motion.div>

        {/* Animated Course Cards */}
        <div className="space-y-12">
          {courseSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              whileHover={hoverEffect}
              whileInView={floatingAnimation}
              viewport={{ once: true }}
              className="relative bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-pink-100/50 overflow-hidden"
            >
              {/* Gradient Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-100/30 to-purple-100/30 opacity-0 hover:opacity-100 transition-opacity"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.5 }}
              />

              {/* ROADMAP Button */}
              {section.roadmapUrl && (
                <motion.a
                  href={section.roadmapUrl}
                  className="absolute top-6 right-6 z-10"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <button className="px-6 py-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    ROADMAP
                  </button>
                </motion.a>
              )}

              <div className="flex items-center mb-6">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="p-3 bg-pink-50 rounded-lg"
                >
                  {section.icon}
                </motion.div>
                <h2 className="ml-4 text-2xl font-bold text-pink-800">{section.title}</h2>
              </div>

              <motion.img 
                src={section.image} 
                alt={section.title}
                className="w-full h-56 object-cover rounded-xl mb-6"
                whileHover={{ scale: 1.02 }}
              />

              <motion.ul className="space-y-4">
                {section.items.map((item, idx) => (
                  <motion.li
                    key={idx}
                    whileHover={{ x: 10 }}
                    className="hover:bg-pink-50 p-3 rounded-lg transition-colors"
                  >
                    <a 
                      href={item.url}
                      className="flex items-center text-pink-700 hover:text-pink-900 font-medium"
                    >
                      {item.icon || <Youtube className="w-5 h-5 mr-3 text-pink-600" />}
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}