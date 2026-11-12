import { useState, useEffect } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full border border-gold/32 bg-surface text-gold-bright flex items-center justify-center transition-all duration-300 hover:border-gold hover:-translate-y-[2px] hover:shadow-[0_14px_30px_-10px_rgba(212,175,55,.45)] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 pointer-events-none translate-y-2'}`}
    >
      <svg className="w-[18px] h-[18px] stroke-current fill-none stroke-[1.8] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  )
}
