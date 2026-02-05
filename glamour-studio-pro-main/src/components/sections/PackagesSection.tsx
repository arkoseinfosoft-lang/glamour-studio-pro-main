import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "Engagement Glow",
    price: "₹25,000",
    description: "Perfect for your special engagement day",
    features: [
      "HD/Airbrush Makeup",
      "Hair Styling",
      "Draping Assistance",
      "Touch-up Kit",
      "Pre-event Consultation",
    ],
    popular: false,
  },
  {
    name: "Bridal Luxe",
    price: "₹75,000",
    description: "Complete bridal transformation experience",
    features: [
      "Premium Bridal Makeup",
      "HD & Airbrush Finish",
      "Elaborate Hair Styling",
      "Jewelry & Dupatta Draping",
      "Trial Session Included",
      "Full Day Touch-ups",
      "Bridal Kit Included",
    ],
    popular: true,
  },
  {
    name: "Party Glam",
    price: "₹12,000",
    description: "For cocktails, sangeet, and celebrations",
    features: [
      "Party Makeup Look",
      "Contemporary Styling",
      "Hair Styling",
      "Lashes Included",
      "Touch-up Products",
    ],
    popular: false,
  },
  {
    name: "Family Package",
    price: "₹45,000",
    description: "For mother, sisters & bridesmaids",
    features: [
      "Up to 4 Family Members",
      "Coordinated Looks",
      "Hair & Makeup",
      "Group Consultation",
      "Touch-up Support",
    ],
    popular: false,
  },
];

const PackageCard = ({ pkg, index }: { pkg: typeof packages[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`relative rounded-xl p-8 lg:p-10 ${
        pkg.popular
          ? "glass-card border-primary/30 shadow-[0_0_40px_-10px_hsl(var(--primary)/0.3)]"
          : "glass-card"
      }`}
    >
      {/* Popular Badge */}
      {pkg.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-1.5 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3 h-3" />
            Best Value
          </div>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="font-display text-2xl lg:text-3xl text-foreground mb-2">
          {pkg.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">{pkg.description}</p>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl lg:text-5xl font-display text-gold-gradient">
            {pkg.price}
          </span>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        {pkg.features.map((feature, i) => (
          <motion.div
            key={feature}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 + i * 0.05 }}
            className="flex items-center gap-3"
          >
            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Check className="w-3 h-3 text-primary" />
            </div>
            <span className="text-foreground/80 text-sm">{feature}</span>
          </motion.div>
        ))}
      </div>

      <Button
        variant={pkg.popular ? "luxury" : "luxury-outline"}
        className="w-full"
        size="luxuryDefault"
      >
        Book This Package
      </Button>
    </motion.div>
  );
};

export const PackagesSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="packages" className="py-24 lg:py-32 relative bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-primary text-xs tracking-[0.3em] uppercase font-medium"
          >
            Pricing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 mb-6"
          >
            Packages & <span className="text-gold-gradient">Offers</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isHeaderInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="luxury-divider"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={isHeaderInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-muted-foreground max-w-2xl mx-auto mt-6"
          >
            Choose from our curated packages designed for every special occasion. 
            Custom packages available upon request.
          </motion.p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {packages.map((pkg, index) => (
            <PackageCard key={pkg.name} pkg={pkg} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
