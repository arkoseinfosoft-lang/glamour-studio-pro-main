import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import bridalImg from "@/assets/hero-bride.jpg";
import partyImg from "@/assets/party-makeup.jpg";
import hairImg from "@/assets/hair-styling.jpg";
import airbrushImg from "@/assets/airbrush-makeup.jpg";

const portfolioItems = [
  { image: bridalImg, category: "Bridal", title: "Traditional Bridal Elegance" },
  { image: partyImg, category: "Party", title: "Glamorous Evening Look" },
  { image: hairImg, category: "Hair", title: "Romantic Updo Styling" },
  { image: airbrushImg, category: "Airbrush", title: "Flawless HD Finish" },
  { image: bridalImg, category: "Bridal", title: "Royal Bridal Collection" },
  { image: partyImg, category: "Party", title: "Cocktail Night Glam" },
];

const categories = ["All", "Bridal", "Party", "Hair", "Airbrush"];

export const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-12 lg:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-primary text-xs tracking-[0.3em] uppercase font-medium"
          >
            Our Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 mb-6"
          >
            The <span className="text-gold-gradient">Portfolio</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isHeaderInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="luxury-divider"
          />
        </div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 text-xs tracking-[0.15em] uppercase font-medium transition-all duration-300 rounded-full ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground/60 hover:text-foreground border border-border hover:border-primary/50"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, index) => (
            <PortfolioItem key={`${item.title}-${index}`} item={item} index={index} />
          ))}
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    </section>
  );
};

const PortfolioItem = ({ item, index }: { item: typeof portfolioItems[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer img-zoom"
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <span className="text-primary text-xs tracking-[0.2em] uppercase mb-2">
          {item.category}
        </span>
        <h3 className="font-display text-xl text-foreground">
          {item.title}
        </h3>
      </div>

      {/* Gold border on hover */}
      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary/30 transition-colors duration-500" />
    </motion.div>
  );
};
