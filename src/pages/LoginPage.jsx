<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Github, X } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section - Image/Content Side */}
      <div className="w-full md:w-1/2 bg-muted/50 p-8 flex items-center justify-center">
        <div className="max-w-md space-y-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            OPPORTUNITIES
          </h1>
          <p className="text-xl md:text-2xl font-medium">
            START YOUR JOURNEY NOW!!
          </p>
          <p className="text-muted-foreground text-lg">
            Your dreams are waiting for
          </p>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
        <div className="w-full max-w-md space-y-6">
          {/* Login Header */}
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Login Now!!!</h2>
            <p className="text-muted-foreground">
              Access your personalized learning dashboard
            </p>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-4">
            <Button variant="outline" className="w-full gap-2">
              <Github className="h-4 w-4" />
              Login with Github
            </Button>
            
            <Button variant="outline" className="w-full gap-2">
              <Facebook className="h-4 w-4 text-blue-600" />
              Login with Facebook
            </Button>
            
            <Button variant="outline" className="w-full gap-2">
              <X className="h-4 w-4" />
              Login with X
            </Button>
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                OR CONTINUE WITH
              </span>
            </div>
          </div>

          {/* Email Login Form */}
          <form className="space-y-4">
            <div className="space-y-2">
              <Input placeholder="Email" type="email" required />
            </div>
            <div className="space-y-2">
              <Input placeholder="Password" type="password" required />
            </div>
            <Button className="w-full" type="submit">
              Login
            </Button>
          </form>

          {/* Query Section */}
          <div className="text-center text-sm">
            HAVE A QUERY?{" "}
            <a href="#" className="underline hover:text-primary border-b">
              Contact support
            </a>
          </div>
        </div>
      </div>
    </div>
=======
import { Facebook, MessageCircleQuestion, User, User2 } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-8 space-y-6">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">LOGIN</h1>
          <div className="space-y-2">
            <p className="text-2xl font-semibold text-blue-600">Opportunities</p>
            <p className="text-xl font-bold text-gray-700">
              START YOUR JOURNEY NOW!!
            </p>
            <p className="text-gray-600">
              are waiting for <span className="text-blue-600">you</span>
            </p>
          </div>
        </div>

        {/* Login Form */}
        <form className="space-y-4">
          <div className="space-y-2">
            <label className="text-gray-700 font-medium">Username</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
            />
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
            <User2 size={20} />
            Login Now!!!
          </button>
        </form>

        {/* Social Logins */}
        <div className="space-y-4">
          <p className="text-center text-gray-500 font-medium">Login with Others</p>
          
          <button className="w-full flex items-center justify-center gap-2 bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition-colors">
            <User size={20} className="text-blue-600" />
            <span className="font-medium">Login with people</span>
          </button>

          <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors">
            <Facebook size={20} className="text-white" />
            <span className="font-medium">Login with Facebook</span>
          </button>
        </div>

        {/* Query Section */}
        <div className="text-center pt-4">
          <a href="#" className="text-gray-600 hover:text-blue-600 inline-flex items-center gap-1">
            <MessageCircleQuestion size={16} />
            HAVE A QUERY?
          </a>
        </div>
      </div>
    </main>
>>>>>>> c20cf1e9fb9406afabe9901d5e7af23c3c7e5ccc
  );
}