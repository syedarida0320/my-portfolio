import { useRef, useEffect } from 'react'
import Reveal from './Reveal'

const achievements = [
  { metric: '5', suffix: "+", label: 'Real-world MERN applications built (Real Estate, Ecommerce, Weather, Todo, Chat App)', isCounter: true, target: 5 },
  { metric: '4', suffix: null, label: 'Personal and internship projects built in under 6 months', isCounter: true, target: 4 },
  { metric: '6', suffix: 'months', label: 'Hands-on, production-level MERN stack experience', isCounter: true, target: 6 },
  { metric: 'Certified', suffix: null, label: 'Completed dedicated Web Development training at PNY Institute', isCounter: false },
]

export default function Achievements() {
  return (
    <section className="section-divider section-divider--alt relative py-28 bg-page-alt" id="achievements">
      <div className="max-w-[1180px] mx-auto px-6">
        <Reveal>
          <div className="max-w-[640px] mb-14">
            <p className="font-mono text-[.78rem] tracking-[.18em] uppercase text-gold inline-flex items-center gap-[.6rem] mb-4">
              <span className="inline-block w-[18px] h-px bg-gold" />
              Achievements
            </p>
            <h2 className="text-[clamp(2rem,4vw,2.7rem)] leading-[1.15] text-ivory font-semibold">Quick highlights</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 max-[640px]:grid-cols-1 gap-6">
          {achievements.map((a, i) => (
            <Reveal delay={i * 0.08} key={a.label} className="h-full">
              <div className="h-full bg-surface border border-gold/16 rounded-[14px] p-7 relative overflow-hidden card-overlay transition-all duration-[350ms] ease-[cubic-bezier(.4,0,.2,1)] hover:-translate-y-1 hover:border-gold/32 hover:shadow-[0_18px_50px_-20px_rgba(212,175,55,.15),0_0_0_1px_rgba(212,175,55,.06)] text-left">
                <p className="font-sans text-[2.6rem] max-[640px]:text-[1.8rem] text-gold-bright leading-none">
                  {a.isCounter ? (
                    <CountUp target={a.target} />
                  ) : (
                    a.metric
                  )}
                  {a.suffix && <> {a.suffix}</>}
                </p>
                <p className="mt-[.9rem] text-soft text-[.99rem]">{a.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function CountUp({ target }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let current = 0
            const step = Math.max(1, Math.floor(target / 40))
            const timer = setInterval(() => {
              current += step
              if (current >= target) {
                el.textContent = target
                clearInterval(timer)
              } else {
                el.textContent = current
              }
            }, 30)
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref} className="inline-block">0</span>
}
