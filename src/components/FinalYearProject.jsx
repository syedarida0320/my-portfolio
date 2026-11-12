import Reveal from './Reveal'

const overview = [
  'A proof-based AI mentorship ecosystem designed to enhance abilities, ensure consistency, and facilitate personal growth.',
  'AI mentor personas with contextual memory chat, evidence verification challenges, streak tracking, subscription content, and a support hub.',
  'Customized mentorship that helps people build habits, achieve goals, and grow through clearly defined growth pathways, accountability tools, and administrative controls - a scalable alternative to human coaching.',
]

const stats = [
  { value: '3', label: 'AI Providers' },
  { value: '15+', label: 'Core Features' },
  { value: '14', label: 'Technologies' },
]

const features = [
  {
    title: 'Secure Auth & RBAC',
    desc: 'JWT, bcrypt and OAuth-based authentication with role-based access control for users and admins.',
    icon: <path d="M6 11h12v9H6zM8 11V7a4 4 0 018 0v4" />,
  },
  {
    title: 'Onboarding Calibration',
    desc: 'Personalized onboarding that adapts to each user\'s challenges, discipline, learning preferences, and available time.',
    icon: <path d="M12 4a4 4 0 100 8 4 4 0 000-8zM4 21c0-3.5 3.6-6 8-6s8 2.5 8 6" />,
  },
  {
    title: 'Mentor Subscriptions',
    desc: 'Users subscribe to different AI mentors depending on the subscription package they select.',
    icon: <path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19.1l1-5.8L3.5 9.2l5.9-.9L12 3z" />,
  },
  {
    title: 'AI Chat System',
    desc: 'Real-time conversational responses with tool calls for seamless, natural communication.',
    icon: <path d="M21 11.5a8.5 8.5 0 01-8.5 8.5H4l-2 2V11.5A8.5 8.5 0 0110.5 3h2A8.5 8.5 0 0121 11.5z" />,
  },
  {
    title: 'AI Prompt Pipeline',
    desc: 'Trigger-based prompt creation that automatically generates customized system prompts per user.',
    icon: <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />,
  },
  {
    title: 'Challenge & Task Engine',
    desc: 'Supports multiple task types that unlock sequentially through a full task life cycle.',
    icon: <path d="M4 4h16v16H4zM8 12l2.5 2.5L16 9" />,
  },
  {
    title: 'Evidence Verification',
    desc: 'Users upload proof files which admins approve or reject to keep progress authentic.',
    icon: <path d="M12 3l7 3v5.5c0 4.5-3 7.5-7 9.5-4-2-7-5-7-9.5V6l7-3z" />,
  },
  {
    title: 'Streak Tracking',
    desc: 'Monitors user streaks with auto-reset and built-in accountability features.',
    icon: <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.4-.5-2-1-3-1.1-2.1-.2-4 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.2.4-2.3 1-3a2.5 2.5 0 002.5 2.5z" />,
  },
  {
    title: 'Provider-Agnostic LLMs',
    desc: 'Plug-and-play support for OpenAI, Google Gemini, and Ollama with secure API key management.',
    icon: <path d="M6 6h12v12H6zM10 10h4v4h-4zM9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />,
  },
  {
    title: 'Stripe Billing',
    desc: 'Handles subscriptions, checkout sessions, webhooks, and subscription states end-to-end.',
    icon: <path d="M2 5h20v14H2zM2 10h20" />,
  },
  {
    title: 'Notifications',
    desc: 'Asynchronous queues deliver in-app, push, and mobile notifications.',
    icon: <path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 01-3.4 0" />,
  },
  {
    title: 'Support Hub',
    desc: 'Ticket and FAQ systems let users access help resources and communicate with admins.',
    icon: <path d="M12 3a9 9 0 100 18 9 9 0 000-18zM9.5 9a2.5 2.5 0 115 0c0 1.6-2 2.1-2 3.4M12 17h.01" />,
  },
  {
    title: 'Admin Dashboard',
    desc: 'Analytics, management, and monitoring tools for efficient system administration.',
    icon: <path d="M3 20h18M6 20v-7M11 20V9M16 20v-5M21 20V5" />,
  },
  {
    title: 'Job Queues',
    desc: 'BullMQ async job queue powered by Redis, with dead-letter queue support for reliability.',
    icon: <path d="M3 4h18v6H3zM3 14h18v6H3zM7 7h.01M7 17h.01" />,
  },
  {
    title: 'System Flow Charts',
    desc: 'Functional flow charts document the complete user experience and data flow of the system.',
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

export default function FinalYearProject() {
  return (
    <section className="section-divider relative py-28" id="final-project">
      <div className="max-w-[1180px] mx-auto px-6">
        <Reveal>
          <div className="max-w-[680px] mb-12">
            <p className="font-mono text-[.78rem] tracking-[.18em] uppercase text-gold inline-flex items-center gap-[.6rem] mb-4">
              <span className="inline-block w-[18px] h-px bg-gold" />
              Final Year Project
            </p>
            <h2 className="text-[clamp(2rem,4vw,2.7rem)] leading-[1.15] text-ivory font-semibold">
              Mentor AI
            </h2>
            <p className="mt-4 text-soft text-[1.05rem] max-w-[560px]">
              A Proof-Based AI Mentorship Ecosystem for Habit Formation and Personal Growth.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="relative overflow-hidden rounded-[18px] border border-gold/24 bg-surface">
            <div className="pointer-events-none absolute -top-28 -right-20 w-80 h-80 rounded-full bg-gold/12 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -left-16 w-72 h-72 rounded-full bg-gold/8 blur-3xl" />
            <div className="relative grid grid-cols-[1fr_auto] gap-10 p-8 md:p-12 max-[900px]:grid-cols-1">
              <div className="max-w-[620px]">
                <h3 className="font-mono text-[.78rem] tracking-[.18em] uppercase text-gold-bright mb-5">
                  Proof-Based AI Mentorship
                </h3>
                <div className="flex flex-col gap-4">
                  {overview.map((para) => (
                    <p key={para} className="text-soft text-[.97rem] leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 mt-8">
                  <a
                    href={DEMO_URL}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 px-[1.4rem] py-[.75rem] rounded-full font-semibold text-[.9rem] bg-gold text-page transition-all duration-[350ms] ease-[cubic-bezier(.4,0,.2,1)] hover:bg-gold-bright hover:-translate-y-[2px] hover:shadow-[0_14px_30px_-10px_rgba(212,175,55,.45)]"
                  >
                    Watch Demo Video
                    <svg className="w-[15px] h-[15px] stroke-current fill-none stroke-[1.8] stroke-linecap-round stroke-linejoin-round shrink-0" viewBox="0 0 24 24">
                      <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </a>
                  <a
                    href="#final-project"
                    className="inline-flex items-center gap-2 px-[1.4rem] py-[.75rem] rounded-full font-semibold text-[.9rem] border border-gold/32 text-ivory transition-all duration-[350ms] ease-[cubic-bezier(.4,0,.2,1)] hover:border-gold hover:text-gold-bright hover:-translate-y-[2px]"
                  >
                    Explore Features
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 content-center max-[900px]:grid-cols-3 max-[540px]:grid-cols-1">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="border border-gold/20 rounded-[14px] bg-page/40 px-6 py-5 text-center min-w-[150px]"
                  >
                    <p className="text-[2rem] font-semibold text-gold-bright leading-none">{s.value}</p>
                    <p className="font-mono text-[.72rem] tracking-[.08em] uppercase text-muted mt-2">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-20 mb-12">
          <Reveal>
            <div className="max-w-[640px]">
              <p className="font-mono text-[.78rem] tracking-[.18em] uppercase text-gold inline-flex items-center gap-[.6rem] mb-3">
                <span className="inline-block w-[18px] h-px bg-gold" />
                Core Functionality
              </p>
              <h3 className="text-[clamp(1.5rem,3vw,2rem)] leading-[1.2] text-ivory font-semibold">
                What Mentor AI does
              </h3>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-3 gap-5 max-[980px]:grid-cols-2 max-[600px]:grid-cols-1">
          {features.map((f, i) => (
            <Reveal delay={(i % 3) * 0.06} key={f.title} className="h-full">
              <div className="group relative h-full bg-surface border border-gold/16 rounded-[14px] p-6 overflow-hidden card-overlay transition-all duration-[350ms] ease-[cubic-bezier(.4,0,.2,1)] hover:-translate-y-1 hover:border-gold/32 hover:shadow-[0_18px_50px_-20px_rgba(212,175,55,.15),0_0_0_1px_rgba(212,175,55,.06)]">
                <span className="absolute top-5 right-6 font-mono text-[.8rem] text-muted/60">{String(i + 1).padStart(2, '0')}</span>
                <span className="w-10 h-10 border border-gold/32 rounded-lg flex items-center justify-center text-gold mb-4">
                  <svg className="w-[19px] h-[19px] stroke-current fill-none stroke-[1.8] stroke-linecap-round stroke-linejoin-round shrink-0" viewBox="0 0 24 24">
                    {f.icon}
                  </svg>
                </span>
                <h4 className="text-[1.02rem] text-ivory font-semibold">{f.title}</h4>
                <p className="mt-2 text-soft text-[.9rem] leading-relaxed">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 mt-16 items-stretch">
          <Reveal delay={0.1}>
            <div className="h-full bg-surface border border-gold/16 rounded-[14px] p-8">
              <h3 className="font-mono text-[.78rem] tracking-[.18em] uppercase text-gold mb-6">
                Built With
              </h3>
              <div className="flex gap-2 flex-wrap">
                {stack.map((t) => (
                  <span className="font-mono text-[.72rem] tracking-[.04em] px-[.65rem] py-[.3rem] border border-gold/32 rounded-full text-gold-bright whitespace-nowrap" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
