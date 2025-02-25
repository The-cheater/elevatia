import { ClipboardList, ThumbsUp, ThumbsDown, Briefcase, ClipboardEdit } from 'lucide-react';

const EmailTemplates = () => {
  const templates = [
    { icon: <ClipboardList size={40} />, title: "LETTER OF RECOMMENDATION" },
    { icon: [<ThumbsUp size={40} />, <ThumbsDown size={40} />], title: "OFFER ACCEPTANCE/DECLINE EMAIL" },
    { icon: <Briefcase size={40} />, title: "JOB APPLICATION EMAIL" },
    { icon: <ClipboardEdit size={40} />, title: "INTERNSHIP REQUEST EMAIL" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-12">
          EMAIL TEMPLATES
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {templates.map((template, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="text-blue-600">
                  {Array.isArray(template.icon) ? (
                    <div className="flex gap-4">
                      {template.icon.map((Icon, i) => (
                        <span key={i}>{Icon}</span>
                      ))}
                    </div>
                  ) : (
                    template.icon
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 text-center">
                  {template.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmailTemplates;