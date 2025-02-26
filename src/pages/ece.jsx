import { 
  CircuitBoard,
  Cpu,
  FlaskConical,
  MonitorCheck,
  Download
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Electronics() {
  const courseSections = [
    {
      title: "Core Electronics",
      icon: <CircuitBoard className="w-5 h-5 text-pink-600" />,
      items: [
        { name: "Analog Circuit Design", url: "#" },
        { name: "Digital Electronics Lab", url: "#" },
        { name: "Semiconductor Physics", url: "#" }
      ],
      image: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Advanced Systems",
      icon: <Cpu className="w-5 h-5 text-pink-600" />,
      items: [
        { name: "Embedded Systems Design", url: "#" },
        { name: "IoT & Wireless Communication", url: "#" },
        { name: "VLSI Design Fundamentals", url: "#" }
      ],
      image: "https://plus.unsplash.com/premium_photo-1663040598592-9f3e311f9841?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxlY3Ryb25pY3MlMjBsYWJ8ZW58MHx8MHx8fDA%3D"
    },
    {
      title: "Lab & Projects",
      icon: <FlaskConical className="w-5 h-5 text-pink-600" />,
      items: [
        { name: "PCB Design Tutorials", url: "#" },
        { name: "Arduino/Raspberry Pi Guides", url: "#" },
        { name: "Robotics Projects", url: "#" },
        { name: "Circuit Simulation Files", url: "#", icon: <Download className="w-4 h-4 mr-2 text-pink-600" /> }
      ],
      image: "https://images.unsplash.com/photo-1672689933227-2ce1249c46a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGVsZWN0cm9uaWNzJTIwbGFifGVufDB8fDB8fHww"
    }
  ];

  // Neon floating animation
  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Cyberpunk hover effect
  const hoverEffect = {
    scale: 1.05,
    rotate: -0.5,
    boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.3)",
    borderColor: "#3b82f6"
  };

  // Animated circuit particles
  const CircuitParticles = () => (
    <div className="absolute inset-0 overflow-hidden opacity-50">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-0.5 h-4 bg-pink-400"
          initial={{
            x: Math.random() * 100 + "%",
            y: -50,
            opacity: 0,
            rotate: Math.random() * 180
          }}
          animate={{
            y: "100vh",
            opacity: [0, 0.8, 0],
            scaleX: [0.5, 1.2, 0.5]
          }}
          transition={{
            duration: Math.random() * 4 + 6,
            repeat: Infinity,
            delay: Math.random() * 3
          }}
          style={{
            boxShadow: "0 0 8px #60a5fa"
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br  from-pink-50 to-purple-50 overflow-hidden relative">
      <CircuitParticles />

      <main className="max-w-4xl mx-auto px-4 py-12 relative z-10">
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
              style={{ textShadow: "0 0 8px rgba(96,165,250,0.4)" }}
            >
              {"Electronics Engineering".split("").map((char, i) => (
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
              className="relative bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-blue-400/20 overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-100/30 to-purple-100/30 opacity-0 hover:opacity-100 transition-opacity"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.5 }}
              />

              <div className="flex items-center mb-6">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="p-3 bg-pink-50 rounded-lg border"
                >
                  {section.icon}
                </motion.div>
                <h2 className="ml-4 text-2xl font-bold text-pink-800">{section.title}</h2>
              </div>

              <motion.img 
                src={section.image} 
                alt={section.title}
                className="w-full h-56 object-cover rounded-xl mb-6 border"
                whileHover={{ scale: 1.02 }}
              />

              <motion.ul className="space-y-4">
                {section.items.map((item, idx) => (
                  <motion.li
                    key={idx}
                    whileHover={{ x: 10 }}
                    className="hover:bg-pink-50 p-3 rounded-lg transition-colors border border-transparent hover:border-blue-400/20"
                  >
                    <a 
                      href={item.url}
                      className="flex items-center text-pink-700 hover:text-pink-900 font-medium"
                    >
                      {item.icon || <MonitorCheck className="w-5 h-5 mr-3 text-pink-600" />}
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