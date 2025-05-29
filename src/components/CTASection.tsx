
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 text-center relative">
        <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
          Ready to Shape the Future?
        </h2>
        <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
          Join thousands of students who are already building tomorrow's technology. 
          Start your journey in AI, robotics, and drone technology today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-50 px-10 py-6 rounded-2xl text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Enroll Now <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-6 rounded-2xl text-lg font-bold transition-all duration-300"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
