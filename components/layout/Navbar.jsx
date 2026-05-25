'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun, Download } from 'lucide-react'
import { personal } from '../../lib/data'

const NAV = ['About','Skills','Experience','Projects','Education','Certifications','Contact']

export default function Navbar({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    window.addEventListener('scroll', () => setScrolled(window.scrollY > 40))
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(entries =>
      entries.forEach(e => e.isIntersecting && setActive(e.target.id)), { threshold: 0.35 })
    NAV.forEach(n => { const el = document.getElementById(n.toLowerCase()); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10"
      style={{
        paddingTop: scrolled ? '0.9rem' : '1.2rem',
        paddingBottom: scrolled ? '0.9rem' : '1.2rem',
        background: scrolled ? (dark ? 'rgba(10,10,10,0.93)' : 'rgba(255,255,255,0.93)') : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border2)' : 'none',
        boxShadow: scrolled ? 'var(--shadow)' : 'none',
      }}>
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-display font-black text-xl tracking-tight"
          style={{ color: 'var(--red)' }}>
          {personal.initials}
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {NAV.map(n => (
            <a key={n} href={`#${n.toLowerCase()}`}
              className="relative text-xs uppercase tracking-widest transition-colors duration-200 py-1"
              style={{ color: active === n.toLowerCase() ? 'var(--red)' : 'var(--text2)' }}>
              {n}
              {active === n.toLowerCase() && (
                <motion.span layoutId="nav-line"
                  className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full"
                  style={{ background: 'var(--red)' }} />
              )}
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div className="hidden lg:flex items-center gap-3">
          <button onClick={() => setDark(!dark)}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all"
            style={{ background: 'var(--red-soft)', color: 'var(--red)', border: '1px solid rgba(230,51,41,0.2)' }}>
            <motion.div key={dark?'sun':'moon'} initial={{ rotate:-90, opacity:0 }} animate={{ rotate:0, opacity:1 }}>
              {dark ? <Sun size={15}/> : <Moon size={15}/>}
            </motion.div>
          </button>
          <a href="/Harold_Jirro_Madrona_CV.pdf" download className="btn-primary text-xs px-5 py-2.5 gap-1.5">
            <Download size={13}/> Download CV
          </a>
        </div>

        {/* Mobile */}
        <div className="lg:hidden flex items-center gap-2">
          <button onClick={() => setDark(!dark)}
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: 'var(--red-soft)', color: 'var(--red)' }}>
            {dark ? <Sun size={15}/> : <Moon size={15}/>}
          </button>
          <button onClick={() => setOpen(!open)}
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: 'var(--red-soft)', color: 'var(--red)' }}>
            {open ? <X size={18}/> : <Menu size={18}/>}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity:0, y:-10 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-10 }}
            className="lg:hidden absolute top-full left-0 right-0 py-5 px-6 flex flex-col gap-4"
            style={{ background: dark?'rgba(10,10,10,0.97)':'rgba(255,255,255,0.97)', backdropFilter:'blur(20px)', borderBottom:'1px solid var(--border2)' }}>
            {NAV.map(n => (
              <a key={n} href={`#${n.toLowerCase()}`} onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-widest py-1"
                style={{ color: active===n.toLowerCase() ? 'var(--red)' : 'var(--text2)' }}>
                {n}
              </a>
            ))}
            <a href="/Harold_Jirro_Madrona_CV.pdf" download className="btn-primary text-xs justify-center mt-2">
              <Download size={13}/> Download CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
