import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import toolsImg from "@/assets/makeup-tools.jpg";

const milestones = [
  { year: "2010", title: "Studio Founded", description: "Started with a vision to redefine bridal beauty" },
  { year: "2014", title: "Academy Launch", description: "Opened doors to aspiring makeup artists" },
  { year: "2018", title: "National Recognition", description: "Featured in top beauty publications" },
  { year: "2022", title: "10,000+ Brides", description: "Milestone of transformations achieved" },
];

export const AboutSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const contentRef = useRef(null);
  const isContentInView = useInView(contentRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 relative bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-primary text-xs tracking-[0.3em] uppercase font-medium"
          >
            Our Story
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 mb-6"
          >
            About <span className="text-gold-gradient">The Studio</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isHeaderInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="luxury-divider"
          />
        </div>

        {/* Content Grid */}
        <div ref={contentRef} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isContentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src={toolsImg}
                alt="Luxury Makeup Tools"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-primary/20 rounded-2xl -z-10" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isContentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3 className="font-display text-3xl lg:text-4xl text-foreground mb-6">
              Where Artistry Meets <span className="text-gold-gradient">Elegance</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Founded in 2010, Monika Monisha Makeup Studio has been at the forefront of 
              India's beauty industry for over a decade. What began as a passion for 
              enhancing natural beauty has evolved into a premier destination for bridal 
              makeup, styling, and professional training.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our philosophy is simple: every face tells a story, and our job is to make 
              that story unforgettable. With a team of award-winning artists, we blend 
              traditional techniques with contemporary trends to create looks that are 
              both timeless and modern.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 p-6 glass-card rounded-xl">
              <div className="text-center">
                <span className="text-3xl lg:text-4xl font-display text-gold-gradient">15+</span>
                <p className="text-foreground/60 text-sm mt-1">Years Experience</p>
              </div>
              <div className="text-center">
                <span className="text-3xl lg:text-4xl font-display text-gold-gradient">10K+</span>
                <p className="text-foreground/60 text-sm mt-1">Happy Clients</p>
              </div>
              <div className="text-center">
                <span className="text-3xl lg:text-4xl font-display text-gold-gradient">25+</span>
                <p className="text-foreground/60 text-sm mt-1">Expert Artists</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <h4 className="text-center font-display text-2xl text-foreground mb-12">
            Our Journey
          </h4>
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <span className="text-primary font-display text-xl">{milestone.year}</span>
                    <h5 className="text-foreground font-display text-xl mt-1">{milestone.title}</h5>
                    <p className="text-muted-foreground text-sm mt-1">{milestone.description}</p>
                  </div>
                  <div className="hidden md:flex w-4 h-4 rounded-full bg-primary relative z-10 flex-shrink-0" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
    </section>
  );
};
