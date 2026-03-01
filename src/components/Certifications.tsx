import { motion } from "framer-motion";
import { certifications } from "../data/resume";

export default function Certifications() {
  return (
    <section className="py-24 md:py-32 px-6 bg-charcoal-light/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3">Certifications</p>
          <h2 className="font-display text-3xl md:text-5xl text-cream mb-8">
            Credentials
          </h2>
          <div className="w-16 h-px bg-gold/40" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-charcoal-lighter/50 border border-white/5 rounded-lg p-5 text-center hover:border-gold/20 transition-all duration-500 group"
            >
              {/* Badge icon */}
              <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gold"
                >
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-cream text-sm font-medium leading-snug">{cert.name}</h3>
              {cert.issuer && (
                <p className="text-cream-dim/60 text-xs mt-1">{cert.issuer}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
