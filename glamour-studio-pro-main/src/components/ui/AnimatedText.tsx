import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  type?: "words" | "lines" | "chars";
}

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.08, 
      delayChildren: 0 
    },
  },
};

const child = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      damping: 15,
      stiffness: 100,
    },
  },
};

export const AnimatedText = ({ text, className = "", delay = 0, type = "words" }: AnimatedTextProps) => {
  const items = type === "chars" 
    ? text.split("") 
    : type === "lines" 
    ? text.split("\n") 
    : text.split(" ");

  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {items.map((item, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block"
          custom={delay}
        >
          {item}
          {type !== "chars" && <span>&nbsp;</span>}
        </motion.span>
      ))}
    </motion.span>
  );
};

interface RevealTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const RevealText = ({ children, className = "", delay = 0 }: RevealTextProps) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1] as const,
          delay,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
