import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  
  useEffect(() => {
    const sections = document.querySelectorAll('main section, [id="hero"]');
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };
    const spy = new IntersectionObserver(handleIntersect, {
      rootMargin: "-45% 0px -45% 0px",
    });
    sections.forEach((s) => spy.observe(s));
    return () => spy.disconnect();
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 py-5 transition-all duration-[350ms] ease-[cubic-bezier(.4,0,.2,1)] border-b border-transparent ${scrolled ? "bg-page/88 backdrop-blur-[14px] border-gold/16 py-[.9rem]" : ""}`}
        id="nav"
      >
        <div className="max-w-[1180px] mx-auto px-6 flex items-center justify-between gap-6">
          <a
            href="#hero"
            className="flex items-center gap-[.6rem] font-sans font-bold text-[1.1rem]"
          >
            <span className="w-[34px] h-[34px] border border-gold/32 rounded-lg flex items-center justify-center text-gold text-[.95rem]">
              RI
            </span>{" "}
            Rida Irfan
          </a>

          <ul className="flex max-[860px]:hidden gap-8">
            {links.map((link) => (
              <li key={link.href}>
                  <a
                    href={link.href}
                    className={`font-mono text-[.8rem] tracking-[.04em] uppercase text-soft relative pb-1 transition-colors duration-[350ms] ease-[cubic-bezier(.4,0,.2,1)] nav-underline ${activeId === link.href.slice(1) ? "text-ivory active" : ""}`}
                  >
                    {link.label}
                  </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden min-[861px]:inline-flex items-center gap-2 px-[1.1rem] py-[.6rem] rounded-full font-semibold text-[.85rem] bg-gold text-page transition-all duration-[350ms] ease-[cubic-bezier(.4,0,.2,1)] hover:bg-gold-bright hover:-translate-y-[2px] hover:shadow-[0_14px_30px_-10px_rgba(212,175,55,.45)]"
          >
            Say Hello
          </a>

          <button
            className="flex min-[861px]:hidden flex-col justify-center gap-[5px] w-[30px] h-[30px] z-[600]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className="h-[2px] w-full bg-ivory transition-all duration-300 rounded-full"
              style={{
                transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="h-[2px] w-full bg-ivory transition-all duration-300 rounded-full"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="h-[2px] w-full bg-ivory transition-all duration-300 rounded-full"
              style={{
                transform: menuOpen
                  ? "translateY(-7px) rotate(-45deg)"
                  : "none",
              }}
            />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-50 ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-page/60 backdrop-blur-sm transition-opacity duration-500 ease-[cubic-bezier(.4,0,.2,1)]"
          style={{ opacity: menuOpen ? 1 : 0 }}
          onClick={closeMenu}
        />
        <div
          className="fixed inset-0 bg-page transition-all duration-500 ease-[cubic-bezier(.4,0,.2,1)] flex flex-col"
          style={{
            transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          }}
        >
          <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gold/10">
            <a
              href="#hero"
              className="flex items-center gap-[.6rem] font-sans font-bold text-[1.1rem]"
              onClick={closeMenu}
            >
              <span className="w-[34px] h-[34px] border border-gold/32 rounded-lg flex items-center justify-center text-gold text-[.95rem]">
                RI
              </span>
              Rida Irfan
            </a>
            <button
              onClick={closeMenu}
              className="w-[34px] h-[34px] flex items-center justify-center rounded-lg border border-gold/20 text-gold hover:bg-gold/10 transition-colors duration-300"
              aria-label="Close menu"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M4 4L14 14M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-start pt-10 px-10">
            <nav className="flex flex-col gap-1">
              {links.map((link) => (
                <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="group relative font-sans text-[1.5rem] font-medium tracking-[-.01em] text-ivory/60 hover:text-ivory py-3 transition-colors duration-300"
                  >
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-6" />
                    <span className="ml-0 group-hover:ml-8 transition-all duration-300">
                      {link.label}
                    </span>
                  </a>
              ))}
            </nav>
          </div>

          <div className="px-6 py-6 border-t border-gold/10">
            <a
              href="#contact"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 w-full px-[1.1rem] py-[.7rem] rounded-full font-semibold text-[.9rem] bg-gold text-page transition-all duration-300 hover:bg-gold-bright hover:-translate-y-[1px] hover:shadow-[0_14px_30px_-10px_rgba(212,175,55,.45)]"
            >
              Say Hello
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3.333 8h9.334M8 3.333l4.667 4.667L8 12.667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
