import { useEffect, useRef, useState } from "react";

const About = () => {
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
      id="about"
      ref={sectionRef}
      className="relative py-32 px-4 overflow-hidden bg-gradient-to-b from-background to-muted"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full blur-3xl animate-float"
          style={{ transform: `translateY(${scrollY * 50}px)` }}
        />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-float"
          style={{ transform: `translateY(${scrollY * -50}px)`, animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div
            className="space-y-8 animate-fade-up"
            style={{
              transform: `translateX(${-20 + scrollY * 20}px)`,
              opacity: scrollY,
            }}
          >
            <div>
              <h2 className="text-5xl md:text-6xl font-display font-extrabold text-foreground mb-4 leading-tight">
                Amaze Ads
              </h2>
              <div className="h-2 w-32 bg-gradient-to-r from-primary via-accent to-primary rounded-full mb-6 animate-shimmer bg-[length:200%_100%]" />
              <h3 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                A Decade of Creativity, Embracing the Digital Age
              </h3>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                For over a decade, <span className="text-primary font-semibold">Amaze Ads</span> has been at the
                forefront of creative innovation in Kerala. What began as a passion for graphic design
                has evolved into a comprehensive digital creative agency.
              </p>
              <p>
                We've mastered the art of storytelling through stunning visuals, professional signage,
                and cutting-edge digital marketing strategies. Our journey reflects our commitment to
                excellence and adaptation to the ever-changing digital landscape.
              </p>
              <p className="text-foreground font-medium">
                Today, we blend traditional craftsmanship with modern digital solutions to help
                businesses stand out in both physical and digital spaces.
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <div className="glass-card p-6 rounded-2xl flex-1 hover:scale-105 transition-bounce">
                <h4 className="text-4xl font-display font-bold text-primary mb-2">10+</h4>
                <p className="text-muted-foreground font-medium">Years Experience</p>
              </div>
              <div className="glass-card p-6 rounded-2xl flex-1 hover:scale-105 transition-bounce">
                <h4 className="text-4xl font-display font-bold text-primary mb-2">500+</h4>
                <p className="text-muted-foreground font-medium">Projects Completed</p>
              </div>
            </div>
          </div>

          {/* Image Collage */}
          <div
            className="relative h-[600px] parallax-container"
            style={{
              transform: `translateX(${20 - scrollY * 20}px)`,
              opacity: scrollY,
            }}
          >
            <div
              className="absolute top-0 left-0 w-1/2 h-1/2 glass-card rounded-3xl overflow-hidden shadow-glass animate-float"
              style={{ transform: `translateY(${scrollY * 30}px)` }}
            >
              <img
                src="/about-1.jpg"
                alt="Creative workspace"
                className="w-full h-full object-cover hover:scale-110 transition-smooth"
              />
            </div>
            <div
              className="absolute top-0 right-0 w-1/2 h-1/2 glass-card rounded-3xl overflow-hidden shadow-glass animate-float"
              style={{ transform: `translateY(${scrollY * -20}px)`, animationDelay: "1s" }}
            >
              <img
                src="/about-2.jpg"
                alt="Signage work"
                className="w-full h-full object-cover hover:scale-110 transition-smooth"
              />
            </div>
            <div
              className="absolute bottom-0 left-0 w-1/2 h-1/2 glass-card rounded-3xl overflow-hidden shadow-glass animate-float"
              style={{ transform: `translateY(${scrollY * -30}px)`, animationDelay: "2s" }}
            >
              <img
                src="/about-3.jpg"
                alt="Digital design"
                className="w-full h-full object-cover hover:scale-110 transition-smooth"
              />
            </div>
            <div
              className="absolute bottom-0 right-0 w-1/2 h-1/2 glass-card rounded-3xl overflow-hidden shadow-glass animate-float"
              style={{ transform: `translateY(${scrollY * 20}px)`, animationDelay: "3s" }}
            >
              <img
                src="/about-4.jpg"
                alt="Team collaboration"
                className="w-full h-full object-cover hover:scale-110 transition-smooth"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
