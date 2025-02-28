import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: "", password: "", name: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!formData.email || !formData.password) {
      setError("Email and password are required.");
      return;
    }

    // Directly navigate to dashboard after validation
    navigate("/dashboard");
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
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"
    >
      <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-md space-y-4 text-center text-white"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight animate-pulse">
            STUDENT DASHBOARD
          </h1>
          <p className="text-xl md:text-2xl font-medium">
            START YOUR JOURNEY NOW!!
          </p>
        </motion.div>
      </div>

      <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-full max-w-md bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-xl space-y-6"
        >
          <div className="text-center space-y-2">
            <motion.h2 
              key={isLogin ? "login" : "register"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent"
            >
              {isLogin ? "Welcome Back!" : "Create Account"}
            </motion.h2>
            <p className="text-muted-foreground">
              {isLogin ? "Access your personalized dashboard" : "Start your journey with us"}
            </p>
          </div>

          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-red-500 text-center p-3 rounded-lg bg-red-100"
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {!isLogin && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-2"
                >
                  <Input
                    placeholder="Name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="transition-all focus:ring-2 focus:ring-indigo-500"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <Input
              placeholder="Email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="transition-all focus:ring-2 focus:ring-indigo-500"
            />

            <Input
              placeholder="Password"
              type="password"
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="transition-all focus:ring-2 focus:ring-indigo-500"
            />

            <Button 
              className={`w-full transition-colors ${
                isLogin 
                  ? "bg-indigo-600 hover:bg-indigo-700" 
                  : "bg-emerald-600 hover:bg-emerald-700"
              }`}
              type="submit"
            >
              {isLogin ? "Login" : "Register"}
            </Button>
          </form>

          <Button 
            variant="link" 
            onClick={() => setIsLogin(!isLogin)}
            className={`text-sm ${
              isLogin 
                ? "text-emerald-600 hover:text-emerald-700" 
                : "text-indigo-600 hover:text-indigo-700"
            }`}
          >
            {isLogin ? "Create new account" : "Already have an account?"}
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}