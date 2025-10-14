import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const Contact = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you soon.");
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-32 px-4 overflow-hidden bg-gradient-to-b from-background to-muted"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-animated opacity-10" />

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
            Get In Touch
          </h2>
          <div className="h-2 w-32 bg-gradient-to-r from-primary via-accent to-primary rounded-full mx-auto mb-6 animate-shimmer bg-[length:200%_100%]" />
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Let's create something amazing together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div
            className="space-y-8 animate-fade-up"
            style={{
              animationDelay: "0.2s",
              transform: `translateX(${-20 + scrollY * 20}px)`,
              opacity: Math.min(1, scrollY + 0.3),
            }}
          >
            <div className="glass-card p-8 rounded-3xl shadow-glass hover:scale-105 transition-bounce">
              <h3 className="text-3xl font-display font-bold text-foreground mb-8">
                Amaze Ads
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-bounce shadow-glass">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-lg">Address</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Kayamkulam, Kerala, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-orange-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-bounce shadow-glass">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-lg">Phone</h4>
                    <p className="text-muted-foreground">+91 XXXXX XXXXX</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-bounce shadow-glass">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-lg">Email</h4>
                    <p className="text-muted-foreground">info@amazeads.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="glass-card rounded-3xl overflow-hidden shadow-glass h-80 hover:scale-105 transition-bounce">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63206.89817173986!2d76.4395!3d9.1747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0609c1a7f1e32d%3A0x9e6c5e1a5c0a5e1a!2sKayamkulam%2C%20Kerala!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="animate-fade-up"
            style={{
              animationDelay: "0.4s",
              transform: `translateX(${20 - scrollY * 20}px)`,
              opacity: Math.min(1, scrollY + 0.3),
            }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-10 rounded-3xl shadow-glass space-y-6">
              <div>
                <label htmlFor="name" className="block text-foreground font-semibold mb-2 text-lg">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="glass border-white/20 focus:border-primary text-foreground placeholder:text-muted-foreground h-14 text-lg"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-foreground font-semibold mb-2 text-lg">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="glass border-white/20 focus:border-primary text-foreground placeholder:text-muted-foreground h-14 text-lg"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-foreground font-semibold mb-2 text-lg">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  required
                  rows={6}
                  className="glass border-white/20 focus:border-primary text-foreground placeholder:text-muted-foreground resize-none text-lg"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-bold text-lg py-7 shadow-glass hover:scale-105 transition-bounce"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
