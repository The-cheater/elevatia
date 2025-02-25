import { Mail, Phone, MapPin } from 'lucide-react';

const RecommendationLetter = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10 font-sans">
      {/* Header */}
      <header className="max-w-4xl mx-auto mb-8 text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Elevatia</h1>
        <h2 className="text-2xl font-semibold text-gray-800">LETTER OF RECOMMENDATION</h2>
      </header>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-md space-y-8">
        {/* Sender Info */}
        <div className="text-right text-gray-600 space-y-1 text-base">
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
        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
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

        {/* Templates Section */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <h3 className="text-lg font-semibold mb-4">MORE TEMPLATES</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-600">
            <li>Follow traditional formal letter writing rules</li>
            <li>Start with a brief opening line praising the candidate</li>
            <li>Outline the letter&apos;s intent</li>
            <li>Detail why the candidate is a good fit for the job</li>
            <li>Provide specific examples and anecdotes</li>
            <li>Write a closing statement</li>
            <li>Include a professional closing and signature</li>
            <li>Proofread for grammar, spelling and formatting errors</li>
          </ol>
        </div>

        {/* Footer Sections */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="grid md:grid-cols-3 gap-8 text-sm text-gray-600">
            <div>
              <h4 className="font-semibold mb-3">About Us</h4>
              <ul className="space-y-2">
                <li>Home</li>
                <li>About Us</li>
                <li>Our Causes</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Other Pages</h4>
              <ul className="space-y-2">
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
                <li>Disclaimer</li>
                <li>FAQ</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Contact Info</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 flex-shrink-0" />
                  <span>123 Horizon Road Madhya<br/>Pradesh - 452001, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <span>+91 6794 4534</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  <span>upskill@elevatia.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto mt-8 text-center">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-bold">
          SIGN UP NOW
        </button>
        <div className="mt-4 text-xl font-bold text-blue-600">ELEVATIA</div>
      </div>
    </div>
  );
};

export default RecommendationLetter;