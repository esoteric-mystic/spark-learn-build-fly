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
    <section id="programs" className="relative py-24 bg-gradient-to-br from-background via-muted/30 to-accent/20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            STEM Education Programs
          </div>
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-6">
            Our Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive STEM education programs designed to inspire creativity, 
            critical thinking, and innovation in young minds through cutting-edge technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {programs.map((program, index) => (
            <Card key={index} className="group h-full bg-card border border-border/50 shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-hover)] dark:shadow-[var(--shadow-elegant-dark)] dark:hover:shadow-[var(--shadow-hover-dark)] transition-[var(--transition-smooth)] transform hover:scale-[1.02] hover:-translate-y-2 relative overflow-hidden">
              {/* Card gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-cyan-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardHeader className="pb-6 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <Badge 
                    variant="secondary" 
                    className="text-xs font-bold bg-primary/10 text-primary border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                  >
                    {program.category}
                  </Badge>
                  <div className="text-right">
                    <div className="text-2xl font-black bg-gradient-to-r from-primary to-cyan-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                      {program.price}
                    </div>
                  </div>
                </div>
                <CardTitle className="text-2xl font-black text-card-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {program.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {program.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6 relative z-10">
                <div className="flex justify-between items-center text-sm text-muted-foreground bg-muted/50 p-4 rounded-xl border border-border/50 group-hover:bg-muted/70 transition-colors duration-300">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="font-medium">{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="font-medium">{program.ageGroup}</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-bold text-card-foreground flex items-center gap-2">
                    <Star className="h-5 w-5 text-amber-500 group-hover:rotate-12 transition-transform duration-300" />
                    What's Included
                  </h4>
                  <ul className="space-y-3">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-sm text-muted-foreground group-hover:text-card-foreground transition-colors duration-300">
                        <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full bg-gradient-to-r from-primary to-cyan-600 text-primary-foreground py-4 px-6 rounded-xl font-bold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform group-hover:scale-[1.02] relative overflow-hidden group/btn">
                  <span className="relative z-10">Enroll Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-cyan-600/80 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
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