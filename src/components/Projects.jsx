import { useState, useEffect } from 'react'
import Reveal from './Reveal'

const projects = [
  {
    title: 'E-Numerak',
    dates: 'Company Project',
    desc: 'A UAE FTA-compliant e-invoicing SaaS for businesses, with PEPPOL BIS 3.0 / UBL 2.1 (PINT-AE) invoices, quotations, a product catalog with barcode scanning, multi-company access, and an accounting module with inventory and bulk import.',
    tags: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Django', 'Django REST Framework', 'PostgreSQL', 'Redis', 'Celery', 'react-pdf', 'SWR', 'Docker', 'Nginx', 'Cloudflare'],
    image: '/e-numerak-thumbnail.jpg',
    live: 'https://e-numerak.com',
    liveLabel: 'Visit the Website',
  },
  {
    title: 'Mentor AI',
    dates: 'Final Year Project',
    desc: 'A proof-based AI mentorship ecosystem for habit formation and personal growth with AI mentor personas, contextual memory chat, evidence verification challenges, streak tracking, and subscription content.',
    tags: ['React 19', 'TanStack Router', 'Tailwind CSS v4', 'shadcn/ui', 'Express.js', 'Prisma', 'PostgreSQL', 'Langchain.js', 'OpenAI', 'Gemini', 'Ollama', 'Stripe', 'Redis', 'BullMQ'],
    image: '/mentor-ai-thumbnail.jpg',
    live: 'https://lnkd.in/p/dCnWvapx',
    liveLabel: 'Watch Demo Video',
  },
  {
    title: 'Real Estate App',
    dates: 'Nov 2025 – Jan 2026',
    desc: 'A full-stack MERN Real-Estate platform for browsing, listing, and managing properties with secure authentication, dynamic search, and responsive UI.',
    tags: ['Reactjs', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'JWT', 'bcrypt', 'Socket.io', 'Git', 'Github', 'Postman'],
    image: '/real-estate-thumbnail.jpg',
    live: 'https://lnkd.in/p/dhEFJ7cW',
    liveLabel: 'Watch Demo Video',
    github: 'https://github.com/syedarida0320/real-estate-app',
  },
  {
    title: 'Weather App',
    dates: 'Oct 2025 – Nov 2025',
    desc: 'A responsive weather forecasting application that delivers real-time weather updates using API integration with a clean and user-friendly interface.',
    tags: ['Reactjs', 'Firebase', 'REST API', 'Open Meteo Weather API', 'Git', 'Github'],
    image: '/weather-app-thumbnail.jpg',
    live: 'https://lnkd.in/p/dcGBSe3Q',
    liveLabel: 'Watch Demo Video',
    github: 'https://github.com/syedarida0320/weather-app-project',
  },
  {
    title: 'Todo List App',
    dates: 'Sep 2025 – Oct 2025',
    desc: 'A simple yet efficient task management application built to add, update, and track daily tasks with smooth state handling and intuitive UI.',
    tags: ['Reactjs', 'JavaScript', 'LocalStorage', 'React Hooks', 'Responsive Design', 'Git', 'Github'],
    image: '/todo-thumbnail.jpg',
    github: 'https://github.com/syedarida0320/todo-list',
  },
  {
    title: 'Ecommerce App',
    dates: 'Jul 2025 – Aug 2025',
    desc: 'A modern e-commerce web application featuring product browsing, cart management, and seamless shopping experience with a responsive design.',
    tags: ['Reactjs', 'JavaScript', 'Responsive UI', 'HTML', 'Tailwind CSS', 'React Router'],
    image: '/ecommerce-thumbnail.jpg',
    live: 'https://lnkd.in/p/dikc3SCv',
    liveLabel: 'Watch Demo Video',
    github: 'https://github.com/syedarida0320/Ecommerce-website',
  },
]

const mqSmall = window.matchMedia('(max-width: 700px)')
const mqMid = window.matchMedia('(max-width: 1000px)')
const getPerPage = () => (mqSmall.matches ? 1 : mqMid.matches ? 2 : 3)

const arrow = (
  <svg className="w-[13px] h-[13px] stroke-current fill-none stroke-[1.8] stroke-linecap-round stroke-linejoin-round shrink-0" viewBox="0 0 24 24">
    <path d="M7 17L17 7M7 7h10v10" />
  </svg>
)

const MAX_TAGS = 6

export default function Projects() {
  const [perPage, setPerPage] = useState(getPerPage)
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const handler = () => {
      setPerPage(getPerPage())
      setSlide(0)
    }
    mqSmall.addEventListener('change', handler)
    mqMid.addEventListener('change', handler)
    return () => {
      mqSmall.removeEventListener('change', handler)
      mqMid.removeEventListener('change', handler)
    }
  }, [])

  const totalSlides = Math.ceil(projects.length / perPage)
  const prev = () => setSlide((s) => Math.max(0, s - 1))
  const next = () => setSlide((s) => Math.min(totalSlides - 1, s + 1))

  return (
    <section className="section-divider section-divider--alt relative py-20 bg-page-alt" id="projects">
      <div className="max-w-[1100px] mx-auto px-6">
        <Reveal>
          <div className="max-w-[640px] mb-10">
            <p className="font-mono text-[.72rem] tracking-[.18em] uppercase text-gold inline-flex items-center gap-[.6rem] mb-3">
              <span className="inline-block w-[18px] h-px bg-gold" />
              Projects
            </p>
            <h2 className="text-[clamp(1.6rem,3vw,2.1rem)] leading-[1.15] text-ivory font-semibold">Things I&apos;ve built</h2>
            <p className="mt-3 text-soft text-[.95rem] max-w-[520px]">
              A mix of production, internship and self-directed work, frontend-only and full-stack.
            </p>
          </div>
        </Reveal>

        <div>
          <div className="grid grid-cols-3 gap-5 max-[1000px]:grid-cols-2 max-[700px]:grid-cols-1">
            {projects.map((p, i) => {
              const show = Math.floor(i / perPage) === slide
              const extra = p.tags.length - MAX_TAGS
              return (
                <article
                  className={`bg-surface border border-gold/16 rounded-[14px] overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-gold/32 hover:shadow-[0_18px_50px_-20px_rgba(212,175,55,.15)]${show ? '' : ' hidden'}`}
                  key={p.title}
                >
                  {p.image && (
                    <a href={p.live || p.github} target="_blank" rel="noopener" className="block overflow-hidden border-b border-gold/16 bg-page" aria-label={`${p.title} demo`}>
                      <img
                        src={p.image}
                        alt={`${p.title} project thumbnail`}
                        loading="lazy"
                        className="w-full aspect-video object-cover transition-transform duration-500 hover:scale-[1.04]"
                      />
                    </a>
                  )}
                  <div className="p-5 flex flex-col flex-1">
                    <span className="font-mono text-[.66rem] tracking-[.1em] uppercase text-muted">{p.dates}</span>
                    <h3 className="mt-1 text-[1.1rem] text-ivory font-semibold">{p.title}</h3>
                    <p className="mt-2 text-soft text-[.84rem] leading-relaxed line-clamp-4 flex-1" title={p.desc}>{p.desc}</p>
                    <div className="flex gap-1.5 flex-wrap mt-4">
                      {p.tags.slice(0, MAX_TAGS).map((t) => (
                        <span className="font-mono text-[.64rem] px-[.5rem] py-[.2rem] border border-gold/32 rounded-full text-gold-bright whitespace-nowrap" key={t}>{t}</span>
                      ))}
                      {extra > 0 && (
                        <span className="font-mono text-[.64rem] px-[.5rem] py-[.2rem] border border-gold/16 rounded-full text-muted whitespace-nowrap">+{extra} more</span>
                      )}
                    </div>
                    <div className="mt-5 pt-4 border-t border-gold/16 flex items-center gap-4 flex-wrap">
                      {p.live && (
                        <a href={p.live} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 font-mono text-[.74rem] text-gold-bright hover:text-gold">
                          {p.liveLabel || 'Visit Live Site'} {arrow}
                        </a>
                      )}
                      {p.github && (
                        <a href={p.github} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 font-mono text-[.74rem] text-soft hover:text-gold-bright">
                          GitHub {arrow}
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>

          <div className="flex items-center justify-center gap-6 mt-8">
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
