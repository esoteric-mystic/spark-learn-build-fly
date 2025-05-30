import { useState } from "react";
import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-white-600 to-cyan-500 rounded-xl flex items-center justify-center">
              <img src="/favicon.png" alt="CogniBot Logo" className="h-10 w-10" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              COGNIBOT
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a href="/#programs" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Programs</a>
            <a href="/#products" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Products</a>
            <Link to="/school-program" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">School Program</Link>
            <Link to="/gallery" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Gallery</Link>
            <a href="/#about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">About</a>
            <a href="/#testimonials" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Reviews</a>
            {/* <a href="/#contact" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Contact</a> */}
            <Button onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }} className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
              Contact Us
            </Button>
          </div>
          {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Toggle Menu</span>
            <svg
              className="w-6 h-6 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4">
            <a href="/#programs" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Programs</a>
            <a href="/#products" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Products</a>
            <Link to="/school-program" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">School Program</Link>
            <Link to="/gallery" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Gallery</Link>
            <a href="/#about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">About</a>
            <a href="/#testimonials" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Reviews</a>
            <a href="/#contact" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Contact</a>
            <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
