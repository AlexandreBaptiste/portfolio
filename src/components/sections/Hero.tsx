/**
 * src/components/sections/Hero.tsx
 *
 * The top hero section showing:
 * - Full name
 * - Job title
 * - Tagline
 *
 * Animation: each element fades in and slides up from below on page load.
 * This uses Framer Motion's motion.div with initial/animate variants.
 * The viewport={{ once: true }} option means the animation plays only
 * the first time the element enters the screen — not every time you scroll.
 */

import { motion } from 'framer-motion'

// Reusable animation variant:
// "hidden" = starting state (invisible, 20px below final position)
// "visible" = end state (fully visible, in position)
const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function Hero() {
  return (
    <section
      id="hero"
      className="py-24"
      aria-label="Introduction"
    >
      {/* Staggered container: each child animates after the previous one
          staggerChildren: 0.15s delay between each child animation */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        className="flex flex-col gap-4"
      >
        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-thin tracking-widest uppercase text-[var(--color-text)] leading-tight"
        >
          Alexandre<br />Baptiste
        </motion.h1>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="text-lg text-[var(--color-muted)] font-medium"
        >
          Senior Backend Developer · Technical Leader · .NET Enthusiast · @Capgemini
        </motion.p>
      </motion.div>
    </section>
  )
}
