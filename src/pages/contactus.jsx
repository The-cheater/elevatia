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
    <div className="max-w-4xl mx-auto p-6 md:p-8 lg:p-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-light mb-4">Let's discuss</h1>
        <h2 className="text-2xl text-gray-600">on something cool together</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Mail className="text-gray-600" />
            <div>
              <p className="font-medium">upskill@elevatia.com</p>
              <p className="text-gray-600">+91 6794 4534</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <MapPin className="text-gray-600" />
            <p className="text-gray-600">123 Horizon Road, India</p>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-medium">I'm interested in...</h3>
          <div className="grid grid-cols-2 gap-4">
            {['UI/UX design', 'Web design', 'Graphic design', 'Design system', 'Other'].map((interest, index) => (
              <label key={index} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-black"
                  checked={interests[index]}
                  onChange={() => setInterests(prev => ({...prev, [index]: !prev[index]}))}
                />
                <span className="text-gray-600">{interest}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-gray-600">Your name!</label>
            <input
              type="text"
              className="w-full p-3 border-b-2 border-gray-300 focus:outline-none focus:border-black"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-gray-600">Your email</label>
            <input
              type="email"
              className="w-full p-3 border-b-2 border-gray-300 focus:outline-none focus:border-black"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-gray-600">Your message</label>
          <textarea
            className="w-full p-3 border-b-2 border-gray-300 focus:outline-none focus:border-black h-32"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          />
        </div>

        <button
          type="submit"
          className="w-full md:w-auto px-12 py-3 bg-black text-white hover:bg-gray-800 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;