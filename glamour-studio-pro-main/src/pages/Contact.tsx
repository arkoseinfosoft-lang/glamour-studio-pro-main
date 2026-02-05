import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import bridalImg from "@/assets/hero-bride.jpg";

const contactInfo = [
  { icon: MapPin, label: "Studio Address", value: "123 Glamour Street, Connaught Place, New Delhi - 110001" },
  { icon: Phone, label: "Phone", value: "+91 98765 43210" },
  { icon: Mail, label: "Email", value: "hello@monikastudio.com" },
  { icon: Clock, label: "Working Hours", value: "Mon - Sat: 10AM - 8PM" },
];

export default function Contact() {
  const formRef = useRef(null);
  const isFormInView = useInView(formRef, { once: true, margin: "-50px" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <PageHero
        tagline="Get In Touch"
        title="Book Your"
        titleAccent="Session"
        description="Ready to experience the Monika Studio difference? Fill out the form below and our team will get back to you within 24 hours."
        backgroundImage={bridalImg}
      />

      {/* Contact Section */}
      <section className="py-24 lg:py-32 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div ref={formRef} className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 space-y-8"
            >
              <h3 className="font-display text-2xl text-foreground mb-8">
                Contact Information
              </h3>

              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-muted-foreground text-sm">{info.label}</span>
                    <p className="text-foreground mt-1">{info.value}</p>
                  </div>
                </motion.div>
              ))}

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="pt-8 border-t border-border"
              >
                <span className="text-muted-foreground text-sm block mb-4">Follow Us</span>
                <div className="flex gap-4">
                  {["Instagram", "Facebook", "YouTube"].map((social) => (
                    <MagneticButton key={social}>
                      <a
                        href="#"
                        className="text-foreground/60 hover:text-primary text-sm transition-colors"
                      >
                        {social}
                      </a>
                    </MagneticButton>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 lg:p-10">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <CheckCircle className="w-16 h-16 text-primary mb-4" />
                    <h3 className="font-display text-2xl text-foreground mb-2">
                      Thank You!
                    </h3>
                    <p className="text-muted-foreground">
                      We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="relative">
                        <label className="text-foreground/80 text-sm block mb-2">Full Name</label>
                        <motion.div
                          animate={{
                            boxShadow: focusedField === "name" ? "0 0 20px hsla(45, 80%, 45%, 0.2)" : "none"
                          }}
                          className="rounded-lg"
                        >
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("name")}
                            onBlur={() => setFocusedField(null)}
                            className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                            placeholder="Your name"
                            required
                          />
                        </motion.div>
                      </div>
                      <div className="relative">
                        <label className="text-foreground/80 text-sm block mb-2">Email</label>
                        <motion.div
                          animate={{
                            boxShadow: focusedField === "email" ? "0 0 20px hsla(45, 80%, 45%, 0.2)" : "none"
                          }}
                          className="rounded-lg"
                        >
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("email")}
                            onBlur={() => setFocusedField(null)}
                            className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                            placeholder="your@email.com"
                            required
                          />
                        </motion.div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="text-foreground/80 text-sm block mb-2">Phone</label>
                        <motion.div
                          animate={{
                            boxShadow: focusedField === "phone" ? "0 0 20px hsla(45, 80%, 45%, 0.2)" : "none"
                          }}
                          className="rounded-lg"
                        >
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("phone")}
                            onBlur={() => setFocusedField(null)}
                            className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                            placeholder="+91 98765 43210"
                            required
                          />
                        </motion.div>
                      </div>
                      <div>
                        <label className="text-foreground/80 text-sm block mb-2">Service</label>
                        <motion.div
                          animate={{
                            boxShadow: focusedField === "service" ? "0 0 20px hsla(45, 80%, 45%, 0.2)" : "none"
                          }}
                          className="rounded-lg"
                        >
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("service")}
                            onBlur={() => setFocusedField(null)}
                            className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                            required
                          >
                            <option value="">Select a service</option>
                            <option value="bridal">Bridal Makeup</option>
                            <option value="party">Party & Event Makeup</option>
                            <option value="airbrush">Airbrush & HD Makeup</option>
                            <option value="hair">Hair Styling</option>
                            <option value="academy">Academy Enrollment</option>
                            <option value="other">Other</option>
                          </select>
                        </motion.div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="text-foreground/80 text-sm block mb-2">Message</label>
                      <motion.div
                        animate={{
                          boxShadow: focusedField === "message" ? "0 0 20px hsla(45, 80%, 45%, 0.2)" : "none"
                        }}
                        className="rounded-lg"
                      >
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("message")}
                          onBlur={() => setFocusedField(null)}
                          rows={4}
                          className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                          placeholder="Tell us about your requirements..."
                        />
                      </motion.div>
                    </div>

                    <MagneticButton className="w-full">
                      <Button variant="luxury" size="luxuryLg" className="w-full">
                        <Send className="w-4 h-4 mr-2" />
                        Schedule Your Session
                      </Button>
                    </MagneticButton>
                  </>
                )}
              </form>
            </motion.div>
          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </section>
    </>
  );
}
