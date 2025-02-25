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
  Sparkles,
  MessageCircle,
  BookOpenText,
  School,
  Award,
  Rocket,
  Shield,
} from "lucide-react";
import CountUp from "react-countup";
import React from "react";

const ChatIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null); // Ref for scrolling

  const query = async (data) => {
    try {
      const response = await fetch(
        "https://flowiseai-railway-production-4191.up.railway.app/api/v1/prediction/07e755ab-69b3-4a76-8af2-a201bc08712a",
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

  // Auto-scroll to the bottom whenever messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/90 transition-all"
      >
        <MessageCircle size={24} />
      </button>

      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 bg-white rounded-lg shadow-xl border">
          <div className="bg-primary text-white p-4 rounded-t-lg">
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
                    msg.isBot ? "bg-gray-100" : "bg-primary text-white"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="text-center text-gray-500">
                Assistant is typing...
              </div>
            )}
            <div ref={messagesEndRef} /> {/* This is the scrolling anchor */}
          </div>

          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button onClick={handleSendMessage}>Send</Button>
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
        exams: [
          "CAT",
          "UGC-NET",
          "SAT",
          "CBSE",
        ],
      },
    ];

    const handleExamClick = (examName) => {
      console.log(`Selected exam: ${examName}`);
      // Add your exam click logic here
    };

    return (
      <section className="py-12 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AcknowledgedExams
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              achieve <span className="text-primary font-semibold">more</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {examGroups.map((group, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex items-center gap-3 pb-3">
                  <div className="p-2 bg-blue-100 rounded-full">
                    {React.cloneElement(group.icon, {
                      className: "h-6 w-6 text-blue-600",
                    })}
                  </div>
                  <h3 className="text-2xl font-semibold">{group.title}</h3>
                </CardHeader>
                <CardContent className="space-y-3">
                  {group.exams.map((exam, examIndex) => (
                    <Button
                      key={examIndex}
                      variant="outline"
                      className="w-full justify-start h-12 text-lg hover:bg-blue-50 hover:-translate-y-1 transition-transform"
                      onClick={() => handleExamClick(exam)}
                    >
                      <BookOpenText className="h-5 w-5 mr-3 text-muted-foreground" />
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
      <div className="container px-4 md:px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        {/* Image Section - Add your image in the background */}
        <div className="aspect-video rounded-xl overflow-hidden shadow-2xl hover:shadow-primary/20 transition-shadow">
          <img
            // eslint-disable-next-line no-undef
            src="/first.jpg"
            alt="Hero Image"
            className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform"
          />
        </div>

        

        {/* Content Section */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Access your personalized learning dashboard and explore free
            courses, roadmaps, resources and more!!
          </h2>

          {/* Dropdowns */}
          <div className="space-y-4">
            <Select>
              <SelectTrigger className="w-full">
                <BookOpen className="h-5 w-5 mr-2 text-primary" />
                <SelectValue placeholder="Select Your Domain" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="web">Web Development</SelectItem>
                <SelectItem value="data">Data Science</SelectItem>
                <SelectItem value="cyber">Cybersecurity</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-full">
                <GraduationCap className="h-5 w-5 mr-2 text-primary" />
                <SelectValue placeholder="Select your highest qualification" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bachelors">Bachelor's</SelectItem>
                <SelectItem value="masters">Master's</SelectItem>
                <SelectItem value="diploma">Diploma</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            variant="cherryPink"
            className="w-full md:w-auto px-8 py-6 text-lg"
          >
            Explore Now
          </Button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container px-4 md:px-6 py-12 grid md:grid-cols-3 gap-4">
        <Card className="text-center p-6 shadow-lg border border-gray-200 rounded-lg">
          <CardContent>
            <h3 className="text-4xl font-bold text-pink-500">
              <CountUp start={0} end={100} duration={2} suffix="+" />
            </h3>
            <p className="text-muted-foreground mt-2">Courses Available</p>
          </CardContent>
        </Card>
        <Card className="text-center p-6 shadow-lg border border-gray-200 rounded-lg">
          <CardContent>
            <h3 className="text-4xl font-bold text-pink-500">
              <CountUp start={0} end={90} duration={2} suffix="+" />
            </h3>
            <p className="text-muted-foreground mt-2">Expert Instructors</p>
          </CardContent>
        </Card>
        <Card className="text-center p-6 shadow-lg border border-gray-200 rounded-lg">
          <CardContent>
            <h3 className="text-4xl font-bold text-pink-500">
              <CountUp start={0} end={150} duration={2} suffix="+" />
            </h3>
            <p className="text-muted-foreground mt-2">Happy Students</p>
          </CardContent>
        </Card>
      </div>

      <ExamsSection />

      {/* Category Spotlight */}
      <div className="container px-4 md:px-6 py-12">
        <Card className="relative overflow-hidden">
          <div className="p-8 md:p-12">
            <CardHeader className="text-2xl font-bold">
              CATEGORY SPOTLIGHT
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground max-w-md">
                Explore our most popular category this month
              </p>
              <Button variant="outline" className="mt-4">
                View Category
              </Button>
            </CardContent>
          </div>
        </Card>
      </div>

      {/* Interest Selection */}
      <div className="container px-4 md:px-6 py-12 space-y-6">
        <h2 className="text-2xl font-bold text-center">
          CHOOSE AREA OF INTEREST
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Programming", "Design", "Business", "Marketing"].map(
            (interest) => (
              <Button key={interest} variant="outline" className="h-24">
                {interest}
              </Button>
            )
          )}
        </div>
      </div>

      <section className="container px-4 md:px-6 py-12">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Trusted by Thousands of Learners
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join our community of satisfied students who transformed their
            careers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Review Card 1 */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary stroke-primary"
                  />
                ))}
              </div>
              <p className="text-lg">
                "The courses here completely changed my career trajectory. The
                hands-on projects were invaluable."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-medium text-primary">AS</span>
                </div>
                <div>
                  <h4 className="font-medium">Aarav Sharma</h4>
                  <p className="text-sm text-muted-foreground">
                    Full Stack Developer
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Review Card 2 */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary stroke-primary"
                  />
                ))}
              </div>
              <p className="text-lg">
                "Best learning platform for upskilling. The mentorship program
                is exceptional!"
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-medium text-primary">PS</span>
                </div>
                <div>
                  <h4 className="font-medium">Priya Singh</h4>
                  <p className="text-sm text-muted-foreground">
                    Data Scientist
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats Card */}
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6 flex flex-col items-center justify-center h-full space-y-4">
              <div className="text-4xl font-bold">4.9/5</div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-primary stroke-primary"
                  />
                ))}
              </div>
              <p className="text-center text-muted-foreground">
                Average rating from 2,500+ reviews across platforms
              </p>
              <Button variant="outline" className="mt-4">
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
          <Button className="w-full md:w-auto">Find Your Books</Button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
