import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { PageHero } from "@/components/common/PageHero";
import { InteractiveCard } from "@/components/ui/InteractiveCard";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/MagneticButton";
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
    features: ["HD Finish", "Trial Session", "Full Day Support"],
  },
  {
    title: "Airbrush & HD Makeup",
    description: "Flawless, camera-ready finish with advanced airbrush technology. Perfect for photoshoots, films, and special occasions.",
    image: airbrushImg,
    features: ["Long-lasting", "Lightweight", "Photo-ready"],
  },
  {
    title: "Party & Event Makeup",
    description: "From cocktail evenings to sangeet nights, we create stunning looks that make you the center of attention.",
    image: partyImg,
    features: ["Bold Looks", "Evening Glam", "Custom Styles"],
  },
  {
    title: "Hair Styling & Extensions",
    description: "Exquisite updos, cascading curls, and seamless extensions crafted to complement your overall look perfectly.",
    image: hairImg,
    features: ["Updos", "Extensions", "Bridal Hair"],
  },
  {
    title: "Salon & Grooming",
    description: "Complete grooming services including facials, manicures, pedicures, and pre-bridal skincare treatments.",
    image: toolsImg,
    features: ["Facials", "Manicures", "Skincare"],
  },
  {
    title: "Academy Courses",
    description: "Learn the art of professional makeup from industry experts. From basics to advanced bridal techniques.",
    image: academyImg,
    features: ["Certification", "Hands-on Training", "Portfolio Building"],
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
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <InteractiveCard className="h-full">
        <div className="group relative overflow-hidden rounded-xl glass-card glow-border h-full">
          <div className="aspect-[4/5] relative overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
            <h3 className="font-display text-2xl lg:text-3xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-foreground/60 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              {service.features.map((feature) => (
                <span
                  key={feature}
                  className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Gold corner accent */}
          <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute top-4 right-4 w-8 h-px bg-primary" />
            <div className="absolute top-4 right-4 w-px h-8 bg-primary" />
          </div>
        </div>
      </InteractiveCard>
    </motion.div>
  );
};

export default function Services() {
  return (
    <>
      <PageHero
        tagline="What We Offer"
        title="Our Premium"
        titleAccent="Services"
        description="Discover our range of luxury beauty services, each crafted to perfection by our award-winning team of artists."
        backgroundImage={bridalImg}
      />

      {/* Services Grid */}
      <section className="py-24 lg:py-32 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-20"
          >
            <h3 className="font-display text-2xl md:text-3xl mb-6">
              Ready to Book Your <span className="text-gold-gradient">Session</span>?
            </h3>
            <MagneticButton>
              <Button variant="luxury" size="luxuryLg" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Background Decoration */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl translate-y-1/2" />
      </section>
    </>
  );
}
