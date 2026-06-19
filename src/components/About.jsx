import Reveal from "./Reveal";

export default function About() {
  return (
    <section className="section-divider relative py-28" id="about">
      <div className="max-w-[1180px] mx-auto px-6">
        <Reveal>
          <div className="max-w-[640px] mb-14">
            <p className="font-mono text-[.78rem] tracking-[.18em] uppercase text-gold inline-flex items-center gap-[.6rem] mb-4">
              <span className="inline-block w-[18px] h-px bg-gold" />
              About
            </p>
            <h2 className="text-[clamp(2rem,4vw,2.7rem)] leading-[1.15] text-ivory font-semibold">
              A bit about how I work
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="grid grid-cols-[1.2fr_0.8fr] gap-16 items-start max-[980px]:grid-cols-1 max-[980px]:gap-10">
            <div className="text-soft text-[1.05rem]">
              <p>
                I&apos;m a MERN stack developer with a Bachelor&rsquo;s degree
                in Computer Science. I build full-stack web applications and
                have worked in production environments during a 6-month
                internship at ERS Tech. My work involved designing and
                developing RESTful APIs, integrating MongoDB databases, and
                building responsive interfaces that perform well across both
                mobile and desktop screens. Beyond professional experience, I
                consistently build personal projects like Mentor AI, Real-Estate
                platforms, Real-time Messaging app, Weather app, Ecommerce app,
                Todo app, and to sharpen my skills and stay aligned with
                real-world development practices. I focus on writing clean,
                maintainable code that is easy to understand and scale over
                time.
              </p>
            </div>
            <Reveal delay={0.25} direction="right">
              <div className="border border-gold/16 rounded-[14px] bg-surface overflow-hidden">
                <div className="flex justify-between gap-4 px-6 py-[1.1rem] border-b border-gold/16">
                  <span className="font-mono text-[.75rem] tracking-[.06em] uppercase text-muted">
                    Location
                  </span>
                  <span className="font-semibold text-right">
                    Lahore, Pakistan
                  </span>
                </div>
                <div className="flex justify-between gap-4 px-6 py-[1.1rem] border-b border-gold/16">
                  <span className="font-mono text-[.75rem] tracking-[.06em] uppercase text-muted">
                    Stack
                  </span>
                  <span className="font-semibold text-right">
                    MERN Stack Development
                  </span>
                </div>
                <div className="flex justify-between gap-4 px-6 py-[1.1rem] border-b border-gold/16">
                  <span className="font-mono text-[.75rem] tracking-[.06em] uppercase text-muted">
                    Currently
                  </span>
                  <span className="font-semibold text-right">
                    BS Computer Science &middot; Graduated
                  </span>
                </div>
                <div className="flex justify-between gap-4 px-6 py-[1.1rem]">
                  <span className="font-mono text-[.75rem] tracking-[.06em] uppercase text-muted">
                    Experience
                  </span>
                  <span className="font-semibold text-right">
                    6 months Internship &middot; ERS Tech
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
