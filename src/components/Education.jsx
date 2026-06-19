import Reveal from "./Reveal";

export default function Education() {
  return (
    <section className="section-divider relative py-28" id="education">
      <div className="max-w-[1180px] mx-auto px-6">
        <Reveal>
          <div className="max-w-[640px] mb-14">
            <p className="font-mono text-[.78rem] tracking-[.18em] uppercase text-gold inline-flex items-center gap-[.6rem] mb-4">
              <span className="inline-block w-[18px] h-px bg-gold" />
              Education
            </p>
            <h2 className="text-[clamp(2rem,4vw,2.7rem)] leading-[1.15] text-ivory font-semibold">
              Background &amp; training
            </h2>
          </div>
        </Reveal>

        <div className="flex flex-col gap-6">
          <Reveal delay={0.1}>
            <div className="bg-surface border border-gold/16 rounded-[14px] p-7 relative overflow-hidden card-overlay transition-all duration-[350ms] ease-[cubic-bezier(.4,0,.2,1)] hover:-translate-y-1 hover:border-gold/32 hover:shadow-[0_18px_50px_-20px_rgba(212,175,55,.15),0_0_0_1px_rgba(212,175,55,.06)] flex justify-between gap-8 flex-wrap">
              <div>
                <h3 className="text-[1.3rem] mb-[.4rem] text-ivory font-semibold">
                  BS Computer Science
                </h3>
                <p className="text-gold-bright text-[.98rem]">
                  Lahore College for Women University
                </p>
                <p className="font-mono text-[.82rem] text-gold mt-[.3rem]">
                  CGPA: 3.57 / 4.0
                </p>
                <p className="font-mono text-[.82rem] text-muted mt-[.6rem]">
                  Oct 2022 &ndash; June 2026 &middot; Lahore, Pakistan
                </p>
              </div>
              <span className="self-start font-mono text-[.72rem] tracking-[.05em] uppercase text-page bg-gold px-3 py-[.4rem] rounded-full whitespace-nowrap">
                Graduated June 2026
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="bg-surface border border-gold/16 rounded-[14px] p-7 relative overflow-hidden card-overlay transition-all duration-[350ms] ease-[cubic-bezier(.4,0,.2,1)] hover:-translate-y-1 hover:border-gold/32 hover:shadow-[0_18px_50px_-20px_rgba(212,175,55,.15),0_0_0_1px_rgba(212,175,55,.06)] flex justify-between gap-8 flex-wrap opacity-90">
              <div>
                <h3 className="text-[1.1rem] mb-[.4rem] text-ivory font-semibold">
                  Web Development Course
                </h3>
                <p className="text-gold-bright text-[.98rem]">
                  PNY Institute, Iqbal Town Branch
                </p>
                <p className="font-mono text-[.82rem] text-muted mt-[.6rem]">
                  Jul 2024 &ndash; Oct 2024 &middot; Lahore, Pakistan
                </p>
                <p className="mt-[.9rem] text-soft text-[.95rem] max-w-[750px]">
                  Developed practical skills in full-stack web development
                  through project-based training with the MERN stack.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
