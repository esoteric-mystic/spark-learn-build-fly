import { Clock, Users, Star, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProgramsSection = () => {
  const programs = [
    {
      title: "AI & Robotics for Kids",
      description: "Interactive robotics course teaching programming, sensors, and automation through hands-on projects.",
      duration: "8 weeks",
      ageGroup: "Ages 8-14",
      price: "₹12,000",
      features: ["Hands-on Learning", "Take-home Robot", "Certificate", "Online Support"],
      category: "Beginner"
    },
    {
      title: "Advanced STEM Kits",
      description: "Comprehensive science and engineering kits covering electronics, physics, and programming fundamentals.",
      duration: "12 weeks",
      ageGroup: "Ages 12-18",
      price: "₹18,000",
      features: ["Lab Equipment", "Project Portfolio", "Mentorship", "Industry Exposure"],
      category: "Intermediate"
    },
    {
      title: "Drone Academy",
      description: "Learn to build, program, and fly drones while understanding aerodynamics and control systems.",
      duration: "6 weeks",
      ageGroup: "Ages 14+",
      price: "₹15,000",
      features: ["Build Your Drone", "Flight Training", "Programming", "Safety Certification"],
      category: "Advanced"
    }
  ];

  return (
    <section id="programs" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-gray-800 mb-6">
            Our Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive STEM education programs designed to inspire creativity, 
            critical thinking, and innovation in young minds through cutting-edge technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {programs.map((program, index) => (
            <Card key={index} className="group h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <CardHeader className="pb-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="text-xs font-bold">
                    {program.category}
                  </Badge>
                  <div className="text-right">
                    <div className="text-2xl font-black text-blue-600">{program.price}</div>
                  </div>
                </div>
                <CardTitle className="text-2xl font-black text-gray-800 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                  {program.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {program.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="flex justify-between items-center text-sm text-gray-500 bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{program.ageGroup}</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-bold text-gray-800 flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    What's Included
                  </h4>
                  <ul className="space-y-2">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 px-6 rounded-xl font-bold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg group-hover:shadow-xl">
                  Enroll Now
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;