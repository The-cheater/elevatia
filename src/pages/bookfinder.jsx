import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, BookOpen, Tag, LayoutGrid, Code, Cpu, Database, Network, Server, Terminal, BookText } from "lucide-react";

export default function BookFinder() {
  // Popular books data
  const popularBooks = [
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      cover: "https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg",
    },
    {
      title: "Design Patterns",
      author: "Erich Gamma",
      cover: "https://m.media-amazon.com/images/I/51szD9HC9pL._SX395_BO1,204,203,200_.jpg",
    },
    {
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt",
      cover: "https://m.media-amazon.com/images/I/51W1sBPO7tL._SX380_BO1,204,203,200_.jpg",
    },
    {
      title: "Introduction to Algorithms",
      author: "Thomas H. Cormen",
      cover: "https://m.media-amazon.com/images/I/41SNoh5ZhOL._SX376_BO1,204,203,200_.jpg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-pink-50 to-pink-100">
      {/* Hero Section */}
      <div className="flex-1 container px-4 md:px-6 py-12">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            DISCOVER BOOKS<br />THAT YOU NEED!!
          </h2>

          <p className="text-xl md:text-2xl font-medium text-pink-800">Find Your Favorite Engineering & Computer Science Book</p>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-pink-500" />
            <Input
              placeholder="Search books..."
              className="pl-12 py-6 text-lg border-pink-300 focus:border-pink-500 focus:ring-pink-500"
            />
          </div>
          <p className="text-pink-600">Type the title or the author name of the book you want</p>
        </div>
      </div>

      {/* Popular Books Section */}
      <div className="container px-4 md:px-6 py-12 space-y-12">
        <h3 className="text-2xl font-bold uppercase flex items-center gap-2 text-pink-900">
          <BookText className="h-6 w-6 text-pink-600" /> Popular Books
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {popularBooks.map((book, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h4 className="text-lg font-bold text-pink-900">{book.title}</h4>
                <p className="text-sm text-pink-600">{book.author}</p>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="container px-4 md:px-6 py-12 space-y-12">
        {/* Book by Genre */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold uppercase flex items-center gap-2 text-pink-900">
            <BookOpen className="h-6 w-6 text-pink-600" /> Book by Genre
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Engineering", "Data Science", "AI/ML", "Web Development"].map((genre, index) => (
              <div
                key={index}
                className="aspect-square bg-pink-200/50 rounded-lg flex flex-col items-center justify-center p-4 hover:bg-pink-300/50 transition-all hover:scale-105"
              >
                <Code className="h-8 w-8 text-pink-700 mb-2" />
                <p className="text-lg font-medium text-pink-900">{genre}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Select Domain */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold uppercase flex items-center gap-2 text-pink-900">
            <LayoutGrid className="h-6 w-6 text-pink-600" /> Select Your Domain
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Frontend", "Backend", "DevOps", "Cloud"].map((domain, index) => (
              <Button
                key={index}
                variant="outline"
                className="h-24 flex flex-col items-center justify-center gap-2 border-pink-300 hover:bg-pink-100 hover:scale-105 transition-transform"
              >
                {domain === "Frontend" && <Cpu className="h-6 w-6 text-pink-600" />}
                {domain === "Backend" && <Server className="h-6 w-6 text-pink-600" />}
                {domain === "DevOps" && <Terminal className="h-6 w-6 text-pink-600" />}
                {domain === "Cloud" && <Network className="h-6 w-6 text-pink-600" />}
                <span className="text-pink-900">{domain}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Popular Subjects */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold uppercase flex items-center gap-2 text-pink-900">
            <Tag className="h-6 w-6 text-pink-600" /> POPULAR SUBJECTS
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Python", "JavaScript", "React", "Node.js", "SQL", "Docker", "Kubernetes", "AWS"].map((subject, index) => (
              <Button
                key={index}
                variant="outline"
                className="gap-2 border-pink-300 hover:bg-pink-100 hover:scale-105 transition-transform"
              >
                <Tag className="h-4 w-4 text-pink-600" />
                <span className="text-pink-900">{subject}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>

      
    </div>
  );
}