import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Bride, Delhi",
    rating: 5,
    text: "Monika Studio made my wedding day absolutely magical. The bridal makeup was flawless and lasted through all the emotions and celebrations. I felt like royalty!",
    image: "PS",
  },
  {
    name: "Ananya Gupta",
    role: "Corporate Event",
    rating: 5,
    text: "The team's professionalism and attention to detail is unmatched. My makeup for the annual gala was perfect - glamorous yet sophisticated. Received so many compliments!",
    image: "AG",
  },
  {
    name: "Meera Patel",
    role: "Academy Graduate",
    rating: 5,
    text: "Enrolling in the advanced makeup course was the best decision. The training was comprehensive, and I now run my own successful studio. Forever grateful!",
    image: "MP",
  },
  {
    name: "Sneha Reddy",
    role: "Bride, Mumbai",
    rating: 5,
    text: "From the trial session to the wedding day, every moment was handled with such care. The HD makeup looked incredible in photos. Thank you for making me feel beautiful!",
    image: "SR",
  },
  {
    name: "Kavita Joshi",
    role: "Sangeet & Mehendi",
    rating: 5,
    text: "Got my entire family's makeup done for my sister's wedding. Everyone looked stunning and coordinated perfectly. The artists are so talented and friendly!",
    image: "KJ",
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-primary text-xs tracking-[0.3em] uppercase font-medium"
          >
            Client Love
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 mb-6"
          >
            What They <span className="text-gold-gradient">Say</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isHeaderInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="luxury-divider"
          />
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-2xl p-8 lg:p-12 relative"
          >
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 lg:top-12 lg:right-12">
              <Quote className="w-12 h-12 text-primary/20" />
            </div>

            {/* Rating */}
            <div className="flex gap-1 mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>

            {/* Text */}
            <p className="text-foreground text-xl lg:text-2xl font-display leading-relaxed mb-8 italic">
              "{currentTestimonial.text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-semibold">{currentTestimonial.image}</span>
              </div>
              <div>
                <h4 className="text-foreground font-medium text-lg">{currentTestimonial.name}</h4>
                <p className="text-muted-foreground text-sm">{currentTestimonial.role}</p>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-border hover:border-primary/50 flex items-center justify-center transition-colors group"
            >
              <ChevronLeft className="w-5 h-5 text-foreground/60 group-hover:text-primary transition-colors" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "bg-foreground/20 hover:bg-foreground/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-border hover:border-primary/50 flex items-center justify-center transition-colors group"
            >
              <ChevronRight className="w-5 h-5 text-foreground/60 group-hover:text-primary transition-colors" />
            </button>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
    </section>
  );
};
