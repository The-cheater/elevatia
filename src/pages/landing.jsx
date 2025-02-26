import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Star,
  BookOpen,
  GraduationCap,
  MessageCircle,
  BookOpenText,
  School,
  Rocket,
  Shield,
} from "lucide-react";
import CountUp from "react-countup";
import React from "react";
import { Link } from "react-router-dom";

const ChatIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const query = async (data) => {
    try {
      const response = await fetch(
        "https://flowiseai-1-flzp.onrender.com/api/v1/prediction/e540751c-ac63-4f2f-b032-ae2baaa37f22",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      return await response.json();
    } catch (error) {
      console.error("Error:", error);
      return {
        text: "Sorry, I'm having trouble connecting. Please try again later.",
      };
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = { text: inputMessage, isBot: false };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    setInputMessage("");

    try {
      const response = await query({ question: inputMessage });
      const botMessage = { text: response.text, isBot: true };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = {
        text: "Sorry, something went wrong. Please try again.",
        isBot: true,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-pink-600 text-white p-4 rounded-full shadow-lg hover:bg-pink-700 transition-all animate-bounce"
      >
        <MessageCircle size={24} />
      </button>

      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 bg-white rounded-lg shadow-xl border border-pink-100">
          <div className="bg-pink-600 text-white p-4 rounded-t-lg">
            <h3 className="font-semibold">Learning Assistant</h3>
          </div>

          <div className="h-64 p-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-4 ${msg.isBot ? "text-left" : "text-right"}`}
              >
                <div
                  className={`inline-block p-2 rounded-lg ${
                    msg.isBot
                      ? "bg-pink-50 text-gray-800"
                      : "bg-pink-600 text-white"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="text-center text-pink-600">
                Assistant is typing...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-pink-100">
            <div className="flex gap-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button
                onClick={handleSendMessage}
                className="bg-pink-600 hover:bg-pink-700"
              >
                Send
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

function Landing() {
  const ExamsSection = () => {
    const examGroups = [
      {
        title: "Engineering",
        icon: <Rocket className="h-6 w-6" />,
        exams: ["JEE MAINS", "JEE ADVANCE", "GATE", "GATE2023"],
      },
      {
        title: "Civil Services",
        icon: <Shield className="h-6 w-6" />,
        exams: ["UPSC", "AFCAT", "Indian Air Force"],
      },
      {
        title: "Higher Education",
        icon: <School className="h-6 w-6" />,
        exams: ["CAT", "UGC-NET", "SAT", "CBSE"],
      },
    ];

    const handleExamClick = (examName) => {
      console.log(`Selected exam: ${examName}`);
    };

    return (
      <section className="py-12 bg-gradient-to-b from-pink-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Acknowledged Exams
            </h2>
            <p className="mt-4 text-xl text-pink-700">
              Achieve <span className="font-semibold">more</span> with us!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {examGroups.map((group, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow border-pink-100"
              >
                <CardHeader className="flex items-center gap-3 pb-3">
                  <div className="p-2 bg-pink-100 rounded-full">
                    {React.cloneElement(group.icon, {
                      className: "h-6 w-6 text-pink-600",
                    })}
                  </div>
                  <h3 className="text-2xl font-semibold text-pink-800">
                    {group.title}
                  </h3>
                </CardHeader>
                <CardContent className="space-y-3">
                  {group.exams.map((exam, examIndex) => (
                    <Button
                      key={examIndex}
                      variant="outline"
                      className="w-full justify-start h-12 text-lg hover:bg-pink-50 hover:-translate-y-1 transition-transform text-pink-700 border-pink-200"
                      onClick={() => handleExamClick(exam)}
                    >
                      <BookOpenText className="h-5 w-5 mr-3 text-pink-600" />
                      {exam}
                    </Button>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen">
      <ChatIcon />

      {/* Hero Section */}
      <div className="container px-4 md:px-6 py-12 grid md:grid-cols-2 gap-8 items-center bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg shadow-lg">
        <div className="aspect-video rounded-xl overflow-hidden shadow-2xl hover:shadow-pink-500/20 transition-transform">
          <img
            src="/first.jpg"
            alt="Hero Image"
            className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform"
          />
        </div>

        <div className="space-y-6 text-white">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Access your personalized learning dashboard and explore free
            courses, roadmaps, resources, and more!!
          </h2>

          <div className="space-y-4">
            <Select>
              <SelectTrigger className="w-full bg-white text-pink-600">
                <BookOpen className="h-5 w-5 mr-2" />
                <SelectValue placeholder="Select Your Domain" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="web">Web Development</SelectItem>
                <SelectItem value="data">Data Science</SelectItem>
                <SelectItem value="cyber">Cybersecurity</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-full bg-white text-pink-600">
                <GraduationCap className="h-5 w-5 mr-2" />
                <SelectValue placeholder="Select your highest qualification" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bachelors">Bachelor's</SelectItem>
                <SelectItem value="masters">Master's</SelectItem>
                <SelectItem value="diploma">Diploma</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button className="w-full md:w-auto px-8 py-6 text-lg bg-white text-pink-600 hover:bg-pink-50">
            Explore Now
          </Button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container px-4 md:px-6 py-12 grid md:grid-cols-3 gap-4">
        {[
          { value: 100, label: "Courses Available" },
          { value: 90, label: "Expert Instructors" },
          { value: 150, label: "Happy Students" },
        ].map((stat, index) => (
          <Card
            key={index}
            className="text-center p-6 shadow-lg border border-pink-100 rounded-lg hover:shadow-xl transition-transform hover:-translate-y-2"
          >
            <CardContent>
              <h3 className="text-4xl font-bold text-pink-600">
                <CountUp start={0} end={stat.value} duration={2} suffix="+" />
              </h3>
              <p className="text-pink-700 mt-2">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <ExamsSection />

      {/* Category Spotlight */}
      <div className="container px-4 md:px-6 py-12">
        <Card className="relative overflow-hidden bg-gradient-to-r from-pink-500 to-purple-600">
          <div className="p-8 md:p-12 text-white">
            <CardHeader className="text-2xl font-bold">
              CATEGORY SPOTLIGHT
            </CardHeader>
            <CardContent>
              <p className="max-w-md">
                Explore our most popular category this month
              </p>
              <Button
                variant="outline"
                className="mt-4 bg-white text-pink-600 hover:bg-pink-50"
              >
                View Category
              </Button>
            </CardContent>
          </div>
        </Card>
      </div>

      {/* Interest Selection */}
      <div className="container px-4 md:px-6 py-12 space-y-6">
        <h2 className="text-2xl font-bold text-center text-pink-800">
          CHOOSE AREA OF INTEREST
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Engineering", path: "/engineering" },
            { name: "Design", path: "/design" },
            { name: "Business", path: "/business" },
            { name: "Marketing", path: "/marketing" },
          ].map(({ name, path }) => (
            <Link key={name} to={path} className="w-full">
              <Button
                variant="outline"
                className="h-24 w-full text-pink-700 border-pink-200 hover:bg-pink-50 hover:-translate-y-2 transition-transform"
              >
                {name}
              </Button>
            </Link>
          ))}
        </div>

        {/* New Buttons Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {/* Resume Builder Button */}
          <div className="w-full">
            <Link
              to={"https://www.hackerrank.com/resume"}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="h-24 w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 transition-all hover:-translate-y-2 shadow-lg hover:shadow-xl">
                <div className="flex flex-col items-center gap-2">
                  <BookOpenText className="h-6 w-6" />
                  <span className="text-lg font-semibold">Resume Builder</span>
                </div>
              </Button>
            </Link>
          </div>

          {/* ATS Score Scanner Button */}
          <div className="w-full">
            <Link
              to={"https://resumeworded.com/resume-scanner"}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="h-24 w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 transition-all hover:-translate-y-2 shadow-lg hover:shadow-xl">
                <div className="flex flex-col items-center gap-2">
                  <Shield className="h-6 w-6" />
                  <span className="text-lg font-semibold">
                    ATS Score Scanner
                  </span>
                </div>
              </Button>
            </Link>
          </div>

          {/* Email Templates Button */}
          <Link
              to={{ pathname: "/email-templates" }}
              rel="noopener noreferrer"
              className="block"
            >
          <Button className="h-24 w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 transition-all hover:-translate-y-2 shadow-lg hover:shadow-xl">
            <div className="flex flex-col items-center gap-2">
              <MessageCircle className="h-6 w-6" />
              <span className="text-lg font-semibold">Email Templates</span>
            </div>
          </Button>
          </Link>
        </div>
      </div>

      {/* Reviews Section */}
      <section className="container px-4 md:px-6 py-12">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-800">
            Trusted by Thousands of Learners
          </h2>
          <p className="text-pink-700 max-w-2xl mx-auto">
            Join our community of satisfied students who transformed their
            careers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Review Card 1 */}
          <Card className="hover:shadow-lg transition-shadow border-pink-100">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-pink-600 stroke-pink-600"
                  />
                ))}
              </div>
              <p className="text-lg text-pink-800">
                "The courses here completely changed my career trajectory. The
                hands-on projects were invaluable."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-pink-100 flex items-center justify-center">
                  <span className="font-medium text-pink-600">AS</span>
                </div>
                <div>
                  <h4 className="font-medium text-pink-800">Aarav Sharma</h4>
                  <p className="text-sm text-pink-600">Full Stack Developer</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Review Card 2 */}
          <Card className="hover:shadow-lg transition-shadow border-pink-100">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-pink-600 stroke-pink-600"
                  />
                ))}
              </div>
              <p className="text-lg text-pink-800">
                "Best learning platform for upskilling. The mentorship program
                is exceptional!"
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-pink-100 flex items-center justify-center">
                  <span className="font-medium text-pink-600">PS</span>
                </div>
                <div>
                  <h4 className="font-medium text-pink-800">Priya Singh</h4>
                  <p className="text-sm text-pink-600">Data Scientist</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats Card */}
          <Card className="bg-pink-50 border-pink-100">
            <CardContent className="p-6 flex flex-col items-center justify-center h-full space-y-4">
              <div className="text-4xl font-bold text-pink-600">4.9/5</div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-pink-600 stroke-pink-600"
                  />
                ))}
              </div>
              <p className="text-center text-pink-700">
                Average rating from 2,500+ reviews across platforms
              </p>
              <Button
                variant="outline"
                className="mt-4 text-pink-600 border-pink-200 hover:bg-pink-100"
              >
                View All Reviews
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* Search Section */}
      <div className="container px-4 md:px-6 py-12 space-y-6">
        <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
          <Input
            placeholder="Search for courses or resources"
            className="flex-1"
          />
          <Button className="bg-pink-600 hover:bg-pink-700 text-white">
            Find Your Books
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Landing;