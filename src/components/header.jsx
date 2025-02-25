import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/logo-h.png" alt="Elevatia Logo" className="h-10" />
      </div>

      {/* Navigation */}
      <nav className="flex space-x-6 text-black font-semibold">
        <Link to="/home" className="hover:text-pink-500">
          HOME
        </Link>
        <Link to="/blog" className="hover:text-pink-500">
          BLOG
        </Link>
        <Link to="/contact" className="hover:text-pink-500 font-bold">
          CONTACT US
        </Link>
      </nav>

      {/* Sign Up Button */}
      <Link to="/signup">
        <Button variant="cherryPink">
          SIGN UP
        </Button>
      </Link>
    </header>
  );
};

export default Header;
