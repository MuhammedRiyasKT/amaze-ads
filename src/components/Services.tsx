import { Printer, Type, Globe2, LayoutDashboard } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: Printer,
    title: "Custom Printing & Personalized Gifts",
    description: (
      <>
        <p className="mb-2">
          Innovative printing solutions for preserving memories and creating unique gifts.
        </p>
        <ul className="list-disc ml-5 space-y-1 text-muted-foreground">
          <li>Photo Printing & Framing – High-quality printing, frames & lamination.</li>
          <li>Sublimation Printing – Custom designs on mugs, t-shirts, keychains & more.</li>
          <li>Customized Gift Items – Perfect for birthdays, anniversaries & events.</li>
          <li>
            UV Printing (Crystal Wall Art) – High-definition prints on glass, acrylic & wood through
            <b> Crystal Glass Art </b> & <b> Crystal Wall Art</b>.
          </li>
        </ul>
      </>
    ),
    gradient: "from-pink-500 to-red-500",
  },
  {
    icon: Type,
    title: "Signage & Branding Solutions",
    description: (
      <>
        <p className="mb-2">
          Give your business a stunning and professional physical presence.
        </p>
        <ul className="list-disc ml-5 space-y-1 text-muted-foreground">
          <li>Acrylic LED 3D Letters – Eye-catching signboards for shops & offices.</li>
          <li>Signboard Manufacturing – Indoor & outdoor signage design & installation.</li>
          <li>Laser Cutting & Molding – Precision design work on acrylic, wood & more.</li>
        </ul>
      </>
    ),
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: Globe2,
    title: "Digital Marketing & Creative Services",
    description: (
      <>
        <p className="mb-2">
          Everything you need to make your brand stand out in the digital world.
        </p>
        <ul className="list-disc ml-5 space-y-1 text-muted-foreground">
          <li>
            Digital Marketing – Social Media Marketing, SEO, and Content Strategies.
          </li>
          <li>
            Content Creation – Engaging social media posts, videos, Reels & promotions.
          </li>
          <li>Online Courses – Learn design, digital marketing, and creative skills.</li>
          <li>
            Video Editing – Professional editing for weddings, promos, and social media.
          </li>
          <li>Graphic Design – Posters, logos, and brand identity solutions.</li>
        </ul>
      </>
    ),
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: LayoutDashboard,
    title: "Interior & Display Solutions",
    description: (
      <>
        <p className="mb-2">
          Transform spaces into visually captivating environments that reflect your brand’s identity.
        </p>
        <ul className="list-disc ml-5 space-y-1 text-muted-foreground">
          <li>Wall Frames & Art Installations – Custom decor for homes & offices.</li>
          <li>Interior Branding – Wall graphics, vinyl stickers & illuminated panels.</li>
          <li>
            Exhibition & Event Displays – Booth setups, backdrops & branding for expos.
          </li>
          <li>3D Decor & Acrylic Creations – Layered art & 3D wall elements.</li>
        </ul>
      </>
    ),
    gradient: "from-yellow-500 to-orange-600",
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
            Everything you need to grow, brand, and showcase your business beautifully.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-10">
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
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-bounce animate-glow shadow-glass`}
                >
                  <Icon className="text-white" size={40} />
                </div>

                <h3 className="text-3xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-smooth">
                  {service.title}
                </h3>
                <div className="text-lg leading-relaxed">{service.description}</div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div
          className="text-center mt-20 animate-fade-up"
          style={{
            animationDelay: "0.6s",
          }}
        >
          <p className="text-xl text-muted-foreground mb-6">
            Ready to bring your vision to life?
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
