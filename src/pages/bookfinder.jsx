import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, BookText, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function BookFinder() {
  // Popular books data with legitimate free download links
  const popularBooks = [
    {
      title: "Automate the Boring Stuff with Python",
      author: "Al Sweigart",
      cover: "https://m.media-amazon.com/images/I/81S9vwXjScL._SY425_.jpg", // Updated URL
      downloadLink: "https://automatetheboringstuff.com/2e/chapter0/"
    },
    {
      title: "Think Python",
      author: "Allen B. Downey",
      cover: "https://m.media-amazon.com/images/I/71ND9kxGLGL.jpg", // Updated URL
      downloadLink: "https://greenteapress.com/thinkpython/thinkpython.pdf"
    },
    {
      title: "The Linux Command Line",
      author: "William Shotts",
      cover: "https://m.media-amazon.com/images/I/81v21VRpJJL.jpg", // Updated URL
      downloadLink: "https://sourceforge.net/projects/linuxcommand/files/TLCL/19.01/TLCL-19.01.pdf/download"
    },
    {
      title: "Programming Languages: Application and Interpretation",
      author: "Shriram Krishnamurthi",
      cover: "https://upload.wikimedia.org/wikipedia/en/a/ac/PLAI-cover.jpg", // Updated URL
      downloadLink: "https://www.plai.org/book.pdf"
    }
  ];

  // Fallback image URL
  const fallbackImage = "https://via.placeholder.com/300x400?text=Cover+Not+Available";

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-pink-50 to-pink-100">
      {/* Hero Section */}
      <div className="flex-1 container px-4 md:px-6 py-12">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"
          >
            DISCOVER BOOKS<br />THAT YOU NEED!!
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-medium text-pink-800"
          >
            Find Your Favorite Engineering & Computer Science Book
          </motion.p>

          {/* Search Bar */}
          <motion.div 
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-pink-500" />
            <Input
              placeholder="Search books..."
              className="pl-12 py-6 text-lg border-pink-300 focus:border-pink-500 focus:ring-pink-500 shadow-lg hover:shadow-xl transition-shadow"
            />
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-pink-600"
          >
            Type the title or the author name of the book you want
          </motion.p>
        </div>
      </div>

      {/* Popular Books Section */}
      <div className="container px-4 md:px-6 py-12 space-y-12">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-2xl font-bold uppercase flex items-center gap-2 text-pink-900"
        >
          <BookText className="h-6 w-6 text-pink-600" /> Popular Books
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {popularBooks.map((book, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    console.error(`Failed to load image: ${book.cover}`); // Debugging
                    e.target.src = fallbackImage; // Fallback image
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-600/30 to-transparent" />
              </div>

              <div className="p-4">
                <h4 className="text-lg font-bold text-pink-900">{book.title}</h4>
                <p className="text-sm text-pink-600 mb-4">{book.author}</p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    asChild
                    variant="outline"
                    className="w-full gap-2 hover:bg-pink-100 text-pink-600 border-pink-300"
                  >
                    <a 
                      href={book.downloadLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <Download className="h-4 w-4 animate-bounce" />
                      Download PDF
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="p-6 border-t border-pink-200 bg-pink-50 text-center text-pink-900"
      >
        <p className="text-sm">© 2024 Book Finder. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}