import { motion } from "framer-motion";
import { summary, stats } from "../data/resume";
import AnimatedCounter from "./AnimatedCounter";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3">About</p>
          <h2 className="font-display text-3xl md:text-5xl text-cream mb-8">
            The Story So Far
          </h2>
          <div className="w-16 h-px bg-gold/40" />
        </motion.div>

        {/* Narrative */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-cream-dim text-lg md:text-xl leading-relaxed max-w-3xl mb-20"
        >
          {summary}
        </motion.p>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.numericValue}
              prefix={stat.prefix}
              suffix={stat.suffix}
              label={stat.label}
              delay={i * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
