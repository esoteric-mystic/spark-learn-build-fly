
import { Users, Award, Target, Globe } from "lucide-react";

const FeaturesSection = () => {
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

  return (
    <section id="about" className="py-24 bg-gradient-to-r from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-gray-800 mb-6">
            Why Choose CogniBot?
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
  );
};

export default FeaturesSection;
