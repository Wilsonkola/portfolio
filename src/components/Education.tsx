import { motion } from "framer-motion";
import { education } from "../data/resume";

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3">Education</p>
          <h2 className="font-display text-3xl md:text-5xl text-cream mb-8">
            Academic Foundation
          </h2>
          <div className="w-16 h-px bg-gold/40" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-charcoal-lighter/50 border border-white/5 rounded-lg p-6 md:p-8 hover:border-gold/20 transition-all duration-500"
            >
              <div className="text-gold/70 text-sm tracking-wide mb-3">{edu.dates}</div>
              <h3 className="font-display text-xl text-cream mb-2">{edu.school}</h3>
              <p className="text-cream-dim text-sm leading-relaxed">{edu.degree}</p>
              <p className="text-cream-dim/60 text-sm mt-2">{edu.location}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
