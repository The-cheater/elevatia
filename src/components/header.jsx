import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, Home, BookOpen, Mail, UserPlus, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navItems = [
    { path: "/", label: "HOME", icon: Home },
    { path: "/blog", label: "BLOG", icon: BookOpen },
    { path: "/contact-us", label: "CONTACT US", icon: Mail },
  ];

  const mobileMenuVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: {
      y: -50,
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  const headerVariants = {
    scrolled: {
      height: "70px",
      boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
      backdropFilter: "blur(10px)",
      transition: { duration: 0.3 },
    },
    normal: {
      height: "90px",
      boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
      backdropFilter: "blur(0px)",
      transition: { duration: 0.3 },
    },
  };
// For all page components, use this structure:
const YourPageComponent = () => {
  return (
    <div className="min-h-screen bg-your-color relative overflow-hidden">
      {/* Background elements */}
      
      <div className="page-container">
        {/* Header */}
        
        <main className="w-full">
          {/* Your content */}
        </main>

        {/* Footer */}
      </div>
    </div>
  );
};
  return (
    <motion.header
      className="flex w-full top-0 z-50 px-6 py-4 bg-gradient-to-r from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 backdrop-blur-lg"
      initial={false}
      animate={isScrolled ? "scrolled" : "normal"}
      variants={headerVariants}
    >
      <div className="flex items-center justify-between h-full max-w-7xl mx-auto w-full">
        {/* Logo on left that links to /landing */}
        <div className="flex-1">
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <motion.img
                src="/logo-h.png"
                alt="Elevatia Logo"
                className="h-10"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          </Link>
        </div>

        {/* Desktop Navigation with magnetic hover effect */}

        <nav className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.path}
              className="relative"
              whileHover="hover"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={item.path}
                className="flex items-center gap-2 text-black dark:text-white font-medium group"
              >
                <item.icon className="w-5 h-5 transition-colors" />

                <motion.span
                  className="relative"
                  variants={{
                    hover: { color: "#ec4899" },
                  }}
                >
                  {item.label}

                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-500"
                    variants={{
                      hover: { width: "100%" },
                    }}
                    initial={{ width: 0 }}
                  />
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Sign Up button on right */}
        <div className="flex-1 flex justify-end">
          {/* Animated Sign Up Button */}

          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/login">
              <Button
                asChild
                className="bg-[#FF4D6D] text-white hover:bg-[#E84360] active:bg-[#D63A54] transition-all duration-200 rounded-2xl shadow-md relative overflow-hidden"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <UserPlus className="w-5 h-5 mr-2" />
                  LOGIN
                  <motion.div
                    className="absolute inset-0 bg-white/10"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{
                      repeat: Infinity,

                      duration: 2,

                      delay: Math.random() * 2,
                    }}
                  />
                </motion.div>
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <motion.div className="md:hidden" whileTap={{ scale: 0.95 }}>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="relative"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          {!isOpen && (
            <motion.div
              className="absolute inset-0 border-2 border-pink-900 rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          )}
        </Button>
      </motion.div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 w-full bg-pink-500 shadow-xl"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="p-4 space-y-4">
              {[
                { path: "/", label: "Home" },
                { path: "/blog", label: "Blog" },
                { path: "/contact", label: "Contact Us" },
              ].map((item) => (
                <motion.div
                  key={item.path}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.path}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-pink-400"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="pt-4 border-t border-pink-400"
              >
                <Link to="/signup">
                  <Button className="w-full">
                    <UserPlus className="w-5 h-5 mr-2" />
                    SIGN UP
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
