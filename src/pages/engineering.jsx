import { motion } from "framer-motion";
import { Laptop, Cpu, Zap, HardHat, Settings } from "lucide-react"; // Icons for each branch

const EngineeringPage = () => {
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
          {/* Computer Science */}
          <motion.div
            variants={itemVariants}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <a href="/cse" className="block">
              <Laptop className="w-12 h-12 text-pink-600 mx-auto" />
              <h2 className="text-xl font-semibold text-pink-600 mt-4 text-center">
                Computer Science
              </h2>
            </a>
            <p className="mt-2 text-gray-600 text-center">
              Dive into the world of coding, algorithms, and software
              development.
            </p>
            <a href="/cse">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                alt="Computer Science"
                className="mt-4 rounded-lg w-full h-48 object-cover"
              />
            </a>
          </motion.div>

          {/* Electronics */}
          <motion.div
            variants={itemVariants}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <a href="/ece" className="block">
              <Cpu className="w-12 h-12 text-pink-600 mx-auto" />
              <h2 className="text-xl font-semibold text-pink-600 mt-4 text-center">
                Electronics
              </h2>
            </a>
            <p className="mt-2 text-gray-600 text-center">
              Explore circuits, microcontrollers, and embedded systems.
            </p>
            <a href="/ece">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                alt="Electronics"
                className="mt-4 rounded-lg w-full h-48 object-cover"
              />
            </a>
          </motion.div>

          {/* Electrical */}
          <motion.div
            variants={itemVariants}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <Zap className="w-12 h-12 text-pink-600 mx-auto" />
            <h2 className="text-xl font-semibold text-pink-600 mt-4 text-center">
              Electrical
            </h2>
            <p className="mt-2 text-gray-600 text-center">
              Learn about power systems, motors, and renewable energy.
            </p>
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              alt="Electrical"
              className="mt-4 rounded-lg w-full h-48 object-cover"
            />
          </motion.div>

          {/* Civil */}
          <motion.div
            variants={itemVariants}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <a href="/civil" className="block">
              <HardHat className="w-12 h-12 text-pink-600 mx-auto" />
              <h2 className="text-xl font-semibold text-pink-600 mt-4 text-center">
                Civil
              </h2>
            </a>
            <p className="mt-2 text-gray-600 text-center">
              Build the future with infrastructure and construction.
            </p>
            <a href="/civil">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                alt="Civil"
                className="mt-4 rounded-lg w-full h-48 object-cover"
              />
            </a>
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
