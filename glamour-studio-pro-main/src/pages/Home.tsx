import { motion, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RevealText } from "@/components/ui/AnimatedText";
import { InteractiveCard } from "@/components/ui/InteractiveCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import heroBride from "@/assets/hero-bride.jpg";
import partyImg from "@/assets/party-makeup.jpg";
import hairImg from "@/assets/hair-styling.jpg";
import airbrushImg from "@/assets/airbrush-makeup.jpg";

const featuredServices = [
  { title: "Bridal Makeup", image: heroBride, link: "/services" },
  { title: "Hair Styling", image: hairImg, link: "/services" },
  { title: "Airbrush & HD", image: airbrushImg, link: "/services" },
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "10K+", label: "Happy Clients" },
  { value: "25+", label: "Expert Artists" },
];

export default function Home() {
  const servicesRef = useRef(null);
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-100px" });

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 z-10" />
          <motion.img
            src={heroBride}
            alt="Luxury Bridal Makeup"
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-6"
            >
              <span className="text-primary text-xs tracking-[0.3em] uppercase font-medium">
                Premium Beauty Experience
              </span>
            </motion.div>

            {/* Main Heading */}
            <RevealText className="mb-2" delay={0.4}>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.1] text-foreground">
                Flawless Beauty,
              </h1>
            </RevealText>
            <RevealText className="mb-6" delay={0.5}>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.1] text-gold-gradient">
                Crafted For You
              </h1>
            </RevealText>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-foreground/60 text-lg md:text-xl font-light max-w-xl mb-10 leading-relaxed"
            >
              Bridal, Event, & Personal Glamour Services by India's finest makeup artists.
              Where every stroke tells your unique story of elegance.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <MagneticButton>
                <Button variant="luxury" size="luxuryLg" asChild>
                  <Link to="/services">Explore Services</Link>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button variant="luxury-outline" size="luxuryLg" asChild>
                  <Link to="/contact">Book Your Look</Link>
                </Button>
              </MagneticButton>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="text-foreground/40 text-xs tracking-[0.2em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 text-primary" />
          </motion.div>
        </motion.div>

        {/* Decorative Gold Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent z-20"
        />
      </section>

      {/* Featured Services Preview */}
      <section ref={servicesRef} className="py-24 lg:py-32 relative">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-xs tracking-[0.3em] uppercase font-medium">
              What We Offer
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
              Our <span className="text-gold-gradient">Services</span>
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isServicesInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="luxury-divider"
            />
          </motion.div>

          {/* Featured Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              >
                <InteractiveCard className="group">
                  <Link to={service.link} className="block">
                    <div className="relative aspect-[4/5] rounded-xl overflow-hidden glass-card glow-border">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="font-display text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </InteractiveCard>
              </motion.div>
            ))}
          </div>

          {/* View All Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isServicesInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center mt-12"
          >
            <MagneticButton>
              <Button variant="luxury-outline" size="luxuryDefault" asChild>
                <Link to="/services">View All Services</Link>
              </Button>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Background Decoration */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-3 gap-8 max-w-3xl mx-auto text-center"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-6"
              >
                <span className="text-4xl lg:text-5xl font-display text-gold-gradient">
                  {stat.value}
                </span>
                <p className="text-muted-foreground text-sm mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
              Ready to <span className="text-gold-gradient">Transform</span>?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10">
              Book your session today and experience the artistry that has made us
              India's most trusted beauty destination.
            </p>
            <MagneticButton>
              <Button variant="luxury" size="luxuryLg" asChild>
                <Link to="/contact">Book Now</Link>
              </Button>
            </MagneticButton>
          </motion.div>
        </div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2" />
      </section>
    </>
  );
}
