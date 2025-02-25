import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, Home, BookOpen, Mail, UserPlus, X } from "lucide-react";
import { cn } from "@/lib/utils"; // Helper for conditional classNames

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/logo-h.png" alt="Elevatia Logo" className="h-10" />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 text-black dark:text-white font-semibold">
        <Link to="/home" className="flex items-center gap-2 hover:text-pink-500">
          <Home className="w-5 h-5" /> HOME
        </Link>
        <Link to="/blog" className="flex items-center gap-2 hover:text-pink-500">
          <BookOpen className="w-5 h-5" /> BLOG
        </Link>
        <Link to="/contact" className="flex items-center gap-2 hover:text-pink-500 font-bold">
          <Mail className="w-5 h-5" /> CONTACT US
        </Link>
      </nav>

      {/* Sign Up Button (Desktop) */}
      <Link to="/signup" className="hidden md:block">
        <Button>
          <UserPlus className="w-5 h-5 mr-2" />
          SIGN UP
        </Button>
      </Link>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={cn(
          "absolute top-16 left-0 w-full bg-white dark:bg-gray-100 shadow-lg p-4 flex flex-col items-center gap-4 transition-all duration-300",
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"
        )}
      >
        <Link to="/home" className="flex items-center gap-2 hover:text-pink-500">
          <Home className="w-5 h-5" /> HOME
        </Link>
        <Link to="/blog" className="flex items-center gap-2 hover:text-pink-500">
          <BookOpen className="w-5 h-5" /> BLOG
        </Link>
        <Link to="/contact" className="flex items-center gap-2 hover:text-pink-500 font-bold">
          <Mail className="w-5 h-5" /> CONTACT US
        </Link>
        <Link to="/signup">
          <Button className="w-full">
            <UserPlus className="w-5 h-5 mr-2" />
            SIGN UP
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
