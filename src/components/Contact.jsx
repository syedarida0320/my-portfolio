import Reveal from './Reveal'

export default function Contact() {
  return (
    <section className="section-divider relative py-28" id="contact">
      <div className="max-w-[1180px] mx-auto px-6">
        <Reveal>
          <div className="max-w-[640px] mb-14">
            <p className="font-mono text-[.78rem] tracking-[.18em] uppercase text-gold inline-flex items-center gap-[.6rem] mb-4">
              <span className="inline-block w-[18px] h-px bg-gold" />
              Contact
            </p>
            <h2 className="text-[clamp(2rem,4vw,2.7rem)] leading-[1.15] text-ivory font-semibold">Let&apos;s build something</h2>
            <p className="mt-4 text-soft text-[1.05rem] max-w-[600px]">
             Ready to contribute, learn, and grow through internship and full-time roles.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-3 gap-6 mt-12 max-[860px]:grid-cols-2 max-[540px]:grid-cols-1">
          {[
            {
              icon: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
              label: 'Email',
              value: 'ridairfan264@gmail.com',
            },
            {
              icon: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.95.36 1.88.68 2.78a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.32 1.83.55 2.78.68A2 2 0 0 1 22 16.92z" />,
              label: 'Phone',
              value: <a className="font-semibold mt-[.3rem] break-words block" href="tel:+923209483214">0320-9483214</a>,
            },
            {
              icon: <><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 1 1 18 0z" /><circle cx="12" cy="10" r="3" /></>,
              label: 'Location',
              value: 'Lahore, Pakistan',
            },
            {
              icon: <><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" /></>,
              label: 'GitHub',
              value: <a className="font-semibold mt-[.3rem] break-words block" href="https://github.com/syedarida0320" target="_blank" rel="noopener">syedarida0320</a>,
            },
            {
              icon: <><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="8" y1="11" x2="8" y2="16" /><line x1="8" y1="8" x2="8" y2="8" /><line x1="12" y1="11" x2="12" y2="16" /><path d="M12 13a2 2 0 0 1 4 0v3" /></>,
              label: 'LinkedIn',
              value: <a className="font-semibold mt-[.3rem] break-words block" href="https://www.linkedin.com/in/rida-irfan-a5232b227" target="_blank" rel="noopener">rida-irfan</a>,
            },
          ].map((item, i) => (
            <Reveal delay={i * 0.08} key={item.label}>
              <div className="bg-surface border border-gold/16 rounded-[14px] p-7 relative overflow-hidden card-overlay transition-all duration-[350ms] ease-[cubic-bezier(.4,0,.2,1)] hover:-translate-y-1 hover:border-gold/32 hover:shadow-[0_18px_50px_-20px_rgba(212,175,55,.15),0_0_0_1px_rgba(212,175,55,.06)] flex items-start gap-4 group">
                <span className="w-[42px] h-[42px] rounded-[9px] bg-gold/8 border border-gold/32 flex items-center justify-center text-gold shrink-0 transition-all duration-[350ms] ease-[cubic-bezier(.4,0,.2,1)] group-hover:bg-gold/14 group-hover:border-gold group-hover:scale-105 group-hover:shadow-[0_0_20px_-6px_rgba(212,175,55,.2)]">
                  <svg className="w-[18px] h-[18px] stroke-current fill-none stroke-[1.8] stroke-linecap-round stroke-linejoin-round shrink-0" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </span>
                <div>
                  <p className="font-mono text-[.72rem] tracking-[.05em] uppercase text-muted">{item.label}</p>
                  {item.label === 'Email' ? (
                    <a href="mailto:ridairfan264@gmail.com" className="block mt-[.3rem]">
                      <input
                        type="email"
                        value={item.value}
                        readOnly
                        className="w-full bg-transparent rounded-lg px-3 text-ivory font-semibold text-[.95rem] outline-none cursor-pointer transition-colors duration-[350ms]"
                      />
                    </a>
                  ) : (
                    <div className="font-semibold mt-[.3rem] break-words">{item.value}</div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
