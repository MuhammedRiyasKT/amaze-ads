import { Megaphone, Video, Palette, GraduationCap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Strategic campaigns that connect your brand with the right audience across all digital platforms.",
    gradient: "from-primary to-blue-600",
  },
  {
    icon: Video,
    title: "Content Creation",
    description:
      "Engaging videos, stunning graphics, and compelling social media content that tells your story.",
    gradient: "from-accent to-orange-500",
  },
  {
    icon: Palette,
    title: "Signage & Printing",
    description:
      "Premium quality signage, banners, and printing solutions that make your brand stand out.",
    gradient: "from-purple-600 to-pink-600",
  },
  {
    icon: GraduationCap,
    title: "Online Courses",
    description:
      "Professional design and marketing courses to empower your creative journey and business growth.",
    gradient: "from-green-600 to-teal-600",
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight));
        setScrollY(scrollProgress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-32 px-4 overflow-hidden bg-gradient-to-b from-muted to-background"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 gradient-animated opacity-5" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div
          className="text-center mb-20 animate-fade-up"
          style={{
            transform: `translateY(${-20 + scrollY * 20}px)`,
            opacity: scrollY,
          }}
        >
          <h2 className="text-5xl md:text-7xl font-display font-extrabold text-foreground mb-6">
            Our Services
          </h2>
          <div className="h-2 w-32 bg-gradient-to-r from-primary via-accent to-primary rounded-full mx-auto mb-6 animate-shimmer bg-[length:200%_100%]" />
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive creative solutions tailored to elevate your brand
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const delay = index * 0.1;
            
            return (
              <div
                key={index}
                className="group glass-card p-10 rounded-3xl hover:scale-105 transition-bounce shadow-glass animate-fade-up"
                style={{
                  animationDelay: `${delay}s`,
                  transform: `translateY(${20 - scrollY * 20}px)`,
                  opacity: Math.min(1, scrollY + 0.3),
                }}
              >
                {/* Icon with gradient background */}
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-bounce animate-glow shadow-glass`}
                >
                  <Icon className="text-white" size={40} />
                </div>

                {/* Content */}
                <h3 className="text-3xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-smooth">
                  {service.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Hover indicator */}
                <div className="mt-6 flex items-center text-primary font-semibold opacity-0 group-hover:opacity-100 transition-smooth">
                  <span>Learn more</span>
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-smooth"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className="text-center mt-20 animate-fade-up"
          style={{
            animationDelay: "0.6s",
          }}
        >
          <p className="text-xl text-muted-foreground mb-6">
            Ready to transform your brand?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="glass-card px-10 py-4 rounded-full text-lg font-semibold text-foreground hover:scale-110 transition-bounce shadow-glass hover:text-primary"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
