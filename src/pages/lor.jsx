import React, { useState, useEffect } from 'react';
import { FileText, Download, Share2, Star } from 'lucide-react';

const RecommendationLetter = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6 md:p-10 font-sans overflow-hidden">
      {/* Floating Elements for Background Interest */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-indigo-200 rounded-full opacity-20 animate-float-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-pink-200 rounded-full opacity-20 animate-spin-slow"></div>
      </div>
      
      {/* Header with Animation */}
      <header className={`max-w-4xl mx-auto mb-8 text-center transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="inline-block relative">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            Elevatia
          </h1>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-pulse"></div>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 relative inline-block">
          LETTER OF RECOMMENDATION
          <div className="h-1 w-full bg-gradient-to-r from-blue-400 to-purple-400 mt-1 transform transition-all duration-1000 animate-width"></div>
        </h2>
      </header>

      {/* Main Content with Staggered Animation */}
      <div className={`max-w-5xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg space-y-8 transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'}`}>
        {/* Top Bar with Template Features */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-100">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center text-gray-500 hover:text-blue-600 transition-colors">
              <Download className="w-4 h-4 mr-1" />
              <span className="text-sm">Save</span>
            </button>
            <button className="flex items-center text-gray-500 hover:text-blue-600 transition-colors">
              <Share2 className="w-4 h-4 mr-1" />
              <span className="text-sm">Share</span>
            </button>
            <button className="flex items-center text-gray-500 hover:text-blue-600 transition-colors">
              <Star className="w-4 h-4 mr-1" />
              <span className="text-sm">Favorite</span>
            </button>
          </div>
        </div>

        {/* Sender Info with Staggered Animation */}
        <div className={`text-left text-gray-600 space-y-1 text-base transition-all duration-1000 delay-300 transform ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
          <div className="font-medium">[Your Name]</div>
          <div>[Your Position]</div>
          <div>[Your Organization]</div>
          <div>[Your Address]</div>
          <div>[City, State, ZIP Code]</div>
          <div className="mt-4">[Your Email]</div>
          <div>[Your Phone Number]</div>
          <div className="mt-4">[Date]</div>
        </div>

        {/* Letter Body with Paragraph Animations */}
        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <p className={`text-xl transition-all duration-700 delay-400 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            To Whom it May Concern,
          </p>
          
          <p className={`transition-all duration-700 delay-500 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            I, [Your Name], have known [Candidate&apos;s Name] for the past [Number] years. We met during [his/her/their] interview process with [Previous Employer], and when [he/she/they] was assigned to my team afterward. In the course of [his/her/their] employment, I was [his/her/their] immediate supervisor as [he/she/they] received [Number] promotions and became an asset to the company.
          </p>

          <p className={`transition-all duration-700 delay-600 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            [Candidate&apos;s Name] was very attentive to [his/her/their] team members as a team leader and later as a project manager. [He/She/They] was inclusive and made sure everyone had a voice. [He/She/They] inspired [his/her/their] team members even during stressful situations and ensured project completion by securing wholehearted participation from everyone. [Candidate&apos;s Name] created a positive environment around [him/her/them] and is very receptive to new ideas, technologies, and learning.
          </p>

          <p className={`transition-all duration-700 delay-700 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Once, [Candidate&apos;s Name] implemented a new system within the department to help others learn new technologies. By partnering with other teams, our online platform, and the human resources department, [he/she/they] was able to eventually implement the system in the whole company.
          </p>

          <p className={`transition-all duration-700 delay-800 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            [Candidate&apos;s Name] is a very dedicated, polite, and positive person, and I recommend [him/her/them] for the position of [Position] as it is my firm belief that [he/she/they] will be a valuable addition to any organization.
          </p>

          <p className={`transition-all duration-700 delay-900 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Please feel free to contact me for further information or to answer any additional questions you may have.
          </p>

          <div className={`mt-10 transition-all duration-700 delay-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-xl">Sincerely,</p>
            <div className="mt-6 space-y-2 text-base">
              <div>[Your Name]</div>
              <div>[Your Position]</div>
              <div>[Your Organization]</div>
              <div>[Your Phone Number]</div>
              <div>[Your Email]</div>
            </div>
          </div>
        </div>

        {/* Template Selection Buttons with Hover Effects */}
        <div className={`mt-12 pt-6 border-t border-gray-200 transition-all duration-700 delay-1100 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-bold transform hover:scale-105 shadow-md">
              <FileText className="w-5 h-5" />
              MORE TEMPLATES
            </button>
            <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-3 rounded-lg hover:from-green-700 hover:to-teal-700 transition-all font-bold transform hover:scale-105 shadow-md">
              <Star className="w-5 h-5" />
              PREMIUM TEMPLATES
            </button>
          </div>
        </div>

        {/* Guidelines with Animated Border */}
        <div className={`mt-8 p-6 border border-gray-100 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 space-y-6 text-gray-700 text-lg leading-relaxed relative overflow-hidden transition-all duration-700 delay-1200 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 hover:opacity-5 transition-opacity duration-500"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400 animate-gradient-x"></div>
          
          <h3 className="text-2xl font-bold text-gray-800">Guidelines for Writing a Strong Letter of Recommendation</h3>
          <ul className="list-disc list-inside space-y-4">
            <li className="transform transition-all hover:translate-x-1 hover:text-blue-700 duration-300">
              <strong>Be Specific:</strong> Provide concrete examples of the candidate's skills, achievements, and contributions. Avoid vague statements.
            </li>
            <li className="transform transition-all hover:translate-x-1 hover:text-blue-700 duration-300">
              <strong>Highlight Key Qualities:</strong> Focus on qualities like leadership, teamwork, problem-solving, and adaptability that are relevant to the position.
            </li>
            <li className="transform transition-all hover:translate-x-1 hover:text-blue-700 duration-300">
              <strong>Use Professional Tone:</strong> Maintain a formal and respectful tone throughout the letter.
            </li>
            <li className="transform transition-all hover:translate-x-1 hover:text-blue-700 duration-300">
              <strong>Include Metrics:</strong> Where possible, quantify achievements (e.g., "increased sales by 20%" or "managed a team of 10 people").
            </li>
            <li className="transform transition-all hover:translate-x-1 hover:text-blue-700 duration-300">
              <strong>Personalize the Letter:</strong> Tailor the letter to the specific role or organization the candidate is applying to.
            </li>
            <li className="transform transition-all hover:translate-x-1 hover:text-blue-700 duration-300">
              <strong>Proofread:</strong> Ensure the letter is free of grammatical errors and typos.
            </li>
            <li className="transform transition-all hover:translate-x-1 hover:text-blue-700 duration-300">
              <strong>Be Honest:</strong> Provide an honest assessment of the candidate's abilities and potential.
            </li>
          </ul>
        </div>
      </div>

      {/* Footer with Animation */}
      <footer className={`max-w-5xl mx-auto mt-8 text-center text-gray-500 text-sm transition-all duration-1000 delay-1300 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <p>© {new Date().getFullYear()} Elevatia • Premium Recommendation Letter Templates</p>
      </footer>
    </div>
  );
};

// Add these CSS keyframes animations to your global CSS or stylesheet
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
  }
  
  @keyframes float-delayed {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0px); }
  }
  
  @keyframes float-slow {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
  
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  @keyframes width {
    0% { width: 0; }
    100% { width: 100%; }
  }
  
  @keyframes gradient-x {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  .animate-float-delayed {
    animation: float-delayed 7s ease-in-out infinite;
  }
  
  .animate-float-slow {
    animation: float-slow 8s ease-in-out infinite;
  }
  
  .animate-spin-slow {
    animation: spin-slow 15s linear infinite;
  }
  
  .animate-width {
    animation: width 1.5s ease-out forwards;
  }
  
  .animate-gradient-x {
    animation: gradient-x 3s linear infinite;
    background-size: 200% 200%;
  }
`;

document.head.appendChild(style);

export default RecommendationLetter;