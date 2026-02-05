import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { PageHero } from "@/components/common/PageHero";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import toolsImg from "@/assets/makeup-tools.jpg";
import academyImg from "@/assets/academy.jpg";

const milestones = [
  { year: "2010", title: "Studio Founded", description: "Started with a vision to redefine bridal beauty" },
  { year: "2014", title: "Academy Launch", description: "Opened doors to aspiring makeup artists" },
  { year: "2018", title: "National Recognition", description: "Featured in top beauty publications" },
  { year: "2022", title: "10,000+ Brides", description: "Milestone of transformations achieved" },
];

const team = [
  { name: "Monika Sharma", role: "Founder & Lead Artist", initial: "MS" },
  { name: "Priya Singh", role: "Senior Bridal Specialist", initial: "PS" },
  { name: "Anita Roy", role: "Hair Styling Expert", initial: "AR" },
  { name: "Neha Kapoor", role: "Academy Director", initial: "NK" },
];

export default function About() {
  const storyRef = useRef(null);
  const isStoryInView = useInView(storyRef, { once: true, margin: "-100px" });
  const timelineRef = useRef(null);
  const isTimelineInView = useInView(timelineRef, { once: true, margin: "-100px" });
  const teamRef = useRef(null);
  const isTeamInView = useInView(teamRef, { once: true, margin: "-100px" });

  return (
    <>
      <PageHero
        tagline="Our Story"
        title="About"
        titleAccent="The Studio"
        description="Discover the passion, artistry, and dedication that has made us India's most trusted beauty destination."
        backgroundImage={academyImg}
      />

      {/* Story Section */}
      <section ref={storyRef} className="py-24 lg:py-32 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
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
              <motion.div
                initial={{ opacity: 0 }}
                animate={isStoryInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -bottom-6 -right-6 w-full h-full border border-primary/20 rounded-2xl -z-10"
              />
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h2 className="font-display text-3xl lg:text-4xl text-foreground mb-6">
                Where Artistry Meets <span className="text-gold-gradient">Elegance</span>
              </h2>
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
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isStoryInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-center"
                >
                  <span className="text-3xl lg:text-4xl font-display text-gold-gradient">15+</span>
                  <p className="text-foreground/60 text-sm mt-1">Years Experience</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isStoryInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="text-center"
                >
                  <span className="text-3xl lg:text-4xl font-display text-gold-gradient">10K+</span>
                  <p className="text-foreground/60 text-sm mt-1">Happy Clients</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isStoryInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="text-center"
                >
                  <span className="text-3xl lg:text-4xl font-display text-gold-gradient">25+</span>
                  <p className="text-foreground/60 text-sm mt-1">Expert Artists</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={timelineRef} className="py-24 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTimelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-xs tracking-[0.3em] uppercase font-medium">
              Milestones
            </span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 mb-6">
              Our <span className="text-gold-gradient">Journey</span>
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isTimelineInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="luxury-divider"
            />
          </motion.div>

          <div className="max-w-4xl mx-auto relative">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isTimelineInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <span className="text-primary font-display text-xl">{milestone.year}</span>
                    <h3 className="text-foreground font-display text-xl mt-1">{milestone.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{milestone.description}</p>
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isTimelineInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                    className="hidden md:flex w-4 h-4 rounded-full bg-primary relative z-10 flex-shrink-0"
                  />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-xs tracking-[0.3em] uppercase font-medium">
              The Artists
            </span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 mb-6">
              Meet Our <span className="text-gold-gradient">Team</span>
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isTeamInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="luxury-divider"
            />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                className="text-center group"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <span className="text-2xl font-display text-primary">{member.initial}</span>
                </div>
                <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </motion.div>
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
              Ready to Experience <span className="text-gold-gradient">Our Artistry</span>?
            </h3>
            <MagneticButton>
              <Button variant="luxury" size="luxuryLg" asChild>
                <Link to="/contact">Book a Session</Link>
              </Button>
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </>
  );
}
