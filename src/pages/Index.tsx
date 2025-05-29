
import { useState } from "react";
import { ArrowRight, Play, Users, Award, Zap, BookOpen, Settings, Plane, Star, CheckCircle, Globe, Lightbulb, Target, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const programs = [
    {
      title: "AI & Robotics Education",
      description: "Comprehensive AI and robotics curriculum designed for young minds. From basic programming to advanced robotics, we make complex concepts accessible and fun.",
      icon: <Settings className="h-10 w-10" />,
      color: "from-blue-600 to-cyan-500",
      features: ["Visual Programming", "Robot Building", "AI Fundamentals", "Critical Thinking"],
      price: "Starting at ₹5,999"
    },
    {
      title: "STEM Learning Kits",
      description: "Carefully curated educational kits with hands-on projects, detailed guides, and all necessary components for immersive learning experiences.",
      icon: <BookOpen className="h-10 w-10" />,
      color: "from-emerald-500 to-teal-600",
      features: ["Age-Appropriate Kits", "Project Guides", "Safe Components", "Skill Progression"],
      price: "Starting at ₹2,499"
    },
    {
      title: "Drone Academy",
      description: "Professional drone piloting courses and aeromodeling workshops. Learn to build, fly, and repair drones with certified instructors.",
      icon: <Plane className="h-10 w-10" />,
      color: "from-orange-500 to-red-500",
      features: ["Flight Training", "Build Workshops", "Safety Certification", "Competition Prep"],
      price: "Starting at ₹8,999"
    }
  ];

  const features = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Mentorship",
      description: "Learn from industry professionals and certified educators with real-world experience in AI, robotics, and aviation technology."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Recognized Certifications",
      description: "Earn industry-recognized certificates that validate your skills and open doors to future opportunities in STEM fields."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Project-Based Learning",
      description: "Every course includes hands-on projects and real-world applications to ensure practical understanding and skill development."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Community",
      description: "Join a worldwide network of young innovators, participate in competitions, and collaborate on exciting projects."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Students Trained" },
    { number: "500+", label: "Schools Partnered" },
    { number: "50+", label: "Expert Instructors" },
    { number: "95%", label: "Success Rate" }
  ];

  const testimonials = [
    {
      name: "Arjun Patel",
      role: "Student, Grade 8",
      content: "The robotics course changed how I think about technology. I built my first robot and even won a competition!",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "Parent",
      content: "My daughter's confidence in STEM subjects has increased dramatically. The instructors are patient and knowledgeable.",
      rating: 5
    },
    {
      name: "Rahul Kumar",
      role: "Student, Grade 10",
      content: "Learning to fly and repair drones was amazing. The course is well-structured and the instructors are supportive.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center">
                <Settings className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                CogniBot Robo
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#programs" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Programs</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">About</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Reviews</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Contact</a>
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-10 py-6 rounded-2xl text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Start Learning Today <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 px-10 py-6 rounded-2xl text-lg font-bold transition-all duration-300"
              >
                <Play className="mr-3 h-6 w-6" /> Watch Demo
              </Button>
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

      {/* Programs Section */}
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
                    <span className="text-2xl font-bold text-gray-800">{program.price}</span>
                  </div>
                  
                  <Button 
                    className={`w-full bg-gradient-to-r ${program.color} hover:opacity-90 text-white font-bold rounded-xl py-3 transition-all duration-300 shadow-lg hover:shadow-xl`}
                  >
                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-24 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-gray-800 mb-6">
              Why Choose CogniBot Robo?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We combine cutting-edge curriculum with proven teaching methods to deliver 
              exceptional learning experiences that inspire and educate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="text-center group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-gray-800 mb-6">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from students and parents who have experienced the CogniBot Robo difference
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 p-8">
                <CardContent className="p-0">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-bold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Settings className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  CogniBot Robo
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
    </div>
  );
};

export default Index;
