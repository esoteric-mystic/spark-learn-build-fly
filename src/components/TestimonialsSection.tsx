
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Arjun Patel",
      position: "Student, Grade 8",
      content: "The robotics course changed how I think about technology. I built my first robot and even won a competition!",
      rating: 5
    },
    {
      name: "Priya Sharma",
      position: "Parent",
      content: "My daughter's confidence in STEM subjects has increased dramatically. The instructors are patient and knowledgeable.",
      rating: 5
    },
    {
      name: "Rahul Kumar",
      position: "Student, Grade 10",
      content: "Learning to fly and repair drones was amazing. The course is well-structured and the instructors are supportive.",
      rating: 5
    }
  ].map((t) => ({ ...t, role: t.position }));

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-gray-800 mb-6">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from students and parents who have experienced the CogniBot difference
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
  );
};

export default TestimonialsSection;
