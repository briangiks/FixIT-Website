import { useState, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronLeft, ChevronRight, Zap, Wrench, ClipboardCheck, AlertCircle, Users } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1767514536575-82aaf8b0afc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwaW5zdGFsbGF0aW9uJTIwcmVwYWlyfGVufDF8fHx8MTc3MTk0MTAxNHww&ixlib=rb-4.1.0&q=80&w=1080",
    icon: Zap,
    title: "MEP Services",
    description: "Electrical, plumbing, HVAC, and generator maintenance solutions",
    color: "text-yellow-400"
  },
  {
    image: "https://images.unsplash.com/photo-1499744349893-0c6de53516e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJwZW50cnklMjB3b29kd29yayUyMHJlcGFpcnxlbnwxfHx8fDE3NzE5NDEwMTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    icon: Wrench,
    title: "General Maintenance",
    description: "Carpentry, painting, masonry, and comprehensive building repairs",
    color: "text-orange-400"
  },
  {
    image: "https://images.unsplash.com/photo-1716037991590-c975184b37df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWludGVuYW5jZSUyMGNoZWNrbGlzdCUyMGluc3BlY3Rpb258ZW58MXx8fHwxNzcxOTQxMDE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    icon: ClipboardCheck,
    title: "Preventive Maintenance",
    description: "Scheduled maintenance programs and asset lifecycle management",
    color: "text-green-400"
  },
  {
    image: "https://images.unsplash.com/photo-1764684994219-8347a5ab0e5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyZ2VuY3klMjByZXNwb25zZSUyMHRlYW18ZW58MXx8fHwxNzcxOTQxMDE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    icon: AlertCircle,
    title: "Emergency Response",
    description: "24/7 rapid deployment teams for critical systems restoration",
    color: "text-red-400"
  },
  {
    image: "https://images.unsplash.com/photo-1768796371809-95b49943a48b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2lsbGVkJTIwdGVjaG5pY2lhbiUyMHdvcmtlcnxlbnwxfHx8fDE3NzE5NDEwMTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    icon: Users,
    title: "Workforce Solutions",
    description: "Skilled technicians and maintenance staff for all your needs",
    color: "text-blue-400"
  }
];

export function ServiceSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
            Our Services at a Glance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the comprehensive facility maintenance solutions we offer to protect your assets and ensure continuity
          </p>
        </div>

        <div className="relative">
          {/* Slideshow Container */}
          <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <ImageWithFallback
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                  <slide.icon className={`h-12 w-12 ${slide.color} mb-4`} />
                  <h3 className="text-3xl md:text-4xl mb-3">{slide.title}</h3>
                  <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
                    {slide.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? "w-8 bg-red-600"
                    : "w-3 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* More Services Button */}
        <div className="text-center mt-12">
          <Link to="/services">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              More Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}