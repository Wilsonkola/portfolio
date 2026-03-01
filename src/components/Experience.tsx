import { motion } from "framer-motion";
import { experiences } from "../data/resume";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3">Experience</p>
          <h2 className="font-display text-3xl md:text-5xl text-cream mb-8">
            Where I've Made Impact
          </h2>
          <div className="w-16 h-px bg-gold/40" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gold/20" />

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold border-2 border-charcoal" />

                {/* Date badge */}
                <div className="text-gold/70 text-sm tracking-wide mb-2">{exp.dates}</div>

                {/* Card */}
                <div className="bg-charcoal-lighter/50 border border-white/5 rounded-lg p-6 md:p-8 hover:border-gold/20 transition-all duration-500">
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
                    <div>
                      <h3 className="font-display text-xl md:text-2xl text-cream">
                        {exp.title}
                      </h3>
                      <p className="text-gold text-sm mt-1">
                        {exp.company}
                        {exp.parentCompany && (
                          <span className="text-cream-dim"> ({exp.parentCompany})</span>
                        )}
                      </p>
                    </div>
                    {exp.location && (
                      <p className="text-cream-dim/60 text-sm mt-1 md:mt-0">{exp.location}</p>
                    )}
                  </div>

                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-3 text-cream-dim text-sm leading-relaxed">
                        <span className="text-gold/40 mt-1.5 shrink-0">&#9670;</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
