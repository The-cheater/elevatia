import { 
  HeartHandshake, BotMessageSquare, Rocket, MailPlus, 
  Sparkles, ClipboardList, ArrowRight, Flower2, Gem
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const EmailTemplates = () => {
  const navigate = useNavigate();
  const templates = [
    { 
      icon: <HeartHandshake size={48} className="text-pink-600" />, 
      title: "REFERENCE REQUEST",
      color: "from-pink-100 to-pink-50",
      decorator: <Flower2 className="text-pink-200" />,
      route: "/lor"
    },
    { 
      icon: <BotMessageSquare size={48} className="text-purple-600" />, 
      title: "OFFER RESPONSE",
      color: "from-purple-100 to-purple-50",
      decorator: <Sparkles className="text-purple-300" />
    },
    { 
      icon: <Rocket size={48} className="text-rose-600" />, 
      title: "JOB APPLICATION",
      color: "from-rose-100 to-rose-50",
      decorator: <Gem className="text-rose-300" />
    },
    { 
      icon: <MailPlus size={48} className="text-fuchsia-600" />, 
      title: "INTERNSHIP INQUIRY",
      color: "from-fuchsia-100 to-fuchsia-50",
      decorator: <Sparkles className="text-fuchsia-300" />
    },
  ];

  const handleTemplateClick = (template) => {
    if (template.route) {
      navigate(template.route);
    }
  };

  const floatingVariants = {
    float: {
      y: [0, -20, 0],
      rotate: [0, -5, 5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-rose-50 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <motion.div
        className="absolute top-20 -left-20 opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <Flower2 size={400} className="text-pink-200" />
      </motion.div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            className="flex justify-center mb-6"
            variants={{ float: { scale: [1, 1.1, 1] }}}
            animate="float"
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Sparkles size={64} className="text-pink-400" />
          </motion.div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Professional Email Suite
          </h1>
          <p className="text-lg text-pink-700/90 max-w-2xl mx-auto">
            Beautifully crafted email templates for your career journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {templates.map((template, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleTemplateClick(template)}
              className={`bg-gradient-to-br ${template.color} rounded-2xl p-8 cursor-pointer group relative overflow-hidden border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300`}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="flex flex-col items-center space-y-6">
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.div
                    className="absolute -top-4 -right-4"
                    variants={floatingVariants}
                    animate="float"
                  >
                    {template.decorator}
                  </motion.div>
                  {template.icon}
                </motion.div>
                
                <h3 className="text-xl font-semibold text-gray-800 text-center">
                  {template.title}
                </h3>
                
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  className="mt-4 px-6 py-2 bg-white/90 text-pink-600 rounded-full shadow-sm border border-pink-200/50 flex items-center gap-2 relative overflow-hidden group/btn"
                >
                  <span>Use Template</span>
                  <AnimatePresence>
                    <motion.div
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      className="inline-block"
                    >
                      <ArrowRight className="text-pink-500" />
                    </motion.div>
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </div>

              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-white/30 pointer-events-none"
                animate={{
                  borderColor: ['rgba(255,255,255,0.3)', 'rgba(255,182,193,0.5)', 'rgba(255,255,255,0.3)'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Floating decorative elements */}
        <motion.div
          className="absolute top-1/3 right-0 opacity-15"
          animate={{
            y: [-20, 20],
            rotate: [0, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          <ClipboardList size={200} className="text-pink-200" />
        </motion.div>
      </div>

      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10 z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern 
            id="pink-pattern" 
            x="0" 
            y="0" 
            width="40" 
            height="40" 
            patternUnits="userSpaceOnUse"
          >
            <path 
              d="M0 40L40 0H20L0 20M40 40V20L20 40" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1"
              className="text-pink-100"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#pink-pattern)" />
        </svg>
      </div>
    </div>
  );
};

export default EmailTemplates;