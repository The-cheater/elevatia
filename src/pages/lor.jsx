import { FileText } from 'lucide-react'; // Added FileText icon

const RecommendationLetter = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-gray-100 p-6 md:p-10 font-sans">
      {/* Header */}
      <header className="max-w-4xl mx-auto mb-8 text-center animate-fade-in">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4 animate-gradient">
          Elevatia
        </h1>
        <h2 className="text-2xl font-semibold text-gray-800 animate-bounce">LETTER OF RECOMMENDATION</h2>
      </header>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-md space-y-8 animate-slide-up">
        {/* Sender Info - Moved to the Left */}
        <div className="text-left text-gray-600 space-y-1 text-base animate-fade-in">
          <div>[Your Name]</div>
          <div>[Your Position]</div>
          <div>[Your Organization]</div>
          <div>[Your Address]</div>
          <div>[City, State, ZIP Code]</div>
          <div className="mt-4">[Your Email]</div>
          <div>[Your Phone Number]</div>
          <div className="mt-4">[Date]</div>
        </div>

        {/* Letter Body */}
        <div className="space-y-6 text-gray-700 text-lg leading-relaxed animate-fade-in">
          <p className="text-xl">To Whom it May Concern,</p>
          
          <p>
            I, [Your Name], have known [Candidate&apos;s Name] for the past [Number] years. We met during [his/her/their] interview process with [Previous Employer], and when [he/she/they] was assigned to my team afterward. In the course of [his/her/their] employment, I was [his/her/their] immediate supervisor as [he/she/they] received [Number] promotions and became an asset to the company.
          </p>

          <p>
            [Candidate&apos;s Name] was very attentive to [his/her/their] team members as a team leader and later as a project manager. [He/She/They] was inclusive and made sure everyone had a voice. [He/She/They] inspired [his/her/their] team members even during stressful situations and ensured project completion by securing wholehearted participation from everyone. [Candidate&apos;s Name] created a positive environment around [him/her/them] and is very receptive to new ideas, technologies, and learning.
          </p>

          <p>
            Once, [Candidate&apos;s Name] implemented a new system within the department to help others learn new technologies. By partnering with other teams, our online platform, and the human resources department, [he/she/they] was able to eventually implement the system in the whole company.
          </p>

          <p>
            [Candidate&apos;s Name] is a very dedicated, polite, and positive person, and I recommend [him/her/them] for the position of [Position] as it is my firm belief that [he/she/they] will be a valuable addition to any organization.
          </p>

          <p>
            Please feel free to contact me for further information or to answer any additional questions you may have.
          </p>

          <div className="mt-10">
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

        {/* Animated "MORE TEMPLATES" Button with Icon */}
        <div className="mt-12 pt-6 border-t border-gray-200 animate-fade-in">
          <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-bold transform hover:scale-105 animate-pulse">
            <FileText className="w-5 h-5" />
            MORE TEMPLATES
          </button>
        </div>

        {/* Guidelines for Writing a Strong LOR */}
        <div className="mt-8 space-y-6 text-gray-700 text-lg leading-relaxed animate-fade-in">
          <h3 className="text-2xl font-bold text-gray-800">Guidelines for Writing a Strong Letter of Recommendation</h3>
          <ul className="list-disc list-inside space-y-4">
            <li>
              <strong>Be Specific:</strong> Provide concrete examples of the candidate’s skills, achievements, and contributions. Avoid vague statements.
            </li>
            <li>
              <strong>Highlight Key Qualities:</strong> Focus on qualities like leadership, teamwork, problem-solving, and adaptability that are relevant to the position.
            </li>
            <li>
              <strong>Use Professional Tone:</strong> Maintain a formal and respectful tone throughout the letter.
            </li>
            <li>
              <strong>Include Metrics:</strong> Where possible, quantify achievements (e.g., "increased sales by 20%" or "managed a team of 10 people").
            </li>
            <li>
              <strong>Personalize the Letter:</strong> Tailor the letter to the specific role or organization the candidate is applying to.
            </li>
            <li>
              <strong>Proofread:</strong> Ensure the letter is free of grammatical errors and typos.
            </li>
            <li>
              <strong>Be Honest:</strong> Provide an honest assessment of the candidate’s abilities and potential.
            </li>
          </ul>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto mt-8 text-center animate-fade-in">
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-bold transform hover:scale-105 animate-pulse">
          login
        </button>
        <div className="mt-4 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient">
          ELEVATIA
        </div>
      </div>
    </div>
  );
};

export default RecommendationLetter;