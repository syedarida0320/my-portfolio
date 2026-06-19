import { useState, useEffect, Suspense } from 'react'
import { motion } from 'framer-motion'
import HeroScene from './HeroScene'

const statuses = ['Lahore, Pakistan', 'Open to new roles', 'Building with the MERN stack']

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const profileVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export default function Hero() {
  const [statusIndex, setStatusIndex] = useState(0)
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const interval = setInterval(() => {
      setOpacity(0)
      setTimeout(() => {
        setStatusIndex((i) => (i + 1) % statuses.length)
        setOpacity(1)
      }, 250)
    }, 3200)

    return () => clearInterval(interval)
  }, [])

  return (
    <header
      className="hero-dots relative min-h-screen flex items-center pt-24 overflow-hidden"
      id="hero"
    >
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>

      <motion.div
        className="max-w-[1180px] mx-auto px-6 relative z-10 flex items-center gap-16 max-[860px]:flex-col-reverse max-[860px]:text-center max-[860px]:gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="flex-1 max-w-[580px] max-[860px]:max-w-full" variants={containerVariants}>
          <motion.p
            className="font-mono text-[.78rem] tracking-[.18em] uppercase text-gold inline-flex items-center gap-[.6rem] mb-4"
            variants={itemVariants}
          >
            <span className="inline-block w-[18px] h-px bg-gold" />
            MERN Stack Developer
          </motion.p>
          <motion.h1
            className="text-[clamp(3rem,7.5vw,5.2rem)] leading-[1.04] mt-2 text-ivory font-semibold max-[860px]:text-[clamp(2.2rem,8vw,2.8rem)]"
            variants={itemVariants}
          >
            <span className="block text-[.55em] font-light text-soft tracking-[-.02em] mb-[.1rem] max-[860px]:text-[.5em]">Hi, I&apos;m</span> <em className="bg-gradient-to-br from-gold-bright to-gold bg-clip-text text-transparent">Rida Irfan.</em>
          </motion.h1>
          <motion.p
            className="mt-6 text-[1.15rem] text-soft max-w-[560px] max-[860px]:text-[1rem] max-[860px]:mt-4"
            variants={itemVariants}
          >
            I build full-stack web applications&mdash;from designing efficient database architectures to crafting interfaces users love. With 6 months of hands-on industry experience, I contribute production-ready code, solve real-world challenges, and continuously refine my skills as a developer.
          </motion.p>
          <motion.div
            className="mt-10 flex gap-4 flex-wrap max-[860px]:mt-[1.8rem] max-[860px]:justify-center"
            variants={itemVariants}
          >
            <a href="#projects" className="inline-flex items-center gap-2 px-[1.6rem] py-[.85rem] rounded-full font-semibold text-[.95rem] bg-gold text-page transition-all duration-[350ms] ease-[cubic-bezier(.4,0,.2,1)] hover:bg-gold-bright hover:-translate-y-[2px] hover:shadow-[0_14px_30px_-10px_rgba(212,175,55,.45)] max-[860px]:w-full max-[860px]:justify-center">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-[1.6rem] py-[.85rem] rounded-full font-semibold text-[.95rem] border border-gold/32 text-ivory transition-all duration-[350ms] ease-[cubic-bezier(.4,0,.2,1)] hover:border-gold hover:text-gold-bright hover:-translate-y-[2px] max-[860px]:w-full max-[860px]:justify-center">
              Get in Touch
            </a>
          </motion.div>
          <motion.div
            className="mt-14 flex items-center gap-[.7rem] font-mono text-[.85rem] text-soft max-[860px]:mt-6 max-[860px]:justify-center"
            variants={itemVariants}
          >
            <span className="w-2 h-2 rounded-full bg-gold shadow-[0_0_0_0_rgba(212,175,55,.6)] animate-pulse-gold shrink-0"></span>
            <span style={{ opacity, transition: 'opacity .25s ease' }}>{statuses[statusIndex]}</span>
          </motion.div>
        </motion.div>
        <motion.div
          className="shrink-0 relative hero-glow"
          variants={profileVariants}
        >
          <img
            src="/profile-pic.jpeg"
            alt="Rida Irfan"
            loading="lazy"
            width="280"
            height="280"
            className="w-[320px] h-[320px] rounded-full object-cover border-[3px] border-page shadow-[0_0_0_1px_rgba(212,175,55,.15),0_25px_60px_-20px_rgba(0,0,0,.7)] relative z-10 max-[860px]:w-[160px] max-[860px]:h-[160px] max-[640px]:w-[180px] max-[640px]:h-[180px]"
          />
        </motion.div>
      </motion.div>
    </header>
  )
}
