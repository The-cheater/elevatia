import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Database, Cloud, BrainCircuit, Network, Smartphone, Lock, Bug, Webhook, Cpu, BookOpen } from "lucide-react";

const CSERoadmapPage = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Course buttons data
  const courses = [
    {
      id: 1,
      title: "Data Structures & Algorithms",
      icon: <Code className="w-8 h-8" />,
      color: "bg-pink-500",
      hoverColor: "hover:bg-pink-600",
    },
    {
      id: 2,
      title: "Database Management",
      icon: <Database className="w-8 h-8" />,
      color: "bg-purple-500",
      hoverColor: "hover:bg-purple-600",
    },
    {
      id: 3,
      title: "Cloud Computing",
      icon: <Cloud className="w-8 h-8" />,
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
    },
    {
      id: 4,
      title: "Artificial Intelligence",
      icon: <BrainCircuit className="w-8 h-8" />,
      color: "bg-teal-500",
      hoverColor: "hover:bg-teal-600",
    },
    {
      id: 5,
      title: "Networking",
      icon: <Network className="w-8 h-8" />,
      color: "bg-indigo-500",
      hoverColor: "hover:bg-indigo-600",
    },
    {
      id: 6,
      title: "Mobile Development",
      icon: <Smartphone className="w-8 h-8" />,
      color: "bg-orange-500",
      hoverColor: "hover:bg-orange-600",
    },
    {
      id: 7,
      title: "Cybersecurity",
      icon: <Lock className="w-8 h-8" />,
      color: "bg-red-500",
      hoverColor: "hover:bg-red-600",
    },
    {
      id: 8,
      title: "Machine Learning",
      icon: <Cpu className="w-8 h-8" />,
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600",
    },
    {
      id: 9,
      title: "Software Testing",
      icon: <Bug className="w-8 h-8" />,
      color: "bg-yellow-500",
      hoverColor: "hover:bg-yellow-600",
    },
    {
      id: 10,
      title: "Web Development",
      icon: <Webhook className="w-8 h-8" />,
      color: "bg-pink-500",
      hoverColor: "hover:bg-pink-600",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 10 },
    },
  };

  const buttonHover = {
    hover: { scale: 1.05, y: -5 },
    tap: { scale: 0.95 },
  };

  // Handler for course selection
  const handleCourseClick = (courseId) => {
    setSelectedCourse(courseId);
  };

  // Render DSA component when selected
  const renderDSA = () => {
    if (selectedCourse !== 1) return null;

    // DSA Roadmap Data
    const roadmap = [
      {
        id: 1,
        title: "Introduction to DSA",
        description: "Learn the basics of Data Structures and Algorithms.",
        icon: <BookOpen className="w-6 h-6 text-pink-600" />,
      },
      {
        id: 2,
        title: "Arrays & Strings",
        description: "Master array manipulation and string operations.",
        icon: <Code className="w-6 h-6 text-pink-600" />,
      },
      {
        id: 3,
        title: "Linked Lists",
        description: "Understand singly, doubly, and circular linked lists.",
        icon: <Code className="w-6 h-6 text-pink-600" />,
      },
      {
        id: 4,
        title: "Stacks & Queues",
        description: "Learn stack and queue implementations and applications.",
        icon: <Code className="w-6 h-6 text-pink-600" />,
      },
      {
        id: 5,
        title: "Trees & Graphs",
        description: "Explore binary trees, BSTs, and graph traversals.",
        icon: <Code className="w-6 h-6 text-pink-600" />,
      },
      {
        id: 6,
        title: "Sorting & Searching",
        description: "Study sorting algorithms and search techniques.",
        icon: <Code className="w-6 h-6 text-pink-600" />,
      },
      {
        id: 7,
        title: "Dynamic Programming",
        description: "Solve problems using DP and memoization.",
        icon: <Code className="w-6 h-6 text-pink-600" />,
      },
    ];

    // YouTube Links with Thumbnails
    const youtubeLinks = [
      {
        id: 1,
        title: "Introduction to DSA",
        url: "https://www.youtube.com/watch?v=RBSGKlAvoiM",
        thumbnail: "/api/placeholder/320/180",
      },
      {
        id: 2,
        title: "Arrays Explained",
        url: "https://www.youtube.com/watch?v=QJNwK2uJyGs",
        thumbnail: "/api/placeholder/320/180",
      },
      {
        id: 3,
        title: "Linked Lists Tutorial",
        url: "https://www.youtube.com/watch?v=njTh_OwMljA",
        thumbnail: "/api/placeholder/320/180",
      },
      {
        id: 4,
        title: "Stacks & Queues Explained",
        url: "https://www.youtube.com/watch?v=wjI1WNcIntg",
        thumbnail: "/api/placeholder/320/180",
      },
      {
        id: 5,
        title: "Trees & Graphs Basics",
        url: "https://www.youtube.com/watch?v=1XC3p2zBK34",
        thumbnail: "/api/placeholder/320/180",
      },
      {
        id: 6,
        title: "Sorting Algorithms",
        url: "https://www.youtube.com/watch?v=kgBjXUE_Nwc",
        thumbnail: "/api/placeholder/320/180",
      },
      {
        id: 7,
        title: "Dynamic Programming",
        url: "https://www.youtube.com/watch?v=oBt53YbR9Kk",
        thumbnail: "/api/placeholder/320/180",
      },
    ];

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 relative overflow-hidden"
      >
        {/* Animated Background Gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-pink-200 to-purple-200 opacity-50"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />

        {/* Back Button */}
        <motion.button
          onClick={() => setSelectedCourse(null)}
          className="absolute top-4 left-4 bg-pink-500 text-white px-4 py-2 rounded-lg z-20 hover:bg-pink-600 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Back to Roadmap
        </motion.button>

        {/* Floating Icons */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-300"
            style={{
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              rotate: [0, 360],
              opacity: [0.5, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Code size={24} />
          </motion.div>
        ))}

        {/* Header Section */}
        <motion.div
          className="bg-gradient-to-r from-pink-600 to-purple-600 py-16 text-center relative z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-white">Data Structures & Algorithms</h1>
          <p className="mt-2 text-pink-100">Master the fundamentals of DSA with this roadmap and resources.</p>
        </motion.div>

        {/* Roadmap Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto px-6 py-12 relative z-10"
        >
          <h2 className="text-3xl font-bold text-pink-800 mb-8">DSA Roadmap</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roadmap.map((step) => (
              <motion.div
                key={step.id}
                variants={itemVariants}
                whileHover="hover"
                whileTap="tap"
                className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-pink-100/50"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-pink-50 rounded-lg">{step.icon}</div>
                  <h3 className="text-xl font-semibold text-pink-800">{step.title}</h3>
                </div>
                <p className="text-pink-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* YouTube Links Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto px-6 py-12 relative z-10"
        >
          <h2 className="text-3xl font-bold text-pink-800 mb-8">YouTube Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {youtubeLinks.map((video) => (
              <motion.a
                key={video.id}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover="hover"
                whileTap="tap"
                className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-pink-100/50"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-pink-800">{video.title}</h3>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <>
      {selectedCourse === 1 ? (
        renderDSA()
      ) : (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 relative overflow-hidden">
          {/* Background elements */}
          <motion.div
            className="absolute top-20 -left-20 opacity-10"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            <Code size={400} className="text-pink-200" />
          </motion.div>

          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
            className="bg-gradient-to-r from-pink-600 to-purple-600 py-16 text-center relative overflow-hidden"
          >
            <motion.h1
              className="text-4xl font-bold text-white"
              whileHover={{ scale: 1.05 }}
            >
              CSE Roadmap
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-2 text-pink-100"
            >
              Explore the key areas of Computer Science and Engineering
            </motion.p>
          </motion.div>

          {/* Buttons Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {courses.map((course) => (
              <motion.div
                key={course.id}
                variants={itemVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <motion.button
                  variants={buttonHover}
                  className={`w-full ${course.color} ${course.hoverColor} text-white p-6 rounded-xl shadow-lg flex flex-col items-center gap-4 transition-colors`}
                  onClick={() => handleCourseClick(course.id)}
                >
                  <div className="p-4 bg-white/20 rounded-full">
                    {course.icon}
                  </div>
                  <h2 className="text-xl font-semibold text-center">
                    {course.title}
                  </h2>
                </motion.button>
              </motion.div>
            ))}
          </motion.div>

          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-pink-300 rounded-full"
              style={{
                width: Math.random() * 10 + 5,
                height: Math.random() * 10 + 5,
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 100 - 50, 0],
                opacity: [0.5, 1, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}

          {/* Additional animated graphics */}
          <motion.div
            className="absolute bottom-0 right-0 opacity-20"
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          >
            <Database size={300} className="text-purple-200" />
          </motion.div>

          <motion.div
            className="absolute top-0 right-0 opacity-20"
            animate={{ rotate: -360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            <Cloud size={300} className="text-blue-200" />
          </motion.div>
        </div>
      )}
    </>
  );
};

export default CSERoadmapPage;