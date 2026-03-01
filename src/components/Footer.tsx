import { motion } from "framer-motion";
import { personalInfo } from "../data/resume";

export default function Footer() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-charcoal-light/30">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3">Contact</p>
          <h2 className="font-display text-4xl md:text-6xl text-cream mb-6">
            Let's Connect
          </h2>
          <p className="text-cream-dim text-lg mb-10 max-w-xl mx-auto">
            I'm always open to discussing product strategy, new opportunities, or how we might work together.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gold text-charcoal font-medium rounded-full hover:bg-gold-dim transition-colors duration-300"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-8 py-3 border border-gold/30 text-gold rounded-full hover:bg-gold/10 transition-all duration-300"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Me
            </a>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="w-16 h-px bg-gold/20 mx-auto mb-8" />

        <p className="text-cream-dim/40 text-sm">
          &copy; {new Date().getFullYear()} Wilson Kola. All rights reserved.
        </p>
      </div>
    </section>
  );
}
