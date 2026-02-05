import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { PageHero } from "@/components/common/PageHero";
import { InteractiveCard } from "@/components/ui/InteractiveCard";
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
  { image: hairImg, category: "Hair", title: "Modern Waves" },
  { image: airbrushImg, category: "Airbrush", title: "Celebrity-Style Finish" },
];

const categories = ["All", "Bridal", "Party", "Hair", "Airbrush"];

const PortfolioItem = ({ item, index }: { item: typeof portfolioItems[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
    >
      <InteractiveCard className="h-full">
        <div className="group relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <motion.span
              initial={{ y: 10, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              className="text-primary text-xs tracking-[0.2em] uppercase mb-2"
            >
              {item.category}
            </motion.span>
            <h3 className="font-display text-xl text-foreground">{item.title}</h3>
          </div>

          {/* Gold border on hover */}
          <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary/30 transition-colors duration-500" />
        </div>
      </InteractiveCard>
    </motion.div>
  );
};

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const gridRef = useRef(null);
  const isGridInView = useInView(gridRef, { once: true });

  const filteredItems = activeCategory === "All"
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <PageHero
        tagline="Our Work"
        title="The"
        titleAccent="Portfolio"
        description="Explore our collection of transformations — each image tells a story of elegance, artistry, and the pursuit of perfection."
        backgroundImage={partyImg}
      />

      {/* Gallery Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2.5 text-xs tracking-[0.15em] uppercase font-medium transition-all duration-300 rounded-full ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/60 hover:text-foreground border border-border hover:border-primary/50"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            ref={gridRef}
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <PortfolioItem
                  key={`${item.title}-${index}`}
                  item={item}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </section>
    </>
  );
}
