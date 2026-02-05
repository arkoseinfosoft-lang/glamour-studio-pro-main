import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/MagneticButton";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-24">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-xs tracking-[0.3em] uppercase font-medium">
            Page Not Found
          </span>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-gold-gradient mt-4 mb-6">
            404
          </h1>
          <p className="text-muted-foreground text-lg max-w-md mx-auto mb-10">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <MagneticButton>
            <Button variant="luxury" size="luxuryLg" asChild>
              <Link to="/">Return Home</Link>
            </Button>
          </MagneticButton>
        </motion.div>
      </div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
    </section>
  );
};

export default NotFound;
