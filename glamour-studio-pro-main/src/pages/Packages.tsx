import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Check, Sparkles } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { InteractiveCard } from "@/components/ui/InteractiveCard";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import toolsImg from "@/assets/makeup-tools.jpg";

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
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="h-full"
    >
      <InteractiveCard className="h-full">
        <div
          className={`relative rounded-xl p-8 lg:p-10 h-full ${
            pkg.popular
              ? "glass-card border-primary/30 shadow-[0_0_40px_-10px_hsl(var(--primary)/0.3)]"
              : "glass-card"
          }`}
        >
          {/* Popular Badge */}
          {pkg.popular && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -top-4 left-1/2 -translate-x-1/2"
            >
              <div className="flex items-center gap-1.5 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
                <Sparkles className="w-3 h-3" />
                Best Value
              </div>
            </motion.div>
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

          <MagneticButton className="w-full">
            <Button
              variant={pkg.popular ? "luxury" : "luxury-outline"}
              className="w-full"
              size="luxuryDefault"
              asChild
            >
              <Link to="/contact">Book This Package</Link>
            </Button>
          </MagneticButton>
        </div>
      </InteractiveCard>
    </motion.div>
  );
};

export default function Packages() {
  return (
    <>
      <PageHero
        tagline="Pricing"
        title="Packages &"
        titleAccent="Offers"
        description="Choose from our curated packages designed for every special occasion. Custom packages available upon request."
        backgroundImage={toolsImg}
      />

      {/* Packages Grid */}
      <section className="py-24 lg:py-32 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {packages.map((pkg, index) => (
              <PackageCard key={pkg.name} pkg={pkg} index={index} />
            ))}
          </div>

          {/* Custom Package CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-20 p-12 glass-card rounded-2xl"
          >
            <h3 className="font-display text-2xl md:text-3xl mb-4">
              Need a <span className="text-gold-gradient">Custom Package</span>?
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              We understand every event is unique. Let us create a personalized
              package tailored to your specific requirements.
            </p>
            <MagneticButton>
              <Button variant="luxury" size="luxuryLg" asChild>
                <Link to="/contact">Request Custom Quote</Link>
              </Button>
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </>
  );
}
