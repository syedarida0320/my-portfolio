import Reveal from './Reveal'

const overview = [
  'A proof-based AI mentorship platform that helps people build habits, stay consistent and grow.',
  'AI mentor personas, memory chat, evidence challenges, streak tracking and subscriptions - a scalable alternative to human coaching.',
]

const stats = [
  { value: '3', label: 'AI Providers' },
  { value: '15+', label: 'Core Features' },
  { value: '14', label: 'Technologies' },
]

const features = [
  {
    title: 'Secure Auth & RBAC',
    desc: 'JWT, OAuth and role-based access.',
    icon: <path d="M6 11h12v9H6zM8 11V7a4 4 0 018 0v4" />,
  },
  {
    title: 'Onboarding Calibration',
    desc: 'Tailored to goals and habits.',
    icon: <path d="M12 4a4 4 0 100 8 4 4 0 000-8zM4 21c0-3.5 3.6-6 8-6s8 2.5 8 6" />,
  },
  {
    title: 'Mentor Subscriptions',
    desc: 'Different AI mentors per plan.',
    icon: <path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19.1l1-5.8L3.5 9.2l5.9-.9L12 3z" />,
  },
  {
    title: 'AI Chat System',
    desc: 'Real-time chat with tool calls.',
    icon: <path d="M21 11.5a8.5 8.5 0 01-8.5 8.5H4l-2 2V11.5A8.5 8.5 0 0110.5 3h2A8.5 8.5 0 0121 11.5z" />,
  },
  {
    title: 'AI Prompt Pipeline',
    desc: 'Auto-generated prompts per user.',
    icon: <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />,
  },
  {
    title: 'Challenge & Task Engine',
    desc: 'Sequential, multi-type tasks.',
    icon: <path d="M4 4h16v16H4zM8 12l2.5 2.5L16 9" />,
  },
  {
    title: 'Evidence Verification',
    desc: 'Proof uploads reviewed by admins.',
    icon: <path d="M12 3l7 3v5.5c0 4.5-3 7.5-7 9.5-4-2-7-5-7-9.5V6l7-3z" />,
  },
  {
    title: 'Streak Tracking',
    desc: 'Streaks with auto-reset.',
    icon: <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.4-.5-2-1-3-1.1-2.1-.2-4 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.2.4-2.3 1-3a2.5 2.5 0 002.5 2.5z" />,
  },
  {
    title: 'Provider-Agnostic LLMs',
    desc: 'OpenAI, Gemini and Ollama.',
    icon: <path d="M6 6h12v12H6zM10 10h4v4h-4zM9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />,
  },
  {
    title: 'Stripe Billing',
    desc: 'Subscriptions, checkout, webhooks.',
    icon: <path d="M2 5h20v14H2zM2 10h20" />,
  },
  {
    title: 'Notifications',
    desc: 'In-app, push and mobile alerts.',
    icon: <path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 01-3.4 0" />,
  },
  {
    title: 'Support Hub',
    desc: 'Tickets and FAQs.',
    icon: <path d="M12 3a9 9 0 100 18 9 9 0 000-18zM9.5 9a2.5 2.5 0 115 0c0 1.6-2 2.1-2 3.4M12 17h.01" />,
  },
  {
    title: 'Admin Dashboard',
    desc: 'Analytics and management tools.',
    icon: <path d="M3 20h18M6 20v-7M11 20V9M16 20v-5M21 20V5" />,
  },
  {
    title: 'Job Queues',
    desc: 'BullMQ + Redis async jobs.',
    icon: <path d="M3 4h18v6H3zM3 14h18v6H3zM7 7h.01M7 17h.01" />,
  },
  {
    title: 'System Flow Charts',
    desc: 'Documented user and data flow.',
    icon: <path d="M18 5a3 3 0 100 6 3 3 0 000-6zM6 9a3 3 0 100 6 3 3 0 000-6zM18 13a3 3 0 100 6 3 3 0 000-6zM8.6 13.5l6.8 4M15.4 6.5l-6.8 4" />,
  },
]

const stack = [
  'React 19',
  'TanStack Router',
  'shadcn/ui',
  'Tailwind CSS v4',
  'Express.js',
  'Prisma',
  'PostgreSQL',
  'LangChain.js',
  'OpenAI',
  'Google Gemini',
  'Ollama',
  'Stripe',
  'Redis',
  'BullMQ',
]

const DEMO_URL = 'https://lnkd.in/p/dCnWvapx'

const arrow = (
  <svg className="w-[14px] h-[14px] stroke-current fill-none stroke-[1.8] stroke-linecap-round stroke-linejoin-round shrink-0" viewBox="0 0 24 24">
    <path d="M7 17L17 7M7 7h10v10" />
  </svg>
)

export default function FinalYearProject() {
  return (
    <section className="section-divider relative py-20" id="final-project">
      <div className="max-w-[1100px] mx-auto px-6">
        <Reveal>
          <div className="max-w-[640px] mb-10">
            <p className="font-mono text-[.72rem] tracking-[.18em] uppercase text-gold inline-flex items-center gap-[.6rem] mb-3">
              <span className="inline-block w-[18px] h-px bg-gold" />
              Final Year Project
            </p>
            <h2 className="text-[clamp(1.6rem,3vw,2.1rem)] leading-[1.15] text-ivory font-semibold">Mentor AI</h2>
            <p className="mt-3 text-soft text-[.95rem] max-w-[520px]">
              A proof-based AI mentorship ecosystem for habit formation and personal growth.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="relative overflow-hidden rounded-[16px] border border-gold/24 bg-surface">
            <div className="pointer-events-none absolute -top-28 -right-20 w-80 h-80 rounded-full bg-gold/10 blur-3xl" />
            <div className="relative grid grid-cols-[1.05fr_1fr] items-center gap-8 p-6 md:p-8 max-[900px]:grid-cols-1">
              <div>
                <span className="font-mono text-[.68rem] tracking-[.16em] uppercase text-gold-bright border border-gold/32 rounded-full px-3 py-1">
                  Proof-Based AI Mentorship
                </span>
                <div className="flex flex-col gap-3 mt-5">
                  {overview.map((para) => (
                    <p key={para} className="text-soft text-[.88rem] leading-relaxed">{para}</p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 mt-6">
                  <a
                    href={DEMO_URL}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 px-[1.2rem] py-[.6rem] rounded-full font-semibold text-[.85rem] bg-gold text-page transition-all duration-300 hover:bg-gold-bright hover:-translate-y-[2px]"
                  >
                    Watch Demo Video {arrow}
                  </a>
                  <a
                    href="#final-features"
                    className="inline-flex items-center gap-2 px-[1.2rem] py-[.6rem] rounded-full font-semibold text-[.85rem] border border-gold/32 text-ivory transition-all duration-300 hover:border-gold hover:text-gold-bright hover:-translate-y-[2px]"
                  >
                    Explore Features
                  </a>
                </div>
              </div>

              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener"
                aria-label="Watch the Mentor AI demo video"
                className="block overflow-hidden rounded-[12px] border border-gold/24 shadow-[0_20px_50px_-20px_rgba(0,0,0,.7)]"
              >
                <img
                  src="/mentor-ai-thumbnail.jpg"
                  alt="Mentor AI demo thumbnail"
                  className="w-full aspect-video object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
              </a>
            </div>

            <div className="relative grid grid-cols-3 border-t border-gold/16 bg-page/40">
              {stats.map((s, i) => (
                <div key={s.label} className={`py-4 text-center ${i < stats.length - 1 ? 'border-r border-gold/16' : ''}`}>
                  <p className="text-[1.4rem] font-semibold text-gold-bright leading-none">{s.value}</p>
                  <p className="font-mono text-[.65rem] tracking-[.08em] uppercase text-muted mt-1.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-14 mb-8" id="final-features">
          <Reveal>
            <p className="font-mono text-[.72rem] tracking-[.18em] uppercase text-gold inline-flex items-center gap-[.6rem] mb-2">
              <span className="inline-block w-[18px] h-px bg-gold" />
              Core Functionality
            </p>
            <h3 className="text-[clamp(1.25rem,2.4vw,1.6rem)] leading-[1.2] text-ivory font-semibold">What Mentor AI does</h3>
          </Reveal>
        </div>

        <div className="grid grid-cols-5 gap-3 max-[1000px]:grid-cols-3 max-[640px]:grid-cols-2 max-[400px]:grid-cols-1">
          {features.map((f, i) => (
            <Reveal delay={(i % 4) * 0.05} key={f.title} className="h-full">
              <div className="group relative h-full bg-surface border border-gold/16 rounded-[12px] p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold/40">
                <span className="w-9 h-9 mx-auto border border-gold/32 rounded-full flex items-center justify-center text-gold mb-3">
                  <svg className="w-[17px] h-[17px] stroke-current fill-none stroke-[1.8] stroke-linecap-round stroke-linejoin-round shrink-0" viewBox="0 0 24 24">
                    {f.icon}
                  </svg>
                </span>
                <h4 className="text-[.82rem] text-ivory font-semibold leading-tight">{f.title}</h4>
                <p className="mt-1.5 text-muted text-[.72rem] leading-snug">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 bg-surface border border-gold/16 rounded-[12px] p-5">
            <h3 className="font-mono text-[.7rem] tracking-[.18em] uppercase text-gold mb-4">Built With</h3>
            <div className="flex gap-2 flex-wrap">
              {stack.map((t) => (
                <span className="font-mono text-[.68rem] tracking-[.04em] px-[.6rem] py-[.25rem] border border-gold/32 rounded-full text-gold-bright whitespace-nowrap" key={t}>{t}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
