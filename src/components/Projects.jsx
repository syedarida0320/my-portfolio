import { useState, useEffect } from 'react'
import Reveal from './Reveal'

const projects = [
  {
    title: 'Real Estate App',
    dates: 'Nov 2025 – Jan 2026',
    desc: 'A full-stack MERN Real-Estate platform for browsing, listing, and managing properties with secure authentication, dynamic search, and responsive UI.',
    tags: ['Reactjs', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'JWT', 'bcrypt', 'Socket.io', 'Git', 'Github', 'Postman'],
    github: 'https://github.com/syedarida0320/real-estate-app',
  },
  {
    title: 'Weather App',
    dates: 'Oct 2025 – Nov 2025',
    desc: 'A responsive weather forecasting application that delivers real-time weather updates using API integration with a clean and user-friendly interface.',
    tags: ['Reactjs', 'Firebase', 'REST API', 'Open Meteo Weather API', 'Git', 'Github'],
    github: 'https://github.com/syedarida0320/weather-app-project',
  },
  {
    title: 'Todo List App',
    dates: 'Sep 2025 – Oct 2025',
    desc: 'A simple yet efficient task management application built to add, update, and track daily tasks with smooth state handling and intuitive UI.',
    tags: ['Reactjs', 'JavaScript', 'LocalStorage', 'React Hooks', 'Responsive Design', 'Git', 'Github'],
    github: 'https://github.com/syedarida0320/todo-list',
  },
  {
    title: 'Ecommerce App',
    dates: 'Jul 2025 – Aug 2025',
    desc: 'A modern e-commerce web application featuring product browsing, cart management, and seamless shopping experience with a responsive design.',
    tags: ['Reactjs', 'JavaScript', 'Responsive UI', 'HTML', 'Tailwind CSS', 'React Router'],
    github: 'https://github.com/syedarida0320/Ecommerce-website',
  },
]

const mq = window.matchMedia('(max-width: 860px)')

export default function Projects() {
  const [perPage, setPerPage] = useState(mq.matches ? 1 : 2)
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const handler = (e) => {
      const pp = e.matches ? 1 : 2
      setPerPage(pp)
      setSlide(0)
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const totalSlides = Math.ceil(projects.length / perPage)
  const prev = () => setSlide((s) => Math.max(0, s - 1))
  const next = () => setSlide((s) => Math.min(totalSlides - 1, s + 1))

  return (
    <section className="section-divider section-divider--alt relative py-28 bg-page-alt" id="projects">
      <div className="max-w-[1180px] mx-auto px-6">
        <Reveal>
          <div className="max-w-[640px] mb-14">
            <p className="font-mono text-[.78rem] tracking-[.18em] uppercase text-gold inline-flex items-center gap-[.6rem] mb-4">
              <span className="inline-block w-[18px] h-px bg-gold" />
              Projects
            </p>
            <h2 className="text-[clamp(2rem,4vw,2.7rem)] leading-[1.15] text-ivory font-semibold">Things I&apos;ve built</h2>
            <p className="mt-4 text-soft text-[1.05rem] max-w-[520px]">
              A mix of internship work and self-directed builds, frontend-only and full-stack.
            </p>
          </div>
        </Reveal>

        <div>
          <div className="grid grid-cols-2 gap-7 max-[980px]:grid-cols-1 max-[860px]:grid-cols-1">
            {projects.map((p, i) => {
              const idx = Math.floor(i / perPage)
              const show = idx === slide
              return (
                <div
                  className={`bg-surface border border-gold/16 rounded-[14px] p-7 relative overflow-hidden card-overlay transition-all duration-[350ms] ease-[cubic-bezier(.4,0,.2,1)] hover:-translate-y-1 hover:border-gold/32 hover:shadow-[0_18px_50px_-20px_rgba(212,175,55,.15),0_0_0_1px_rgba(212,175,55,.06)] flex flex-col${show ? '' : ' hidden'}`}
                  key={p.title}
                >
                  <div className="flex justify-between items-baseline gap-4 flex-wrap">
                    <h3 className="text-[1.3rem] text-ivory font-semibold">{p.title}</h3>
                    <span className="font-mono text-[.75rem] text-muted whitespace-nowrap">{p.dates}</span>
                  </div>
                  <p className="mt-[.9rem] text-soft text-[.95rem] flex-1">{p.desc}</p>
                  <div className="flex gap-2 flex-wrap mt-[1.4rem]">
                    {p.tags.map((t) => (
                      <span className="font-mono text-[.72rem] tracking-[.04em] px-[.65rem] py-[.3rem] border border-gold/32 rounded-full text-gold-bright whitespace-nowrap" key={t}>{t}</span>
                    ))}
                  </div>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener"
                    className="mt-[1.8rem] inline-flex items-center gap-[.4rem] font-mono text-[.8rem] text-gold-bright"
                  >
                    View on GitHub{' '}
                    <svg className="w-[14px] h-[14px] stroke-current fill-none stroke-[1.8] stroke-linecap-round stroke-linejoin-round shrink-0" viewBox="0 0 24 24">
                      <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </a>
                </div>
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
