
import { ShoppingCart, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: "AI Robotics Starter Kit",
      description: "Complete beginner-friendly kit with sensors, motors, and programmable controller. Perfect for students aged 8-14.",
      // price: "₹4,999",
      // originalPrice: "₹6,999",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
      rating: 4.8,
      reviews: 156,
      features: ["Drag & Drop Programming", "10+ Projects Included", "Safety Certified", "Online Tutorial Access"],
      badge: "New"
    },
    {
      id: 2,
      name: "Advanced Drone Building Kit",
      description: "Professional-grade drone assembly kit with HD camera, GPS navigation, and autonomous flight capabilities.",
      // price: "₹12,999",
      // originalPrice: "₹15,999",
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=400&h=300&fit=crop",
      rating: 4.9,
      reviews: 89,
      features: ["HD Camera Included", "GPS Navigation", "Flight Controller", "Professional Assembly"],
      badge: "New"
    },
    {
      id: 3,
      name: "IoT Smart Home Kit",
      description: "Learn Internet of Things with this comprehensive kit featuring smart sensors, WiFi modules, and mobile app control.",
      // price: "₹3,499",
      // originalPrice: "₹4,999",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      rating: 4.7,
      reviews: 203,
      features: ["WiFi Connectivity", "Mobile App Control", "Multiple Sensors", "Cloud Integration"],
      badge: "New"
    },
    // {
    //   id: 4,
    //   name: "AI Programming Course",
    //   description: "Comprehensive online course covering machine learning basics, neural networks, and practical AI applications.",
    //   // price: "₹2,999",
    //   // originalPrice: "₹4,499",
    //   image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
    //   rating: 4.9,
    //   reviews: 324,
    //   features: ["40+ Video Lessons", "Hands-on Projects", "Certificate Included", "Lifetime Access"],
    //   badge: "Popular"
    // },
    // {
    //   id: 5,
    //   name: "Robotics Competition Kit",
    //   description: "Professional robotics kit designed for competitions with high-precision sensors and advanced programming capabilities.",
    //   // price: "₹18,999",
    //   // originalPrice: "₹22,999",
    //   image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop",
    //   rating: 5.0,
    //   reviews: 67,
    //   features: ["Competition Ready", "Advanced Sensors", "Metal Chassis", "Programming IDE"],
    //   badge: "Pro"
    // },
    // {
    //   id: 6,
    //   name: "STEM Learning Bundle",
    //   description: "Complete STEM education package with physics experiments, chemistry kits, and mathematical modeling tools.",
    //   // price: "₹5,999",
    //   // originalPrice: "₹8,999",
    //   image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
    //   rating: 4.6,
    //   reviews: 145,
    //   features: ["3 Subject Areas", "Experiment Guides", "Safety Equipment", "Teacher Resources"],
    //   badge: "Bundle"
    // }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-gray-800 mb-6">
            Our Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated collection of educational kits, courses, and tools 
            designed to inspire the next generation of innovators and technology leaders.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white"
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge 
                  className="absolute top-3 left-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold"
                >
                  {product.badge}
                </Badge>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300 mb-2">
                  {product.name}
                </CardTitle>
                
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex gap-1">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {product.description}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between mb-6">
                  <div>
                    {/* <span className="text-2xl font-bold text-gray-800">{product.price}</span> */}
                    {/* <span className="text-sm text-gray-500 line-through ml-2">{product.originalPrice}</span> */}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button 
                    className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {/* <ShoppingCart className="w-4 h-4 mr-2" /> */}
                    Learn More<ArrowRight className="w-4 h-4" />
                  </Button>
                  
                  {/* <Button 
                    variant="outline" 
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-xl font-medium transition-all duration-300"
                  >
                    
                  </Button> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 px-12 py-6 rounded-2xl text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            View All Products <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default ProductsSection;
