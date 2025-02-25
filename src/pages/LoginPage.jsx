import { Mail, Key, Facebook, Twitter, Github } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      {/* Logo Section - Replace with your image later */}
      <div className="mb-8">
        <div className="bg-gray-200 w-32 h-32 rounded-full mb-4" />
        <h1 className="text-3xl font-bold text-center text-gray-800">Your Logo</h1>
      </div>

      {/* Login Form */}
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <form className="space-y-6">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                id="email"
                required
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Key className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="password"
                id="password"
                required
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            LOGIN
          </button>
        </form>

        {/* Social Login Section */}
        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            <button className="w-full flex items-center justify-center p-3 border border-gray-300 rounded-md hover:bg-gray-50">
              <Facebook className="h-5 w-5 text-blue-600" />
            </button>
            <button className="w-full flex items-center justify-center p-3 border border-gray-300 rounded-md hover:bg-gray-50">
              <Twitter className="h-5 w-5 text-blue-400" />
            </button>
            <button className="w-full flex items-center justify-center p-3 border border-gray-300 rounded-md hover:bg-gray-50">
              <Github className="h-5 w-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      {/* Sign Up Link */}
      <p className="mt-8 text-center text-gray-600">
        Don't have an account?{' '}
        <a href="#" className="text-blue-600 hover:text-blue-500">
          Sign up
        </a>
      </p>
    </div>
  );
}