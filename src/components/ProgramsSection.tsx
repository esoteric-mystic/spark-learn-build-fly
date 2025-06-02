
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Cpu, Zap } from "lucide-react";

const ProgramsSection = () => {
  const programs = [
    {
      title: "AI & Robotics",
      description: "Hands-on learning with cutting-edge robotics and artificial intelligence. Build and program your own robots while exploring the fundamentals of AI.",
      icon: <Brain className="h-8 w-8" />,
      color: "from-blue-500 to-cyan-500",
      features: ["Robot Building", "AI Programming", "Machine Learning Basics", "Sensor Integration"]
    },
    {
      title: "STEM Kits",
      description: "Complete educational kits designed to make complex STEM concepts accessible and fun. Perfect for schools and individual learners.",
      icon: <Cpu className="h-8 w-8" />,
      color: "from-purple-500 to-pink-500",
      features: ["Electronics Basics", "Circuit Design", "Programming Logic", "Project-Based Learning"]
    },
    {
      title: "Drone Academy",
      description: "Learn to build, program, and fly drones while understanding aerodynamics, programming, and autonomous systems.",
      icon: <Zap className="h-8 w-8" />,
      color: "from-green-500 to-blue-500",
      features: ["Drone Assembly", "Flight Programming", "Autonomous Navigation", "Safety Protocols"]
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Our Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of educational programs designed to inspire and empower the next generation of innovators.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${program.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {program.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {program.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {program.description}
                </p>
                <div className="space-y-2">
                  {program.features.map((feature, featureIndex) => (
                    <Badge key={featureIndex} variant="secondary" className="mx-1 text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Learn More
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
