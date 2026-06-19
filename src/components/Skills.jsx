import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

const skills = [
  {
    title: 'Frontend',
    icon: 'M3 4h18v14H3zM3 9h18M9 4v14',
    tags: ['React.js', 'TailwindCSS', 'Shadcn', 'Bootstrap', 'Javascript', 'HTML', 'CSS', 'React Router', 'Axios', 'Responsive UI Design'],
    pct: 90,
  },
  {
    title: 'Backend',
    icon: 'M4 17V7l8-4 8 4v10l-8 4-8-4zM4 7l8 4 8-4M12 11v10',
    tags: ['Node.js','Express.js', 'RESTful APIs', 'MVC Frameworks', 'JWT Authentication', 'Bcrypt'],
    pct: 85,
  },
  {
    title: 'State Management',
    icon: 'M12 3v4M12 17v4M3 12h4M17 12h4',
    tags: ['React Hooks (useState, useEffect)','Redux Toolkit', 'Context API'],
    pct: 80,
  },
  {
    title: 'Database',
    icon: 'M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6',
    tags: ['MongoDB', 'Firebase','DB Optimization', 'Mongoose', 'PostgreSQL', 'Prisma ORM'],
    pct: 82,
  },
  {
    title: 'Tools',
    icon: 'M6 8.5V15.5M8.3 7.2L15.7 10.8M8.3 16.8L15.7 13.2',
    tags: ['Git', 'GitHub', 'VS Code', 'Postman', 'NPM'],
    pct: 88,
  },
]

const mq = window.matchMedia('(max-width: 860px)')

function SkillBar({ pct, slideVisible }) {
  const barRef = useRef(null)

  return (
    <div className="mt-5 h-[3px] bg-surface-hi rounded overflow-hidden">
      <motion.div
        ref={barRef}
        className="h-full rounded bg-gradient-to-r from-gold to-gold-bright"
        initial={{ width: 0 }}
        whileInView={{ width: slideVisible ? `${pct}%` : 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
      />
    </div>
  )
}

export default function Skills() {
  const [perPage, setPerPage] = useState(mq.matches ? 1 : 3)
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const handler = (e) => {
      const pp = e.matches ? 1 : 3
      setPerPage(pp)
      setSlide(0)
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const totalSlides = Math.ceil(skills.length / perPage)
  const prev = () => setSlide((s) => Math.max(0, s - 1))
  const next = () => setSlide((s) => Math.min(totalSlides - 1, s + 1))

  return (
    <section className="section-divider relative py-28" id="skills">
      <div className="max-w-[1180px] mx-auto px-6">
        <Reveal>
          <div className="max-w-[640px] mb-14">
            <p className="font-mono text-[.78rem] tracking-[.18em] uppercase text-gold inline-flex items-center gap-[.6rem] mb-4">
              <span className="inline-block w-[18px] h-px bg-gold" />
              Skills
            </p>
            <h2 className="text-[clamp(2rem,4vw,2.7rem)] leading-[1.15] text-ivory font-semibold">Tools of the trade</h2>
          </div>
        </Reveal>

        <div>
          <div className="grid grid-cols-3 gap-6 max-[980px]:grid-cols-2 max-[860px]:grid-cols-1">
            {skills.map((s, i) => {
              const idx = Math.floor(i / perPage)
              const show = idx === slide
              return (
                <Reveal delay={i * 0.05} key={s.title} className="h-full">
                  <div
                    className={`h-full bg-surface border border-gold/16 rounded-[14px] p-7 relative overflow-hidden card-overlay transition-all duration-[350ms] ease-[cubic-bezier(.4,0,.2,1)] hover:-translate-y-1 hover:border-gold/32 hover:shadow-[0_18px_50px_-20px_rgba(212,175,55,.15),0_0_0_1px_rgba(212,175,55,.06)]${show ? '' : ' hidden'}`}
                  >
                    <div className="flex items-center gap-[.7rem] mb-5">
                      <span className="w-9 h-9 border border-gold/32 rounded-lg flex items-center justify-center text-gold">
                        <svg className="w-[18px] h-[18px] stroke-current fill-none stroke-[1.8] stroke-linecap-round stroke-linejoin-round shrink-0" viewBox="0 0 24 24">
                          <path d={s.icon} />
                        </svg>
                      </span>
                      <h3 className="text-[1.05rem] font-sans font-semibold text-ivory">{s.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <span className="font-mono text-[.72rem] tracking-[.04em] px-[.65rem] py-[.3rem] border border-gold/32 rounded-full text-gold-bright whitespace-nowrap" key={t}>{t}</span>
                      ))}
                    </div>
                    <SkillBar pct={s.pct} slideVisible={show} />
                  </div>
                </Reveal>
              )
            })}
          </div>

          <div className="flex items-center justify-center gap-6 mt-10">
            <button className="w-[38px] h-[38px] rounded-full border border-gold/32 flex items-center justify-center text-ivory transition-colors duration-[350ms] ease-[cubic-bezier(.4,0,.2,1)] hover:border-gold hover:text-gold-bright disabled:opacity-30 disabled:cursor-default bg-transparent cursor-pointer" onClick={prev} disabled={slide === 0} aria-label="Previous">
              <svg className="w-[18px] h-[18px] stroke-current fill-none stroke-[1.8] stroke-linecap-round stroke-linejoin-round shrink-0" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" /></svg>
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalSlides }, (_, i) => (
                <button
                  key={i}
                  className={`w-2 h-2 rounded-full p-0 cursor-pointer transition-colors duration-[350ms] ease-[cubic-bezier(.4,0,.2,1)] ${i === slide ? 'bg-gold' : 'bg-surface-hi'}`}
                  onClick={() => setSlide(i)}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            <button className="w-[38px] h-[38px] rounded-full border border-gold/32 flex items-center justify-center text-ivory transition-colors duration-[350ms] ease-[cubic-bezier(.4,0,.2,1)] hover:border-gold hover:text-gold-bright disabled:opacity-30 disabled:cursor-default bg-transparent cursor-pointer" onClick={next} disabled={slide === totalSlides - 1} aria-label="Next">
              <svg className="w-[18px] h-[18px] stroke-current fill-none stroke-[1.8] stroke-linecap-round stroke-linejoin-round shrink-0" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
