import { motion } from "framer-motion";
import { Laptop, Cpu, Zap, HardHat, Settings } from "lucide-react"; // Icons for each branch

const EngineeringPage = () => {
  // Course data array
  const courses = [
    {
      id: 1,
      title: "Computer Science",
      icon: <Laptop />,
      description: "Dive into the world of coding, algorithms, and software development.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      links: {
        roadmap: "/cse/roadmap",
        courses: "/cse/courses"
      }
    },
    {
      id: 2,
      title: "Electronics",
      icon: <Cpu />,
      description: "Explore circuits, microcontrollers, and embedded systems.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      links: {
        roadmap: "/ece/roadmap",
        courses: "/ece/courses"
      }
    },
    {
      id: 3,
      title: "Electrical",
      icon: <Zap />,
      description: "Learn about power systems, motors, and renewable energy.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276",
      links: {
        roadmap: "/electrical/roadmap",
        courses: "/electrical/courses"
      }
    },
    {
      id: 4,
      title: "Civil",
      icon: <HardHat />,
      description: "Build the future with infrastructure and construction.",
      image: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8",
      links: {
        roadmap: "/civil/roadmap",
        courses: "/civil/courses"
      }
    },
    {
      id: 5,
      title: "Mechanical",
      icon: <Settings />,
      description: "Design and innovate with machines and mechanics.",
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa",
      links: {
        roadmap: "/mechanical/roadmap",
        courses: "/mechanical/courses"
      }
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen bg-pink-50">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-pink-600 py-12 text-center"
      >
        <h1 className="text-4xl font-bold text-white">Engineering</h1>
        <p className="mt-2 text-pink-100">
          Explore the world of innovation and creativity
        </p>
      </motion.div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-6 py-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              variants={itemVariants}
              className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow relative group"
              whileHover={{ y: -10 }}
            >
              {/* Card shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100"
                initial={{ x: "-100%" }}
                animate={{
                  x: "100%",
                  transition: {
                    duration: 1.2,
                    repeat: Infinity
                  }
                }}
              />

              <a href={course.links.roadmap} className="block">
                <motion.div
                  variants={iconFloat}
                  animate="float"
                  className="w-12 h-12 text-pink-600 mx-auto relative"
                >
                  {course.icon}
                  <Sparkles className="absolute -top-2 -right-2 text-yellow-400" size={20} />
                </motion.div>
                
                <motion.h2 
                  className="text-xl font-semibold text-pink-600 mt-4 text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  {course.title}
                </motion.h2>
              </a>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-2 text-gray-600 text-center"
              >
                {course.description}
              </motion.p>

              {/* Buttons */}
              <motion.div 
                className="flex gap-4 justify-center mt-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <motion.a
                  href={course.links.roadmap}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="flex items-center gap-2 px-4 py-2 bg-pink-500 text-white rounded-lg relative overflow-hidden"
                >
                  <Map size={18} />
                  Roadmap
                </motion.a>

                <motion.a
                  href={course.links.courses}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="flex items-center gap-2 px-4 py-2 bg-pink-100 text-pink-600 rounded-lg relative overflow-hidden"
                >
                  <BookOpen size={18} />
                  Courses
                </motion.a>
              </motion.div>

          {/* Mechanical */}
          <motion.div
            variants={itemVariants}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <Settings className="w-12 h-12 text-pink-600 mx-auto" />
            <h2 className="text-xl font-semibold text-pink-600 mt-4 text-center">
              Mechanical
            </h2>
            <p className="mt-2 text-gray-600 text-center">
              Design and innovate with machines and mechanics.
            </p>
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              alt="Mechanical"
              className="mt-4 rounded-lg w-full h-48 object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default EngineeringPage;
