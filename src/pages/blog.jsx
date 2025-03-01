import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Star, Globe, BookOpen, User, MessageCircle, PenTool } from 'lucide-react';
import React, { useEffect, useRef } from 'react';

const BlogPage = () => {
  const globeRef = useRef(null);
  
  // Create a rotating globe effect
  useEffect(() => {
    if (globeRef.current) {
      const handleMouseMove = (e) => {
        const x = (window.innerWidth / 2 - e.pageX) / 25;
        const y = (window.innerHeight / 2 - e.pageY) / 25;
        globeRef.current.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
      };
      
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Generate comets with different sizes and speeds
  const generateComets = (count) => {
    return [...Array(count)].map((_, i) => ({
      id: i,
      size: Math.random() * 5 + 2,
      duration: Math.random() * 3 + 1,
      delay: Math.random() * 5,
      top: Math.random() * 100,
      left: Math.random() * 100,
      opacity: Math.random() * 0.7 + 0.3
    }));
  };

  const comets = generateComets(15);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-indigo-900 to-gray-900 text-white font-sans p-6 md:p-10 relative overflow-hidden">
      {/* Background Stars */}
      <AnimatePresence>
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute bg-white rounded-full z-0"
            style={{
              width: Math.random() * 2 + 1,
              height: Math.random() * 2 + 1,
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
            animate={{ 
              opacity: [0.1, 0.8, 0.1],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </AnimatePresence>

      {/* GitHub-style Comets */}
      {comets.map(comet => (
        <motion.div
          key={`comet-${comet.id}`}
          className="absolute z-0"
          style={{
            top: `${comet.top}%`,
            left: `${comet.left}%`,
          }}
          initial={{ 
            x: -100, 
            y: -100, 
            opacity: 0 
          }}
          animate={{ 
            x: window.innerWidth + 100, 
            y: window.innerHeight + 100, 
            opacity: [0, comet.opacity, 0] 
          }}
          transition={{
            duration: comet.duration,
            repeat: Infinity,
            delay: comet.delay,
            ease: "linear"
          }}
        >
          <div 
            className="bg-blue-400 rounded-full" 
            style={{
              width: comet.size,
              height: comet.size,
              boxShadow: `0 0 ${comet.size * 2}px ${comet.size}px rgba(147, 197, 253, 0.7)`,
              transform: "rotate(-45deg)"
            }}
          />
          <div 
            className="absolute top-0 left-0"
            style={{
              width: comet.size * 10,
              height: 2,
              background: "linear-gradient(to left, rgba(147, 197, 253, 0.7), transparent)",
              transform: "translateX(-100%) rotate(-45deg)",
              transformOrigin: "right center"
            }}
          />
        </motion.div>
      ))}

      {/* 3D Globe */}
      <div className="absolute md:block hidden right-10 top-10 z-0 opacity-40">
        <motion.div 
          ref={globeRef}
          className="w-64 h-64 rounded-full bg-transparent relative"
          initial={{ opacity: 0, rotateY: 0 }}
          animate={{ opacity: 1, rotateY: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ perspective: "800px", transformStyle: "preserve-3d" }}
        >
          <div className="absolute inset-0 rounded-full bg-blue-900 opacity-30"></div>
          {/* Globe grid lines */}
          {[...Array(8)].map((_, i) => (
            <div 
              key={`grid-h-${i}`}
              className="absolute top-1/2 left-0 w-full h-0.5 bg-blue-500 opacity-30 transform -translate-y-1/2"
              style={{ transform: `rotateX(${i * 22.5}deg)` }}
            ></div>
          ))}
          {[...Array(8)].map((_, i) => (
            <div 
              key={`grid-v-${i}`}
              className="absolute top-0 left-1/2 w-0.5 h-full bg-blue-500 opacity-30 transform -translate-x-1/2"
              style={{ transform: `rotateY(${i * 22.5}deg)` }}
            ></div>
          ))}
          <div className="absolute inset-0 rounded-full" style={{ 
            background: "radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.8), rgba(30, 58, 138, 0.4), rgba(17, 24, 39, 0.1))",
            boxShadow: "0 0 40px 10px rgba(59, 130, 246, 0.3)"
          }}></div>
        </motion.div>
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Header Section */}
        <motion.header
          className="max-w-5xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-4">
              Welcome to Our Blog!
            </h1>
          </motion.div>
          <motion.p
            className="text-2xl text-blue-200"
            whileHover={{ scale: 1.02 }}
          >
            Empowering Minds, Sharing Knowledge
          </motion.p>
        </motion.header>

        {/* Introduction Section */}
        <motion.section
          className="max-w-4xl mx-auto mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            className="bg-gray-900 bg-opacity-60 backdrop-blur-md p-8 rounded-xl shadow-xl"
            whileHover={{ y: -5 }}
          >
            <p className="text-xl text-blue-100 leading-relaxed">
              Welcome to our official blog, a space where ideas thrive, knowledge is shared, and innovation takes center stage. Our mission is to create a platform where students, professionals, and enthusiasts can explore insightful content on technology, education, career growth, and personal development.
            </p>
            <p className="text-xl text-blue-100 leading-relaxed mt-4">
              This blog is more than just a collection of articles—it's a movement towards collaborative learning and meaningful discussions.
            </p>
          </motion.div>
        </motion.section>

        {/* Founders Section */}
        <motion.section
          className="max-w-5xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-12">
            Meet the Founders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Turanya Mishra",
                role: "3rd Year CSE, BPUT Rourkela",
                description: "A tech enthusiast with a keen interest in software development and artificial intelligence. Turanya is always on the lookout for innovative ways to simplify learning and inspire fellow students.",
                icon: <Rocket className="w-10 h-10 text-pink-500" />,image: "public/WhatsApp Image 2025-03-01 at 08.40.01_2831cc0c.jpg",
              },
              {
                name: "Ankita Pradhan",
                role: "3rd Year CSE, BPUT Rourkela",
                description: "Passionate about web development and cybersecurity. She believes in the power of technology to bring change and enjoys writing about new advancements and best practices in the field.",
                icon: <Globe className="w-10 h-10 text-purple-500" />,image: "/public/1712205437644.jpeg"
              },
              {
                name: "Rohan Kumar Jena",
                role: "3rd Year CSE, BPUT Rourkela",
                description: "An all-rounder in coding, design, and community building. With a strong background in full-stack development, he aims to bridge the gap between learning and implementation.",
                icon: <User className="w-10 h-10 text-blue-500" />,  image:"public/photo.jpg"
              },
            {                          
                name: "Prayas Das",
                role: "2nd Year EE, BPUT Rourkela",
                description: "Brings a unique perspective on interdisciplinary topics. His insights on interdisciplinary topics and real-world applications make his contributions valuable and engaging.",
                icon: <Star className="w-10 h-10 text-indigo-500" />,  image:"public/Screenshot 2025-03-01 002602.png"
              },
            ].map((founder, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 bg-opacity-70 backdrop-blur-md p-8 rounded-xl shadow-xl border border-gray-700"
                  whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      {/* Image with gradient overlay */}
                      <div className="w-32 h-32 rounded-xl overflow-hidden relative shadow-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
                        <img 
                          src={founder.image} // Use the image URL from the founder object
                          alt={founder.name} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"
                          animate={{ opacity: [0.6, 0.4, 0.6] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        ></motion.div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gradient bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent mb-2">
                        {founder.name}
                      </h3>
                      <p className="text-blue-300 font-medium mb-4">{founder.role}</p>
                      <p className="text-gray-300 leading-relaxed">{founder.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

        {/* Topics Section */}
        <motion.section
          className="max-w-5xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-12">
            What You'll Find Here
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Tech & Programming",
                description: "Deep dives into software development, programming tutorials, and emerging technologies.",
                icon: <BookOpen className="w-10 h-10 text-pink-500" />,
                gradient: "from-pink-500 to-red-500"
              },
              {
                title: "College Life & Experiences",
                description: "Insights into student life, tips for success, and personal experiences from university.",
                icon: <User className="w-10 h-10 text-purple-500" />,
                gradient: "from-purple-500 to-indigo-500"
              },
              {
                title: "Career & Internships",
                description: "Guidance on job hunting, resume building, interview preparation, and industry trends.",
                icon: <MessageCircle className="w-10 h-10 text-blue-500" />,
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                title: "Personal Growth",
                description: "Articles on productivity, motivation, and self-improvement to help you excel in every aspect of life.",
                icon: <PenTool className="w-10 h-10 text-indigo-500" />,
                gradient: "from-indigo-500 to-blue-500"
              },
            ].map((topic, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 bg-opacity-70 backdrop-blur-md p-8 rounded-xl shadow-xl border border-gray-700 overflow-hidden relative"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient background effect */}
                <motion.div 
                  className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${topic.gradient}`}
                  animate={{ height: ["0%", "100%"] }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                ></motion.div>
                
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${topic.gradient}`}>
                    {topic.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {topic.title}
                  </h3>
                </div>
                <p className="text-gray-300 text-lg ml-16">{topic.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="max-w-4xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.div
            className="bg-gray-900 bg-opacity-60 backdrop-blur-md p-10 rounded-xl shadow-xl border border-gray-800"
            whileHover={{ y: -5 }}
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-6">
              Join Our Community!
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              We believe that learning is a two-way street. Whether you're here to read, contribute, or engage with us, we'd love to hear from you. Drop your thoughts in the comments, reach out with suggestions, or even become a guest writer!
            </p>
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-10 py-4 rounded-xl font-bold text-xl shadow-lg transition-all">
                Get Started
              </button>
            </motion.div>
            
            <motion.p 
              className="mt-10 text-xl font-bold"
              animate={{ 
                scale: [1, 1.05, 1],
                color: ["rgb(219, 39, 119)", "rgb(124, 58, 237)", "rgb(37, 99, 235)", "rgb(219, 39, 119)"]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              🚀 Stay tuned for exciting content! 🎉
            </motion.p>
          </motion.div>
        </motion.section>
      </div>

      {/* Floating Rocket */}
      <motion.div
        className="fixed bottom-10 right-10 z-20"
        initial={{ opacity: 0, y: 100 }}
        animate={{ 
          opacity: 1, 
          y: [0, -20, 0],
          x: [0, 10, 0]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 1
        }}
      >
        <div className="relative">
          <Rocket className="w-20 h-20 text-pink-500" />
          <motion.div
            className="absolute bottom-0 w-10 h-14 left-1/2 transform -translate-x-1/2"
            style={{
              background: "linear-gradient(to top, transparent, #ec4899, #8b5cf6)",
              borderRadius: "50% 50% 0 0",
              transformOrigin: "bottom center",
              filter: "blur(10px)"
            }}
            animate={{
              height: [10, 20, 10],
              opacity: [0.7, 0.9, 0.7]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default BlogPage;