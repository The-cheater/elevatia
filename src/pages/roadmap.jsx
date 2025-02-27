import { motion } from "framer-motion";
import { Code, Database, Cloud, BrainCircuit, Network, Smartphone, Lock, Bug, Webhook, BrainCog } from "lucide-react";

const CSERoadmapPage = () => {
  const courses = [
    {
      id: 1,
      title: "Data Structures & Algorithms",
      icon: <Code className="w-8 h-8" />,
      color: "bg-pink-500",
      hoverColor: "hover:bg-pink-600",
      children: [2, 3, 4, 5]
    },
    {
      id: 2,
      title: "Database Management",
      icon: <Database className="w-8 h-8" />,
      color: "bg-purple-500",
      hoverColor: "hover:bg-purple-600",
      children: [10]
    },
    {
      id: 3,
      title: "Cloud Computing",
      icon: <Cloud className="w-8 h-8" />,
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
      children: [7, 9]
    },
    {
      id: 4,
      title: "Artificial Intelligence",
      icon: <BrainCircuit className="w-8 h-8" />,
      color: "bg-teal-500",
      hoverColor: "hover:bg-teal-600",
      children: [8]
    },
    {
      id: 5,
      title: "Networking",
      icon: <Network className="w-8 h-8" />,
      color: "bg-indigo-500",
      hoverColor: "hover:bg-indigo-600",
      children: [6]
    },
    {
      id: 6,
      title: "Mobile Development",
      icon: <Smartphone className="w-8 h-8" />,
      color: "bg-orange-500",
      hoverColor: "hover:bg-orange-600"
    },
    {
      id: 7,
      title: "Cybersecurity",
      icon: <Lock className="w-8 h-8" />,
      color: "bg-red-500",
      hoverColor: "hover:bg-red-600"
    },
    {
      id: 8,
      title: "Machine Learning",
      icon: <BrainCog className="w-8 h-8" />,
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600"
    },
    {
      id: 9,
      title: "Software Testing",
      icon: <Bug className="w-8 h-8" />,
      color: "bg-yellow-500",
      hoverColor: "hover:bg-yellow-600"
    },
    {
      id: 10,
      title: "Web Development",
      icon: <Webhook className="w-8 h-8" />,
      color: "bg-pink-500",
      hoverColor: "hover:bg-pink-600"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 120, damping: 10 } }
  };

  const buttonHover = {
    hover: { scale: 1.05, rotate: [0, -5, 5, -5, 0] },
    tap: { scale: 0.95 }
  };

  const renderNode = (courseId, level = 0) => {
    const course = courses.find(c => c.id === courseId);
    return (
      <div key={course.id} className="flex flex-col items-center">
        <motion.div
          variants={itemVariants}
          className={`relative ${level > 0 ? 'mt-16' : ''}`}
        >
          {level > 0 && (
            <motion.div
              className="absolute -top-8 left-1/2 w-px h-8 bg-gradient-to-b from-pink-300 to-purple-300"
              initial={{ height: 0 }}
              animate={{ height: 32 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
          )}
          <motion.button
            variants={buttonHover}
            whileHover="hover"
            whileTap="tap"
            className={`${course.color} ${course.hoverColor} text-white p-6 rounded-xl shadow-lg flex flex-col items-center gap-4 transition-colors relative z-10`}
          >
            <div className="p-4 bg-white/20 rounded-full">
              {course.icon}
            </div>
            <h2 className="text-xl font-semibold text-center">
              {course.title}
            </h2>
          </motion.button>
        </motion.div>

        {course.children && (
          <div className="flex gap-8 mt-8 relative">
            {course.children.map((childId, index) => (
              <div key={childId} className="relative">
                {index > 0 && (
                  <motion.div
                    className="absolute left-1/2 -translate-x-full top-1/2 w-8 h-px bg-gradient-to-r from-pink-300 to-purple-300"
                    initial={{ width: 0 }}
                    animate={{ width: 32 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  />
                )}
                {renderNode(childId, level + 1)}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-pink-200 to-purple-200 opacity-50"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror"
        }}
      />

      {/* Floating Particles */}
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

      {/* Header Section */}
      <motion.div
        className="bg-gradient-to-r from-pink-600 to-purple-600 py-16 text-center relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-white">CSE Roadmap</h1>
        <p className="mt-2 text-pink-100">Explore the Computer Science Engineering Hierarchy</p>
      </motion.div>

      {/* Roadmap Tree */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-6 py-12 flex justify-center relative z-10"
      >
        {renderNode(1)}
      </motion.div>
    </div>
  );
};

export default CSERoadmapPage;