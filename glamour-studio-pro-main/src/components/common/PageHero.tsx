import { motion } from "framer-motion";
import { AnimatedText, RevealText } from "@/components/ui/AnimatedText";

interface PageHeroProps {
  tagline: string;
  title: string;
  titleAccent: string;
  description: string;
  backgroundImage?: string;
}

export const PageHero = ({ tagline, title, titleAccent, description, backgroundImage }: PageHeroProps) => {
  return (
    <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center justify-center overflow-hidden pt-24">
      {/* Background */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30 z-10" />
          <motion.img
            src={backgroundImage}
            alt=""
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full h-full object-cover object-center"
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-6"
        >
          <span className="text-primary text-xs tracking-[0.3em] uppercase font-medium">
            {tagline}
          </span>
        </motion.div>

        <RevealText className="mb-6" delay={0.3}>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1]">
            <span className="text-foreground">{title}</span>{" "}
            <span className="text-gold-gradient">{titleAccent}</span>
          </h1>
        </RevealText>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="luxury-divider mt-10"
        />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
};
