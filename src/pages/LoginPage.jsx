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
  );
}