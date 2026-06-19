import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section
      className="section-divider section-divider--alt relative py-28 bg-page-alt"
      id="experience"
    >
      <div className="max-w-[1180px] mx-auto px-6">
        <Reveal>
          <div className="max-w-[640px] mb-14">
            <p className="font-mono text-[.78rem] tracking-[.18em] uppercase text-gold inline-flex items-center gap-[.6rem] mb-4">
              <span className="inline-block w-[18px] h-px bg-gold" />
              Experience
            </p>
            <h2 className="text-[clamp(2rem,4vw,2.7rem)] leading-[1.15] text-ivory font-semibold">
              Where I&apos;ve worked
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div>
            <div className="flex items-baseline gap-[.9rem] flex-wrap mb-[.4rem]">
              <h3 className="text-[1.5rem] text-ivory font-semibold">
                MERN Stack Intern
              </h3>
              <span className="italic text-gold-bright text-[1.2rem]">
                @ ERS Tech
              </span>
            </div>
            <p className="font-mono text-[.85rem] text-muted mb-10">
              Jul 2025 &ndash; Jan 2026 &middot; Lahore, Pakistan
            </p>

            <ul className="relative pl-[2.2rem] border-l border-gold/32">
              <li className="relative pb-[1.9rem] pl-[1.6rem] timeline-dot">
                <p className="inline text-soft">
                  Developed multiple Full-Stack MERN applications, managing the
                  complete development lifecycle from database design to
                  deployment.
                </p>
              </li>
              <li className="relative pb-[1.9rem] pl-[1.6rem] timeline-dot">
                <p className="inline text-soft">
                  Engineered scalable RESTful APIs and integrated MongoDB
                  databases to support dynamic, data-driven web applications.
                </p>
              </li>
              <li className="relative pb-[1.9rem] pl-[1.6rem] timeline-dot">
                <p className="inline text-soft">
                  Crafted responsive, mobile-first interfaces with React and
                  modern CSS frameworks, ensuring a seamless user experience
                  across devices.
                </p>
              </li>
              <li className="relative pl-[1.6rem] timeline-dot">
                <p className="inline text-soft">
                  Applied Git/GitHub workflows, debugging techniques, and clean
                  coding practices to build maintainable and well-structured
                  applications.
                </p>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
