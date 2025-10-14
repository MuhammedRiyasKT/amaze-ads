import { Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-secondary to-secondary/90 text-white py-16 px-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-animated opacity-10" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center animate-glow shadow-glass">
                <span className="text-white font-display font-bold text-2xl">A</span>
              </div>
              <span className="text-3xl font-display font-bold">Amaze Ads</span>
            </div>
            <p className="text-white/80 text-lg leading-relaxed mb-6 max-w-md">
              A decade of creativity meeting the digital age. Transforming brands through
              innovative design and strategic marketing.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass-card rounded-xl flex items-center justify-center hover:scale-110 transition-bounce shadow-glass"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              {/* <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass-card rounded-xl flex items-center justify-center hover:scale-110 transition-bounce shadow-glass"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a> */}
              {/* <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass-card rounded-xl flex items-center justify-center hover:scale-110 transition-bounce shadow-glass"
                aria-label="YouTube"
              >
                <Youtube size={24} />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-display font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-white/80 hover:text-accent transition-smooth text-lg hover:translate-x-2 inline-block"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-white/80 hover:text-accent transition-smooth text-lg hover:translate-x-2 inline-block"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-white/80 hover:text-accent transition-smooth text-lg hover:translate-x-2 inline-block"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-white/80 hover:text-accent transition-smooth text-lg hover:translate-x-2 inline-block"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-display font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li className="text-white/80 text-lg">Digital Marketing</li>
              <li className="text-white/80 text-lg">Content Creation</li>
              <li className="text-white/80 text-lg">Signage & Printing</li>
              <li className="text-white/80 text-lg">Online Courses</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/70 text-lg">
              © 2025 Amaze Ads. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-white/70 hover:text-accent transition-smooth text-lg"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-accent transition-smooth text-lg"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
