import { motion } from "framer-motion";
import { Code, Database, Cloud, BrainCircuit, Network, Smartphone, Lock, Bug, Webhook } from "lucide-react";

const CSERoadmapPage = () => {
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

  return (
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
      {[...Array(10)].map((_, i) => (
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
    </div>
  );
};

export default CSERoadmapPage;