import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    title: "A Decade of Creativity",
    subtitle: "Crafting Visual Stories That Inspire",
    cta: "Explore Our Work",
  },
  {
    id: 2,
    title: "Frame Your Success",
    subtitle: "Premium Signage & Creative Solutions",
    cta: "View Services",
  },
  {
    id: 3,
    title: "Digital Excellence",
    subtitle: "Elevating Brands in the Digital Age",
    cta: "Get Started",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden parallax-container">
      {/* Subtle animated gradient background */}
      <div className="absolute inset-0 gradient-animated opacity-15 z-0" />
      
      {/* Slide Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={`/hero-${slide.id}.jpg`}
            alt={slide.title}
            className="w-full h-full object-cover parallax-layer"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(1.1)`,
            }}
          />
          {/* Removed the blue overlay & glass background */}
        </div>
      ))}

      {/* Text Content (No Glass Box) */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-10">
        <h1 className="text-5xl md:text-8xl font-display font-extrabold text-white mb-4 leading-tight tracking-tight drop-shadow-lg animate-fade-up">
          {slides[currentSlide].title}
        </h1>
        <p className="text-xl md:text-3xl text-white/90 mb-8 font-light animate-fade-up delay-200">
          {slides[currentSlide].subtitle}
        </p>
        <Button
          onClick={() => scrollToSection("services")}
          size="lg"
          className="bg-accent hover:bg-accent/90 text-secondary font-bold px-12 py-8 text-xl shadow-lg hover:scale-110 transition-bounce animate-glow"
        >
          {slides[currentSlide].cta}
        </Button>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-4 rounded-full transition-bounce hover:scale-110 z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="text-white" size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-4 rounded-full transition-bounce hover:scale-110 z-20"
        aria-label="Next slide"
      >
        <ChevronRight className="text-white" size={28} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-bounce ${
              index === currentSlide
                ? "bg-accent w-12 shadow-lg"
                : "bg-white/50 hover:bg-white/70 w-3"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
