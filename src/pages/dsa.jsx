import { motion } from "framer-motion";
import { Code, BookOpen } from "lucide-react";

const DSA = () => {
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
      thumbnail: "https://img.youtube.com/vi/RBSGKlAvoiM/mqdefault.jpg",
    },
    {
      id: 2,
      title: "Arrays Explained",
      url: "https://www.youtube.com/watch?v=QJNwK2uJyGs",
      thumbnail: "https://img.youtube.com/vi/QJNwK2uJyGs/mqdefault.jpg",
    },
    {
      id: 3,
      title: "Linked Lists Tutorial",
      url: "https://www.youtube.com/watch?v=njTh_OwMljA",
      thumbnail: "https://img.youtube.com/vi/njTh_OwMljA/mqdefault.jpg",
    },
    {
      id: 4,
      title: "Stacks & Queues Explained",
      url: "https://www.youtube.com/watch?v=wjI1WNcIntg",
      thumbnail: "https://img.youtube.com/vi/wjI1WNcIntg/mqdefault.jpg",
    },
    {
      id: 5,
      title: "Trees & Graphs Basics",
      url: "https://www.youtube.com/watch?v=1XC3p2zBK34",
      thumbnail: "https://img.youtube.com/vi/1XC3p2zBK34/mqdefault.jpg",
    },
    {
      id: 6,
      title: "Sorting Algorithms",
      url: "https://www.youtube.com/watch?v=kgBjXUE_Nwc",
      thumbnail: "https://img.youtube.com/vi/kgBjXUE_Nwc/mqdefault.jpg",
    },
    {
      id: 7,
      title: "Dynamic Programming",
      url: "https://www.youtube.com/watch?v=oBt53YbR9Kk",
      thumbnail: "https://img.youtube.com/vi/oBt53YbR9Kk/mqdefault.jpg",
    },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 120 } },
  };

  const hoverEffect = {
    hover: { scale: 1.05, boxShadow: "0 10px 20px rgba(244, 114, 182, 0.3)" },
    tap: { scale: 0.95 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 relative overflow-hidden">
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
    </div>
  );
};

export default DSA;