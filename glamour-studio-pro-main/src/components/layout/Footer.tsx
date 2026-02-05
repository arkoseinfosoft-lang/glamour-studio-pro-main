import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { MagneticButton } from "@/components/ui/MagneticButton";

const footerLinks = {
  services: [
    { name: "Bridal Makeup", href: "/services" },
    { name: "Party Makeup", href: "/services" },
    { name: "Hair Styling", href: "/services" },
    { name: "Salon Services", href: "/services" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/gallery" },
    { name: "Packages", href: "/packages" },
    { name: "Contact", href: "/contact" },
  ],
  support: [
    { name: "FAQs", href: "/contact" },
    { name: "Booking Policy", href: "/contact" },
    { name: "Privacy Policy", href: "/contact" },
    { name: "Terms of Service", href: "/contact" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <h2 className="font-display text-2xl">
                <span className="text-gold-gradient">Monika</span>
                <span className="text-foreground/80 ml-2 font-light">Studio</span>
              </h2>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              India's premier destination for bridal makeup, styling, and professional beauty training.
            </p>
            <div className="flex gap-4">
              {["Instagram", "Facebook", "YouTube"].map((social) => (
                <MagneticButton key={social}>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full border border-border hover:border-primary/50 flex items-center justify-center text-foreground/60 hover:text-primary text-xs transition-all"
                  >
                    {social[0]}
                  </a>
                </MagneticButton>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-foreground font-medium mb-4 text-sm tracking-wider uppercase">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-medium mb-4 text-sm tracking-wider uppercase">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-medium mb-4 text-sm tracking-wider uppercase">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 Monika Monisha Makeup Studio. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              Crafted with <Heart className="w-4 h-4 text-primary inline" /> for beauty enthusiasts
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
