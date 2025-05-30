
import { useState } from "react";
import { ArrowRight, Settings, BookOpen, Plane, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ProgramsSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const programs = [
    {
      title: "AI & Robotics Education",
      description: "Comprehensive AI and robotics curriculum designed for young minds. From basic programming to advanced robotics, we make complex concepts accessible and fun.",
      icon: <Settings className="h-10 w-10" />,
      color: "from-blue-600 to-cyan-500",
      features: ["Visual Programming", "Robot Building", "AI Fundamentals", "Critical Thinking"],
      // price: "Starting at ₹5,999"
    },
    {
      title: "STEM Learning Kits",
      description: "Carefully curated educational kits with hands-on projects, detailed guides, and all necessary components for immersive learning experiences.",
      icon: <BookOpen className="h-10 w-10" />,
      color: "from-emerald-500 to-teal-600",
      features: ["Age-Appropriate Kits", "Project Guides", "Safe Components", "Skill Progression"],
      // price: "Starting at ₹2,499"
    },
    {
      title: "Drone Academy",
      description: "Professional drone piloting courses and aeromodeling workshops. Learn to build, fly, and repair drones with certified instructors.",
      icon: <Plane className="h-10 w-10" />,
      color: "from-orange-500 to-red-500",
      features: ["Flight Training", "Build Workshops", "Safety Certification", "Competition Prep"],
      // price: "Starting at ₹8,999"
    }
  ];

  return (
    <section id="programs" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-gray-800 mb-6">
            Our Learning Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of programs designed to ignite creativity, 
            build technical skills, and prepare students for the future of technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {programs.map((program, index) => (
            <Card 
              key={index}
              className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer bg-white ${
                hoveredCard === index ? 'ring-4 ring-blue-200' : ''
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <CardHeader className="relative pb-6">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${program.color} text-white mb-6 w-fit shadow-lg`}>
                  {program.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300 mb-3">
                  {program.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {program.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative">
                <ul className="space-y-3 mb-8">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className={`w-5 h-5 text-blue-600`} />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mb-6">
                  {/* <span className="text-2xl font-bold text-gray-800">{program.price}</span> */}
                </div>
                
                <Button 
                  className={`w-full bg-gradient-to-r ${program.color} hover:opacity-90 text-white font-bold rounded-xl py-3 transition-all duration-300 shadow-lg hover:shadow-xl`}
                >
                Learn More<ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
