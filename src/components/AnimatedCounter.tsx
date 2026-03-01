import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
  delay?: number;
}

export default function AnimatedCounter({ value, prefix = "", suffix, label, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const timeout = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }, delay);
    return () => clearTimeout(timeout);
  }, [isInView, value, delay]);

  const display = value >= 1000
    ? `${prefix}${count.toLocaleString()}${suffix}`
    : `${prefix}${count}${suffix}`;

  return (
    <motion.div
      ref={ref}
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      className="text-center"
    >
      <div className="font-display text-4xl md:text-5xl text-gold mb-2">
        {isInView ? display : `${prefix}0${suffix}`}
      </div>
      <div className="text-cream-dim text-sm tracking-wide">{label}</div>
    </motion.div>
  );
}
