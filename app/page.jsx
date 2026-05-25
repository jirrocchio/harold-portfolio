'use client'
import { useEffect, useState } from 'react'
import Loader from '../components/ui/Loader'
import CustomCursor from '../components/ui/CustomCursor'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import BackToTop from '../components/ui/BackToTop'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Skills from '../components/sections/Skills'
import Experience from '../components/sections/Experience'
import Projects from '../components/sections/Projects'
import Education from '../components/sections/Education'
import Certifications from '../components/sections/Certifications'
import Contact from '../components/sections/Contact'
import Stats from '../components/sections/Stats'

export default function Home() {
  const [loaded, setLoaded] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 2400)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  if (!loaded) return <Loader />

  return (
    <>
      <CustomCursor />
      <Navbar dark={dark} setDark={setDark} />
      <main>
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
