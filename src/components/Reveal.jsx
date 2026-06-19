import { motion } from 'framer-motion'
import { useRef } from 'react'

const variants = {
  up: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  down: {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
}

export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  distance = 30,
  once = true,
  className = '',
  asChild = false,
  ...props
}) {
  const ref = useRef(null)

  const varKey = variants[direction] ? direction : 'up'
  const base = { ...variants[varKey] }
  base.hidden[direction === 'left' || direction === 'right' ? 'x' : 'y'] = direction === 'up' || direction === 'down' ? (direction === 'up' ? distance : -distance) : direction === 'left' ? -distance : distance

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-30px' }}
      variants={{
        hidden: base.hidden,
        visible: {
          ...base.visible,
          transition: {
            duration,
            delay,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function StaggerReveal({
  children,
  className = '',
  staggerDelay = 0.08,
  duration = 0.5,
  direction = 'up',
  once = true,
  ...props
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-30px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
      {...props}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: {
                  opacity: 0,
                  y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0,
                  x: direction === 'left' ? -20 : direction === 'right' ? 20 : 0,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  x: 0,
                  transition: { duration, ease: [0.25, 0.46, 0.45, 0.94] },
                },
              }}
            >
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  )
}
