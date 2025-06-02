
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuthModal } from "./AuthModal";
import { useAuth } from "@/hooks/useAuth";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");
  const { user, signOut } = useAuth();
  const location = useLocation();

  const handleAuthClick = (mode: "signin" | "signup") => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first then scroll
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              CogniBot
            </Link>
            
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('programs')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Programs
              </button>
              <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Products
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Testimonials
              </button>
              <Link to="/gallery" className="text-gray-700 hover:text-blue-600 transition-colors">
                Gallery
              </Link>
              <Link to="/school-program" className="text-gray-700 hover:text-blue-600 transition-colors">
                School Program
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">Welcome, {user.email}</span>
                  <Button variant="outline" onClick={handleSignOut}>
                    Sign Out
                  </Button>
                </div>
              ) : (
                <>
                  <Button variant="outline" onClick={() => handleAuthClick("signin")}>
                    Sign In
                  </Button>
                  <Button onClick={() => handleAuthClick("signup")}>
                    Sign Up
                  </Button>
                </>
              )}
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">
                  Home
                </button>
                <button onClick={() => scrollToSection('programs')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">
                  Programs
                </button>
                <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">
                  Products
                </button>
                <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">
                  Testimonials
                </button>
                <Link to="/gallery" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600 transition-colors">
                  Gallery
                </Link>
                <Link to="/school-program" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600 transition-colors">
                  School Program
                </Link>
                
                {user ? (
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-600 mb-2">Welcome, {user.email}</p>
                    <Button variant="outline" onClick={handleSignOut} className="w-full">
                      Sign Out
                    </Button>
                  </div>
                ) : (
                  <div className="pt-4 border-t border-gray-100 space-y-2">
                    <Button variant="outline" onClick={() => handleAuthClick("signin")} className="w-full">
                      Sign In
                    </Button>
                    <Button onClick={() => handleAuthClick("signup")} className="w-full">
                      Sign Up
                    </Button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
        initialMode={authMode}
      />
    </>
  );
};

export default Navigation;
