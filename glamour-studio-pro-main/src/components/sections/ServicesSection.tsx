import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import bridalImg from "@/assets/hero-bride.jpg";
import partyImg from "@/assets/party-makeup.jpg";
import hairImg from "@/assets/hair-styling.jpg";
import airbrushImg from "@/assets/airbrush-makeup.jpg";
import academyImg from "@/assets/academy.jpg";
import toolsImg from "@/assets/makeup-tools.jpg";

const services = [
  {
    title: "Bridal Makeup",
    description: "Transform into the most radiant version of yourself. Our signature bridal looks blend traditional elegance with contemporary glamour.",
    image: bridalImg,
  },
  {
    title: "Airbrush & HD Makeup",
    description: "Flawless, camera-ready finish with advanced airbrush technology. Perfect for photoshoots, films, and special occasions.",
    image: airbrushImg,
  },
  {
    title: "Party & Event Makeup",
    description: "From cocktail evenings to sangeet nights, we create stunning looks that make you the center of attention.",
    image: partyImg,
  },
  {
    title: "Hair Styling & Extensions",
    description: "Exquisite updos, cascading curls, and seamless extensions crafted to complement your overall look perfectly.",
    image: hairImg,
  },
  {
    title: "Salon & Grooming",
    description: "Complete grooming services including facials, manicures, pedicures, and pre-bridal skincare treatments.",
    image: toolsImg,
  },
  {
    title: "Academy Courses",
    description: "Learn the art of professional makeup from industry experts. From basics to advanced bridal techniques.",
    image: academyImg,
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-lg glass-card glow-border"
    >
      <div className="img-zoom aspect-[4/5] relative">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
        <h3 className="font-display text-2xl lg:text-3xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-foreground/60 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          {service.description}
        </p>
      </div>

      {/* Gold corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-4 right-4 w-8 h-px bg-primary" />
        <div className="absolute top-4 right-4 w-px h-8 bg-primary" />
      </div>
    </motion.div>
  );
};

export const ServicesSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="services" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-primary text-xs tracking-[0.3em] uppercase font-medium"
          >
            What We Offer
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 mb-6"
          >
            Our <span className="text-gold-gradient">Services</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isHeaderInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="luxury-divider"
          />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl translate-y-1/2" />
    </section>
  );
};
