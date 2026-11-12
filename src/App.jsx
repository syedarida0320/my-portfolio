import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import FinalYearProject from './components/FinalYearProject'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>

      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <FinalYearProject />
        <Skills />
        <Achievements />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}
