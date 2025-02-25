import Header from '/src/components/header';
import { Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PhoneIcon, MailIcon } from "lucide-react";


const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="grid-background"></div>
      
      <main className="flex-1 container">
        <Header />
        <Outlet />
      </main>

      <footer className="bg-gray-900 text-gray-300 mt-auto">
        <div className="container px-4 md:px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">ELEVATIA</h3>
            <p className="text-sm">
              123 Horizon Road, Madhya Pradesh-452001, India
            </p>
            <div className="space-y-1">
              <p className="text-sm flex items-center gap-2">
                <PhoneIcon className="h-4 w-4" />
                +91 6794 4534
              </p>
              <p className="text-sm flex items-center gap-2">
                <MailIcon className="h-4 w-4" />
                upskill@elevatia.com
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">About Us</h4>
            <ul className="space-y-2">
              {['Our Causes', 'Contact', 'FAQ'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Other Pages</h4>
            <ul className="space-y-2">
              {['Privacy Policy', 'Terms of Use', 'Disclaimer'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Stay Updated</h4>
            <div className="space-y-3">
              <Input placeholder="Enter your email" className="bg-gray-800 border-gray-700" />
              <Button className="w-full">SIGN UP NOW</Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 py-6">
          <div className="container px-4 md:px-6 text-center text-sm text-gray-400">
            © 2025 ELEVATIA - All rights reserved. Empowering Careers, Building Futures.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;