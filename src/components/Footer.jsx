import Reveal from './Reveal'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <Reveal delay={0.2}>
      <footer className="flex items-center justify-between gap-4 flex-wrap py-12 px-6 max-w-[1180px] mx-auto border-t border-gold/16 max-[640px]:flex-col max-[640px]:items-start">
        <p className="text-muted mx-auto text-[.85rem] font-mono">&copy; {year} Rida Irfan. All Rights Reserved</p>
      </footer>
    </Reveal>
  )
}
