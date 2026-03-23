/**
 * src/components/sections/About.tsx
 *
 * The About Me section with a short bio.
 *
 * TO UPDATE: Edit the paragraph text directly in this file.
 * The content is kept inline here (not in a data file) because it is
 * free-form prose that doesn't benefit from a structured data format.
 *
 * Animation: the section fades in when it scrolls into view.
 * whileInView triggers the animation when the element enters the viewport.
 * iewport={{ once: true }} prevents re-animating on scroll back up.
 */

import { motion } from 'framer-motion'

export function About() {
  return (
    <section id="about" className="py-24" aria-labelledby="about-heading">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2
          id="about-heading"
          className="text-2xl font-semibold mb-10 text-[var(--color-text)]"
        >
          About Me
        </h2>

        {/* ---- EDIT THIS CONTENT ---- */}
        <div className="flex flex-col gap-5 text-[var(--color-muted)] leading-relaxed">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. I am a Senior Software Engineer
            and Technical Leader with 8 years of experience at Capgemini, specialising in
            backend development and systems architecture.
          </p>          
        </div>
        {/* ---- END EDIT ---- */}
      </motion.div>
    </section>
  )
}
