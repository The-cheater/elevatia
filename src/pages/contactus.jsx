import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [interests, setInterests] = useState({
    uiUx: false,
    webDesign: false,
    graphicDesign: false,
    designSystem: false,
    other: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 ring-1 ring-purple-200">
        <div className="text-center mb-10">
          <h1 className="text-6xl font-bold text-purple-700 mb-4 animate-pulse">
            Let's Create Magic
          </h1>
          <h2 className="text-4xl text-pink-600 font-semibold">
            Together, We Can Achieve Anything!
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4 bg-purple-100 p-4 rounded-2xl shadow-md">
              <Mail className="text-purple-600 h-8 w-8" />
              <div>
                <p className="font-bold text-purple-700 text-lg">upskill@elevatia.com</p>
                <p className="text-purple-500">+91 6794 4534</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-purple-100 p-4 rounded-2xl shadow-md">
              <MapPin className="text-purple-600 h-8 w-8" />
              <p className="text-purple-600">123 Horizon Road, India</p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-pink-600">I'm interested in...</h3>
            <div className="grid grid-cols-2 gap-4">
              {Object.keys(interests).map((interest, index) => (
                <label key={index} className="flex items-center gap-3 bg-pink-100 p-3 rounded-lg hover:bg-pink-200 transition-colors shadow-sm">
                  <input
                    type="checkbox"
                    className="h-6 w-6 accent-pink-500 rounded-md checked:ring-pink-500"
                    checked={interests[interest]}
                    onChange={() => setInterests(prev => ({...prev, [interest]: !prev[interest]}))}
                  />
                  <span className="text-pink-700 font-medium">{interest.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-purple-700 font-semibold text-lg">Your name! ✨</label>
              <input
                type="text"
                className="w-full p-4 bg-purple-50 border-b-2 border-purple-300 focus:outline-none focus:border-purple-500 text-purple-700 placeholder-purple-300 font-medium transition-all rounded-md shadow-sm"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-purple-700 font-semibold text-lg">Your email 💌</label>
              <input
                type="email"
                className="w-full p-4 bg-purple-50 border-b-2 border-purple-300 focus:outline-none focus:border-purple-500 text-purple-700 placeholder-purple-300 font-medium transition-all rounded-md shadow-sm"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-purple-700 font-semibold text-lg">Your message 🌸</label>
            <textarea
              className="w-full p-4 bg-purple-50 border-b-2 border-purple-300 focus:outline-none focus:border-purple-500 text-purple-700 placeholder-purple-300 font-medium h-32 transition-all rounded-md shadow-sm"
              placeholder="Type your message here..."
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
          </div>

          <button
            type="submit"
            className="w-full md:w-auto px-16 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-2xl hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 hover:shadow-lg"
          >
            Send Message 🚀
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
