
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Cpu, Zap, Loader } from "lucide-react";
import { usePrograms } from "@/hooks/useData";

const ProgramsSection = () => {
  const { data: programs, isLoading, error } = usePrograms();

  const getIcon = (title: string) => {
    if (title.toLowerCase().includes("ai") || title.toLowerCase().includes("robot")) {
      return <Brain className="h-8 w-8" />;
    } else if (title.toLowerCase().includes("stem") || title.toLowerCase().includes("kit")) {
      return <Cpu className="h-8 w-8" />;
    } else if (title.toLowerCase().includes("drone")) {
      return <Zap className="h-8 w-8" />;
    }
    return <Brain className="h-8 w-8" />;
  };

  const getColor = (index: number) => {
    const colors = [
      "from-blue-500 to-cyan-500",
      "from-purple-500 to-pink-500",
      "from-green-500 to-blue-500"
    ];
    return colors[index % colors.length];
  };

  if (isLoading) {
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
          <div className="flex justify-center">
            <Loader className="h-8 w-8 animate-spin text-blue-600" />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
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
          <div className="text-center text-gray-600">
            <p>Unable to load programs at this time. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

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
          {programs?.map((program, index) => (
            <Card key={program.id} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${getColor(index)} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {getIcon(program.title)}
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {program.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {program.description}
                </p>
                {program.features && program.features.length > 0 && (
                  <div className="space-y-2 mb-6">
                    {program.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="secondary" className="mx-1 text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                )}
                <div className="flex justify-between items-center mb-6 text-sm text-gray-500">
                  {program.age_group && (
                    <span>Age: {program.age_group}</span>
                  )}
                  {program.duration && (
                    <span>Duration: {program.duration}</span>
                  )}
                </div>
                {program.price && (
                  <div className="mb-6">
                    <span className="text-2xl font-bold text-blue-600">${program.price}</span>
                  </div>
                )}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Learn More
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {(!programs || programs.length === 0) && (
          <div className="text-center text-gray-600">
            <p>No programs available at this time.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProgramsSection;
