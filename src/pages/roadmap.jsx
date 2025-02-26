import { motion } from "framer-motion";
import { Code, BookOpen, Layers, TrendingUp, Rocket, Sparkles, ArrowRight } from "lucide-react";

const DSARoadmapPage = () => {
  // Roadmap data
  const roadmapSteps = [
    {
      id: 1,
      title: "Programming Basics",
      description: "Master the fundamentals of programming in C/C++ or Python.",
      icon: <Code className="w-8 h-8 text-pink-600" />,
      image: "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6",
    },
    {
      id: 2,
      title: "Data Structures",
      description: "Learn arrays, linked lists, stacks, queues, and trees.",
      icon: <Layers className="w-8 h-8 text-pink-600" />,
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    },
    {
      id: 3,
      title: "Algorithms",
      description: "Understand sorting, searching, and dynamic programming.",
      icon: <TrendingUp className="w-8 h-8 text-pink-600" />,
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
    },
    {
      id: 4,
      title: "Problem Solving",
      description: "Practice on platforms like LeetCode and Codeforces.",
      icon: <Rocket className="w-8 h-8 text-pink-600" />,
      image: "https://images.unsplash.com/photo-1534665482403-a909d0d97c67",
    },
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
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 10 },
    },
  };

  const iconFloat = {
    float: {
      y: [0, -15, 0],
      rotate: [0, -5, 5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 relative overflow-hidden">
      {/* Background elements */}
      <motion.div
        className="absolute top-20 -left-20 opacity-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <Sparkles size={400} className="text-pink-200" />
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
          DSA Roadmap
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-2 text-pink-100"
        >
          Master Data Structures and Algorithms step by step
        </motion.p>
      </motion.div>

      {/* Roadmap Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-6 py-12"
      >
        <div className="space-y-8">
          {roadmapSteps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden"
              whileHover={{ y: -5 }}
            >
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100"
                initial={{ x: "-100%" }}
                animate={{
                  x: "100%",
                  transition: {
                    duration: 1.2,
                    repeat: Infinity,
                  },
                }}
              />

              {/* Image Section */}
              <motion.div
                className="relative overflow-hidden rounded-l-xl"
                whileHover={{ scale: 1.05 }}
              >
                <motion.img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-48 md:h-full object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-pink-600/20 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>

              {/* Content Section */}
              <div className="p-6">
                <motion.div
                  variants={iconFloat}
                  animate="float"
                  className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center mb-4"
                >
                  {step.icon}
                </motion.div>

                <motion.h2
                  className="text-2xl font-bold text-pink-600"
                  whileHover={{ scale: 1.02 }}
                >
                  {step.title}
                </motion.h2>
                <motion.p
                  className="mt-2 text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {step.description}
                </motion.p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 px-6 py-2 bg-pink-50 text-pink-600 rounded-full flex items-center gap-2 hover:bg-pink-100 transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
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

export default DSARoadmapPage;