import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Clock, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import academyImg from "@/assets/academy.jpg";

const courses = [
  {
    title: "Advance Makeup Artistry",
    duration: "3 Months",
    students: "Limited Seats",
    description: "Master bridal, HD, and airbrush techniques from industry experts.",
    price: "₹1,50,000",
    features: ["Bridal Makeup", "HD Techniques", "Airbrush Training", "Portfolio Building"],
  },
  {
    title: "Professional Hair Styling",
    duration: "2 Months",
    students: "Batch of 10",
    description: "Learn contemporary and traditional hair styling for all occasions.",
    price: "₹85,000",
    features: ["Styling Techniques", "Extensions", "Bridal Hair", "Live Practice"],
  },
  {
    title: "Complete Beauty Course",
    duration: "6 Months",
    students: "Limited Seats",
    description: "Comprehensive program covering makeup, hair, and salon services.",
    price: "₹2,50,000",
    features: ["Full Makeup Training", "Hair Styling", "Salon Services", "Business Skills"],
  },
];

const CourseCard = ({ course, index }: { course: typeof courses[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card rounded-xl p-8 glow-border group"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
          <GraduationCap className="w-7 h-7 text-primary" />
        </div>
        <span className="text-3xl font-display text-gold-gradient">{course.price}</span>
      </div>

      <h3 className="font-display text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">
        {course.title}
      </h3>
      
      <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
        {course.description}
      </p>

      <div className="flex items-center gap-6 mb-6 text-sm text-foreground/60">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-primary" />
          {course.duration}
        </div>
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-primary" />
          {course.students}
        </div>
      </div>

      <div className="space-y-3 mb-8">
        {course.features.map((feature, i) => (
          <div key={i} className="flex items-center gap-3">
            <Award className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="text-foreground/80 text-sm">{feature}</span>
          </div>
        ))}
      </div>

      <Button variant="luxury-outline" className="w-full" size="luxuryDefault">
        Enroll Now
      </Button>
    </motion.div>
  );
};

export const AcademySection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const imageRef = useRef(null);
  const isImageInView = useInView(imageRef, { once: true, margin: "-100px" });

  return (
    <section id="academy" className="py-24 lg:py-32 relative bg-secondary/20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-primary text-xs tracking-[0.3em] uppercase font-medium"
          >
            Learn & Grow
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 mb-6"
          >
            Beauty <span className="text-gold-gradient">Academy</span>
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
            Transform your passion into a profession. Learn from award-winning artists 
            and build a successful career in the beauty industry.
          </motion.p>
        </div>

        {/* Academy Image & Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: -50 }}
            animate={isImageInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <img
              src={academyImg}
              alt="Monika Studio Academy"
              className="w-full h-full object-cover aspect-[4/3]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <span className="text-primary text-xs tracking-widest uppercase">Since 2010</span>
              <h3 className="font-display text-3xl text-foreground mt-2">500+ Artists Trained</h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isImageInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h3 className="font-display text-3xl lg:text-4xl text-foreground mb-6">
              Begin Your <span className="text-gold-gradient">Journey</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our academy offers industry-recognized certification programs designed to transform 
              aspiring artists into confident professionals. With hands-on training, live model 
              practice, and mentorship from our expert team, you'll master the art of beauty.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether you're starting fresh or looking to upgrade your skills, our comprehensive 
              courses cover everything from basic techniques to advanced bridal artistry.
            </p>
            <div className="flex flex-wrap gap-8">
              <div>
                <span className="text-4xl font-display text-gold-gradient">98%</span>
                <p className="text-foreground/60 text-sm mt-1">Placement Rate</p>
              </div>
              <div>
                <span className="text-4xl font-display text-gold-gradient">15+</span>
                <p className="text-foreground/60 text-sm mt-1">Expert Trainers</p>
              </div>
              <div>
                <span className="text-4xl font-display text-gold-gradient">10K+</span>
                <p className="text-foreground/60 text-sm mt-1">Hours of Training</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={course.title} course={course} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
