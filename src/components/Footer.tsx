
import { Settings } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-white-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <img src="/favicon.png" alt="CogniBot Logo" className="h-10 w-10" />
                {/* <Settings className="h-6 w-6 text-white" /> */}
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                COGNIBOT
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Empowering the next generation through hands-on technology education and innovation.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Programs</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">AI & Robotics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">STEM Kits</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Drone Academy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Competitions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instructors</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>+91 98765 43210</li>
              <li>info@cognibotrobo.com</li>
              <li>Bangalore, India</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-400">
            <span>© 2024 CogniBot Robo. All rights reserved.</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
