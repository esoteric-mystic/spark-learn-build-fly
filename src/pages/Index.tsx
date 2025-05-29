
import { useState } from "react";
import { ArrowRight, Play, Users, Award, Zap, BookOpen, Settings, Drone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const programs = [
    {
      title: "AI & Robotics Education",
      description: "Interactive courses teaching kids the fundamentals of artificial intelligence and robotics through fun, age-appropriate projects.",
      icon: <Settings className="h-8 w-8" />,
      color: "from-blue-500 to-purple-600",
      features: ["Visual Programming", "Robot Building", "AI Concepts", "Problem Solving"]
    },
    {
      title: "Hands-on Learning Kits",
      description: "Complete educational kits delivered to your doorstep, packed with components and guided projects for practical learning.",
      icon: <BookOpen className="h-8 w-8" />,
      color: "from-green-500 to-teal-600",
      features: ["Age-Appropriate Kits", "Step-by-Step Guides", "Safe Components", "Project-Based Learning"]
    },
    {
      title: "Drone Training & Aeromodeling",
      description: "Professional drone flying lessons and repair workshops, teaching kids the exciting world of aviation technology.",
      icon: <Drone className="h-8 w-8" />,
      color: "from-orange-500 to-red-600",
      features: ["Flight Training", "Repair Workshops", "Safety Protocols", "Certification Prep"]
    }
  ];

  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Instructors",
      description: "Learn from certified professionals with years of experience in AI, robotics, and aviation."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Certified Programs",
      description: "Our courses are designed to meet educational standards and provide recognized certifications."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Hands-on Learning",
      description: "Every lesson includes practical projects and real-world applications to reinforce learning."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-blue-200">
              <Zap className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-800">Empowering Future Innovators</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent mb-6 leading-tight">
              AI, Robotics & Drone Education for Kids
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Inspiring the next generation through hands-on learning in artificial intelligence, robotics, and aeromodeling. 
              From coding robots to flying drones, we make technology accessible and fun!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Start Learning Today <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-blue-300 hover:bg-blue-50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5" /> Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Learning Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our comprehensive programs designed to spark creativity and build technical skills
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <Card 
              key={index}
              className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer ${
                hoveredCard === index ? 'ring-4 ring-blue-200' : ''
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <CardHeader className="relative pb-4">
                <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${program.color} text-white mb-4 w-fit`}>
                  {program.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                  {program.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {program.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative">
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-gray-700">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${program.color}`}></div>
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full bg-gradient-to-r ${program.color} hover:opacity-90 text-white font-semibold rounded-full transition-all duration-300`}
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white/50 backdrop-blur-sm py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Why Choose Our Programs?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine cutting-edge curriculum with proven teaching methods to deliver exceptional learning experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already building the future with AI, robotics, and drone technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Settings className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              FutureTech Academy
            </span>
          </div>
          <p className="text-gray-400 mb-6">
            Empowering the next generation of innovators through hands-on technology education.
          </p>
          <div className="flex justify-center gap-8 text-sm text-gray-400">
            <span>© 2024 FutureTech Academy</span>
            <span>•</span>
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
