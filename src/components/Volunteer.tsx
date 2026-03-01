import { motion } from "framer-motion";
import { volunteer } from "../data/resume";

export default function Volunteer() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3">Beyond Work</p>
          <h2 className="font-display text-3xl md:text-5xl text-cream mb-8">
            Volunteer & Leadership
          </h2>
          <div className="w-16 h-px bg-gold/40" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {volunteer.map((vol, i) => (
            <motion.div
              key={vol.org}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-charcoal-lighter/50 border border-white/5 rounded-lg p-6 hover:border-gold/20 transition-all duration-500"
            >
              <h3 className="font-display text-lg text-cream mb-1">{vol.org}</h3>
              {vol.role && (
                <p className="text-gold/70 text-xs tracking-wide mb-4">{vol.role}</p>
              )}
              <ul className="space-y-2">
                {vol.bullets.map((bullet, j) => (
                  <li key={j} className="text-cream-dim text-sm leading-relaxed">
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
