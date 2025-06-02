
import { useAuth } from "@/hooks/useAuth";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const { isAdmin } = useAuth();
  const location = useLocation();

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
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              CogniBot
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Empowering the next generation with cutting-edge AI and robotics education. 
              Join us in shaping the future of technology learning.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button onClick={() => scrollToSection('programs')} className="hover:text-blue-400 transition-colors">
                  AI & Robotics
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('programs')} className="hover:text-blue-400 transition-colors">
                  STEM Kits
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('programs')} className="hover:text-blue-400 transition-colors">
                  Drone Academy
                </button>
              </li>
              <li>
                <Link to="/school-program" className="hover:text-blue-400 transition-colors">
                  School Programs
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
              {isAdmin && (
                <li>
                  <Link to="/admin" className="hover:text-blue-400 transition-colors">
                    Admin Dashboard
                  </Link>
                </li>
              )}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">YouTube</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Newsletter</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 CogniBot. All rights reserved. Empowering minds through technology.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
