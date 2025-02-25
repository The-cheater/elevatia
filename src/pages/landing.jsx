import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { Star } from "lucide-react";

function Landing() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="container px-4 md:px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        {/* Image Section - Add your image in the background */}
        <div className="aspect-video bg-muted/50 rounded-xl"></div>

        {/* Content Section */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Access your personalized learning dashboard and explore free courses, roadmaps, and resources 
            <span className="text-primary"> Upskill Today</span>
          </h2>

          {/* Dropdowns */}
          <div className="space-y-4">
            <Select>
              <SelectTrigger className="w-full">
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
                <SelectValue placeholder="Select your highest qualification" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bachelors">Bachelor's</SelectItem>
                <SelectItem value="masters">Master's</SelectItem>
                <SelectItem value="diploma">Diploma</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button variant="cherryPink" className="w-full md:w-auto px-8 py-6 text-lg">Explore Now</Button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container px-4 md:px-6 py-12 grid md:grid-cols-3 gap-4">
        <Card className="text-center p-6">
          <CardContent>
            <h3 className="text-4xl font-bold">100+</h3>
            <p className="text-muted-foreground">Courses Available</p>
          </CardContent>
        </Card>
        <Card className="text-center p-6">
          <CardContent>
            <h3 className="text-4xl font-bold">90+</h3>
            <p className="text-muted-foreground">Expert Instructors</p>
          </CardContent>
        </Card>
        <Card className="text-center p-6">
          <CardContent>
            <h3 className="text-4xl font-bold">150+</h3>
            <p className="text-muted-foreground">Happy Students</p>
          </CardContent>
        </Card>
      </div>

      {/* Category Spotlight */}
      <div className="container px-4 md:px-6 py-12">
        <Card className="relative overflow-hidden">
          <div className="p-8 md:p-12">
            <CardHeader className="text-2xl font-bold">CATEGORY SPOTLIGHT</CardHeader>
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
        <h2 className="text-2xl font-bold text-center">CHOOSE AREA OF INTEREST</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Programming', 'Design', 'Business', 'Marketing'].map((interest) => (
            <Button key={interest} variant="outline" className="h-24">
              {interest}
            </Button>
          ))}
        </div>
      </div>

      <section className="container px-4 md:px-6 py-12">
      <div className="text-center space-y-6 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Trusted by Thousands of Learners
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Join our community of satisfied students who transformed their careers
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Review Card 1 */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary stroke-primary" />
              ))}
            </div>
            <p className="text-lg">
              "The courses here completely changed my career trajectory. The hands-on projects were invaluable."
            </p>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-medium text-primary">AS</span>
              </div>
              <div>
                <h4 className="font-medium">Aarav Sharma</h4>
                <p className="text-sm text-muted-foreground">Full Stack Developer</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Review Card 2 */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary stroke-primary" />
              ))}
            </div>
            <p className="text-lg">
              "Best learning platform for upskilling. The mentorship program is exceptional!"
            </p>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-medium text-primary">PS</span>
              </div>
              <div>
                <h4 className="font-medium">Priya Singh</h4>
                <p className="text-sm text-muted-foreground">Data Scientist</p>
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
                <Star key={i} className="w-6 h-6 fill-primary stroke-primary" />
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
          <Input placeholder="Search for courses or resources" className="flex-1" />
          <Button className="w-full md:w-auto">Find Your Books</Button>
        </div>
      </div>
    </div>
  );
}

export default Landing;