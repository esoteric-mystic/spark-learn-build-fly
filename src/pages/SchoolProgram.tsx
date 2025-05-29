
import { GraduationCap, Users, Calendar, Trophy, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const SchoolProgram = () => {
  const programs = [
    {
      title: "Elementary STEM Program",
      description: "Introduction to robotics and coding for grades K-5",
      duration: "6 months",
      students: "20-25",
      icon: GraduationCap,
      features: ["Basic robot building", "Scratch programming", "Science experiments", "Team projects"]
    },
    {
      title: "Middle School Robotics",
      description: "Advanced robotics and programming for grades 6-8",
      duration: "1 year",
      students: "15-20",
      icon: Users,
      features: ["Arduino programming", "Sensor integration", "Competition preparation", "3D printing"]
    },
    {
      title: "High School AI & Robotics",
      description: "Comprehensive AI and robotics curriculum for grades 9-12",
      duration: "2 years",
      students: "10-15",
      icon: Trophy,
      features: ["Machine learning", "Advanced programming", "Research projects", "Industry internships"]
    }
  ];

  const benefits = [
    "Hands-on STEM learning experience",
    "Industry-standard equipment and software",
    "Certified instructors with real-world experience",
    "Competition opportunities and showcases",
    "Career guidance and mentorship",
    "Flexible scheduling options"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-6">
            School Programs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive STEM education programs designed to inspire and educate the next generation of innovators
          </p>
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
            Enroll Your School
          </Button>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <program.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4 mb-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {program.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {program.students} students
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Our Programs?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                <Star className="h-5 w-5 text-yellow-500" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your School's STEM Education?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about bringing our innovative programs to your school
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
              Schedule a Demo
            </Button>
            <Button size="lg" variant="outline">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SchoolProgram;
