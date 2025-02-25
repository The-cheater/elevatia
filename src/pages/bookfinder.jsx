import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, BookOpen, Tag, LayoutGrid } from "lucide-react";

export default function BookFinder() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="p-6 border-b">
        <h1 className="text-2xl md:text-3xl font-extrabold uppercase">MY BOOK FINDER</h1>
      </header>

      {/* Hero Section */}
      <div className="flex-1 container px-4 md:px-6 py-12">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight">
            DISCOVER BOOKS<br/>THAT YOU NEED!!
          </h2>
          
          <p className="text-xl md:text-2xl font-medium">Find Your Favorite Book</p>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground" />
            <Input 
              placeholder="Search books..."
              className="pl-12 py-6 text-lg"
            />
          </div>
          <p className="text-muted-foreground">Q Type the title or the author name of the book you want</p>
        </div>
      </div>

      {/* Categories Section */}
      <div className="container px-4 md:px-6 py-12 space-y-12">
        {/* Book by Genre */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold uppercase flex items-center gap-2">
            <BookOpen className="h-6 w-6" /> Book by Genre
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1,2,3,4].map((item) => (
              <div key={item} className="aspect-square bg-muted/50 rounded-lg flex items-center justify-center">
                {/* Replace with genre image */}
              </div>
            ))}
          </div>
        </div>

        {/* Select Domain */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold uppercase flex items-center gap-2">
            <LayoutGrid className="h-6 w-6" /> Select Your Domain
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1,2,3,4].map((item) => (
              <Button key={item} variant="outline" className="h-24">
                Domain {item}
              </Button>
            ))}
          </div>
        </div>

        {/* Popular Subjects */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold uppercase flex items-center gap-2">
            <Tag className="h-6 w-6" /> POPULAR SUBJECTS
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1,2,3,4,5,6,7,8].map((item) => (
              <Button key={item} variant="outline" className="gap-2">
                <Tag className="h-4 w-4" /> Subject {item}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}