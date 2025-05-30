
import { ArrowRight, Play, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const stats = [
    { number: "10,000+", label: "Students Trained" },
    { number: "50+", label: "Schools Partnered" },
    { number: "20+", label: "Expert Instructors" },
    { number: "97%", label: "Success Rate" }
  ];

  return (
    <section className="pt-24 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-cyan-500/5"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-6 py-3 mb-8 border border-blue-200">
            <Lightbulb className="h-5 w-5 text-blue-600" />
            <span className="text-blue-800 font-semibold">Empowering Future Innovators</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Build the Future
            </span>
            <br />
            <span className="text-gray-800">with AI & Robotics</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your child's curiosity into cutting-edge skills. Our hands-on programs in AI, robotics, 
            and drone technology prepare young minds for tomorrow's challenges.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button onClick={() => {
              const programsSection = document.getElementById("programs");
              if (programsSection) {
                programsSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
              // variant="primary"
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-10 py-6 rounded-2xl text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Start Learning Today <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            
            {/* <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 px-10 py-6 rounded-2xl text-lg font-bold transition-all duration-300"
            >
              <Play className="mr-3 h-6 w-6" /> Watch Demo
            </Button> */}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
